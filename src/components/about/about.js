import './about.scss';
import '../hero/hero.scss'
import react from '../../img/fashion-1.JPG';
import layout from '../../img/Crown-1.JPG';
import digital from '../../img/Arc-1.JPG';


function About() {
    return (
      <>
       <section class="section-about" id='about'>
            <div class="u-center-text u-marginBottom-big">
                    <h2 class="heading-secondary">
                        About MySelf
                    </h2>
            </div>

            <div class="row">
                <div class="col-1-of-2">
                    <h3 class="heading-tertiary-about u-marginBottom-small"> Personal Details</h3>
                    <p class="my-details">
                       Name : Mr. Apoorva A Jakati <br/>
                       Date Of Birth : 29/07/1993 <br/>
                       Email : apoorva.jakati@gmail.com <br/>
                       Languages : English , Kannada
                            
                    </p>

                    <h3 class="heading-tertiary u-marginBottom-small">Professsional Summary</h3>
                    <p class="paragraph">
                    Software Developer with 2 years & 10 months of experience in software development using
                    Java and Javascript technologies. Proficient with tools such as Eclipse and VS Code.Passionate about coding.
                            
                    </p>

                    <a  href="#" class="btn-text">Download Resume &rarr;</a>
                </div>
                
                <div class="col-1-of-2">
                    <div class="composition">
                        <img src={react} alt="Photo 1" class="composition__photo composition__photo--p1"/>
                        <img src={layout} alt="Photo 2" class="composition__photo composition__photo--p2"/>
                        <img src={digital} alt="Photo 3" class="composition__photo composition__photo--p3"/>
                    </div>
                </div>
            </div>
       </section>
      </>
    );
  }
  
  export default About;