import React from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'

const Home = ({sidebar}) => {
  return (
    <div className='home'>
      <Sidebar sidebar={sidebar}/>
    </div>
  )
}

export default Home
