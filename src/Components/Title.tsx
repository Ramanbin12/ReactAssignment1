import React from 'react'
import { titleType } from '../type'
const Title: React.FC<titleType> = ({ titles }) => {
  const displayTitle=()=>{
    return (
      titles.map((i, index) => {
        return (
          <li className="font-montserrat" key={index}>{i}</li>
        )
      })
    )
  }
  return (
    <>
      <header className=' hidden lg:flex items-center'>
        <nav>
          <ul className='flex justify-around gap-[4vw] ' >
          {displayTitle()}
        
          </ul>
        </nav>
      </header>
    </>
  )
}
export default Title
