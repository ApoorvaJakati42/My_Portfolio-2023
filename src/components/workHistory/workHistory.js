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
                        <figcaption class="story__caption">Family Business Manager</figcaption>
                    </figure>

                    <div class="story__text">
                        <h3 class="heading-tertiary u-marginBottom-small">
                            August 2019 - April 2023
                        </h3>
                        <p>
                            OverSaw and managed construction projects from start to finish , ensuring
                            they were completed on time.
                            Collaborated with architects , engineers and contractors.
                                
                        </p>
                    </div>

                </div>
            </div>

            <div class="row">
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
