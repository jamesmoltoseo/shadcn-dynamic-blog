import { FC } from 'react';
import DropdownToggleLink from './DropdownToggleLink';
import NextLink from 'components/reuseable/links/NextLink';
import * as All from 'data/keywords';
// =========================================================
type NavItemsServicesProps = {
  placement: string;
  active: string;
};
// =========================================================

const NavItemsServices: FC<NavItemsServicesProps> = (props, { active }) => {
  return (
    <>
      {/* ===================== portfolio nav item ===================== */}
      <li className="nav-item dropdown">
        <DropdownToggleLink title="Services" />

        <ul className="dropdown-menu mega-menu-dark">
          <li className="nav-item dropdown">
            <span className="nav-link navlinkmtlg"> 
              <NextLink
                title="CRO"
                href={'/' + All.CRO[0].url + '/' + All.CRO[0].title.toLowerCase().replace(/ /g, '-')}
              />
            </span>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link navlinkmtlg">
              <NextLink
                title="Ecommerce SEO"
                href={'' + All.EcommerceSEO[0].url + '/' + All.EcommerceSEO[0].title.toLowerCase().replace(/ /g, '-')}
              />
            </span>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link navlinkmtlg">
              <NextLink
                title="Google Analytics"
                href={
                  '/' + All.GoogleAnalytics[0].url + '/' + All.GoogleAnalytics[0].title.toLowerCase().replace(/ /g, '-')
                }
              />
            </span>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link navlinkmtlg">
              <NextLink
                title="SEO Audit"
                href={'/' + All.SEOAudit[0].url + '/' + All.SEOAudit[0].title.toLowerCase().replace(/ /g, '-')}
              />
            </span>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link navlinkmtlg">
              <NextLink
                title="Pricing"
                href={'' + All.SEOPricing[0].url + '/' + All.SEOPricing[0].title.toLowerCase().replace(/ /g, '-')}
              />
            </span>
          </li>
        </ul>
      </li>
    </>
  );
};

export default NavItemsServices;
