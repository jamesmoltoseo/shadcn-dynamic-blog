import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';

// =======================================================
type ProjectDetailsContentProps = {
  title: string;
  body1: string;
  body2: string;
  portfolio: any;
  details: any;
  titleClass?: string;
  contentRowClass?: string;
};
// =======================================================

const ProjectDetailsContent: FC<ProjectDetailsContentProps> = ({
  title,
  body1,
  body2,
  details,
  portfolio,
  contentRowClass = 'row gx-0',
  titleClass = 'display-6 mb-4'
}) => {
  return (
    <div className="row">
      <div className="col-lg-12 offset-lg-0">
        <h2 className={titleClass}>{title}</h2>

        <div className={`overflow-hidden ${contentRowClass}`}>
          <div className="col-md-9 text-justify">
            {body1}
            {body2}
          </div>

          <div className="col-md-2 ms-auto">
            <img
              width={300}
              height={300}
              src={`/img/clients/${portfolio[0].title.toLowerCase().replace(/ /g, '-')}.jpg`}
              alt={portfolio[0].title}
              style={{ background: 'transparent' }}
            />
            <ul className="list-unstyled">
              <li>
                <h5 className="mb-1">Categories</h5>
                <p>{details.categories}</p>
              </li>

              <li>
                <h5 className="mb-1">Client Name</h5>
                <p>{details.pageName}</p>
              </li>
            </ul>

            <NextLink title="See Project" href="#" className="more hover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsContent;
