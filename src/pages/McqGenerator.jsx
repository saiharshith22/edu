import React from 'react'
import McqGenIntro from '../components/McqGenIntro'
import McqGenIntro2 from '../components/McqGenIntro2'
import McqWhoIsIt from '../components/McqWhoIsIt'
import McqWorks from '../components/McqWorks'
import McqMade from '../components/McqMade'
import McqForm from '../components/McqForm'

const McqGenerator = () => {
  return (
    <>
      <McqGenIntro/>
      <McqGenIntro2/>
      <McqWhoIsIt/>
      <McqWorks/>
        {/* another components */}
      <McqMade/>
      <McqForm/>
    </>
  )
}

export default McqGenerator
