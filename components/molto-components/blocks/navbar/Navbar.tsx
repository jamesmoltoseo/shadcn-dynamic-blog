import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, Fragment, ReactElement, useRef } from 'react';

import LinkType from 'types/link';
import { Link as ScrollLink } from 'react-scroll';
// -------- custom hook -------- //
import useSticky from 'hooks/useSticky';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
import ListItemLink from 'components/reuseable/links/ListItemLink';
// -------- partial header component -------- //

import * as All from 'data/keywords';
import NavItemsPortfolio from 'components/reuseable/links/NavItemsPortfolio';
import NavItemsServices from 'components/reuseable/links/NavItemsServices';
import NavItemsWithHomeLink from 'components/reuseable/links/NavItemsWithHomeLink';

// import {
//   demos,
//   seoConsultancy,
//   seoOther,
//   webDesign,
//   blogsNavigation,
//   blocksNavigation,
//   projectsNavigation,
//   documentionNavigation
// } from 'data/navigation';

// ===================================================================
type NavbarProps = {
  isHome?: boolean;
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

const Navbar: FC<NavbarProps> = ({ isHome, ...props }) => {
  // const isHomePage = window.location.pathname === '/';

  // const [data, setData] = useState(data);
  const { navClassName, info, search, social, language, button, cart, fancy, navOtherClass, stickyBox, logoAlt } =
    props;

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
      <div className="navbar-brand w-100 cursor-pointer" style={{ marginTop: 0 }}>
        <Link
          // in future we will have to deal with Nextlinks that dont allow easy links...
          // legacyBehavior2 passHref2
          href="/"
          className="d-flex justify-content-center flex-row align-items-center"
        >
          <div>
            <img className="logo" alt="Molto SEO" width="30" height="23" src={`/img/${logo}.png`} />
            <span className="logo-text">Molto SEO</span>
          </div>
        </Link>
      </div>

      <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
        <div className="offcanvas-header d-lg-none">
          <h3 className="text-white fs-30 mb-0 text-lowercase">molto</h3>
          <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="btn-close btn-close-white" />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav">
            {/* <li className="nav-item dropdown">
              <DropdownToggleLink title="Home" />

              <ul className="dropdown-menu mega-menu-dark"> */}
            {isHome && (
              <>
                <li className="nav-item dropdown">
                  <span className="nav-link">
                    <ScrollLink
                      activeClass="active"
                      to="point-process"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                      {/* Here, dropdown-item is used erroneously: it's just to make sure it has same padding as real dropdowns... */}
                      <div className="dropdown-item">10 Point Process</div>
                    </ScrollLink>
                  </span>
                </li> 
                <li className="nav-item dropdown">
                  <span className="nav-link">
                    <ScrollLink activeClass="active" to="localSEO" spy={true} smooth={true} offset={0} duration={500}>
                      {/* Here, dropdown-item is used erroneously: it's just to make sure it has same padding as real dropdowns... */}
                      <div className="dropdown-item">Local SEO</div>
                    </ScrollLink>
                  </span>
                </li>
                <li className="nav-item dropdown">
                  <span className="nav-link ">
                    <ScrollLink activeClass="active" to="ai-seo" spy={true} smooth={true} offset={0} duration={500}>
                      {/* Here, dropdown-item is used erroneously: it's just to make sure it has same padding as real dropdowns... */}
                      <div className="dropdown-item">AI SEO</div>
                    </ScrollLink>
                  </span>
                </li>
              </>
            )}
            {!isHome && (
              <>
                <NavItemsWithHomeLink />
              </>
            )}
            {/* </ul>
            </li> */}
            {/* <NavItemsServices placement="header" active="no" /> */}
            {/* ===================== Seo audit nav item  ===================== */}
            <li className="nav-item dropdown" title="SEO Audit">
              <span className="nav-link">
                <Link
                  // legacyBehavior2 passHref2
                  href="/london/seo-audit-london"
                >
                  <div className="dropdown-item">SEO Audit</div>
                </Link>
              </span>
            </li>{' '}
            {/* ===================== Seo audit nav item  ===================== */}
            {/* <li className="nav-item dropdown" title="SEO Audit">
              <span className="nav-link">
                <Link
                  // legacyBehavior2 passHref2
                  href="/seo-glossary/what-is-seo"
                >
                  <div className="dropdown-item">What is SEO?</div>
                </Link>
              </span>
            </li> */}
            {/* ===================== portfolio nav item ===================== */}
            <NavItemsPortfolio placement="header" active="no" />
            <li className="nav-item dropdown mobile">
              <span className="nav-link">
                <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500}>
                  Contact
                </ScrollLink>
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
              <SocialLinks />
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

          {/* ============= social icons link =============
          {social && <Social />} */}

          {/* ============= humburger button for small device ============= */}
          <li className="nav-item d-lg-none">
            <button
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas-nav"
              aria-label="menu"
              className="hamburger offcanvas-nav-btn"
            >
              <span />
            </button>
          </li>
        </ul>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
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
    </Fragment>
  );
};

// set deafult Props
Navbar.defaultProps = {
  cart: false,
  info: false,
  social: false,
  search: false,
  language: false,
  stickyBox: true,
  navOtherClass: 'navbar-other w-100 d-flex ms-auto',
  navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light'
};

export default Navbar;
