import { FC } from 'react';
import Image from 'next/image';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
// -------- data -------- //
import footerNav, { helps } from 'data/footer';

const Footer9: FC = () => {
  return (
    <footer className="bg-dark text-inverse">
      <div className="container py-13 py-md-15">
        <div className="row gy-6 gy-lg-0">
          <div className="col-lg-4">
            <div className="widget">
              <img className="mb-4" src="/img/logo-light.png" srcSet="/img/logo-light@2x.png 2x" alt="" />

              <p className="mb-4">
                © 2022 Molto SEO London. <br></br>
                All rights reserved.
              </p>

              <SocialLinks className="nav social social-white" />
            </div>
          </div>

          <div className="col-md-4 col-lg-2 offset-lg-2">
            <div className="widget">
              <h4 className="widget-title mb-3 text-white">Need Help?</h4>
              <ul className="list-unstyled  mb-0">
                {helps.map(({ title, url }) => (
                  <li key={title}>
                    <NextLink title={title} href={url} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Learn More</h4>
              <ul className="list-unstyled  mb-0">
                {footerNav.map(({ title, url }) => (
                  <li key={title}>
                    <NextLink title={title} href={url} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="widget">
              <h4 className="widget-title mb-3 text-white">Get in Touch</h4>
              <address>Address <br />London</address>
              <NextLink title="team@moltoseo.co.uk" href="mailto:#" />
              <br /> +44 (0) 7480 603 345
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer9;
