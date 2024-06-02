import { FC, FormEvent, Fragment, useState } from 'react';
import { NetlifyForm, Honeypot } from 'react-netlify-forms';

const PerformanceAuditForm = ({ domain, products }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');  
 
  return (
    <Fragment>
      <h2 className="mb-3 text-start">Free consultation</h2>
      <p className="lead mb-6 text-start">Fill in your email below.</p>
      {/* <NetlifyForm name="Contact" action="/thanks" honeypotName="bot-field">
        {({ handleChange, success, error }) => (
          <>
            <Honeypot />
            {success && <p>Thanks for contacting us!</p>}
            {error && <p>Sorry, we could not reach our servers. Please try again later.</p>}
            <input className="d-none" name="bot-field" />
            <div className="form-floating mb-4">
              <input
                type="email"
                // value="Your email"
                id="email"
                // placeholder="Your Email"
                className="form-control text-start"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-floating mb-4">
              <input
                type="text"
                // value="Your Domain"
                id="domain"
                // placeholder="Your Domain"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="domain">Domain</label>
            </div>

            <button type="submit" className="btn btn-primary rounded-pill btn-login w-100 mb-2">
              Request report
            </button>
          </>
        )}
      </NetlifyForm> */}
      <form
        name="Consultation"
        method="post"
        data-netlify="true"
        action={`/thanks`}
        
        // data-netlify-honeypot="bot-field"
      >
        {/* You still need to add the hidden input with the form name to your JSX form */}
        <input type="hidden" name="form-name" value="Consultation" />
        <p className="d-none">
          <label>
            <input name="bot-field" />
          </label>
        </p>
        <div className="form-floating mb-4">
          <input
            type="email"
            // value="Your email"
            name="email"
            id="email"
            // placeholder="Your Email"
            className="form-control text-start"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-floating mb-4">
          <input
            type="text"
            name="domain"
            id="domain"
            // placeholder="Your Domain"
            className="form-control"
            // onChange={(e) => setEmail(e.target.value)}
            value={domain}
          />
          <label htmlFor="domain">Domain</label>
        </div>
        <div className="form-floating mb-4">
          <input
            type="text"
            name="phone"
            id="phone"
            // placeholder="Your Domain"
            className="form-control"
            onChange={(e) => setPhone(e.target.value)}
        
          />
          <label htmlFor="phone">Phone</label>
        </div>
       
        <button type="submit" className="btn btn-primary rounded-pill btn-login w-100 mb-2">
          Book
        </button>
      </form>
      {/* <form name="report" method="POST" action="/succcess" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} className="text-start mb-3">
        <input className="d-none" name="bot-field" />
        <div className="form-floating mb-4">
          <input 
            type="email"
            // value="Your email"
            id="email"
            // placeholder="Your Email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-floating mb-4">
          <input
            type="text"
            // value="Your Domain"
            id="domain"
            // placeholder="Your Domain"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="domain">Domain</label>
        </div>

        <button type="submit" className="btn btn-primary rounded-pill btn-login w-100 mb-2">
          Request report
        </button>
      </form> */}
    </Fragment>
  );
};

export default PerformanceAuditForm;
