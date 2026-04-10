import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: 32,
                    height: 32,
                    borderRadius: 7,
                    background: "linear-gradient(135deg, #6366F1, #8B5CF6, #EC4899)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <span
                    style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 900,
                        letterSpacing: -1,
                    }}
                >
                    AD
                </span>
            </div>
        ),
        { ...size }
    );
}
