import { FC } from 'react';
import Image from 'next/image';
import IconLink from '../links/IconLink';

// ==========================================================
type TeamCard2Props = {
  name: string;
  image: string;
  linkedInUrl: string;
  designation: string;
  description: string;
};
// ==========================================================

const TeamCard2: FC<TeamCard2Props> = (props) => {
  const { name, description, designation, image, linkedInUrl } = props;

  return (
    <div className="text-center">
      {/* <div className="rounded-circle w-20 mx-auto mb-4 overflow-hidden"> */}
      <div
        className="rounded-circle w-20 mx-auto overflow-hidden  mt-2 mb-5"
        style={{
          backgroundImage: 'url(/img/photos/bg22.png)',
          backgroundSize: '210px 216px',
          width: '200px',
          height: '200px'
        }}
      >
        <Image width={500} height={500} alt="Team Member" layout="responsive" src={image} />
      </div>

      <h4 className="mb-1">{name}</h4>
      <div className="meta mb-2">{designation}</div>
      <p className="mb-2">{description}</p>

      <nav className="nav social justify-content-center text-center mb-0">
        <IconLink href={linkedInUrl} alt="LinkedIn" icon={<i className="uil uil-linkedin" />} />
        {/* <IconLink href={homeUrl} icon={<i className="uil uil-desktop" />} /> */}
      </nav>
    </div>
  );
};

export default TeamCard2;
