export default function Container({ children, className = '' }) {
  return (
    <div className={`max-w-4xl mx-auto px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  )
}
