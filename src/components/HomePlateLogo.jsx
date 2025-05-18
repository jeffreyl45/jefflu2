export default function HomePlateLogo({ size = 100 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 5 H95 V75 L50 95 L5 75 Z"
        className="homeplate-path"
      />
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="homeplate-text"
        fontSize="42"
        fontWeight="700"
        fontFamily="Inter, sans-serif"
      >
        JL
      </text>
    </svg>
  )
}
