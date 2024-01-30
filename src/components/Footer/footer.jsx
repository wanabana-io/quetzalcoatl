import IconGithub from '../../assets/footer/icon-github.svg'
import IconFacebook from '../../assets/footer/icon-facebook.svg';
import IconLinkedin from '../../assets/footer/icon-linkedin.svg'
import IconInstagram from '../../assets/footer/icon-instagram.svg'
import HeaderItem from "../../shared/HeaderItem/headerItem";
import { ReactSVG } from 'react-svg'

const Footer = () => (
  <div className='footer'>
    <div className='footer__container'>
      <div className='footer__links-container'>
        <div className='footer__items-wrapper'>
          <div className='footer__links-items'>
            <h2>Services</h2>

            <HeaderItem
              goTo="services"
              text="Planning"
              itemClass="footer_links-items-services"
            />

            <HeaderItem
              goTo="services"
              text="Design"
              itemClass="footer_links-items-services"
            />

            <HeaderItem
              goTo="services"
              text="Developing"
              itemClass="footer_links-items-services"
            />

            <HeaderItem
              goTo="services"
              text="Consulting"
              itemClass="footer_links-items-services"
            />
          </div>
        </div>

        <div className='footer__items-wrapper'>
          <div className='footer__links-items '>
            <h2>Contact Us</h2>
            <a href="mailto: imanny.eg@gmail.com">
              Send Email
            </a>
          </div>
        </div>
      </div>

      <div className='footer__icons-container'>
        <a href='https://github.com/wanabana-io'  >
          <ReactSVG src={IconGithub} className="footer__icons-separation"/>
        </a>
        <a href="https://www.facebook.com/wanabana.io">
          <ReactSVG src={IconFacebook} className="footer__icons-separation" />
        </a>
        <a href='https://www.linkedin.com/company/wanabana-io/'>
          <ReactSVG src={IconLinkedin} className="footer__icons-separation" />
        </a>
        <a href='https://www.instagram.com/wanabana.io/'>
          <ReactSVG src={IconInstagram} className="footer__icons-separation" />
        </a>
      </div>
    </div>
    <div className='footer__website-right'>
      <small>
        &#169; {(new Date().getFullYear())} wanabana.io- All Rights Reserved
      </small>
    </div>
  </div>
)

export default Footer
