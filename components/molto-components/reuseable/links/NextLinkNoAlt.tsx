import Link from 'next/link';
import { FC, ReactElement } from 'react';

// ==============================================================
type NextLinkProps = {
  href: string;
  alt?: string;
  className?: string;
  title: string;
};
// ==============================================================

const NextLinkNoAlt: FC<NextLinkProps> = (props) => {
  const { href, className, title } = props;

  return (
    <Link 
  // legacyBehavior2 passHref2 
href={href}>
      <a className={className} title={title}>{title}</a>
    </Link>
  );
};

export default NextLinkNoAlt;
