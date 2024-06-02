import { FC } from 'react';
// -------- data -------- //
const socialLinks = [
  { id: 1, title: 'Twitter', url: 'https://twitter.com/intent/tweet?text=', icon: 'uil-twitter' },
  { id: 2, title: 'Facebook', url: 'https://www.facebook.com/sharer/sharer.php?u=', icon: 'uil-facebook-f' },
  { id: 3, title: 'Linkedin', url: 'https://www.linkedin.com/shareArticle?url=', icon: 'uil-linkedin' }
];

// ===============================================================================
type ShareButtonProps = { btnSize?: string };
// ===============================================================================

const ShareButton: FC<ShareButtonProps> = ({ btnSize = '' }) => {
  return (
    <div className="dropdown share-dropdown btn-group">
      <button
        aria-haspopup="true"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        className={`btn ${btnSize} btn-red rounded-pill btn-icon btn-icon-start dropdown-toggle mb-0 me-0`}
      >
        <i className="uil uil-share-alt" /> Share
      </button>

      <div className="dropdown-menu">
        {socialLinks.map(({ id, title, icon, url }) => (
          <a key={id} className="dropdown-item" href={`${socialLinks[id]}url `} target="__blank">
            <i className={`uil ${icon}`} />
            {title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ShareButton;
