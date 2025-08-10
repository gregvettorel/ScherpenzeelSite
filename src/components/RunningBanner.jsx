export default function RunningBanner() {
  return (
    <div
      className="
        relative w-full bg-blue-600 overflow-hidden
        py-12 sm:py-16 md:py-20
      "
    >
      <div
        className="
          absolute inset-y-0 left-full
          flex items-center /* centers text vertically */
          w-max whitespace-nowrap will-change-transform
          [animation:ticker_20s_linear_infinite]
        "
      >
        <span
          className="
            text-white tracking-wider
            text-5xl sm:text-6xl md:text-7xl lg:text-8xl
          "
        >
          Visual design for digital experiences
        </span>
      </div>
    </div>
  );
}
