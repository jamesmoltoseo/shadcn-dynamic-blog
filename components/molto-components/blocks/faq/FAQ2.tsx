import { FC } from 'react';
import Accordion from 'components/reuseable/accordion';
// -------- data -------- //
import * as All from 'data/keywords';

// ============================================================
type Faq2Props = {
  title1: string;
  title2: string;
  fontsize1: number;
  fontsize2: number;
  subtitle: string;
  movie: any;
  placeholder: string;
  accordion: any;
  body: any;
  titleColor?: 'primary' | 'muted';
};
// ============================================================

const FAQ2: FC<Faq2Props> = ({
  title1,
  title2,
  subtitle,
  placeholder,
  movie,
  accordion,
  body,
  fontsize1,
  fontsize2,
  titleColor = 'primary'
}) => {
  return (
    <section id="point-process" className="video-hero wrapper angled lower-start  pt-15 pt-md-17">
      <h2>
        <span className="hero_text">
          <p className={`fs-${fontsize1}`}>{title1}</p>
          <span className={`fs-${fontsize2}`}>{title2}</span>
        </span>

        <video  autoPlay loop playsInline muted poster={placeholder}>
          <source src={movie} type="video/mp4" />
        </video>
      </h2>
      <div className="row animate__animated animate__slideInUp animate__delay-2s">
        <div className=" col-12 mx-auto text-center mt-5">
          <h3 className="display-4 mb-5 text-capitalize" style={{  }}>
            for SEO Success<br></br>
            <span style={{ fontSize: 20 }}>- AI driven {subtitle} -</span>
          </h3>
        </div>
      </div>
      <div className="row animate__animated animate__slideInUp animate__delay-2s">
        <div className="col-10 col-md-11 mx-auto text-center mb-10">
          <p>
            Molto SEO 
            has developed a 10 Point Process to stay focused only on the on&#8209;page, off&#8209;page and{' '}
            {All.HomeList[8].title} that really affect the majority of our keyword research. AI-based SEO can help you create
            better optimized content that your readers will love and engage with.
          </p>
        </div>
      </div>
      <div className="row w-100 mb-md-20">
        <div className="mx-auto col-12 col-md-10 col-lg-8 col-xl-7">
          <ol className="animate__animated animate__slideInUp animate__delay-3s accordion-wrapper w-100 p-0" id="accordion" >
            {accordion.map((item: any) => (
              <Accordion key={item.no} {...item} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default FAQ2;
