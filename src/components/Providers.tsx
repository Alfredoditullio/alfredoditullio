"use client";

import { LanguageProvider } from "@/i18n/context";
import type { Locale } from "@/i18n/routing";
import LanguagePopup from "./LanguagePopup";
import type { ReactNode } from "react";

export default function Providers({
    locale,
    children,
}: {
    locale: Locale;
    children: ReactNode;
}) {
    return (
        <LanguageProvider locale={locale}>
            {children}
            <LanguagePopup />
        </LanguageProvider>
    );
}
