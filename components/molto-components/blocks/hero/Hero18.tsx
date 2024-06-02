import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';
import Typewriter from 'typewriter-effect';
import { fadeInAnimate, slideInDownAnimate } from 'utils/animation';

const Hero18: FC = () => {
  return (
    <section className="wrapper bg-light">
      <div
        className="image-wrapper bg-full bg-image bg-overlay bg-overlay-light-500 mt-2 mb-5"
        style={{ backgroundImage: 'url(/img/photos/bg22.png)' }}
      >
        <div className="container-card">
          <div className="card border-0 bg-transparent">
            <div className="card-body py-14 px-0">
              <div className="container">
                <div className="row gx-md-8 gx-xl-12 gy-10 align-items-center text-center text-lg-start">
                  <div className="col-lg-6">
                    <h1 className="display-2 mb-4 me-xl-5 me-xxl-0" style={slideInDownAnimate('900ms')}>
                      Test your <span className="text-gradient gradient-1">homepage</span> for free.
                    </h1>

                    <p className="lead fs-23 lh-sm mb-7 pe-xxl-15" style={slideInDownAnimate('1200ms')}>
                      {/* <span className="text-primary text-nowrap">
                      <Typewriter
                        options={{
                          loop: false,
                          autoStart: true,
                          strings: ['want to be seen?']
                        }}
                      />
                    </span> */}
                    </p>
                    {/* <form
                    action=""
                    method="post"
                    target="_blank"
                    className="validate mb-5"
                    id="mc-embedded-subscribe-form2"
                    name="mc-embedded-subscribe-form"
                  >
                    <div id="mc_embed_signup_scroll2">
                      <div className="mc-field-group input-group form-floating">
                        <input
                          type="text"
                          name="domain"
                          id="mce-domain2"
                          autoComplete="off"
                          placeholder="Domain name"
                          className="required domain form-control"
                        />
                        <label htmlFor="mce-domain2" className="text-start">
                          Domain name
                        </label>

                        <input
                          type="submit"
                          value="Join"
                          name="subscribe"
                          id="mc-embedded-subscribe2"
                          className="btn btn-fuchsia"
                        />
                      </div>

                      <div id="mce-responses2" className="clear">
                        <div className="response" id="mce-error-response2" style={{ display: 'none' }} />
                        <div className="response" id="mce-success-response2" style={{ display: 'none' }} />
                      </div>

                      <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                        <input type="text" name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc" tabIndex={-1} />
                      </div>

                      <div className="clear" />
                    </div>
                  </form> */}
                    <div style={slideInDownAnimate('1500ms')}>
                      <NextLink title="Explore Now" href="#" className="btn btn-lg btn-gradient gradient-1 rounded" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <img
                      alt="demo"
                      className="img-fluid mb-n18"
                      src="/img/illustrations/3d6.png"
                      srcSet="/img/illustrations/3d6@2x.png 2x"
                      style={fadeInAnimate('300ms')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero18;
