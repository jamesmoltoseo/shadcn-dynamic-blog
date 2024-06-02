import { FC } from 'react';
import Image from 'next/image';
import AccordionList from 'components/common/AccordionList';

interface titleType {
  title: string;
}
const About1: FC<titleType> = ({ title }) => {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-20 align-items-center">
      <div className="col-lg-7">
        <figure>
          <Image layout="responsive" alt="choose us" title="choose us" className="w-auto" src="/img/illustrations/i6.png" width={640} height={458} />
        </figure>
      </div>

      <div className="col-lg-5">
        <h2 className="fs-16 text-uppercase text-muted mb-3">{ title }</h2>
        <h3 className="display-4 mb-7">We bring solutions to make life easier for our clients.</h3>

        <AccordionList />
      </div>
    </div>
  );
};

export default About1;
