import './footer.scss';
import logo from "../../img/Predator.png";
import instagram from '../../img/instagram1.svg';
import linkedIn from '../../img/linkedin.svg';
import gitHub from '../../img/github.svg';

function Footer() {
  return (
    <>
        <footer class="footer">
        <div class="footer__logo-box">
            <img src={logo} alt=""green-logo class="footer__logo"/>
        </div>

        <div class="row">
            <div class="col-1-of-2">
                <div class="footer__navigation">
                    <ul class="footer__list">
                        <li class="footer__item"><a href="#" class="footer__link">Home</a></li> 
                        <li class="footer__item"><a href="#" class="footer__link">About</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Contact</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Privacy Policy</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Terms</a></li>
                    </ul>
                </div>
                
                  
                       
                
            </div>

            <div class="col-1-of-2">
                <p class="footer__copyright">
                    Built by : &nbsp; <a href="#" class="footer__link">Mr. Apoorva Jakati</a>
                </p>
            </div>

            
        </div>

        <div class="col-1-of-1">
                <p class="footer__socialMedia">
                <img alt="instagram" src={instagram} class="footer__instagram"/> 
                <img alt="linkedIn" src={linkedIn} class="footer__linkedIn"/>
                <img alt="gitHub" src={gitHub} class="footer__gitHub"/>
                </p>
                
        </div>

    </footer>
    </>
  );
}

export default Footer;
