const Monogram: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="40" height="40" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M6 10h20c13.3 0 22 8.7 22 22s-8.7 22-22 22H6V10Zm10 10v24h10c7.2 0 12-4.8 12-12s-4.8-12-12-12H16Z"
      fill="currentColor"
    />
    <path d="M48 44h10v10H48z" fill="currentColor" />
  </svg>
);

export default Monogram;
