import { FC } from 'react';
import Image from 'next/image';
import CTAHero from '../call-to-action/CTAHero';

interface titleType {
  title: string;
  lead: string;
  body: any;
  src: string;
}
const Hero1Para: FC<titleType> = ({title, lead, body, src}) => {
  return (
    <section className="wrapper bg-light">
      <div className="container mt-5 mt-md-10 pt-15 pt-md-14 pb-8 text-center">
        <div className="row gx-lg-8 gx-xl-12 gy-10">
          <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 text-center text-lg-start mx-auto">
            {/* <div className="col-md-12 col-lg-12 text-center text-lg-start"> */}
            <h2 className="display-3 mb-3 text-center text-lg-start">{title}</h2>
            <p className="lead fs-lg my-7">{lead}</p>
            <p className="lead fs-lg">{body}</p>
            {/* <a className="btn btn-primary rounded-pill me-2">Try It For Free</a> */}
          </div>
          <div className="col-lg-6">
            <figure>
              <img 
                width={960}
                height={600}
                src={`/img/${src.toLowerCase().replace(/ /g, '-')}.png`}
                srcSet={`/img/${src.toLowerCase().replace(/ /g, '-')}@2x.png 2x`}
                // srcSet={`/img/${src.replace(/ /g, '-').toLowerCase()}@2x.jpg 2x`}
                alt={src}
                style={{ background: 'transparent' }}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1Para;
