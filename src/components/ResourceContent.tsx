import React from 'react'

const ResourceContent = () => {
  return (
    <div>
        <div className="text-neutral-500 max-w-4xl mx-auto my-2 text-xl text-center mt-10 relative z-10">
        
        <h1 className="text-left mb-8 mt-8 text-3xl text-neutral-500 font-sans font-bold">White Papers & Guides</h1>
         <div className="font-sans">
            <h1 className="font-bold text-2xl text-left">The Role of Data Annotation in AI Model Training</h1>
            <p className="text-left text-xl mt-2">A comprehensive guide on how annotated data fuels machine learning models and the key types of annotations required for different applications.</p>
        </div>
        <div className="font-sans mt-6">
            <h1 className="font-bold text-2xl text-left">Best Practices for High-Quality Data Annotation</h1>
            <p className="text-left text-xl mt-2">Learn best practices for managing data labeling projects, improving accuracy, and scaling annotation processes for AI model development.</p>
        </div>
        <div className="font-sans mt-6">
            <h1 className="font-bold text-2xl text-left">Data Annotation for Autonomous Vehicles</h1>
            <p className="text-left text-xl mt-2">A deep dive into how annotation enhances the perception systems of self-driving cars and what types of annotations are critical for success.</p>
        </div>
       
        <h1 className="text-left mb-8 mt-8 text-3xl text-neutral-500 font-sans font-bold">Webinars & Videos</h1>
         <div className="font-sans">
            <h1 className="font-bold text-2xl text-left">Streamlining Data Annotation for Faster AI Development</h1>
            <p className="text-left text-xl mt-2">Learn how to optimize your data annotation processes to reduce project timelines and improve the quality of your AI model.</p>
        </div>
        <div className="font-sans mt-6">
            <h1 className="font-bold text-2xl text-left">An Introduction to Polygon Annotation for Medical Imaging</h1>
            <p className="text-left text-xl mt-2">A step-by-step video tutorial that shows you how we perform polygon annotation for complex shapes in medical imaging.</p>
        </div>
        </div>
    </div>
  )
}

export default ResourceContent