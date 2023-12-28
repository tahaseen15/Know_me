import React, { useState } from 'react'
import "./qualification.css";

export default function Qualification() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index)=>{
        setToggleState(index);
    }

  return (

        <section className="qualification section" id='portfolio'>
            <h2 className='section__title'>Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                    onClick={()=>toggleTab(1)}
                    >
                        <i className='uil uil-graduation-cap qualification__icon'></i>
                        Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                    onClick={()=>toggleTab(2)}
                    >
                        <i className='uil uil-briefcase-alt qualification__icon'></i>
                        Experience
                    </div>

                    <div className="qualification__button button--flex">
                        <i className='uil uil-qualification__icon'></i>
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? 
                    "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">B.TECH CSE</h3>
                                <small>CGPA: 9.32</small>
                                <span className="qualification__subtitle">Puducherry Technological University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2020-2024
                                </div>
                            </div>
                            
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>
                        
                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">INTERMEDIATE</h3>
                                <small>CGPA: 9.88</small>
                                <span className="qualification__subtitle">Sri Chaitanya Junior College</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2018- 2020
                                </div>
                            </div>                        

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">SSC</h3>
                                <small>GPA: 9.8</small>
                                <span className="qualification__subtitle">Regency Public School</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2018 - 2022
                                </div>
                            </div>
                            
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>
                      
                        
                    </div>

                    <div  className={toggleState === 2 ? 
                    "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Product Designer</h3>
                                <span className="qualification__subtitle">Intern At Ptu</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    March 2023 - April  2023
                                </div>
                            </div>
                            
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>
                        
                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Backend Developer</h3>
                                <span className="qualification__subtitle">Accenous Integrals</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    Dec 2023 - Present
                                </div>
                            </div>
     

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Free Lancer</h3>
                                <span className="qualification__subtitle">Full stack</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    Present
                                </div>
                            </div>
                            
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>
                        

                        
                    </div>
                </div>

            </div>

        </section>

  )
}
