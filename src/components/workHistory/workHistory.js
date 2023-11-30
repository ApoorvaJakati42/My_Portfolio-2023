import './workHistory.scss';
import Nat8 from '../../img/nat-8.jpg';
import Nat9 from '../../img/nat-9.jpg'
import VideoMp4 from '../../img/developing.mp4';
import VideowebM from '../../img/video.webm';

function WorkHistory() {
  return (
    <>
        <section class="section-stories">
            <div class="bg-video">
                <video class="bg-video__content" autoPlay muted loop>
                    <source src={VideoMp4} type="video/mp4"/>
                    <source src={VideowebM} type="video/webm"/>
                </video>
            </div>

            <div class="u-center-text u-marginBottom-big">
                <h2 class="heading-secondary">
                    Work History
                </h2>
                </div>

            <div class="row">
                <div class="story"> 
                   
                    <figure class="story__shape">
                        <img src={Nat8} alt="Person on a tour" class="story__image"/>
                        <figcaption class="story__caption">Imonitor Solutions</figcaption>
                    </figure>

                    <div class="story__text">
                        <h3 class="heading-tertiary u-marginBottom-small">
                            Sep 2017 - July 2019
                        </h3>
                        <h2>Imonitor Solutions</h2>
                        <h3 class="heading-tertiary u-marginBottom-small">
                            Home Automation
                        </h3>
                        <p>
                           I have developed and tested UI , API's , alerts , alarms , device
                           configuration....                            
                        </p>
                        <h3 class="heading-tertiary u-marginBottom-small">
                            Alexa and Google Home
                        </h3>
                        <p>
                           Implemented smart home speech to text conversions for Alexa 
                           and Google Home....                            
                        </p>
                    </div>

                </div>
            </div>

            <div class="row">
                <div class="story"> 
                    
                    <figure class="story__shape">
                        <img src={Nat9} alt="Person on a tour" class="story__image"/>
                        <figcaption class="story__caption">Bharat Electronics Ltd.</figcaption>
                    </figure>

                    <div class="story__text">
                        <h3 class="heading-tertiary u-marginBottom-small">
                            Feb 2016 - Feb 2017
                        </h3>
                        <h2>Bharath Electronics Ltd.</h2>
                        <h3 class="heading-tertiary u-marginBottom-small">
                            Graduate Apprentice Trainee
                        </h3>
                        <p>
                           I had the valuable opportunity to gain hands-on experience with 
                           SAP Material Management....                            
                        </p>
                    </div>

                </div>
            </div>

            {/* <div class="row">
                <div class="story"> 
                    
                    <figure class="story__shape">
                        <img src={Nat9} alt="Person on a tour" class="story__image"/>
                        <figcaption class="story__caption">Apoorva</figcaption>
                    </figure>

                    <div class="story__text">
                        <h3 class="heading-tertiary u-marginBottom-small">
                            My life is completely different now
                        </h3>
                        <p>
                            Beautiful scenery I recently went on a Nature Tour mountain hiking trip and
                                I was absolutely blown away by the beautiful scenery. 
                                The guides were knowledgeable and helpful, and I felt safe and comfortable the entire time. 
                            
                        </p>
                    </div>

                </div>
            </div> */}

            <div class="u-center-text u-marginTop-huge">
                <a href="#" class="btn-text">Read all stories &rarr;</a>
                </div>
        </section>
    </>
  );
}

export default WorkHistory;
