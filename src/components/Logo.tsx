type Props = {
    size?: number;
    className?: string;
    /** Unique id suffix when multiple logos are on the same page */
    idSuffix?: string;
};

/**
 * Personal brand mark for Alfredo Di Tullio.
 * Geometric "ad" monogram inside a rounded square with the brand gradient.
 */
export default function Logo({ size = 64, className = "", idSuffix = "" }: Props) {
    const gradientId = `logo-grad${idSuffix}`;
    const glowId = `logo-glow${idSuffix}`;

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            role="img"
            aria-label="Alfredo Di Tullio"
        >
            <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="55%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
                <filter id={glowId} x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3" />
                </filter>
            </defs>

            {/* Rounded square background */}
            <rect
                x="2"
                y="2"
                width="96"
                height="96"
                rx="22"
                ry="22"
                fill={`url(#${gradientId})`}
            />

            {/* Inner highlight */}
            <rect
                x="2"
                y="2"
                width="96"
                height="48"
                rx="22"
                ry="22"
                fill="rgba(255,255,255,0.12)"
            />

            {/* Monogram "AD" — uppercase, stroked */}
            <g
                fill="none"
                stroke="#ffffff"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {/* A — left letter */}
                <path d="M 17 78 L 32 22 L 47 78" />
                <path d="M 23 60 L 41 60" />
                {/* D — right letter */}
                <path d="M 55 22 L 55 78 C 84 78 84 22 55 22 Z" />
            </g>
        </svg>
    );
}
