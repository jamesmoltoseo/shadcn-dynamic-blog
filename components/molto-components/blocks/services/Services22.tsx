import { FC, Fragment } from 'react';
// -------- icons -------- //
import Bulb from 'icons/solid-mono/Bulb';
import Compare from 'icons/solid-mono/Compare';
import DeliveryBox from 'icons/solid-mono/DeliveryBox';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import { Link } from 'react-scroll';

import * as All from 'data/keywords';
interface titleType {
  title: string;
  wordCloud: any;
}
const Services22: FC<titleType> = ({ title, wordCloud }) => {
  return (
    <Fragment>
      <div className="container py-14 pt-md-14 pb-md-18">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
            <h2 className="fs-16 text-uppercase text-muted mb-3">{wordCloud.HomeList[4].title}</h2>
            <h3 className="display-3 mb-5 px-xl-10 px-xxl-15" style={{ textTransform: 'none' }}>
              <span className="underline-3 style-2 yellow text-capitalize">{wordCloud.HomeList[5].title}</span>
            </h3>
            <p className="lead fs-20 mx-auto mb-10">
              Technical issues may be preventing the website from performing optimally in search engine
              results&nbsp;pages&nbsp;(SERPs). Our {wordCloud.HomeList[5].title} begin after an initial technical
              assessment of your website.
            </p>
          </div>
        </div>

        <ul
          role="tablist"
          className="nav nav-tabs nav-tabs-bg nav-tabs-shadow-lg d-flex justify-content-between nav-justified flex-lg-row flex-column"
        >
          <li className="nav-item" role="presentation">
            <a
              role="tab"
              href="#tab2-1"
              data-bs-toggle="tab"
              aria-selected="true"
              className="nav-link d-flex flex-row active"
            >
              <div>
                <Bulb />
              </div>
              <div>
                <h4 className="mb-1">AI Keyword research</h4>
                <p>
                  Keyword research is an important part of SEO strategy, and identifies which keywords are vital for
                  your brand.
                </p>
              </div>
            </a>
          </li>

          <li className="nav-item" role="presentation">
            <a
              role="tab"
              tabIndex={-1}
              href="#tab2-2"
              data-bs-toggle="tab"
              aria-selected="false"
              className="nav-link d-flex flex-row"
            >
              <div>
                <Compare />
              </div>
              <div>
                <h4 className="mb-1">Competitor & Technical Analysis</h4>
                <p>Studying your competitors' websites and marketing strategies</p>
              </div>
            </a>
          </li>

          <li className="nav-item" role="presentation">
            <a
              role="tab"
              tabIndex={-1}
              href="#tab2-3"
              data-bs-toggle="tab"
              aria-selected="false"
              className="nav-link d-flex flex-row"
            >
              <div>
                <DeliveryBox className="icon-svg-sm solid-mono text-green me-4" />
              </div>
              <div>
                <h4 className="mb-1">Transparent Process</h4>
                <p>At Molto SEO, we believe in transparent and ethical SEO practices.</p>
              </div>
            </a>
          </li>
        </ul>

        {/* ========== tab content ========== */}
        <div className="tab-content mt-6 mt-lg-8">
          <div className="tab-pane fade active show" id="tab2-1" role="tabpanel">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-6">
                <figure>
                  {/* className="rounded shadow-lg" */}
                  <Image
                    src={`/img/${wordCloud.HomeList[2].title.replace(/ /g, '-').toLowerCase()}.png`}
                    // srcSet={`/img/${wordCloud.HomeList[2].title.replace(/ /g, '-').toLowerCase()}@2x.png 2x`}
                    alt={wordCloud.HomeList[2].title.toLowerCase()}
                  />
                </figure>
              </div>

              <List1 wordCloud={wordCloud.HomeList} title="Keyword research" heading={title} color="fuchsia" />
            </div>
          </div>

          <div className="tab-pane fade" id="tab2-2" role="tabpanel">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-6 order-lg-2">
                <figure>
                  <Image
                    src={`/img/${wordCloud.HomeList[4].title.replace(/ /g, '-').toLowerCase()}.png`}
                    // srcSet="/img/technical-seo-company@2x.png 2x"
                    alt={wordCloud.HomeList[4].title.toLowerCase()}
                  />
                </figure>
              </div>

              <List2
                wordCloud={wordCloud.HomeList}
                title="Competitor & Technical Analysis"
                heading={title}
                color="violet"
              />
            </div>
          </div>

          <div className="tab-pane fade" id="tab2-3" role="tabpanel">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-6">
                <figure>
                  <Image
                    src={`/img/${wordCloud.HomeList[3].title.replace(/ /g, '-').toLowerCase()}.png`}
                    // srcSet="/img/technical-seo-company@2x.png 2x"
                    alt={wordCloud.HomeList[3].title.toLowerCase()}
                  />
                </figure>
              </div>

              <List3 wordCloud={wordCloud.HomeList} title="Transparent Process" heading={title} color="green" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

type ListProps = { color: 'fuchsia' | 'violet' | 'green'; title: string; heading: string; wordCloud: any };
const List1 = ({ color, title, heading, wordCloud }: ListProps) => {
  return (
    <div className="col-lg-6">
      <h2 className="mb-3">{title}</h2>
      <p>
        Keyword research plays a crucial role in developing a successful {wordCloud[0].title} strategy as it helps in
        identifying the most important keywords for your brand. By analyzing search patterns and user behavior, we can
        determine the specific keywords and phrases that your target audience is using to search for your products or
        services.
      </p>
      <p>
        With rapid advancements in technology, AI-powered tools have revolutionized the keyword research process,
        allowing us to gather and analyze data at an unprecedented scale and speed.
      </p>
      <p>
        By leveraging the power of AI,{' '}
        <a href={'/' + All.SEOAudit[0].url + '/' + All.SEOAudit[0].title.toLowerCase().replace(/ /g, '-')}>Molto SEO</a>{' '}
        can identify and target highly relevant keywords that are more likely to drive traffic to your website and
        generate leads. This not only improves the efficiency and accuracy of the keyword research process, but also
        helps in achieving better results and maximizing the return on investment for your SEO efforts.
      </p>

      {/* <ul className={`icon-list bullet-bg bullet-soft-${color}`}>
        <li>
          <i className="uil uil-check" /> Aenean eu leo quam. Pellentesque ornare.
        </li>
        <li>
          <i className="uil uil-check" /> Nullam quis risus eget urna mollis ornare.
        </li>
        <li>
          <i className="uil uil-check" /> Donec id elit non mi porta gravida at eget.
        </li>
      </ul> */}

      {/* <NextLink title="Learn More" href="/#contact" className={`btn btn-${color} mt-2`} /> */}
      <Link
        //legacyBehavior2 passHref2
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className="btn btn-sm btn-primary rounded-pill"
      >
        Learn more
      </Link>
      {/* } */}
    </div>
  );
};
const List2 = ({ color, title, heading }: ListProps) => {
  return (
    <div className="col-lg-6">
      <h2 className="mb-3">{title}</h2>
      <p>
        <strong>
          A thorough analysis of your competitors' keywords, content, and backlink profiles is key to staying ahead of
          the competition.
        </strong>{' '}
        Analyzing competitor keywords, content, and backlink profiles creates lots of high return marketing
        opportunities.
      </p>
      <p>
        <strong>Technical analysis of your website's structure, code and page speed</strong> identifies any technical
        issues that may be impacting your search engine rankings.{' '}
      </p>
      <p>
        By identifying and fixing these issues, you can improve the user experience and ensure that your website is
        optimized for search engines.
      </p>
      {/* Through in-depth analysis of your competitors' keywords, content, and backlink profiles, we can identify opportunities to improve your own website and boost your search engine rankings. 

In addition to competitor analysis, we also perform a technical analysis of your website's structure, code, and page speed. 

At Molto SEO, we believe that a combination of competitor analysis and technical analysis is essential to achieving online success. Contact us today to learn more about our services and how we can help you stay ahead of the competition. */}
      {/* <div className="text-center ">
        <h4>Priorities:</h4>
        <ul className="icon-list bullet-primary list-unstyled ps-2">
          <li className="p-0">rewrite page titles and descriptions</li>
          <li className="p-0">resolve slow page loading times</li> <li className="p-0">remove duplicate content</li>{' '}
          <li className="p-0">reject inaccessible code</li>
          <li className="p-0">repair broken links</li>
          <li className="p-0">relatable content</li>
          <li className="p-0">ROI</li>
        </ul>{' '}
      </div> */}
      {/* <p>
        The audit should also include an analysis of the website\’s structure and technical aspects of its content
        management system (CMS).
      </p> */}
      <p>
        Both competitor and technical analysis are important components of SEO research, as they can help you identify
        areas for improvement and develop a targeted SEO strategy that will drive traffic and increase your online
        visibility.
        {/* At Molto SEO, we conduct thorough competitor and technical analysis as part of our
        SEO services, ensuring that our clients have a comprehensive understanding of their online presence and are
        well-positioned for success in their industry. */}
      </p>{' '}
      <Link
        //legacyBehavior2 passHref2
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className="btn btn-sm btn-primary rounded-pill"
      >
        Learn more
      </Link>
    </div>
  );
};
const List3 = ({ color, title, heading }: ListProps) => {
  return (
    <div className="col-lg-6">
      <h2 className="mb-3">{title}</h2>
      <p>
        We provide our clients with a detailed SEO process that outlines the specific tasks and strategies we will use
        to improve their website's search engine rankings.
      </p>
      <p>
        <strong>Our process includes:</strong>
      </p>
      <ul>
        <li>
          SEO audit: Comprehensive audit of the client's website to identify any technical issues, on-page SEO issues,
          and opportunities for improvement.
        </li>
        <li>
          Keyword research: Research and identify the most relevant and profitable keywords for the client's business
          and target audience.
        </li>
        <li>
          On-page optimization: Optimize the client's website pages for their targeted keywords by improving the
          content, meta tags, and other on-page elements.
        </li>
        <li>
          Off-page optimization: Build high-quality backlinks to the client's website to improve its authority and
          visibility in search engine results pages.
        </li>
        <li>
          Reporting and tracking: Provide regular reports to the client to track the progress of our SEO efforts and
          make any necessary adjustments to our strategy.
        </li>
        <li>
          Molto SEO ensures that all clients have access to the analytics and the work that we have completed. You can
          see exactly what tasks have been completed and the results that have been achieved. We only take the final
          payment when the client is satisfied and can see proof of tasks completed.
        </li>
        {/* <li>
          Our transparent SEO process ensures that our clients are fully informed and involved in their SEO strategy,
          and can trust that their investment in our services is delivering real and measurable results.
        </li> */}
      </ul>
      {/* <ul className={`icon-list bullet-bg bullet-soft-${color}`}>
        <li>
          <i className="uil uil-check" /> Aenean eu leo quam. Pellentesque ornare.
        </li>
        <li>
          <i className="uil uil-check" /> Nullam quis risus eget urna mollis ornare.
        </li>
        <li>
          <i className="uil uil-check" /> Donec id elit non mi porta gravida at eget.
        </li>
      </ul> */}

      <Link
        //legacyBehavior2 passHref2
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className="btn btn-sm btn-primary rounded-pill"
      >
        Learn more
      </Link>
    </div>
  );
};

export default Services22;
