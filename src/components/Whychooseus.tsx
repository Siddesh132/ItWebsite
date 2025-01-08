import React from "react";
import Image from "next/image";
import chooseimg from "@/images/SERVICE-PAGE-03-2048x1076.jpg";

const Whychooseus = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-black space-y-8 md:space-y-0 md:space-x-8">
      {/* Left Block - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={chooseimg}
          alt="Why Choose Us"
          className="rounded-[40px] shadow-lg"
        />
      </div>

      {/* Right Block - Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 text-center md:text-left mt-6 md:mt-0">
        <h2 className="text-3xl md:text-4xl font-bold  font-sans bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 ">
        Why Choose Prithvi Technologies?
        </h2>
        <p className="text-gray-300 text-lg">
          We provide top-notch services with a focus on quality, reliability,
          and customer satisfaction. Our team of experts ensures that you get
          the best value for your investment.
        </p>
        <ul className="list-disc list-inside text-gray-300 text-lg">
          <li>High-quality, accurate data annotations tailored to your specific needs.</li>
          <li>Scalable solutions for growing AI models.</li>
          <li>Cost-effective services to fit various project scales.</li>
          <li>Expertise across multiple industries including automotive, healthcare, and robotics.</li>
        </ul>
      </div>
    </div>
  );
};

export default Whychooseus;
