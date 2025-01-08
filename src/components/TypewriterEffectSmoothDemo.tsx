"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Prithvi",
      className: "text-2xl lg:text-7xl text-blue-500 dark:text-blue-500",
    },
    {
      text: "Technologies",
      className: "text-2xl lg:text-7xl text-blue-500 dark:text-blue-500",
    },
    {
      text: "Fit?",
      className: "text-2xl lg:text-7xl text-blue-500 dark:text-blue-500",
    },

  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] mt-10 ">
      <p className="text-center mt-5 md:mt-0 text-2xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
  Where in the product lifecycle does
</p>

      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 text-center px-4">
      <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">As a Data Annotation service provider, fits into the development and growth phases of the product lifecycle for AI and machine learning (ML) products. We are essential to the iterative nature of AI and ML product development, continuously supporting AI models as they mature through these stages.</p>
      </div>
    </div>
  );
}
