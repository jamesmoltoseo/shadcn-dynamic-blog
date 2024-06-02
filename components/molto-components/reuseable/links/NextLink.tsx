import Link from 'next/link';
import { FC, ReactElement } from 'react';

// ==============================================================
type NextLinkProps = {
  href: string;
  alt?: string;
  className?: string;
  title: string | ReactElement;
};
// ==============================================================

const NextLink: FC<NextLinkProps> = (props) => {
  const { href, className, title, alt } = props;

  return (
    <Link 
  // legacyBehavior2 passHref2 
href={href}>
      <a className={className} title={alt}>{title}</a>
    </Link>
  );
};

export default NextLink;
