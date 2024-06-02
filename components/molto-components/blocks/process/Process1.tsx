import { FC } from 'react';
import { ProcessList1 } from 'components/reuseable/process-list';
import { Link } from 'react-scroll';
// -------- data -------- //
interface titleType {
  title: string;
  subtitle: string;
  buttonTitle: string;
  buttonLink: string;
  list: any;
  body: any;
  src: string;
  alt: string;
  displayButton: string;
}
const Process1: FC<titleType> = ({ subtitle, title, body, displayButton, list, buttonLink, buttonTitle, src, alt }) => {
  return (
    <section className="wrapper">
      <div className="container pb-5 pt-md-10 pb-md-1">
        <div className="row gx-md-8 gx-xl-12 gy-10 mb-14 mb-md-18 align-items-center">
          <div className="col-lg-6 order-2">
            {list.map((item: any) => {
              return <ProcessList1 shadow {...item} key={item} />;
            })}
          </div>

          <div className="col-lg-6 order-1">
            {src !== '' && (
              <img
                width={500}
                height={'auto'}
                src={src}
                alt={alt}
                className="card-img-top mw border-bottom-1 border-black"
              />
            )}
            <h2 className="fs-16 text-uppercase text-muted mb-3">{title}</h2>
            <h3 className="display-4 mb-5">{subtitle}</h3>
            <div className="">{body}</div>
            <Link
              //legacyBehavior2 passHref2
              title={buttonTitle}
              href={buttonLink}
              className={`btn btn-blue rounded-pill mt-2 ${displayButton}`}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process1;
