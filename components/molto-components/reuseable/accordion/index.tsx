import { FC } from 'react';

import { useRouter } from 'next/router';
// ==================================================
interface AccordionProps {
  id: string;
  key: number;
  no: number;
  subNav: boolean;
  expand: boolean;
  body: JSX.Element;
  body2: string;
  heading: JSX.Element; // Ensure heading accepts a JSX element
}

// ==================================================

const Accordion: React.FC<AccordionProps> = ({ id, key, no, subNav, expand, body, body2, heading }) => {
   const { pathname } = useRouter();

  // Generate unique IDs for the accordion elements
  const headerId = `heading-${no}`;
  const collapseId = `collapse-${no}`;

  return (
    <div className={`card  accordion-item`} style={subNav ? { width: '250px' } : {}}>
      <div className="card-header p-0 ps-3 bg-black" id={headerId} style={{ borderBottom: 'solid 1px #666', borderRadius: 0 }}>
        <h3
          id={id}
          data-bs-toggle="collapse"
          aria-controls={collapseId}
          data-bs-target={`#${collapseId}`}
          aria-expanded={expand ? 'true' : 'false'}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', border: 'none', color: '#fff', fontWeight: 'normal' }}
          className={`pb-0 pt-1 ps-1 my-1 accordion-button ${expand ? '' : 'collapsed'} ${subNav ? 'fs-14' : ''}`}
        >
          {pathname === '/' && (
            <span className="icon btn btn-circle btn-primary pe-none me-2">
              <span className="number fs-18 p-0">{no}</span>
            </span>
          )}
          {heading}
        </h3>
      </div>

      <div
        id={collapseId}
        aria-labelledby={headerId}
        className={`accordion-collapse pt-0 collapse ${expand ? 'show' : ''}`}
        style={{ width: '100%', height: '100%' }}
      >
        <div className="card-body w-full h-full h-100 w-100 p-0 pt-2 px-4 pb-3" style={{ color: '#9fa5af', width: '100%', height: '100%', background: '#000' }}>
          {body}
        </div>
      </div>
    </div>
  );
};



export default Accordion;
