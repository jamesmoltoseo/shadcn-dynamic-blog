import { FC } from 'react';
import PerformanceAuditForm from 'components/elements/forms/PerformanceAuditForm';
 
const PerformanceAudit  = ({domain, products}) => {
  return (
    <div
      role="dialog"
      tabIndex={-1}
      aria-modal="true"
      id="performance-audit"
      className="modal fade"  
      style={{ display: 'none' }}
    >
      <div className="modal-dialog modal-dialog-centered modal-sm">
        <div className="modal-content text-start">
          <div className="modal-body">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            <PerformanceAuditForm domain={domain} products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceAudit;
