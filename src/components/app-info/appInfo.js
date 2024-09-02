import React from 'react'
import './appInfo.css'

const AppInfo = ({allMovies, increaseCount}) => {
  return (
    <div className='app-info'>
      <p className='fs-3 text-uppercase'>Barcha kinolar soni: {allMovies}</p>
      <p className='fs-4 text-uppercase'>Sevimli kino: {increaseCount}</p>
    </div>
  )
}

export default AppInfo