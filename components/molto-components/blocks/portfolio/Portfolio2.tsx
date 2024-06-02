import { FC } from 'react';
import Image from 'next/image';
import Carousel from 'components/reuseable/Carousel';
import { useRouter } from 'next/router';
// -------- data -------- //
import { carouselImages } from 'data/demo-7';
import { carouselImagesInstagramOnly } from 'data/demo-7';
import { Clients1 } from '../clients';

interface titleType {
  title: string;
}
const Portfolio2: FC<titleType> = ({ title }) => {
  const router = useRouter();

  const { referrer, location } = router.query;
  const query = router.query;

  return (
    <div className="overflow-hidden position-relative" style={{ zIndex: 1, position: 'relative' }}>
      <div className="container pb-9 pb-md-14">
        <div className="row">
          <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto text-center mb-5">
            <h2 className="fs-15 text-uppercase text-muted mb-3">{title}</h2>
            <h3 className="display-4 mb-8">Previous Clients</h3>
            <p className="mx-auto text-center">
              Jamie has lead teams and developed user interfaces for tech companies and agencies. Molto{' '}
              SEO offers the same high level of quality in design and search&nbsp; engine optimisation to local
              businesses.
            </p>
          </div>
        </div>
        {/* {/* <div className="row"> */}
        <div className="col-lg-10 mx-auto text-center mb-15">
          <div className="px-lg-5">
            <Clients1 />
          </div>
        </div>
        <div className="swiper-container grid-view nav-bottom nav-color mb-14">
          {/* {referrer === 'instagram' && (

            <Carousel
              grabCursor
              slidesPerView={2}
              pagination={false}
              className="overflow-visible mb-17"
              breakpoints={{ 768: { slidesPerView: 2 }, 0: { slidesPerView: 1 } }}
            >
              {carouselImagesInstagramOnly.map(({ id, image, title }) => (
                <figure className="rounded" key={id}>
                  <Image width={454} height={276} layout="responsive" src={image} alt={title} /> 
                </figure>
              ))}
            </Carousel>
          )}
          <Carousel
            grabCursor
            slidesPerView={2}
            pagination={false}
            className="overflow-visible"
            breakpoints={{ 768: { slidesPerView: 2 }, 0: { slidesPerView: 1 } }}
          >
            {carouselImages.map(({ id, url, image, title }) => (
              <figure className="rounded" key={id}>
                <Image width={454} height={276} layout="responsive" src={image} alt={title} />
              </figure>
            ))}
          </Carousel> */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio2;
