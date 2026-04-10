"use client";

import {
    createContext,
    useContext,
    useState,
    useEffect,
    useCallback,
    type ReactNode,
} from "react";

export type Locale = "en" | "es";

type Translations = Record<string, Record<Locale, string>>;

type LanguageContextValue = {
    locale: Locale;
    setLocale: (l: Locale) => void;
    t: (dict: Translations, key: string) => string;
    showPopup: boolean;
    dismissPopup: () => void;
};

const STORAGE_KEY = "adt_lang";

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>("en");
    const [showPopup, setShowPopup] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        try {
            const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
            if (saved && (saved === "en" || saved === "es")) {
                setLocaleState(saved);
            } else {
                // First visit — show popup after intro animation
                const timer = setTimeout(() => setShowPopup(true), 2200);
                return () => clearTimeout(timer);
            }
        } catch {
            // localStorage not available
        }
    }, []);

    const setLocale = useCallback((l: Locale) => {
        setLocaleState(l);
        try {
            localStorage.setItem(STORAGE_KEY, l);
        } catch {
            // ignore
        }
        document.documentElement.lang = l;
    }, []);

    const dismissPopup = useCallback(() => {
        setShowPopup(false);
    }, []);

    const t = useCallback(
        (dict: Translations, key: string): string => {
            return dict[key]?.[locale] ?? dict[key]?.["en"] ?? key;
        },
        [locale]
    );

    // Update html lang on mount
    useEffect(() => {
        if (mounted) {
            document.documentElement.lang = locale;
        }
    }, [locale, mounted]);

    return (
        <LanguageContext.Provider
            value={{ locale, setLocale, t, showPopup, dismissPopup }}
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
