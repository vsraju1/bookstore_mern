import React from 'react'
import { useParams } from 'react-router-dom'


const AboutMe = () => {
    const {userid} = useParams()
  return (
    <div className='min-h-screen'>This is a sample {userid}  page. just sample</div>
  )
}

export default AboutMe