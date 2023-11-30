import './projects.scss';
import '../../css/icon-font.css';

function Projects() {
  return (
    <>
      <section class="section-tours" id="section-tours">

<div class="u-center-text u-marginBottom-big">
    <h2 class="heading-secondary">
        My Personal Projects
    </h2>
    </div>

<div class="row">
    <div class="col-1-of-3">
        <div class="card">
            <div class="card__side card__side--front">
                <div class="card__picture card__picture--1">
                    &nbsp;
                </div>
                <h4 class="card__heading">
                    <span class="card__heading-span card__heading-span--1">Fashion Flair</span>                                 
                </h4>
                <div class="card__details">
                    <ul>
                        <li>React JavaScript</li>
                        <li>Strapi MongoDB</li>
                        <li>GraphQL</li>
                        <li>Node JS</li>
                        <li>Stripe Payment</li>
                    </ul>
                </div>
            </div>

            <div class="card__side card__side--back card__side--back-1">
                <div class="card__cta">
                    <div class="card__price-box">
                        <p class="card__price-only">Project Description</p>
                        <p class="card__price-value">
                            Here You can shop for many men / Women clothing
                            along with integrated payments
                        </p>
                    </div>
                    <a href="#popup" class="btn btn--white">Explore Project</a>
                </div>
            </div>
        </div>
    </div>


    <div class="col-1-of-3">
        <div class="card">
            <div class="card__side card__side--front">
                <div class="card__picture card__picture--2">
                    &nbsp;
                </div>
                <h4 class="card__heading">
                    <span class="card__heading-span card__heading-span--2">Chat Application</span>                                 
                </h4>
                <div class="card__details">
                    <ul>
                        <li>7 day tour</li>
                        <li>Up To 40 People</li>
                        <li>6 Tour guides</li>
                        <li>Sleep in provided tents</li>
                        <li>Difficulty : Medium</li>
                    </ul>
                </div>
            </div>

            <div class="card__side card__side--back card__side--back-2">
                <div class="card__cta">
                    <div class="card__price-box">
                        <p class="card__price-only">Only</p>
                        <p class="card__price-value">Rs.20000</p>
                    </div>
                    <a href="#popup" class="btn btn--white">Book Now</a>
                </div>
            </div>
        </div>
    </div>



    <div class="col-1-of-3">
        <div class="card">
            <div class="card__side card__side--front">
                <div class="card__picture card__picture--3">
                    &nbsp;
                </div>
                <h4 class="card__heading">
                    <span class="card__heading-span card__heading-span--3">SkyBrain</span>                                 
                </h4>
                <div class="card__details">
                    <ul>
                        <li>5 day tour</li>
                        <li>Up To 18 People</li>
                        <li>3 Tour guides</li>
                        <li>Sleep in provided tents</li>
                        <li>Difficulty : Hard</li>
                    </ul>
                </div>
            </div>

            <div class="card__side card__side--back card__side--back-3">
                <div class="card__cta">
                    <div class="card__price-box">
                        <p class="card__price-only">Only</p>
                        <p class="card__price-value">Rs.25000</p>
                    </div>
                    <a href="#popup" class="btn btn--white">Book Now</a>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="u-center-text u-marginTop-huge">
    <a href="#" class="btn btn--green">Discover all Projects</a>
    </div>

</section>
    </>
  );
}

export default Projects;
