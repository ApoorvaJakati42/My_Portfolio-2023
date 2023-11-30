import './education.scss';


function Education() {
  return (
    <>
        <section class="section-book">
            
            <div class="row">
                <div class="book">
                    <div class="book__form">
                        <form action="#" class="form">

                            <div class="u-marginBottom-medium">
                                <h2 class="heading-secondary">
                                    Education
                                </h2>
                                </div>

                            <div class="form__group">
                                <input id="name" type="text" class="form__input" placeholder="Full Name" required/>
                                <label for="name" class="form__label">Full Name</label>
                            </div>
                            <div class="form__group">
                                <input id="email" type="email" class="form__input" placeholder="Email Address" required/>
                                <label for="email" class="form__label">Email Address</label>
                            </div>
                            
                            
                            
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default Education;
