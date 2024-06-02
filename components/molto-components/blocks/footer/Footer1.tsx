import { FC } from 'react';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import Link from 'next/link';
// -------- data -------- // s
import NavItemsWithHomeLink from 'components/reuseable/links/NavItemsWithHomeLink';
import PortfolioItems from 'components/reuseable/links/PortfolioItems';
import NavItemsServices from 'components/reuseable/links/NavItemsServices';

interface titleType {
  email: string;
  address: any;
  phone: string;
}
const Footer1: FC<titleType> = ({ email, phone, address }) => {
  return (
    <footer className="bg-navy text-inverse position-relative" style={{zIndex:999}}>
      <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
        <div className="d-lg-flex flex-row align-items-lg-center">
          <h3 className="display-4 mb-6 mb-lg-0 pe-lg-20 pe-xl-22 pe-xxl-25 text-white">
            Join Our Sucessful Clients By Using Our Services to grow your business.
          </h3>

          {/* <NextLink href="#" title="Try It For Free" className="btn btn-primary rounded-pill mb-0 text-nowrap" /> */}
        </div>

        <hr className="mt-11 mb-12" />

        <div className="row gy-6 gy-lg-0">
          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <img
                className="mb-4"
                src="/img/logo/molto-seo-white.png"
                srcSet="/img/logo/molto-seo-white.png 2x"
                alt=""
              />

              <p className="mb-4">
                © 2022 Molto SEO London. <br></br>
                All rights reserved.
              </p>

              {/* <SocialLinks className="nav social social-white" /> */}
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Get in Touch</h4>
              <address className="pe-xl-15 pe-xxl-17">{address}</address>
              <NextLink title={"E: team [at] moltoseo.co.uk"} href={`mailto:#${email}`} />
              <br /> <Link 
  // legacyBehavior2 passHref2 
href={`tel:${phone}`}>{phone}</Link>
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Menu</h4>
              <ul className="list-unstyled mb-0">
                <NavItemsWithHomeLink />
                <NavItemsServices placement="header" active="no" />

                <li title="Terms and Conditions">
                  <Link 
  // legacyBehavior2 passHref2 
href="/terms">Terms and Conditions</Link>
                </li>
 
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3 tablet">Recent SEO</h4>
              <ul className="mb-0 nav-footer row row-cols-1 row-cols-lg-6 gx-0 gx-lg-2 gy-lg-2 list-unstyled">
                <PortfolioItems placement="footer" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
