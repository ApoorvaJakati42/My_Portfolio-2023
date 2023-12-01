import './skills.scss';
import '../../css/icon-font.css';

function Skills() {
  return (
    <>
      <section class="section-features">

      <div class="u-center-text u-marginBottom-big">
                    <h2 class="heading-secondary">
                        Technical Skills
                    </h2>
            </div>

            
            <div class="row">
                <div class="col-1-of-4">
                    <div class="feature-box">
                        <i class="feature-box__icon icon-basic-world"></i>
                        <h3 class="heading-tertiary-skills">React JS</h3>
                        
                    </div>
                </div>

                <div class="col-1-of-4">
                    <div class="feature-box">
                        <i class="feature-box__icon icon-basic-compass"></i>
                        <h3 class="heading-tertiary-skills">Node JS</h3>
                       
                    </div>
                </div>

                <div class="col-1-of-4">
                    <div class="feature-box">
                        <i class="feature-box__icon icon-basic-map"></i>
                        <h3 class="heading-tertiary-skills">SASS</h3>
                       
                    </div>
                </div>

                <div class="col-1-of-4">
                    <div class="feature-box">
                        <i class="feature-box__icon icon-basic-heart"></i>
                        <h3 class="heading-tertiary-skills">MongoDB</h3>
                        
                    </div>
                </div>
                
            </div>

            <div class="row">
                <div class="col-1-of-4">
                    <div class="feature-box">
                        <i class="feature-box__icon icon-basic-world"></i>
                        <h3 class="heading-tertiary-skills">TypeScript</h3>
                        
                    </div>
                </div>

                <div class="col-1-of-4">
                    <div class="feature-box">
                        <i class="feature-box__icon icon-basic-compass"></i>
                        <h3 class="heading-tertiary-skills">Redux</h3>
                        
                    </div>
                </div>

                <div class="col-1-of-4">
                    <div class="feature-box">
                        <i class="feature-box__icon icon-basic-map"></i>
                        <h3 class="heading-tertiary-skills">JavaScript</h3>
                        
                    </div>
                </div>

                <div class="col-1-of-4">
                    <div class="feature-box">
                        <i class="feature-box__icon icon-basic-heart"></i>
                        <h3 class="heading-tertiary-skills">HTML</h3>
                        {/* <p class="feature-box__text">
                            There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form, by injected humour,
                                or randomised words.
                        </p> */}
                    </div>
                </div>
                
            </div>
    
    </section>

    
    </>
  );
}

export default Skills;
