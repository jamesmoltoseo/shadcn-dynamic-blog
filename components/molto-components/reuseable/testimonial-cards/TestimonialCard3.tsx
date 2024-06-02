import { FC } from 'react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

// =================================================
type TestimonialCard3Props = {
  name: string;
  alt: string;
  image: string;
  review: string;
  shadow?: boolean;
  designation: string;
  hideRating?: boolean;
};
// =================================================

const TestimonialCard3: FC<TestimonialCard3Props> = (props) => {
  const { name, image, review, designation, alt } = props;

  return (
    <div className={`card shadow-none`}>
      <figure className="w-100 overflow-hidden mb-5">
        {/* <Image width={100} height={29} layout="responsive" src={image} alt={alt} /> */}
        <img width={100} height={29} src={image} alt={alt} style={{ background: 'transparent' }} />
      </figure>
      <div className="card-body">
        <blockquote className="icon mb-0">
          <p>“{review}”</p>
          <div className="blockquote-details">
            <div className="info">
              <h5 className="mb-0">{name}</h5>
              <p className="mb-0">{designation}</p>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  );
};

export default TestimonialCard3;
