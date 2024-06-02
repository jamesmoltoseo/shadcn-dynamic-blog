import Link from 'next/link';

import { FC, Fragment, ReactElement, useRef } from 'react';
import LinkType from 'types/link';
 
// -------- custom hook -------- //
import useSticky from 'hooks/useSticky';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink'; 
import ListItemLink from 'components/reuseable/links/ListItemLink'; 
import NavItemsWithHomeLink from 'components/reuseable/links/NavItemsWithHomeLink';
import NavItemsPortfolio from 'components/reuseable/links/NavItemsPortfolio';

// -------- partial header component -------- //
import Social from './partials/Social';
import Signin from './partials/Signin';
import Signup from './partials/Signup';

import * as All from 'data/keywords';
import NavItemsServices from 'components/reuseable/links/NavItemsServices';
 
// ===================================================================
type NavbarProps = {
  info?: boolean;
  cart?: boolean;
  fancy?: boolean;
  logoAlt?: string;
  search?: boolean;
  social?: boolean;
  language?: boolean;
  stickyBox?: boolean;
  navClassName?: string;
  button?: ReactElement;
  navOtherClass?: string;
  footer?: boolean;
};
// ===================================================================
var Data = {
  stuff: 'content',
  List: [
    {
      group: [{ name: 'item 1' }, { name: 'item 2' }]
    },
    {
      group: [{ name: 'item 11' }, { name: 'item 12' }, { name: 'item 13' }, { name: 'item 14' }]
    }
  ]
};

const Navbar5: FC<NavbarProps> = (props) => {
  const { navClassName, info, search, button, cart, fancy, navOtherClass, stickyBox, logoAlt, footer } = props;

  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically render the logo
  const logo = sticky ? 'logo/technical-seo-agency' : logoAlt ?? 'logo/technical-seo-agency';
  // dynamically added navbar classname
  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

  // render inner nav item links
  const renderLinks = (links: LinkType[]) => {
    return links.map((item) => (
      <ListItemLink href={item.url} title={item.title} linkClassName="dropdown-item" key={item.id} />
    ));
  };

  // all main header contents
  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-100 cursor-pointer">
        <Link 
  // legacyBehavior2 passHref2 
href="/" className="d-flex justify-content-center flex-row align-items-center">
          <div>
            <img
              className="logo"
              alt={All.HomeList[0].title.toLowerCase().replace(/ /g, '-')}
              width="30"
              height="23"
              src={`/img/${logo}.png`}
            />
            <span className="logo-text">
            Molto SEO
            </span>
          </div>
        </Link>
      </div>

      <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
        <div className="offcanvas-header d-lg-none">
          <h3 className="text-white fs-30 mb-0 text-lowercase ">molto</h3>
          <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="btn-close btn-close-white" />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav active">
            <NavItemsWithHomeLink />
            <NavItemsServices placement="header" active="no" />
           
            <NavItemsPortfolio placement="header" active="active" />
            <li className="nav-item dropdown mobile">
              <span className="nav-link" title="Contact">
                <Link 
  // legacyBehavior2 passHref2 
href="/#contact">
                  <div className="dropdown-item">Contact</div>
                </Link>
              </span>
            </li>
          </ul>
          {/* ============= show contact info in the small device sidebar ============= */}
          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink title="team@moltoseo.co.uk" className="link-inverse" href="mailto:team@moltoseo.co.uk" />
              <br />
              <NextLink href="tel:07480603345" title="+44 (0) 7480 603 345" />
              <br />
            </div>
          </div>
        </div>
      </div>

      {/* ============= right side header content ============= */}
      <div className={navOtherClass}>
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {/* ============= language dropdwown ============= */}
          {/* {language && <Language />} */}

          {/* ============= info button ============= */}
          {info && (
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-info">
                <i className="uil uil-info-circle" />
              </a>
            </li>
          )}

          {/* ============= search icon button ============= */}
          {search && (
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-search">
                <i className="uil uil-search" />
              </a>
            </li>
          )}

          {/* ============= contact button ============= */}
          {button && <li className="nav-item d-none d-md-block">{button}</li>}

          {/* ============= shopping cart button ============= */}
          {cart && (
            <li className="nav-item">
              <a
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas-cart"
                className="nav-link position-relative d-flex flex-row align-items-center"
              >
                <i className="uil uil-shopping-cart" />
                <span className="badge badge-cart bg-primary">3</span>
              </a>
            </li>
          )}

          {/* ============= social icons link ============= */}
          {/* {social && <Social />} */}

          {/* ============= humburger button for small device ============= */}
          <li className="nav-item d-lg-none">
            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas-nav" className="hamburger offcanvas-nav-btn">
              <span />
            </button>
          </li>
        </ul>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      <div className={footer ? fixedClassName : navClassName}>
        {stickyBox && <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />}

        <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
          {fancy ? (
            <div className="container">
              <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
                {headerContent}
              </div>
            </div>
          ) : (
            <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
          )}
        </nav>

        {/* ============= signin modal ============= */}
        {/* <Signin /> */}

        {/* ============= signup modal ============= */}
        {/* <Signup /> */}

        {/* ============= info sidebar ============= */}
        {/* {info && <Info />} */}

        {/* ============= show search box ============= */}
        {/* {search && <Search />} */}

        {/* ============= cart sidebar ============= */}
        {/* {cart && <MiniCart />} */}
      </div>
    </Fragment>
  );
};

// set deafult Props
Navbar5.defaultProps = {
  cart: false,
  info: false,
  social: false,
  search: false,
  language: false,
  stickyBox: true,
  navOtherClass: 'navbar-other w-100 d-flex ms-auto',
  navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light'
};

export default Navbar5;
