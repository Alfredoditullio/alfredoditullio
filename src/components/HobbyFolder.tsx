"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useLanguage } from "@/i18n/context";
import { aboutOtc, otcItems } from "@/i18n/translations/about";

/**
 * FolderFloat runs useLayoutEffect and a physics loop, so it is client-only.
 * The hobby content itself is still rendered server-side (visually hidden)
 * so crawlers and screen readers keep it.
 */
const FolderFloat = dynamic(() => import("./FolderFloat"), { ssr: false });

/** Photos keyed by the item's English title — stable across locales. */
const PHOTOS: Record<string, { src: string; alt: string }> = {
    Trekking: { src: "/assets/img/portfolio/basecamp.webp", alt: "Everest Base Camp" },
    Music: { src: "/assets/img/portfolio/music.webp", alt: "Playing guitar" },
    Tennis: { src: "/assets/img/portfolio/tennis.webp", alt: "Playing tennis" },
    Dogs: { src: "/assets/img/portfolio/pepperina.webp", alt: "Pepperina, the cocker spaniel" },
    Travel: { src: "/assets/img/portfolio/jordan.webp", alt: "Travelling in Jordan" },
};

export default function HobbyFolder() {
    const { locale, t } = useLanguage();
    const [active, setActive] = useState<number | null>(null);

    const items = otcItems.map((item) => item.title[locale]);
    const current = active === null ? null : otcItems[active];
    const photo = current ? PHOTOS[current.title.en] : undefined;

    return (
        <div className="hobby-folder">
            {/* Kept in the server HTML for crawlers and assistive tech. */}
            <ul className="sr-only">
                {otcItems.map((item) => (
                    <li key={item.icon}>
                        {item.title[locale]} — {item.text[locale]}
                    </li>
                ))}
            </ul>

            <figure className="hobby-folder__preview" aria-hidden="true">
                <div className="hobby-folder__frame">
                    {/* All photos are mounted so switching cross-fades instantly. */}
                    {otcItems.map((item, i) => {
                        const p = PHOTOS[item.title.en];
                        if (!p) return null;
                        return (
                            <img
                                key={item.icon}
                                src={p.src}
                                alt=""
                                className="hobby-folder__photo"
                                data-show={active === i ? "" : undefined}
                                loading="lazy"
                            />
                        );
                    })}

                    {/* Items with no photo (Languages) fall back to their icon. */}
                    {current && !photo && (
                        <div className="hobby-folder__fallback">
                            <i className={current.icon}></i>
                        </div>
                    )}

                    {/* Idle state, before anything is hovered. */}
                    <div
                        className="hobby-folder__idle"
                        data-show={active === null ? "" : undefined}
                    >
                        <i className="fa-solid fa-hand-pointer"></i>
                        <span>
                            {locale === "es"
                                ? "Abrí la carpeta y pasá por una nota"
                                : "Open the folder and hover a note"}
                        </span>
                    </div>
                </div>

                <figcaption className="hobby-folder__caption">
                    {current ? (
                        <>
                            <strong className="hobby-folder__caption-title">
                                {current.title[locale]}
                            </strong>
                            <span className="hobby-folder__caption-text">
                                {current.text[locale]}
                            </span>
                        </>
                    ) : (
                        <span className="hobby-folder__caption-text">
                            {t(aboutOtc, "title")}
                        </span>
                    )}
                </figcaption>
            </figure>

            <div className="hobby-folder__stage">
                <FolderFloat
                    items={items}
                    label={t(aboutOtc, "eyebrow")}
                    sublabel={
                        locale === "es"
                            ? `${otcItems.length} cosas`
                            : `${otcItems.length} things`
                    }
                    trigger="hover"
                    closeOnSelect={false}
                    physics
                    drift={0.5}
                    spread={150}
                    lift={30}
                    width={190}
                    height={140}
                    activeIndex={active}
                    onItemHover={(i) => {
                        // Sticky: only clear when the folder closes (i === null).
                        if (i !== null) setActive(i);
                        else setActive(null);
                    }}
                    onSelect={(_value, i) => setActive(i)}
                    folderColor="#4338ca"
                    frontColor="#6366f1"
                    paperColor="#ffffff"
                    itemColor="#ffffff"
                    itemTextColor="#18181b"
                    labelColor="#ffffff"
                />
            </div>
        </div>
    );
}
