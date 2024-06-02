import { FC } from 'react';
import { InternationalSEO } from 'components/blocks/portfolio';

interface titleType {
  heading: any;
    body: string;
}
const International: FC<titleType> = ({ heading, body }) => {
  return (
    <section className="wrapper bg-light">
      <div className="container pt-1 pt-md-1 pb-10 pb-md-15">
        <div className="row">
          <div className="col-lg-12 col-xl-12 mx-auto text-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto text-center mb-5">
                  <h2 className="fs-15 text-uppercase text-muted mb-3">{heading}</h2>
                  <h3 className="display-4">International SEO</h3>
                  <p className="mx-auto">
                    {body}
                  </p>
                </div>
              </div>
            </div>
            {/* ========== latest projects carousel section ========== */}
            {/* <animated.div style={{ opacity: fadeInAnimate.opacity }}> */}
            <InternationalSEO />
            {/* </animated.div> */}
          </div>
        </div>
      </div> 
    </section>
  );
};

export default International;
