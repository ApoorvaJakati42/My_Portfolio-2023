import './hero.scss';
import logo from '../../img/dna.svg'

function Hero() {
    return (
      <>
        <div class="hero">
        <div class="hero__logo-box">
            <img src={logo} alt="logo" class="hero__logo "/>
        </div>

        <div class="hero__text-box">
            <h1 class="heading-primary">
                <span class="heading-primary--main">Hello There.</span>
                <span class="heading-primary--sub">I'm Apoorva A. Jakati</span>
                <span class="heading-primary--job-title">Full Stack Web Developer</span>
            </h1>

            <a href="#" class="btn-hero btn-hero--white btn-hero--animated">About Me</a> 
        </div>

    </div>
      </>
    );
  }
  
  export default Hero;