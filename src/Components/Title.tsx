import React from 'react'
import { titleType } from '../type'
export const Title:React.FC<titleType> = ({titles}) => {
    console.log(titles)
  return (
    <>
    <header className=' hidden lg:flex items-center'>
        <nav>
            <ul className='flex justify-around gap-[4vw] ' >
              {
                titles.map((i,index)=>{
                  return (
                    <li key={index}>{i}</li>
                  )
                })
              }
            </ul>
        </nav>
    </header>
    </>
  )
}

