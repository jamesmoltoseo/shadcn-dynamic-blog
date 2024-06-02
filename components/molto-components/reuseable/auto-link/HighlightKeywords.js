import React from 'react';
import NextLink from 'components/reuseable/links/NextLink'; // Adjust the import path as necessary
import createUrlFromTitle from 'utils/createUrlFromTitle'; // Adjust the import path as necessary
import { keywordsWithParentFirstTitle } from 'data/keywords-glossary'; // Ensure this data structure is correct

// Function to escape special characters in regex pattern
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const HighlightKeywords = ({ children, pageName }) => {
  const blogFolder = '/seo-glossary/';
  const linkCounts = {}; // Track the number of links created for each keyword

  const content = React.Children.toArray(children)
    .map((child) => (typeof child === 'string' ? child : ''))
    .join('');

  const regexPattern = keywordsWithParentFirstTitle.map((item) => `${escapeRegExp(item.title)}s?`).join('|');
  const regex = new RegExp(`(${regexPattern})`, 'gi');

  let linkIndex = 0; // Track the index of the current link

  const highlightedContent = content.split(regex).map((part, index) => {
    const keywordObj = keywordsWithParentFirstTitle.find((kw) =>
      new RegExp(`${escapeRegExp(kw.title)}s?`, 'i').test(part)
    );

    if (keywordObj && pageName) {
      const isCurrentPagePrimaryKeyword = keywordObj.baseHref.toLowerCase() === pageName.toLowerCase();
      const baseHref = createUrlFromTitle(keywordObj.baseHref);
      const displayText = keywordObj.title === part ? part : part.slice(0, -1);
      const href = `${blogFolder}${createUrlFromTitle(keywordObj.baseHref)}#${createUrlFromTitle(keywordObj.title)}`;

      // Check if the current keyword has fewer than 2 links
      if (!isCurrentPagePrimaryKeyword && (linkCounts[keywordObj.title] || 0) < 2) {
        // Increment the link count for the current keyword
        linkCounts[keywordObj.title] = (linkCounts[keywordObj.title] || 0) + 1;

        // Render the link
        return (
          <NextLink key={linkIndex++} title={part} href={href} className="text-yellow">
            {displayText}
          </NextLink> 
        ); 
      }
    }

    return <span key={index}>{part}</span>;
  });

  return <>{highlightedContent}</>;
};

export default HighlightKeywords;
