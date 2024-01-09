import React from 'react'
import './about.css';
import myimg from '../../src/profile.jpeg';

const About = () => {
  return (
    <section id='About'className='sec'>
    <div>
        <img className = 'img'src= {myimg} alt = 'myimg' height='400px' width='300px'/>
        <div>
            <span className='abt'>About Me</span>
            <p className='par'>I am Bandla Reshma Chowdary, originally from Macherla. Currently, I am pursuing a degree in Computer Science at the esteemed Gayatri Vidya Parishad College of Engineering (Autonomous) in Visakhapatnam.
          My unrelenting enthusiasm and fervor drive me to explore solutions to intricate challenges.</p>
          <span className='abt'>Education</span>
          <p className='par'><span className='edu'>B.Tech (2021-2025)</span><br/>
            Studying CSE at Gayatri Vidya Parishad College of Engineering(A), Visakhapatnam<br/>
            CGPA: 9.5<br/>
            <span className='edu'>Intermediate (2019-2021)</span><br/>
            Studied MPC at Vignan girls Jr College, Guntur<br/>
            Marks: 974/1000<br/>
            <span className='edu'>10th class (2018-2019)</span><br/>
            Studied at Kids Patasala, Macherla<br/>
            GPA: 10</p>
        </div>
    </div>
    </section>
  )
}

export default About
