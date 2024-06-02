import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';
// import {
//   All,
//   keywordList2,
//   keywordList3,
//   keywordList4,
//   keywordList5
// } from 'data/keywords';

// ==================================================
type KeywordLinksProps = {
  alt: string;
  title: string;
  url: string;
  num: number;
  type?: 'plain' | 'shadow-lg';
};
// ==================================================

const KeywordLinks: FC<KeywordLinksProps> = (props) => {
  const { alt, title, url, type, num = 1 } = props;

  return (
    <>
      {/* if (num === 1)
      {keywordList1.map((item, i) => (
        <NextLink key={i} alt={alt} title={title} href={url} className={type} />
      ))}
      else if (num === 2)
      {keywordList2.map((item, i) => (
        <NextLink key={i} alt={alt} title={title} href={url} className={type} />
      ))}
      else if (num === 3)
      {keywordList3.map((item, i) => (
        <NextLink key={i} alt={alt} title={title} href={url} className={type} />
      ))}
      else if (num === 4)
      {keywordList4.map((item, i) => (
        <NextLink key={i} alt={alt} title={title} href={url} className={type} />
      ))}
      else if (num === 5)
      {keywordList5.map((item, i) => (
        <NextLink key={i} alt={alt} title={title} href={url} className={type} />
      ))} */}
    </>
  );
};

export default KeywordLinks;
