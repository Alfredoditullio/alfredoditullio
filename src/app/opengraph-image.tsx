import { ImageResponse } from "next/og";

export const alt = "Alfredo Di Tullio — Dentist, Developer & Writer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    padding: "80px",
                    background: "linear-gradient(135deg, #0f0a1e 0%, #1a1040 40%, #2d1b69 100%)",
                    fontFamily: "system-ui, sans-serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        marginBottom: "40px",
                    }}
                >
                    <div
                        style={{
                            width: 56,
                            height: 56,
                            borderRadius: 14,
                            background: "linear-gradient(135deg, #6366F1, #8B5CF6, #EC4899)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 28,
                            fontWeight: 900,
                            color: "#fff",
                            letterSpacing: -2,
                        }}
                    >
                        AD
                    </div>
                    <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 22 }}>
                        alfredoditullio.com
                    </span>
                </div>

                <h1
                    style={{
                        fontSize: 72,
                        fontWeight: 800,
                        color: "#fff",
                        lineHeight: 1.1,
                        letterSpacing: -3,
                        margin: 0,
                        marginBottom: 24,
                    }}
                >
                    Alfredo{" "}
                    <span
                        style={{
                            background: "linear-gradient(135deg, #6366F1, #EC4899)",
                            backgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        Di Tullio
                    </span>
                </h1>

                <p
                    style={{
                        fontSize: 28,
                        color: "rgba(255,255,255,0.7)",
                        lineHeight: 1.5,
                        margin: 0,
                        maxWidth: 700,
                    }}
                >
                    Dentist · Full-stack developer · Writer
                </p>

                <div
                    style={{
                        display: "flex",
                        gap: "12px",
                        marginTop: 40,
                    }}
                >
                    {["DentalCore", "React", "TypeScript", "Supabase"].map((tag) => (
                        <span
                            key={tag}
                            style={{
                                padding: "8px 18px",
                                borderRadius: 20,
                                background: "rgba(99, 102, 241, 0.2)",
                                border: "1px solid rgba(99, 102, 241, 0.3)",
                                color: "#a5b4fc",
                                fontSize: 18,
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        ),
        { ...size }
    );
}
