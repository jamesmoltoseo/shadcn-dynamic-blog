import { FC, ReactElement } from 'react';
import NextLink from './NextLink';
import Link from 'next/link';
import * as All from 'data/keywords';
import DropdownToggleLink from './DropdownToggleLink';
import NavItemsPortfolio from './NavItemsPortfolio';
// =========================================================
type NavItemsWithHomeLinkProps = {
  // footer: boolean;
};
// =========================================================

const NavItemsWithHomeLink: FC<NavItemsWithHomeLinkProps> = (props) => {
  return (
    <>
      {/* ===================== 10 point program nav item  ===================== */}
      <li className="nav-item dropdown" title="10 Point Process">
        <span className="nav-link">
          <Link
            // legacyBehavior2 passHref2
            href="/#point-process"
          >
            <div className="dropdown-item">10 Point Process</div>
          </Link>
        </span>
      </li>
      {/* ===================== SEO Audit nav item  ===================== */}
      {/* <li className="nav-item dropdown" title="SEO Audit">
        <span className="nav-link">
          <Link 
  // legacyBehavior2 passHref2 
href="/#seo-audit">
            <div className="dropdown-item">SEO Audit</div>
          </Link>
        </span>
      </li> */}
      {/* ===================== SEO Audit nav item  ===================== */}
      <li className="nav-item dropdown" title="Local SEO">
        <span className="nav-link">
          <Link
            // legacyBehavior2 passHref2
            href="/#localSEO"
          >
            <div className="dropdown-item">Local SEO</div>
          </Link>
        </span>
      </li>
      {/* ===================== AI SEO nav item  ===================== */}
      <li className="nav-item dropdown">
        <span className="nav-link">
          <Link
            // legacyBehavior2 passHref2
            href="/#ai-seo"
          >
            <div className="dropdown-item">AI SEO</div>
          </Link>
        </span>
      </li>
    </>
  );
};

export default NavItemsWithHomeLink;
