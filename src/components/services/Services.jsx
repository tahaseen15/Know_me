import React, { useState } from 'react'
import "./services.css";

export default function Services() {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index)=>{
        setToggleState(index);
    }

  return (
    <section className="services section" id='services'>
        <h2 className='section__title'>Services</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className='uil uil-web-grid services__icon'></i>
                    <h3 className='services__title'>Product <br/>Designer</h3>
                </div>

                <span className="services__button" onClick={()=>toggleTab(1)}>View More
                    <i className='uil uil-arrow-right services__button-icon'></i>
                </span>

                <div className={toggleState===1 ? "services__modal active-modal"
                : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Product Designer</h3>
                        <p className="services__modal-description">
                            New professional committed to quality work. Dedicated to learning and contributing effectively.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">Develop the user interface</p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">Web page development</p>
                            </li>   

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">I positions your brand.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">Design and mockups of products for companies</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="services__content">
                <div>
                
                    <i class='bx bx-laptop services__icon' ></i>
                    <h3 className='services__title'>Web <br/> Applications</h3>
                </div>

                <span onClick={()=>toggleTab(2)} className="services__button">View More
                    <i className='uil uil-arrow-right services__button-icon'></i>
                </span>

                <div className={toggleState===2 ? "services__modal active-modal"
                : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Web Applications</h3>
                        <p className="services__modal-description">
                        New professional committed to quality work. Dedicated to learning and contributing effectively.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">Develop the user interface</p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">Web page development</p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">I positions your brand.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">Design and mockups of products for companies</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="services__content">
                <div>
                    <i class='bx bx-mobile-alt services__icon'></i>
                    <h3 className='services__title'>Android<br/> Applications</h3>
                </div>

                <span onClick={()=>toggleTab(3)} className="services__button">View More
                    <i className='uil uil-arrow-right services__button-icon'></i>
                </span>

                <div className={toggleState===3 ? "services__modal active-modal"
                : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Android Application</h3>
                        <p className="services__modal-description">
                        New professional committed to quality work. Dedicated to learning and contributing effectively.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">Develop the user interface</p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">Web page development</p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">I positions your brand.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">Design and mockups of products for companies</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>


        </div>

    </section>
  )
}
