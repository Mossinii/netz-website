export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo minimalista - apenas NETZ */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Fundo com gradiente sutil */}
        <rect width="32" height="32" rx="6" fill="#2563EB" />
        
        {/* Texto NETZ em estilo moderno */}
        <text
          x="16"
          y="22"
          fontSize="18"
          fontWeight="700"
          fill="white"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="-0.5"
        >
          N
        </text>
      </svg>
      <span className="font-bold text-gray-900 text-lg hidden sm:inline tracking-tight">NETZ</span>
    </div>
  );
}
