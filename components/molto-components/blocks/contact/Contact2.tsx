import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';


interface titleType {
  title: string;
  lead: string;
  body: string;
  buttonTitle: string;
  buttonLink: string;
}
const Contact2: FC<titleType> = ({ title, lead, body }) => {
  return (
    <div className="row gx-0">
      <div className="col-lg-6">
        <Image
          className="h-100 w-100 image-wrapper object-fit-cover rounded-lg-start d-none d-md-block"
          width={300}
          height={300}
          src={`/img/${title.toLowerCase().replace(/ /g, '-')}.jpg`}
          srcSet={`/img/${title.toLowerCase().replace(/ /g, '-')}@2x.jpg 2x`}
          // srcSet={`/img/${title.replace(/ /g, '-').toLowerCase()}@2x.jpg 2x`}
          alt={title}
          style={{ background: 'transparent' }}
        />
      </div>
      <div className="col-lg-6">
        <div className="p-10 p-md-11 p-lg-13">
          <h2 className="display-4 mb-3">{title}</h2>
          <p className="lead fs-lg mb-5">{lead}</p>
          <p>{body}</p>

          {/* <NextLink title={buttonTitle} href={buttonLink} href="#" className="btn btn-primary rounded-pill mt-2" /> */}
        </div>
      </div>
    </div>
  );
};

export default Contact2;
