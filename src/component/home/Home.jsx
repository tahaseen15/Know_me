import React from 'react'
import "./home.css"
import Social from './Social'


export default function Home() {
  return (
    <div>
        <section className="home section" id='home'>
            <div className="home_container container grid">

                <div className="home_content grid">
                    <Social/>

                    <div className="home__img"></div>

                    <Data/>
                </div>
            </div>
        </section>
    </div>
  )
}
