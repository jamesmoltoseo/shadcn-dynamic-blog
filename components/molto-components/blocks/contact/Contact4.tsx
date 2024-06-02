import { FC } from 'react';
import Image from 'next/image';
import NextLink from 'components/reuseable/links/NextLink';
import { Link } from 'react-scroll';

interface titleType {
  title: string;
  subtitle: string;
  body: string;
  buttonTitle: string;
  buttonLink: string;
}
const Contact4: FC<titleType> = ({ subtitle, title, body, buttonTitle, buttonLink }) => {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-10 mb-md-14 align-items-center">
      <div className="col-lg-7">
        <figure>
          <img
            src={`/img/${title.replace(/ /g, '-').toLowerCase()}.png`}
            srcSet={`/img/${title.replace(/ /g, '-').toLowerCase()}@2x.png 2x`}
            alt={title.toLowerCase()}
          />
        </figure>
      </div>

      <div className="col-lg-5 text-light">
        <h2 className="fs-16 text-uppercase mb-3 text-light">{title}</h2>
        <h3 className="display-4 mb-5 text-light" style={{ textTransform: 'none' }}>
          {subtitle}
        </h3>

        <p>{body}</p>
        <Link 
//legacyBehavior2 passHref2
          title={buttonTitle}
          href={buttonLink}
          className="btn btn-blue rounded-pill mt-2"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >{buttonTitle}</Link>
        {/* <NextLink title={buttonTitle} href={buttonLink} className="btn btn-blue rounded-pill mt-2" /> */}
      </div>
    </div>
  );
};

export default Contact4;
