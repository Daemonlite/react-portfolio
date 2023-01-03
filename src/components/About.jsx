import React from 'react'

const About = () => {
  return (
    <div
    name="about"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pt-5">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          About
        </p>
      </div>

      <p className="text-xl mt-20">
        Hi, I am Eugene Nunoo, A Full Stack developer with close to two years
        of experience in web development with various technologies.
        I'm a complete software geek, and thats the main reason that I code,
        I'm a good teamworker, I say this because I have been a part of  backend developers
        building for Startups. 
  
      </p>

      <br />

      <p className="text-xl">
      I worked hard to be a web developer because I enjoy building amazing projects. 
      In fact, the best (and most important) part of my job is when
      I am able to get a web app functioning without bugs and errors.
       With the number of industries upcoming i will be glad to play a major
       role in building amazing softwares for such industries.
     
      </p>
    </div>
  </div>
  )
}

export default About