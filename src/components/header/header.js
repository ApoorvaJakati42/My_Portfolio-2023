import './header.scss';
import logo from '../../img/logo-white.png'

function Header() {
    return (
      <>
        <div class="header">
        <div class="header__logo-box">
            <img src={logo} alt="logo" class="header__logo "/>
        </div>

        <div class="header__text-box">
            <h1 class="heading-primary">
                <span class="heading-primary--main">Hello There.</span>
                <span class="heading-primary--sub">I'm Apoorva A. Jakati</span>
                <span class="heading-primary--job-title">Full Stack Web Developer</span>
            </h1>

            <a href="#" class="btn btn--white btn--animated">About Me</a> 
        </div>

    </div>
      </>
    );
  }
  
  export default Header;