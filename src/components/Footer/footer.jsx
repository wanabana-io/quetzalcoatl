import IconGithub from '../../assets/footer/icon-github.svg'
import IconInstragram from '../../assets/footer/icon-instagram.svg'
import IconLinkedin from '../../assets/footer/icon-linkedin.svg'
import { ReactSVG } from 'react-svg'

const Footer = () => (
  <div className='footer'>
    <div className='footer__container'>
      <div className='footer__links-container'>
        <div className='footer__items-wrapper'>
          <div className='footer__links-items'>
            <h2>Services</h2>
            <a href="/#">
              Planification
            </a>
            <a href="/#">
              Desing
            </a>
            <a href="/#">
              Code
            </a>
            <a href="/#">
              Testing
            </a>
            <a href="/#">
              Launch
            </a>
            <a href="/#">
              Support
            </a>
          </div>
          <div className='footer__links-items'>
            <h2>About</h2>
            <a href="/#">
              Wanabana
            </a>
          </div>
        </div>
        <div className='footer__items-wrapper'>
          <div className='footer__links-items'>
            <h2>Legal</h2>
            <a href="/#">
              Terms & Conditions
            </a>
            <a href="/#">
              Privacy Policy
            </a>
          </div>
          <div className='footer__links-items '>
            <h2>Contact Us</h2>
            <a href="/#">
              info@wanabana.com
            </a>
            <a href="/#">
              +52 312 000 99
            </a>
            <a href="/#">
              Colima, México
            </a>
          </div>
        </div>
      </div>
      <div className='footer__icons-container'>
        <ReactSVG src={IconGithub} />
        <ReactSVG src={IconInstragram} />
        <ReactSVG src={IconLinkedin} />   
      </div>
    </div>
    <div className='footer__website-right'>
      <small>
        &#169; Copyright 2021-2022 Copyright.mx - Todos los derechos reservados
      </small>
    </div>
  </div>
)

export default Footer
