import React from 'react'
// import { BackgroundBeamsDemo } from './BackgroundBeamsDemo'
import { BackgroundGradientDemo } from './BackgroundGradientDemo'

const ResourceHub = () => {
  return (
    <div>
       <div className="max-w-full mx-auto p-4 bg-black">
      <h1 className=" mt-[120px] relative z-10 text-2xl xs:text-xl sm:text-2xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
  Prithvi Technologies Resources Hub
</h1>
</div>
{/* <BackgroundBeamsDemo/> */}
<BackgroundGradientDemo/>
    </div>
  )
}

export default ResourceHub