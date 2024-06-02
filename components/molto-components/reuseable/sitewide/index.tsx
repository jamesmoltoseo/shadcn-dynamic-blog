import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import Clipboard from 'react-clipboard.js';

import SEO from 'components/common/SEO';
import FigureImage from 'components/reuseable/FigureImage';
import Navbar from 'components/blocks/navbar/Navbar';
import NextLink from 'components/reuseable/links/NextLink';
import Link from 'next/link';
import { MegaList } from 'data/keywords';
const details = {
  pageName: 'New Keywords',
  categories: '',
  description: '',
  parentDirectories: 'blog'
};

import * as All from 'data/keywords';

const mainKeys = Object.keys(All);
const SiteWideLinks: NextPage = () => {
  return (
    <ol  className="d-flex" style={{height: 350, overflowY: "scroll", flexWrap: "wrap"}}>
      {MegaList.map((item, index) => (
        <li key={index} className={MegaList[index][0].pageName === '' ? 'order-1' : 'order-0'} style={{marginRight: 5}}>
          
          <figure className="d-inline itooltip itooltip-light hover-scale rounded" title={MegaList[index][0].pageName}>
            <div className="btn btn-primary rounded-3" style={{ height: 40, padding: 0, marginBottom: 10 }}>
              <Clipboard
                data-clipboard-text={
                  '<NextLink title={MegaList[' +
                  index +
                  '][0].title} href={"/" + MegaList[' +
                  index +
                  '][0].url + "/" + MegaList[' +
                  index +
                  "][0].title.toLowerCase().replace(/ /g, '-')} />"
                }
              >
                {MegaList[index][0].title}
              </Clipboard>
            </div>
            {/* <div>{All.SEOAudit[2].url}</div> */}
          </figure>{' '}
        </li>
      ))}
    </ol>
  );
};

export default SiteWideLinks;
