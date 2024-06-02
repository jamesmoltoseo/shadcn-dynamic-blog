import { FC } from 'react';
import Image from 'next/image';

const Tiles1: FC = () => {
  return (
    <div className="row gx-md-5 gy-5 align-items-center">
      <div className="col-md-6">
        <div className="row gx-md-5 gy-5">
          <div className="col-md-10 offset-md-2">
            <figure className="rounded">
              <Image width={240} height={255} layout="responsive" src="/img/photos/ab1.jpg" alt="" />
              {/* <img src="/img/photos/ab1.jpg" srcSet="/img/photos/ab1@2x.jpg 2x" alt="" /> */}
            </figure>
          </div>

          <div className="col-md-12">
            <figure className="rounded">
            <Image width={290} height={225} layout="responsive" src="/img/photos/ab2.jpg" alt="" />
              {/* <img src="/img/photos/ab2.jpg" srcSet="/img/photos/ab2@2x.jpg 2x" alt="" /> */}
            </figure>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <figure className="rounded">
        <Image width={290} height={440} layout="responsive" src="/img/photos/ab3.jpg" alt="" />
          {/* <img src="/img/photos/ab3.jpg" srcSet="/img/photos/ab3@2x.jpg 2x" alt="" /> */}
        </figure>
      </div>
    </div>
  );
};

export default Tiles1;