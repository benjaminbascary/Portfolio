import React from 'react'
import "./Intro.css"
import MySelf from "../../resources/perfil.png"
import Scroll from "../../resources/scroll.png"

export const Intro = () => {
  return (
    <div className='intro'>
      <div className='intro--left'>
        <div className='intro--left--wrapper'>
              <h2 className='intro--greeting'>Hello, My name is</h2>
              <h1 className='intro--name'>Benjamin Bascary</h1>
              <div className='intro--title'>
                <div className='intro--title--wrapper'>
                  <div className='intro--title--item'>
                    Front-End Developer

                    <div className='intro--title--item'>
                      Photographer
                    </div>
                    <div className='intro--title--item'>
                      Student
                    </div>
                  </div>
                </div>
                <div className='intro--description'>
                  Looking for my first IT job. My favorite tech is <strong>React</strong>
                </div>
                <div className='intro--description'>
                  Wanting to learn something new every day!
                </div>
                <div className='intro--description'>
                  <strong>Hoping to someday transition to React Native</strong>
                </div>
                <div className='scroll--container'>
                  <img src={Scroll} className='scroll--icon' alt='scroll'></img>
                </div>
              </div>
        </div>
      </div>

      <div className='intro--right'>
        <div className='intro--right--wrapper'>
              <div className='profile--background'></div>
              <img src={MySelf} className="profile--picture" alt="profile"></img>
        </div>
      </div>
    </div>
  )
}

export default Intro;