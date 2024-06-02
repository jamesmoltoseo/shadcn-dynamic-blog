import { FC } from 'react'; 
import DropdownToggleLink from './DropdownToggleLink';
import PortfolioItems from 'components/reuseable/links/PortfolioItems';
// =========================================================
type NavItemsPortfolioProps = {
  placement: string;
  active: string;
};
// =========================================================
  
const NavItemsPortfolio: FC<NavItemsPortfolioProps> = (props,{active}) => {
  return (
    <>
      {/* ===================== portfolio nav item ===================== */}
      {/* <li className="nav-item dropdown dropdown-mega">
        <DropdownToggleLink title="Latest Clients" className={`dropdown-item dropdown-toggle portfolio-links`} />

        <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
          <li className="mega-menu-content mega-menu-scroll">
            <ul className="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-2 gy-lg-2 list-unstyled">
              <PortfolioItems placement="header" />
            </ul>
          </li>
        </ul>
      </li> */}
    </>
  );
};

export default NavItemsPortfolio;
