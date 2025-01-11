'use client'
import React from 'react';
import machinelife from "@/images/machine-Photoroom-removebg-preview-Photoroom.png";
import Image from 'next/image';
const Machinelife = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Video Section */}
        <div className="flex items-center justify-center  bg-black">
        <video
            className="w-screen h-auto"
            controls
            autoPlay
            loop
            
          >
            <source src="/videos/datavideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
</div>

        {/* <h1 className="text-4xl md:text-4xl font-bold font-sans bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8">
        Machine Life Cycle
      </h1> */}
        {/* <div className="flex items-center justify-center">
          <Image src={machinelife} alt="Machine Life Cycle" />
        </div> */}
        <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-black space-y-8 md:space-y-0 md:space-x-8">
  {/* Left Block - Text */}
  <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 text-center md:text-left">
    <h2 className="text-3xl md:text-4xl font-bold font-sans bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
      Machine Life Cycle
    </h2>
    <p className="text-gray-300 text-lg">
    The Machine Learning (ML) lifecycle is a structured process that transforms raw data into actionable insights. It begins with Data Acquisition and Preparation, followed by Modeling to develop predictive algorithms. The Evaluation stage ensures model accuracy before deployment in real-world applications. Finally, Operations and Optimization focus on monitoring and improving the model over time.

At Prithvi Technologies, we specialize in supporting the ML lifecycle with precise data annotation services. High-quality annotations are essential for training reliable models in domains like computer vision and natural language processing. Our expertise ensures businesses can develop accurate, scalable models that deliver meaningful insights and drive innovation. Partner with us to unlock the full potential of your data.
    </p>
  </div>

  {/* Right Block - Image */}
  <div className="w-full md:w-1/2 flex justify-center">
    <Image
      src={machinelife}
      alt="Machine Life Cycle"
      className="rounded-[40px] shadow-lg"
    />
  </div>
</div>

      </div>
    </div>
  );
};

export default Machinelife;
