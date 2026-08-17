"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { useLanguage } from "@/i18n/context";
import { localizedPath, stripLocale } from "@/i18n/routing";

type Props = ComponentProps<typeof NextLink>;

/**
 * Drop-in replacement for next/link that rewrites internal, absolute-path
 * hrefs into the current locale ("/about" -> "/es/about" in Spanish).
 * External URLs, hashes and already-prefixed paths pass through untouched.
 */
export default function LocaleLink({ href, ...rest }: Props) {
    const { locale } = useLanguage();

    let resolved = href;
    if (typeof href === "string" && href.startsWith("/") && !href.startsWith("//")) {
        // stripLocale first so an already-prefixed path is never doubled up
        resolved = localizedPath(stripLocale(href), locale);
    }

    return <NextLink href={resolved} {...rest} />;
}
