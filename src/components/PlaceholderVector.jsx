export default function PlaceholderVector({ type, size = 120, className = 'placeholder-vector' }) {
  // Return different premium thin-stroke SVGs based on category
  switch (type) {
    case 'cup':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          stroke="var(--brand-accent)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          {/* Coffee/Paper Cup wireframe */}
          <path d="M30 20 L70 20 L62 80 L38 80 Z" />
          <path d="M28 20 L72 20 L74 15 L26 15 Z" />
          {/* Decorative gold foil lines */}
          <line x1="33" y1="50" x2="67" y2="50" />
          <line x1="35" y1="65" x2="65" y2="65" />
          <circle cx="50" cy="35" r="5" strokeWidth="0.8" />
        </svg>
      );
    case 'bag':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          stroke="var(--brand-accent)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          {/* Shopping bag wireframe */}
          <path d="M25 30 L75 30 L80 85 L20 85 Z" />
          {/* Rope handles */}
          <path d="M40 30 C40 15, 60 15, 60 30" />
          {/* Branding outline frame */}
          <rect x="35" y="45" width="30" height="25" strokeWidth="0.8" />
          <line x1="42" y1="57" x2="58" y2="57" strokeWidth="0.5" />
        </svg>
      );
    case 'box':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          stroke="var(--brand-accent)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          {/* Isometric wireframe box */}
          <path d="M50 15 L85 30 L50 45 L15 30 Z" />
          <path d="M15 30 L15 70 L50 85 L50 45" />
          <path d="M85 30 L85 70 L50 85" />
          {/* Inside dashed lines showing structure/transparency */}
          <path d="M15 70 L50 55 L85 70" strokeDasharray="3,3" strokeWidth="0.7" />
          <line x1="50" y1="15" x2="50" y2="55" strokeDasharray="3,3" strokeWidth="0.7" />
        </svg>
      );
    case 'amenities':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          stroke="var(--brand-accent)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          {/* Toiletries bottle */}
          <path d="M35 40 L35 85 L65 85 L65 40 Z" />
          <path d="M42 40 L42 30 L58 30 L58 40" />
          <rect x="45" y="24" width="10" height="6" />
          {/* Box outline next to it */}
          <path d="M55 50 L80 50 L80 85 L55 85 Z" />
          {/* Logo stamp label */}
          <circle cx="50" cy="62" r="4" strokeWidth="0.8" />
        </svg>
      );
    case 'warehouse':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          stroke="var(--brand-accent)"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          {/* Perspective grid representing premium structured warehouse aisles */}
          <line x1="10" y1="90" x2="90" y2="90" strokeWidth="1.5" />
          <line x1="10" y1="10" x2="10" y2="90" />
          <line x1="90" y1="10" x2="90" y2="90" />
          
          <line x1="10" y1="30" x2="90" y2="30" />
          <line x1="10" y1="55" x2="90" y2="55" />
          
          {/* Structured stacks of cartons (architectural style) */}
          <rect x="18" y="38" width="18" height="17" />
          <rect x="22" y="42" width="10" height="9" strokeWidth="0.5" />
          
          <rect x="42" y="35" width="22" height="20" />
          <line x1="42" y1="45" x2="64" y2="45" strokeWidth="0.5" />
          
          <rect x="70" y="40" width="14" height="15" />
          
          <rect x="20" y="15" width="15" height="15" />
          <rect x="50" y="18" width="25" height="12" />
        </svg>
      );
    case 'story':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          stroke="var(--brand-accent)"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          {/* Abstract architectural gate/arches representing Aman Resorts styling */}
          <path d="M20 90 L20 40 A30 30 0 0 1 80 40 L80 90" strokeWidth="1" />
          <path d="M35 90 L35 50 A15 15 0 0 1 65 50 L65 90" />
          <line x1="10" y1="90" x2="90" y2="90" strokeWidth="1.2" />
          {/* Sun or gold accent above arch */}
          <circle cx="50" cy="22" r="6" strokeWidth="0.8" />
          <line x1="50" y1="5" x2="50" y2="12" />
        </svg>
      );
    default:
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          stroke="var(--brand-accent)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          {/* Default stylized geometric outline */}
          <polygon points="50,15 85,80 15,80" />
          <circle cx="50" cy="53" r="10" />
        </svg>
      );
  }
}
