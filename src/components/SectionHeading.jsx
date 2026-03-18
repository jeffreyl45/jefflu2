export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-glow via-purple-glow to-pink-glow bg-clip-text text-transparent mb-4 pb-2 leading-normal">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-xl max-w-4xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto w-24 h-0.5 bg-linear-to-r from-cyan-glow to-purple-glow rounded-full" />
    </div>
  );
}
