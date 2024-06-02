import { FC } from 'react';
import Link from 'next/link';
import ContactForm from 'components/common/ContactForm';
import { SiteIdentity } from 'data/keywords';
interface titleType {
  email: string;
  phone: string;
  body: string;
  title: any; 
  location: string; 
}
interface SiteIdentityType {
  address1: string;
  address2: string;
  address3: string;
  email: string;
  phone: string; 
}

const ContactInfo: FC<titleType> = ({ email, phone, title, body, location }) => {
  const siteIdentity = location === 'london' ? SiteIdentity[0] : SiteIdentity[1];

  return (
    <>
      <div className="container py-17 mt-20">
        <div className="row mb-14 mb-md-16">
          <div className="col-xl-10 mx-auto mt-n19">
            <div className="card">
              <div className="row gx-0">
                <div className="col-lg-6 align-self-stretch">
                  <div className="map map-full rounded-top rounded-lg-start">
                    {location === 'Brighton' || location === 'brighton' ? (
                      <iframe
                        allowFullScreen
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.346889236608!2d-0.1669406845048586!3d50.82473826820598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585409e2e3867%3A0x6f674cd4845f1edc!2s29%20Adelaide%20Cres%2C%20Hove%2C%20Brighton%20and%20Hove%2C%20Hove%2C%20UK!5e0!3m2!1sen!2spt!4v1680796696705!5m2!1sen!2spt"
                        width="600"
                        height="450"
                        style={{ width: '100%', height: '100%', border: 0 }}
                        loading="lazy"
                        title="Brighton SEO Agency MAP"
                        // referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                    ) : (
                      <iframe
                        allowFullScreen
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.136847571435!2d-0.09874969999999997!3d51.529049799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b596469cd35%3A0x76074fde79d659!2s9%20Moreland%20St%2C%20London%20EC1V%208BE%2C%20UK!5e0!3m2!1sen!2spt!4v1678679802281!5m2!1sen!2spt"
                        style={{ width: '100%', height: '100%', border: 0 }}
                        title="London SEO Agency MAP"
                      />
                    )}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="p-10 py-12">
                    <div className="d-flex flex-row">
                      <div>
                        <div className="icon text-primary fs-28 me-4 mt-n1">
                          <i className="uil uil-location-pin-alt" />
                        </div>
                      </div>
                      <div className="align-self-start justify-content-start">
                        <h5 className="mb-1">Address</h5>
                        <address>
                          <>
                            {siteIdentity.address1}
                            <br></br>
                            {siteIdentity.address2}
                            <br></br>
                            {siteIdentity.address3}
                          </>
                        </address>
                      </div>
                    </div>

                    <div className="d-flex flex-row">
                      <div>
                        <div className="icon text-primary fs-28 me-4 mt-n1">
                          <i className="uil uil-phone-volume" />
                        </div>
                      </div>
                      <div>
                        <h5 className="mb-1">Phone</h5>
                        <p>
                          <Link
                            // legacyBehavior2 passHref2
                            href={`tel:${phone}`}
                          >
                            {phone}
                          </Link>
                        </p>
                      </div>
                    </div>

                    <div className="d-flex flex-row">
                      <div>
                        <div className="icon text-primary fs-28 me-4 mt-n1">
                          <i className="uil uil-envelope" />
                        </div>
                      </div>
                      <div>
                        <h5 className="mb-1">E-mail</h5>
                        <p className="mb-0">
                          <a href={`mailto:${email}`} className="link-body">
                            {email}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ========== contact form section ========== */}
        <div className="row" id="contact">
          <div className="col-lg-10 col-xl-8 mx-auto pt-md-11 pt-lg-14">
            <h2 className="display-4 mb-3 text-center">{title}</h2>
            <p className="lead text-center mb-10 mx-auto">{body}</p>

            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
