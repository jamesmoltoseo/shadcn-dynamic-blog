import { FC } from 'react';
import Image from 'next/image';
import CTAHero from '../call-to-action/CTAHero';
interface titleType {
  title: string;
  lead: string;
  body: any;
  bgcolor: string;
}
const Hero1: FC<titleType> = ({ title, lead, body, bgcolor }) => {
  return (
    <section id="website-test" className={`wrapper bg-${bgcolor}`}>
      <div className="container text-center">
        <div className="row gx-lg-8 gx-xl-12">
          <div className="container text-center">
            <div className="col-12 text-center text-lg-start mx-auto">
              <div className="row mx-auto">
                <div className="col-lg-10 text-center text-lg-start mx-auto">
                  <CTAHero title={title} />
                </div>
              </div>
              <p className="lead fs-lg my-7 text-center">{lead}</p>
              {body}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
