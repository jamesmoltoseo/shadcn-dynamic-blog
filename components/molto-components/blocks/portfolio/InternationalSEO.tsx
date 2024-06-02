import { FC } from 'react';
import Image from 'next/image';
import Carousel from 'components/reuseable/Carousel';
// -------- data -------- //
import * as All from 'data/keywords';
// import * as All from 'data/keywords';
import NextLink from 'components/reuseable/links/NextLink';
import Link from 'next/link';

const InternationalSEO = () => {
  return (
    <div className="container-fluid">
      <Carousel
        grabCursor
        className="blog grid-view mb-1 mb-md-1"
        breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 992: { slidesPerView: 2 } }}
      >
        {All.InternationalSEOArrays.map(({ item, title }) => (
          <div
            style={{ cursor: 'pointer' }}
            className={`card overflow-hidden shadow-none position-relative`}
            key={item}
            title={title}
          >
            <Link 
//legacyBehavior2 passHref2
              href={
                All.InternationalSEOArrays[item].keywords[0].url +
                '/' +
                All.InternationalSEOArrays[item].keywords[0].title.toLowerCase().replace(/ /g, '-')
              }
            >
              <div>
                {/* <a title={title} className="dropdown-item"> */}
                <figure className="w-100 overflow-hidden">
                  <Image
                    alt={All.InternationalSEOArrays[item].keywords[1].title}
                    src={
                      '/img/clients/' +
                      All.InternationalSEOArrays[item].keywords[1].title.toLowerCase().replace(/ /g, '-') +
                      '.jpg'
                    }
                    // srcSet={`${image}@2x.jpg 2x`}
                    className="d-block w-100"
                  />
                </figure>
                <div className={`card-body`}>
                  <blockquote className="border-0 mb-0">
                    <div className="blockquote-details">
                      <div className="info">
                        <h4 className={`mb-0 ${All.InternationalSEOArrays[item].displayTextColor} font-weight-bold`}>
                          {title}
                        </h4>
                        <p className={`mb-0 ${All.InternationalSEOArrays[item].displayTextColor} desktop`}>
                          {All.InternationalSEOArrays[item].category}
                        </p>
                      </div>
                    </div>
                  </blockquote>
                </div>
                <span className="d-lg-none">{title}</span>
                {/* </a> */}
              </div>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default InternationalSEO;
