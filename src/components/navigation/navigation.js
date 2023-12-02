import './navigation.scss';

function Navigation() {



  return (
    <>
        <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle"/>

        <label for="navi-toggle" class="navigation__button">
            <span class="navigation__icon">&nbsp;</span>
        </label>

        <div class="navigation__background">&nbsp;</div>

        <nav class="navigation__nav">
            <ul class="navigation__list">
                <li class="navigation__item"><a href="#" class="navigation__link">
                    <span>01</span>About Me
                </a></li>
                <li class="navigation__item"><a href="#" class="navigation__link">
                    <span>02</span>Skills
                </a></li>
                <li class="navigation__item"><a href="#" class="navigation__link">
                    <span>03</span>Work History
                </a></li>
                <li class="navigation__item"><a href="#" class="navigation__link">
                    <span>04</span>Personal Projects
                </a></li>
                <li class="navigation__item"><a href="#" class="navigation__link">
                    <span>05</span> Education
                </a></li>
            </ul>
        </nav>

    </div>
    </>
  );
}

export default Navigation;
