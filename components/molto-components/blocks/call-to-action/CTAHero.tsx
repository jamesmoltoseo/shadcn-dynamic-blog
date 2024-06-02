import { FC } from 'react'; 
import Form from 'utils/formType';
import { slideInDownAnimate } from 'utils/animation';

// import Typewriter from 'typewriter-effect';
interface titleType {
  title: string;
}
const CTAHero: FC<titleType> = ({title}) => {
  return (
    <section className="wrapper text-center">
      <h2 className="fs-16 text-uppercase text-muted mb-3">{title}</h2>
      <h3 className="display-3 mb-4" style={slideInDownAnimate('600ms')}>
        Test your 
        {/* <Typewriter
          key={0}
          onInit={(typewriter) => {
            typewriter
              .typeString('Test your')
              .callFunction(() => {
                // console.log('String typed out!');
              })
              .pauseFor(2500)
              //   .deleteAll()
              .callFunction(() => {
                // console.log('All strings were deleted');
              })
              .start();
          }}
        /> */}
        &nbsp;
        <span className="text-fuchsia text-nowrap">
          Website SEO
          {/* <Typewriter
            key={1}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1250)
                .typeString('website SEO')
                .callFunction(() => {
                  // console.log('String typed out!');
                })
                .pauseFor(2500)
                //   .deleteAll()
                .callFunction(() => {
                  // console.log('All strings were deleted');
                })
                .start();
            }}
          /> */}
        </span>
        {/* <Typewriter
          key={2}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(2250)
              .typeString('...')
              .callFunction(() => {
                // console.log('String typed out!');
              })
              .pauseFor(2500)
              //   .deleteAll()
              .callFunction(() => {
                // console.log('All strings were deleted');
              })
              .start();
          }}
        /> */}
      </h3>
      <Form />  
   
    </section>
  );
};

export default CTAHero;
