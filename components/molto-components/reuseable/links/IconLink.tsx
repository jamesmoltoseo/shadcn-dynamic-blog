import { FC, ReactElement } from 'react';

// ==============================================================
type IconLinkProps = { href: string; alt: string, icon: ReactElement };
// ==============================================================

const IconLink: FC<IconLinkProps> = ({ href, icon, alt }) => {
  return (
    <a href={href} title={alt} target="_blank" rel="noreferrer">
      {icon}
    </a>
  );
};

export default IconLink;
