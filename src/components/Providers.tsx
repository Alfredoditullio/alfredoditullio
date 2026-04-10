"use client";

import { LanguageProvider } from "@/i18n/context";
import LanguagePopup from "./LanguagePopup";
import type { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <LanguageProvider>
            {children}
            <LanguagePopup />
        </LanguageProvider>
    );
}
