import { FC } from 'react';
import Image from 'next/image';
const CTA1: FC = () => {
  return (
    <section className="wrapper ">
      <div className="container pb-16 pb-md-18">
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-8 align-items-center">
          <div className="col-lg-7 order-lg-2">
            <figure>
              <Image
                layout="responsive"
                alt="analyze now"
                className="w-auto"
                width={640}
                height={458}
                src="/img/illustrations/i3.png"
              />
            </figure>
          </div>

          <div className="col-lg-5">
            <h2 className="fs-16 text-uppercase text-muted mb-3">Analyze Now</h2>
            <h3 className="display-4 mb-5">
              Wonder how much faster your website can go? Easily check your SEO Score now.
            </h3>

            <p className="mb-7">
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl
              consectetur et.
            </p>

            <div className="row">
              <div className="col-lg-9">
                <form action="#">
                  <div className="form-floating input-group">
                    <input type="url" className="form-control" placeholder="Enter Website URL" id="seo-check" />
                    <label htmlFor="seo-check">Enter Website URL</label>
                    <button className="btn btn-primary" type="button">
                      Check
                    </button>{' '}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA1;
