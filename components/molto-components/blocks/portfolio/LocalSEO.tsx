import { FC } from 'react';
import Carousel from 'components/reuseable/Carousel';
// -------- data -------- //
import { localSEO } from 'data/portfolio';

import * as All from 'data/keywords';
// import * as All from 'data/keywords';
import Link from 'next/link';
interface titleType { 
  initialslide: number;
}
const LocalSEO: FC<titleType> = ({ initialslide }) => {
  return (
    <div className="container-fluid">
      <Carousel
        grabCursor
        className="blog grid-view mb-1 mb-md-1"
        initialSlide={initialslide}
        breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } }}
      >
        {All.LocalSEOArrays.map(({ item, title }) => (
          <div
            style={{ cursor: 'pointer' }}
            className={`card overflow-hidden shadow-none position-relative`}
            key={item}
            title={title}
          >
            <Link 
//legacyBehavior2 passHref2
              href={
                '/' +
                All.LocalSEOArrays[item].keywords[0].url +
                '/' +
                All.LocalSEOArrays[item].keywords[0].title.toLowerCase().replace(/ /g, '-')
              }
            >
              <div className="dropdown-item">
                <figure className="w-100 overflow-hidden">
                  <img
                    alt={All.LocalSEOArrays[item].keywords[1].title}
                    src={
                      '/img/clients/' +
                      All.LocalSEOArrays[item].keywords[1].title.toLowerCase().replace(/ /g, '-') +
                      '.jpg'
                    }
                    // srcSet={`${image}@2x.jpg 2x`}
                    className="rounded lift d-block w-25"
                  />
                </figure>
                <div className={`card-body position-absolute top-0 ${All.LocalSEOArrays[item].displayText} `}>
                  <blockquote className="border-0 mb-0">
                    <div className="blockquote-details">
                      <div className="info">
                        <h4 className={`mb-0 ${All.LocalSEOArrays[item].displayTextColor} font-weight-bold`}>
                          {title}
                        </h4>
                        <p className={`mb-0 ${All.LocalSEOArrays[item].displayTextColor} desktop`}>
                          {All.LocalSEOArrays[item].category}
                        </p>
                      </div>
                    </div>
                  </blockquote>
                </div>
                {/* <span className="d-lg-none">{title}</span> */}
              </div>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default LocalSEO;
