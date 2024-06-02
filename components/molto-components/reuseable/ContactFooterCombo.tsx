import dynamic from 'next/dynamic'; 
// -------- custom component -------- //
import { Footer1 } from 'components/blocks/footer'; 
import * as All from 'data/keywords';
import useLogVisitor from 'hooks/useLogVisitor.js';
import { FC } from 'react';
 
const ContactInfoDI = dynamic(() => import('components/blocks/contact/ContactInfo'), { ssr: false }) 
type CFCProps = { 
  location: string;    
} 
const ContactFooterCombo: FC<CFCProps> = ({location}) => {
  useLogVisitor();

  return (
    <>
      <div className="wrapper bg-light">
        {/* ========== contact info section ========== */}
        <ContactInfoDI
          location={location}
          title="Drop Us a Line"
          body="Reach out to us from our contact form and we will get back to you shortly."
          email={All.SiteIdentity[0].email}
          phone={All.SiteIdentity[0].phone}
        />

        {/* ========== footer section ========== */}
        <Footer1
          address={[
            <>
              {All.SiteIdentity[0].address1},<br></br> {All.SiteIdentity[0].address2},<br></br>{' '}
              {All.SiteIdentity[0].address3}
            </>
          ]}
          email={All.SiteIdentity[0].email}
          phone={All.SiteIdentity[0].phone}
        />
      </div>
    </>
  );
};

export default ContactFooterCombo;
