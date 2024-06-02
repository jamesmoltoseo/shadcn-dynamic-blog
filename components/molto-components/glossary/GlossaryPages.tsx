import { Fragment, useState, useEffect } from 'react';
import { scroller } from 'react-scroll';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import GlossaryNav from './GlossaryNav';
import SEO from 'components/common/SEO';
import useTooltip from 'hooks/useTooltip';
import ContactFooterCombo from 'components/reuseable/ContactFooterCombo';
import VideoHero from 'components/glossary/VideoHero';



import FetchArticleData from 'utils/FetchArticleData';

const ArticlePage = dynamic(() => import('components/glossary/index'));

interface GlossaryItem {
  title: string;
}

interface GlossaryPagesProps {
  glossary: GlossaryItem[];
  glossaryKey: string;
}

interface ArticleData {
  title: string;
  data?: any;
  error?: boolean;
}

interface ArticlePageProps {
  articleDataList: ArticleData[];
  glossary: GlossaryItem[];
}

const GlossaryPages: React.FC<GlossaryPagesProps> = ({ glossary, glossaryKey }) => {
  const Glossary = glossary;
  const [articleDataList, setArticleDataList] = useState<ArticleData[]>([]);

  const details = {
    pageName: Glossary[0].title,
    categories: 'glossary',
    description: Glossary[0].title,
    parentDirectories: ''
  };

  useTooltip();
  const router = useRouter();

  //does this work??
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            scroller.scrollTo(hash.substring(1), {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart'
              // offset: -200
            });
          }
        }, 100);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    // Function to update state based on screen width
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Fragment>
      <SEO
        title={`${Glossary[0].title} - ${details.pageName}`}
        description={details.description}
        tag={details.categories}
        urlPT={``}
        urlENPT={``}
        url={`${Glossary[0].title.toLowerCase().replace(/ /g, '-')}`}
      />
      <main className="content-wrapper mb-0">
        <div className="video-hero glossary wrapper pt-8 overflow-hidden h-md-auto  w-full">
          <div className="video-hero-grid">
            <div className="w-full position-relative left-0">
              {isSmallScreen && (
                <>
                  <div
                    id="offcanvas-glossary-nav"
                    style={{ background: 'black' }}
                    className="offcanvas offcanvas-glossary offcanvas-start"
                  >
                    <div className="offcanvas-body pt-15">
                      <GlossaryNav parentItem={''} glossaryKey={glossaryKey} />
                    </div>
                  </div>
                </>
              )}
              {/* Hamburger button for off-canvas glossary navigation */}
              <div
                style={{
                  display: 'flex',
                  padding: '4px 0 4px 0',
                  border: 'solid 1px #5eb9f0',
                  borderRadius: 3,
                  flexDirection: 'row',
                  zIndex: 9,
                  position: 'relative'
                }}
                className="nav-item glossary-menu position-fixed d-md-none ms-2 left-0 bg-black z-3"
              >
                <button
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas-glossary-nav" // Use unique ID for off-canvas glossary navigation
                  className="hamburger offcanvas-nav-btn cursor-pointer me-1"
                  style={{ color: '#5eb9f0' }} // Set the color to white
                >
                  <span />
                </button>
                {/* <div className="glossary-text" style={{ color: '#5eb9f0'}}></div> */}
              </div>
              {!isSmallScreen && (
                <div className="position-fixed">
                  <GlossaryNav parentItem={''} glossaryKey={glossaryKey} />
                </div>
              )}
            </div>
            <div className="" style={{ clipPath: 'none !important' }}>
              <div className="w-full top-10 right-0">
                <div className="container px-8">
                  <div className="row">
                    <div className="col-12">
                      <VideoHero glossary={Glossary[0].title} />
                      <FetchArticleData glossary={glossary}>
                        {(articleDataList) => <ArticlePage  pageName={details.pageName} articleDataList={articleDataList} glossary={glossary} />}
                      </FetchArticleData>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ContactFooterCombo location="london" />
    </Fragment>
  );
};

export default GlossaryPages;
