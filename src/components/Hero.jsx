import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    heading: (
      <>
        Welcome to <span className="font-bold text-teal">one</span>
        <span className="font-bold text-white">pager</span>
      </>
    ),
    text: "we design and develop awesome websites and smart applications, impactful identities using the latest",
    cta: true,
  },
  {
    heading: (
      <>
        We are great <span className="font-bold text-white">company</span>
      </>
    ),
    text: "we bring together strategy, design, and code to help brands grow with confidence",
    cta: true,
  },
  {
    heading: (
      <>
        <span className="font-bold text-teal">one</span>
        <span className="font-bold text-white">pager</span> is very suitable
      </>
    ),
    text: "a flexible, single-page template built for creative studios, agencies, and personal portfolios alike",
    cta: false,
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => {
    setCurrent((i) => (i + 1) % slides.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((i) => (i - 1 + slides.length) % slides.length);
  }, []);
  
  useEffect(() => {
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, [current, goNext]);

  return (
    <section
      id="home-section"
      className="relative flex items-center justify-center min-h-screen text-white text-center px-4 overflow-hidden"
    >
      <img
        src="/images/slide.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <button
        type="button"
        aria-label="Previous slide"
        onClick={goPrev}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white hover:text-teal transition-colors duration-300 cursor-pointer z-10"
      >
        <ArrowLeft size={38} strokeWidth={2.25} />
      </button>

      <div
        key={current}
        className="relative z-10 max-w-4xl animate-[fadeInUp_0.9s_ease-out]"
      >
        <h1 className="text-4xl md:text-6xl uppercase tracking-wide mb-8 leading-tight font-normal">
          {slides[current].heading}
        </h1>

        <p className="text-white/70 mb-10 leading-relaxed text-base md:text-lg max-w-xl mx-auto">
          {slides[current].text}
        </p>

        {slides[current].cta && (
          <a href="#portfolio-section" className="btn-primary">
            <span>Learn More</span>
          </a>
        )}
      </div>

      <button
        type="button"
        aria-label="Next slide"
        onClick={goNext}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white hover:text-teal transition-colors duration-300 cursor-pointer z-10"
      >
        <ArrowRight size={38} strokeWidth={2.25} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              i === current ? "bg-teal" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}