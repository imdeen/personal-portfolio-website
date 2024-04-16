import './Footer.css'
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (


    <footer>


      <div class="waves">
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
      </div>

      <div className='icons'>

        <a className='icon' href="https://github.com/imdeen">< AiOutlineGithub /></a>
        <a className='icon' href="https://www.linkedin.com/in/deen-mohammad-9b0b8a192/">< AiFillLinkedin /></a>
      </div>



      <ul className='menu' >



        <li className='menu__item'>
          <a className='menu__link' href="/"><div>Home</div></a>
        </li>

        <li className='menu__item'>
          <a className='menu__link' href="/About"><div>About</div></a>
        </li>

        <li className='menu__item'>
          <a className='menu__link' href="/Project"><div>Project</div></a>
        </li>

        <li className='menu__item'>
          <a className='menu__link' href="/Contact"><div>Contact</div></a>
        </li>

      </ul>

      <p class="copyright">deen mohammad © 2023</p>
    </footer>



  )
}

export default Footer;