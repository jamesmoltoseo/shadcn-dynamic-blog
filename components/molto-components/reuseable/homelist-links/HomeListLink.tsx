import * as All from 'data/keywords';
// import * as All from 'data/keywords';
import NextLink from 'components/reuseable/links/NextLink';
import { HomeList } from 'data/keywords';
import Link from 'next/link';
const HomeListLink = () => {
  return 
  <NextLink title={HomeList[0].title.toLowerCase().replace(/ /g, '-')} href="/" className="btn btn-purple rounded-pill mb-2 me-1" />
   
};

export default HomeListLink;
