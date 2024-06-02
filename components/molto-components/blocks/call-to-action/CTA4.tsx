import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';

import { Element, Link as ScrollLink } from 'react-scroll';
interface titleType {
  title: string;
  body: string;
  buttonLink: string;
  buttonTitle: string;
}
const CTA4: FC<titleType> = ({ title, body, buttonTitle, buttonLink }) => {
  return (
    <section
      className="wrapper image-wrapper bg-image bg-overlay mt-0"
      style={{ backgroundImage: 'url(/img/photos/bg1.jpg)' }}
    >
      <div className="container py-18">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="fs-16 text-uppercase text-white mb-3 text-line">{ title }</h2>
            <h3 className="display-4 mb-5 mb-6 text-white pe-xxl-18">
              {body}
            </h3>

            <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500} className="btn btn-white rounded mb-0 text-nowrap" >
                Get in touch</ScrollLink>
              </div>
        </div>
      </div>
    </section>
  );
};

export default CTA4;
