import { FC } from 'react';
// -------- custom component -------- //
import Image from 'next/image';

 
import Carousel from 'components/reuseable/Carousel';
import carouselBreakpoints from 'utils/carouselBreakpoints';
import { TestimonialCard3 } from 'components/reuseable/testimonial-cards';
// -------- data -------- //
import { testimonialList2 } from 'data/testimonial-list';
interface titleType {
  title: string;
}
const Director: FC<titleType> = ({ title }) => {
  return (
    <div className="wrapper bg-light">
      <div className="container-fluid py-8 pt-md-16">
        <div
          className="wrapper image-wrapper "
          // bg-image bg-overlay bg-overlay-300

          // style={{ backgroundImage: 'url(/img/photos/bg16.png)' }}
        >
          <div className="row gx-0">
            <div className="col-10 offset-1 col-md-8 offset-md-2 col-xl-6 offset-xl-3 mx-auto text-center pb-5">
              <h2 className="fs-15 text-uppercase text-muted mb-3">{title}</h2>
              <h3 className="display-4 mb-6 px-xl-10 px-xxl-15">Jamie Finlayson, Director</h3>

              <div className="d-md-flex justify-content-md-center align-items-center">
                <div className="mobile-12">
                  <div
                    className="rounded-circle border-dark overflow-hidden bg-overlay bg-overlay-light-500 mt-2 mb-5"
                    style={{
                      backgroundImage: 'url(/img/photos/bg22s.jpg)',
                      backgroundSize: '210px 216px',
                      width: '150px',
                      height: '150px'
                    }}
                  >
                    <img
                      width={'97%'}
                      height={'100%'}
                      src="/img/director/jamie.png"
                      alt="technical SEO consultants"
                      style={{ background: 'transparent' }}
                    />
                    
                  </div>
                  {/* <img src="/img/director/jamie.png" width={} /> */}
                </div>
                <div className="d-block ms-md-5 mobile-12">
                  <p>
                    Jamie leads development teams for the largest tech companies in the world. Here are some of the
                    things his clients have said about&nbsp;him.
                  </p>
                  {/* <a href="https://www.linkedin.com/in/finlaysonj/" target="_blank" rel="noreferrer">
                    <span className="icon btn btn-circle btn-primary pe-none me-5">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                      </svg>
                    </span>
                    <span>500+ Connections</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-15 pb-md-12 carousel-container">
        <Carousel grabCursor className="p-2" navigation={false} breakpoints={carouselBreakpoints}>
          {testimonialList2.map((item, i) => (
            <TestimonialCard3 {...item} key={i} />
          ))}
        </Carousel>
        <div id="seo-audit"></div>
      </div>
    </div>
  );
};

export default Director;
