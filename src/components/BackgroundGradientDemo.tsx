"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import imgone from '../images/Carimages.png';
import AgriImg from '../images/Agriculture.png';
import PolygonImg from '../images/polygon.png'
import DataAna from  '../images/DataAna.png'
import medical from '../images/medical.png'
import datalabel from '../images/datalabel.png'
import health from '../images/healthcare.png'
import ResourceContent from "./ResourceContent";
 
export function BackgroundGradientDemo() {
  return (
    <div className="flex flex-wrap md:flex-row justify-center items-center p-8 bg-neutral-950  gap-8">
      {/* Box 1 */}
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 max-w-sm bg-black dark:bg-zinc-900">
        <Image
          src={imgone}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
          Enhancing Autonomous Vehicle Systems through High-Quality Data Annotation
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Discover how our precise polygon and polyline annotation services helped improve the accuracy of autonomous vehicle perception systems.
        </p>
      </BackgroundGradient>

      {/* Box 2 */}
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 max-w-sm bg-black dark:bg-zinc-900">
        <Image
          src={AgriImg}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
          AI-Powered Agricultural Solutions with Annotated Visual Data
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Learn how Prithvi Technologies supported an agricultural AI solution with accurate annotation of crops and soil data, enhancing model performance.
        </p>
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 max-w-sm bg-black dark:bg-zinc-900">
        <Image
          src={PolygonImg}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
        Improving Medical Imaging AI with Polygon Annotation
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Learn how Prithvi Technologies supported an agricultural AI solution with accurate annotation of crops and soil data, enhancing model performance.
        </p>
      </BackgroundGradient>
      <div className="w-full">
      <ResourceContent/>
      </div>
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 max-w-sm bg-black dark:bg-zinc-900">
        <Image
          src={DataAna}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
           5 Ways to Ensure Accurate Annotations for Your AI Projects
        </p>
           <ul className="text-sm text-neutral-600 dark:text-neutral-400">
            <li>1.Set Clear Annotation Guidelines</li>
            <li>2. Use a Quality Control (QC) Process</li>
            <li>3. Train and Onboard Annotators</li>
            <li>4. Incorporate Feedback Loops</li>
            <li>5. Use Pre-Annotation Tools</li>
           </ul>
         
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 max-w-sm bg-black dark:bg-zinc-900">
        <Image
          src={datalabel}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
          The Impact of AI on Data Labeling Automation 
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
            AI-assisted data labeling enhances efficiency and accuracy but faces challenges with nuanced data and initial dataset requirements. A hybrid model, combining AI for bulk labeling and humans for quality control, is the future trend.
        </p>
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 max-w-sm bg-black dark:bg-zinc-900">
        <Image
          src={medical}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
            Key challenges in medical image annotation and how to overcome
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Medical image annotation is complex, requiring expert knowledge and strict privacy measures. AI-assisted tools, expert involvement, and clear guidelines can improve accuracy and efficiency.
        </p>
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 max-w-sm bg-black dark:bg-zinc-900">
        <Image
          src={imgone}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
            The Rise of Data Annotation in Autonomous Driving
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
             Explore how data labeling is revolutionizing the autonomous driving industry and the future trends we can expect to see.
        </p>
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 max-w-sm bg-black dark:bg-zinc-900">
        <Image
          src={health}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
            AI in Healthcare – The Power of Annotated Medical Data
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
            A report on the growing importance of annotated medical images in improving diagnostic accuracy and patient outcomes.
        </p>
      </BackgroundGradient>
    </div>
  );
}  