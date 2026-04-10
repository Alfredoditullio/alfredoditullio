import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: 180,
                    height: 180,
                    borderRadius: 40,
                    background: "linear-gradient(135deg, #6366F1, #8B5CF6, #EC4899)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <span
                    style={{
                        color: "#fff",
                        fontSize: 90,
                        fontWeight: 900,
                        letterSpacing: -4,
                    }}
                >
                    AD
                </span>
            </div>
        ),
        { ...size }
    );
}
