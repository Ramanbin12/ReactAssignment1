import React from 'react'
import Text from "./Text"
import {Image} from "./Image"

const Page = () => {
  return (
    <>
      <div className='flex gap-[4px] justify-center items-center flex-col lg:flex-row lg:gap-[10px]' >
        <Text/>
        <Image/>
      </div>
    </>
  )
}

export default Page
