import './popup.scss';
import Nat8 from '../../img/nat-8.jpg';
import Nat9 from '../../img/nat-9.jpg';


function PopUp() {
  return (
    <div class="popup" id="popup">
        <div class="popup__content">
            <div class="popup__left">
                <img src={Nat8} alt="Tour photo" class="popup__img"/>
                <img src={Nat9} alt="Tour photo 2" class="popup__img"/>
            </div>

            <div class="popup__right">
                <a href="#section-tours" class="popup__close">&times;</a>
                <h2 class="heading-secondary u-marginBottom-small">Explore My project</h2>
                <h3 class="heading-tertiary u-marginBottom-small">TechStack Used : &ndash; React JS and Node JS</h3>
                <p class="popup__text">
                    The clip-path property allows you to make complex shapes in CSS by clipping an element to a 
                    basic shape (circle, ellipse, polygon, or inset), or to an SVG source.
                CSS Animations and transitions are possible with two
                or more clip-path shapes with the same number of points. 
                </p>
                <a href="#" class="btn btn--green">Visit Site</a>
            </div>
        </div>
    </div>

  );
}

export default PopUp;
