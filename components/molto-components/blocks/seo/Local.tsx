import { FC } from 'react';
import { LocalSEO, InternationalSEO } from 'components/blocks/portfolio';


interface titleType { 
  heading: any;
  body: string; 
  initialslide: number;
}
const Video: FC<titleType> = ({ heading, body, initialslide }) => {
  return (  
    <section className="wrapper bg-light">
      <div className="container pt-1 pt-md-1 pb-20 pb-md-20">
        <div className="row">
          <div className="col-lg-6 col-xl-6 col-xxl-5 mx-auto text-center mb-5">
          <img
              width={120}
              height={120}
              src={`/img/${heading.replace(/ /g, '-').toLowerCase()}.jpg`}
              // srcSet={`/img/${heading.replace(/ /g, '-').toLowerCase()}@2x.jpg 2x`}
              alt={heading.toLowerCase()}
              className="img-fluid rounded-circle mb-3"
            />
            <h2 className="fs-15 text-uppercase text-muted mb-3">{heading} Clients</h2>
            <h3 className="display-4">Local SEO & Design</h3>
            <p>{body}</p>
          </div>
        </div>
        {/* ========== latest projects carousel section ========== */}
        {/* <animated.div style={{ opacity: fadeInAnimate.opacity }}> */}
        <LocalSEO initialslide={initialslide} />
        {/* </animated.div> */}
      </div>
    </section>
  );
};

export default Video;
