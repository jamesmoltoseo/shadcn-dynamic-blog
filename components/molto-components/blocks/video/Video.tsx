import { FC } from 'react';
import { Link as ScrollLink } from 'react-scroll';

interface titleType {
  title1: string;
  title2: string;
  title3: string;
  fontsize1: number;
  fontsize2: number;
  movie: string;
  button: string;
  body: any;
  placeholder: string;
  intro: string;
  heading: string;
}
const Video: FC<titleType> = ({ intro, heading, title1, title2, title3, movie, body, placeholder, button, fontsize1, fontsize2 }) => {
  return (
    <section className="video-hero wrapper angled lower-start">
      <h1 className="mt-10 animate__animated animate__slideInUp animate__delay-1s">{heading}</h1>
      <h2 className="mt-10">
        <span className="hero_text">
          <p className={`fs-${fontsize1}`}>{title1}</p>
          <span className={`fs-${fontsize2}`}>{title2}</span>
        </span>
        
        <video autoPlay loop playsInline muted poster={placeholder}>
          <source src={movie} type="video/mp4" />
        </video>
        {/* <span className={`fs-${fontsize2}`}>{title3}</span> */}
      </h2>
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-11 col-xl-10 mx-auto text-center mb-5">
      
          <p className="animate__animated animate__slideInUp animate__delay-2s">
            {`Molto `} 
            {intro}
         </p>
          <ScrollLink to="ai-seo" spy={true} smooth={true} offset={0} duration={500} className="mt-5">
            <span className="animate__animated animate__slideInUp animate__delay-3s">Learn more</span>
            <p className="animate__animated animate__slideInUp animate__delay-4s">
              <i style={{ lineHeight: 0.75 }} className="text-primary uil uil-angle-double-down fs-40"></i>
            </p>
            <div></div>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Video;
