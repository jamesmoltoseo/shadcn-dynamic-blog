import { FC } from 'react';
import Image from 'next/image';
import Carousel from 'components/reuseable/Carousel';
// -------- data -------- //
import { testimonialList1 } from 'data/testimonial-list';

const Testimonial: FC = () => {
  return (
    <div className="container-fluid px-md-6">
      <Carousel
        grabCursor
        className="blog grid-view mb-1 mb-md-1"
        breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } }}
      >
        {testimonialList1.map((item,i) => (
          <figure className="rounded" key={item.id}>
            <Image layout="responsive" width={900} height={650} src={item.image} alt="project" />
            <div className="card-body">
              <blockquote className="icon mb-0">
                {/* <p>“{review}”</p> */}
                <div className="blockquote-details">
                  <div className="info p-0">
                    <h5 className="mb-1">{item.name}</h5>
                    <p className="mb-0">{item.designation}</p>
                  </div>
                </div>
              </blockquote>
            </div>
          </figure>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;
