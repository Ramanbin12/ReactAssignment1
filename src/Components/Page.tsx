import React from 'react'
import {Text,Image} from "./Export"

const Page = () => {
  return (
    <>
      <div className='gap-[200px] sm:gap-[20px] md:gap-[20px] flex  justify-center items-center flex-col lg:flex-row lg:gap-[10px]' >
        <Text/>
        <Image />
      </div>
    </>
  )
}

export default Page
