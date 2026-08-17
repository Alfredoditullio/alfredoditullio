"use client";

import {
    createContext,
    useContext,
    useState,
    useEffect,
    useCallback,
    type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { localizedPath, stripLocale, type Locale } from "./routing";

export type { Locale };

type Translations = Record<string, Record<Locale, string>>;

type LanguageContextValue = {
    locale: Locale;
    setLocale: (l: Locale) => void;
    /** Public path of the current page in the given locale. */
    pathIn: (l: Locale) => string;
    t: (dict: Translations, key: string) => string;
    showPopup: boolean;
    dismissPopup: () => void;
};

const STORAGE_KEY = "adt_lang";

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * The locale is owned by the URL (/about = English, /es/about = Spanish),
 * so it is passed in from the server layout. Switching language navigates
 * to the equivalent URL instead of mutating client state.
 */
export function LanguageProvider({
    locale,
    children,
}: {
    locale: Locale;
    children: ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const [showPopup, setShowPopup] = useState(false);

    const pathIn = useCallback(
        (l: Locale) => localizedPath(stripLocale(pathname ?? "/"), l),
        [pathname]
    );

    const setLocale = useCallback(
        (l: Locale) => {
            try {
                localStorage.setItem(STORAGE_KEY, l);
            } catch {
                // localStorage not available
            }
            setShowPopup(false);
            if (l !== locale) router.push(pathIn(l));
        },
        [locale, pathIn, router]
    );

    // Offer the language choice once, on a visitor's first visit only.
    useEffect(() => {
        let saved: string | null = null;
        try {
            saved = localStorage.getItem(STORAGE_KEY);
        } catch {
            // localStorage not available — don't nag
            return;
        }
        if (saved === "en" || saved === "es") return;
        const timer = setTimeout(() => setShowPopup(true), 2200);
        return () => clearTimeout(timer);
    }, []);

    const dismissPopup = useCallback(() => {
        setShowPopup(false);
        try {
            localStorage.setItem(STORAGE_KEY, locale);
        } catch {
            // ignore
        }
    }, [locale]);

    const t = useCallback(
        (dict: Translations, key: string): string => {
            return dict[key]?.[locale] ?? dict[key]?.["en"] ?? key;
        },
        [locale]
    );

    return (
        <LanguageContext.Provider
            value={{ locale, setLocale, pathIn, t, showPopup, dismissPopup }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return ctx;
}
