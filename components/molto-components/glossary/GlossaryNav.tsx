import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Accordion from 'components/reuseable/accordion';
import NextLink from 'components/reuseable/links/NextLink';
import * as keywordsGlossary from 'data/keywords-glossary';
import { renderToString } from 'react-dom/server';

// Define the type for each item in the glossary arrays
interface GlossaryItem {
  title: string;
}

// Define the type for the glossary object
interface Glossary {
  [key: string]: GlossaryItem[];
}

interface GlossaryNavProps {
  parentItem: string;
  glossaryKey: string;
}

const TextSplitter = ({ text }: { text: string }) => {
  // Make an exception for "NegativeSEO Types" and "TechnicalSEO"
  if (text === 'NegativeSEOTypes') {
    return <span>Negative SEO Types</span>;
  }

  if (text === 'TechnicalSEO') {
    return <span>Technical SEO</span>;
  }

  // Split the text into words based on space, underscore, or camel case
  const words = text.split(/[\s_]|(?=[A-Z][a-z])/);

  // Capitalize the first letter of each word and join them with a space
  const formattedText = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return <span>{formattedText}</span>;
};

const GlossaryNav: React.FC<GlossaryNavProps> = ({ parentItem }) => {
  const router = useRouter();
  const currentPathWithoutHash = router.asPath.split('#')[0];
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState<boolean>(false);

  function createUrlFromTitle(title: string): string {
    if (!title) return '';
    return title.replace(/\s+/g, '-').replace(/\?/g, '').replace(/[()]/g, '').toLowerCase();
  }

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsOffcanvasOpen(false);
    }
  }, []);
  const flattenKeywordsGroup2 = keywordsGlossary.keywordsGroup2.flat(); // Flatten the keywordsGroup2 array

  // Manually construct the glossary object
  const glossary: Glossary = {
    ...keywordsGlossary,
    keywordsGroup2: flattenKeywordsGroup2
  };
  // Generate the child accordions for each category
  const categoryAccordions = Object.entries(glossary)
    .slice(0, -1)
    .map(([category, items], index) => {
      const itemUrl = `/seo-glossary/${createUrlFromTitle(items[0].title)}`;
      const shouldExpand = currentPathWithoutHash === itemUrl;

      return (
        // Inside the Accordion component, render the TextSplitter component inside the heading prop
        <Accordion
          id={`accordion-${index}`}
          key={index - 100}
          no={index - 100}
          subNav={true}
          expand={shouldExpand}
          body={
            <ul className="p-0 m-0">
              {items.map((item, itemIndex) => (
                <li key={itemIndex} className="p-1 d-block fs-12 rounded">
                  <NextLink
                    href={`${itemUrl}/#${createUrlFromTitle(item.title)}`}
                    title={item.title}
                    className="hover"
                  />
                </li>
              ))}
            </ul>
          }
          body2=""
          heading={<TextSplitter text={category} />} // Pass TextSplitter component as a prop
        />
      );
    });

  return (
    <div
      style={{ height: '90vh' }}
      className={`glossary-component overflow-scroll ${isOffcanvasOpen ? 'offcanvas-open' : ''}`}
    >
      <div className="pb-10">
        {!isOffcanvasOpen && (
          <div className="pb-0 mt-n10">
            <button className="offcanvas-toggle-btn d-lg-none" onClick={() => setIsOffcanvasOpen(!isOffcanvasOpen)}>
              <span className="hamburger" />
            </button>
          </div>
        )}
        <div className="offcanvas-content pt-10">
          {/* Parent Accordion that contains all the category accordions */}
          <Accordion
            key={100} // Add a unique key prop here
            id="parent-accordion"
            heading={<span>{parentItem}</span>} // This can be adjusted to your preference
            expand={true} // You might want to control this based on specific logic
            body={<>{categoryAccordions}</>}
            body2=""
            no={2}
            subNav={false}
          />
        </div>
      </div>
    </div>
  );
};

export default GlossaryNav;
