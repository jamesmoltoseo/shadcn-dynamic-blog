import { FC, Fragment } from 'react';
import IconBox from 'components/reuseable/IconBox';
import NextLink from 'components/reuseable/links/NextLink';
import { Link, animateScroll as scroll } from 'react-scroll';
// -------- data -------- //

interface titleType {
  title: string;
  serviceList: any;
}
const Services19: FC<titleType> = ({ title, serviceList }) => {
  return (
    <Fragment>
      <div className="container py-17 pt-md-17">
        <div className="row text-center">
          <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
            <h2 className="fs-15 text-uppercase text-muted">{title}</h2>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-lg-9 col-xl-8 col-xxl-5 mx-auto">
            <h3 className="display-4 mb-9" style={{ textTransform: 'none' }}>
              Why choose{' '}
              <span className="underline-3 style-2 blue">Molto SEO</span>{' '}as your {title}s?
            </h3>
          </div>
        </div>
        <div className="row gx-md-8 gx-xl-12 gy-8 mb-14 mb-md-16 text-center">
          <div className="col-md-4" key={serviceList[0].id}>
            <IconBox
              className={`icon btn btn-block btn-lg btn-soft-${serviceList[0].color} pe-none mb-5`}
              icon={serviceList[0].icon}
            />
            <h4>{serviceList[0].title}</h4>
            <p className="mb-3">{serviceList[0].description}</p>

            <Link 
//legacyBehavior2 passHref2
              className={`more hover link-${serviceList[0].color}`}
              activeClass="active"
              to="localSEO"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Browse Local SEO
            </Link>
          </div>
          {serviceList.slice(1).map((id: any) => (
            <div className="col-md-4" key={id}>
              <IconBox className={`icon btn btn-block btn-lg btn-soft-${id.color} pe-none mb-5`} icon={id.icon} />
              <h4>{id.title}</h4>
              <p className="mb-3">{id.description}</p>
            </div>
          ))}

          {/* <NextLink title="Learn More" alt="Learn More" href={linkUrl} className={`more hover link-${color}`} /> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Services19;
