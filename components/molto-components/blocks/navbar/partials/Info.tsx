import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
import { FC, Fragment, ReactElement } from 'react';

// ========================================================
type InfoProps = {
  title?: string;
  phone?: string;
  description?: string;
  address?: string | ReactElement;
};
// ========================================================

const Info: FC<InfoProps> = (props) => {
  const { title, description, address, phone } = props;

  const otherPages = [
    { title: 'Our Story', url: '#' },
    { title: 'Terms of Use', url: '#' },
    { title: 'Privacy Policy', url: '#' },
    { title: 'Contact Us', url: '#' }
  ];

  return (
    <div className="offcanvas offcanvas-end text-inverse" id="offcanvas-info" data-bs-scroll="true">
      <div className="offcanvas-header">
        <h3 className="text-white fs-30 mb-0">{title}</h3>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>

      <div className="offcanvas-body pb-6">
        <div className="widget mb-8">
          <p>{description}</p>
        </div>

        <div className="widget mb-8">
          <h4 className="widget-title text-white mb-3">Contact Info</h4>
          <address>{address}</address>
          <NextLink
            title="team@moltoseo.co.uk"
            className="link-inverse"
            href="mailto:team@moltoseo.co.uk"
          />
          <br />
          <NextLink href="tel:07480603345" title={phone!} />
        </div>

        <div className="widget mb-8">
          <h4 className="widget-title text-white mb-3">Learn More</h4>
          <ul className="list-unstyled">
            {otherPages.map((item) => (
              <li key={item.title}>
                <NextLink href="#" title={item.title} />
              </li>
            ))}
          </ul>
        </div>

        <div className="widget">
          <h4 className="widget-title text-white mb-3">Follow Us</h4>
          <SocialLinks className="nav social social-white" />
        </div>
      </div>
    </div>
  );
};

// set default props
Info.defaultProps = {
  title: 'Molto',
  phone: '+44 (0) 7480 603 345',
  description: `Molto SEO is a multipurpose HTML5 template with various layouts which will be a great solution for your business.`,
  address: (
    <Fragment>
      Address <br />London
    </Fragment>
  )
};

export default Info;
