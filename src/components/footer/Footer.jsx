import React from 'react'
import './footer.css'


export default function Footer() {
  return (

    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Khasim</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href='https://www.linkedin.com/in/syed-khasim/' className='footer__social-link' target='_blank'>
                    <i class="bx bxl-linkedin"></i>
                </a>

                <a href='https://www.instagram.com/khasim_15/' className='footer__social-link' target='_blank'>
                    <i class="bx bxl-instagram"></i>
                </a>

                <a href='https://x.com/Tahaseen1215?t=KCqz6Fe9xV60XsI8P-OnxA&s=09' className='footer__social-link' target='_blank'>
                    <i class="bx bxl-twitter"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Syed Khasim. All rigths reserved</span>

        </div>
    </footer>

  )
}
