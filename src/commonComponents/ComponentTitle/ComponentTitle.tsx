import React from 'react'
import { titleType } from '../../utilities/type'
const Title: React.FC<titleType> = ({ titles }) => {
  const displayTitle=()=>{
    return (
      titles.map((i, index) => {
        return (
          <li className="titleComponent_li" key={index}>{i}</li>
        )
      })
    )
  }
  return (
    <>
      <header className='titleComponent_header'>
        <nav>
          <ul className='titleComponent_ul' >
          {displayTitle()}
        
          </ul>
        </nav>
      </header>
    </>
  )
}
export default Title
