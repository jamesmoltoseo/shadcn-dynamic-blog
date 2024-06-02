import { FC } from 'react';
import Image from 'next/image';
// import { useSpring, animated } from '@react-spring/web';
import { ProcessList2 } from 'components/reuseable/process-list';
// -------- data -------- //
import { processList3 } from 'data/process';

const Process2: FC = () => {
  // const props1 = useSpring({ from: { marginTop: -100, opacity: 0 }, to: { marginTop: 0, opacity: 1 }, delay: 1500,config: { mass: 1, tension: 150, friction: 20}, });
  // const props2 = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 1900 });

  return (
    <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center mb-14 mb-md-17 mb-lg-19">
      <div className="col-md-8 col-lg-6 position-relative">
        {/* <animated.div style={{ opacity: props1.opacity, marginTop: props1.marginTop }}> */}

          <div
            className="shape bg-line red rounded-circle rellax w-18 h-18"
            style={{ top: '-2.2rem', left: '-2.4rem' }}
          />

          <div
            className="shape rounded bg-soft-primary rellax d-md-block"
            style={{ width: '85%', height: '90%', right: '-1.5rem', bottom: '-1.8rem' }}
          />

          <figure className="rounded">
            <Image width={575} height={550} layout="responsive" src="/img/photos/about9.jpg" alt="How work" />
          </figure>
        {/* </animated.div> */}
      </div>

      <div className="col-lg-5 col-xl-4 offset-lg-1">
        {/* <animated.div style={{ opacity: props2.opacity }}> */}
          <h2 className="display-4 mb-3">How It Works?</h2>
          <p className="lead fs-lg mb-6">So here are three working steps why our valued customers choose us.</p>

          {processList3.map((item) => (
            <ProcessList2 {...item} key={item.no} className="icon btn btn-circle btn-primary pe-none me-5" />
          ))}
        {/* </animated.div> */}
      </div>
    </div>
  );
};

export default Process2;
