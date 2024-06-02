import { FC, ReactElement } from 'react';
import NextLink from './NextLink';
import Link from 'next/link';
import * as All from 'data/keywords';
import DropdownToggleLink from './DropdownToggleLink';
// =========================================================
type PortfolioItemsProps = {
  placement: string;
};
// =========================================================

const PortfolioItems: FC<PortfolioItemsProps> = ({ placement }) => {
  let localLength = All.LocalSEOArrays.length;
  let internationalLength = All.InternationalSEOArrays.length;
  {
    placement === 'footer' ? (localLength = 5) : (localLength = All.LocalSEOArrays.length);
  }
  {
    placement === 'footer' ? (internationalLength = 1) : (internationalLength = All.LocalSEOArrays.length);
  }

  return (
    <>
      {/* {All.LocalSEOArrays.slice(0,5).map(({ item, title }) => ( */}
      {All.LocalSEOArrays.slice(0, localLength).map(({ item, title }) => (
        <li className="col" key={item} style={{ cursor: 'pointer' }} title={title}>
          <Link 
//legacyBehavior2 passHref2
            href={
              '/' +
              All.LocalSEOArrays[item].keywords[0].url +
              '/' +
              All.LocalSEOArrays[item].keywords[0].title.toLowerCase().replace(/ /g, '-')
            }
          >
            <div className="dropdown-item">
              <Image
                alt={All.LocalSEOArrays[item].keywords[1].title}
                src={
                  '/img/clients/' + All.LocalSEOArrays[item].keywords[1].title.toLowerCase().replace(/ /g, '-') + '.jpg'
                }
                // srcSet={`${image}@2x.jpg 2x`}
                className="rounded lift d-block w-25 mw-100"
              />
              <span className="d-lg-none fs-12">{title}</span>
            </div>
          </Link>
        </li>
      ))}

      {/* {All.InternationalSEOArrays.slice(0,1).map(({ item, title }) => ( */}
      {All.InternationalSEOArrays.slice(0, internationalLength).map(({ item, title }) => (
        <li className="col" key={item} title={title}>
          <Link 
//legacyBehavior2 passHref2
            href={
              '/' +
              All.InternationalSEOArrays[item].keywords[0].url +
              '/' +
              All.InternationalSEOArrays[item].keywords[0].title.toLowerCase().replace(/ /g, '-')
            }
          >
            <div className="dropdown-item">
              <Image
                alt={All.InternationalSEOArrays[item].keywords[1].title}
                src={
                  '/img/clients/' +
                  All.InternationalSEOArrays[item].keywords[1].title.toLowerCase().replace(/ /g, '-') +
                  '.jpg'
                }
                // srcSet={`${image}@2x.jpg 2x`}
                className="rounded lift d-block w-25 mw-100"
              />
              <span className="d-lg-none fs-12">{title}</span>
            </div>
          </Link>
        </li>
      ))}
    </>
  );
};

export default PortfolioItems;
