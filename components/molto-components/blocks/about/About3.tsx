import { FC } from 'react';
import Image from 'next/image';
// import { useSpring, animated } from '@react-spring/web';
import AccordionList from 'components/common/AccordionList';

const About3: FC = () => {
  // const props1 = useSpring({
  //   from: { marginTop: -100, opacity: 0 },
  //   to: { marginTop: 0, opacity: 1 },
  //   delay: 1500,
  //   config: { mass: 1, tension: 150, friction: 20 }
  // });
  // const props2 = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 1900 });

  return (
    <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center">
      <div className="col-md-8 col-lg-6 offset-lg-1 order-lg-2 position-relative">
        {/* <animated.div style={{ opacity: props2.opacity }}> */}
          <div
            className="shape rounded-circle bg-line primary rellax w-18 h-18"
            style={{ top: '-2rem', right: '-1.9rem' }}
          />

          <div
            className="shape rounded bg-soft-primary rellax d-md-block"
            style={{ width: '85%', height: '90%', left: '-1.5rem', bottom: '-1.8rem' }}
          />

          <figure className="rounded">
            <Image width={575} height={550} layout="responsive" src="/img/photos/about9.jpg" alt="About" />
          </figure>
        {/* </animated.div> */}
      </div>

      <div className="col-lg-5">
        {/* <animated.div style={{ opacity: props1.opacity, marginTop: props1.marginTop }}> */}
          <h2 className="fs-16 text-uppercase text-line text-primary mb-3">Why Choose Us?</h2>
          <h3 className="display-4 mb-7">A few reasons why our valued customers choose us.</h3>
          <AccordionList />
        {/* </animated.div> */}
      </div>
    </div>
  );
};

export default About3;
