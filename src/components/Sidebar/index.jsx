import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faSuitcase, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { VscMenu, VscChromeClose } from 'react-icons/vsc'
import { useState } from 'react'

const Sidebar = () => {
  const [toggleHam, setToggleHam] = useState(false)
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img className="sub-logo" src={LogoS} alt="hemant" />
          <span className='logo-name'>Hemant</span>
        </Link>

        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>

          <NavLink activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>

          <NavLink activeclassname="active" className="portfolio-link" to="/projects">
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>

        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/hemantwasthere/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/hemantwasthere"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/hemantwasthere/"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
            </a>
          </li>

          <li>
            <a
              href="https://drive.google.com/file/d/1n_gKym-x3BZnVFTd6nhXH_q9Jx4qa-qz/view"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faBagShopping} color="#4d4d4e" />
            </a>
          </li>

        </ul>

      </div>

      <div className='toggleHam' onClick={() => setToggleHam(!toggleHam)}>
        {toggleHam ? <VscChromeClose size={40} /> : <VscMenu size={40} />}
      </div>

      {toggleHam && <>
        <div className="nav-bar-second">
          <Link to="/" onClick={() => setToggleHam(false)} >
            <div className="logo" >
              <img className="sub-logo" src={LogoS} alt="hemant" />
              <span className='logo-name'>Hemant</span>
              <p>Web Developer</p>
            </div>
          </Link>

          <nav>
            <NavLink onClick={() => setToggleHam(false)} exact="true" activeclassname="active" to="/">
              Home
            </NavLink>

            <NavLink onClick={() => setToggleHam(false)} activeclassname="active" className="about-link" to="/about">
              About
            </NavLink>

            <NavLink onClick={() => setToggleHam(false)} activeclassname="active" className="portfolio-link" to="/projects">
              Projects
            </NavLink>

            <NavLink onClick={() => setToggleHam(false)} activeclassname="active"
              className="contact-link" to="/contact">
              Contact
            </NavLink>
          </nav>

          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/hemantwasthere/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/hemantwasthere"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com/hemantwasthere/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
              </a>
            </li>

            <li>
              <a
                href="https://drive.google.com/file/d/1n_gKym-x3BZnVFTd6nhXH_q9Jx4qa-qz/view"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faBagShopping} color="#4d4d4e" />
              </a>
            </li>

          </ul>

        </div>
      </>}

    </>
  )
}

export default Sidebar