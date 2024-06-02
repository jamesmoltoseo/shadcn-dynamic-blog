import React from 'react';
import Accordion from 'components/reuseable/accordion';
import HighlightKeywords from 'components/reuseable/auto-link/HighlightKeywords';

const ArticlePage = ({ articleDataList, glossary, pageName }) => {
  if (articleDataList.length === 0) {
    return null;
  }
  console.log('articleDataList', articleDataList);

  return (
    <section>
      <div className="pe-5">
        {articleDataList.map((articleData, articleIndex) => (
          <div key={articleIndex}>
            {/* {articleData.data &&
              articleData.data.Sections?.filter((section) => section.sectionTitle !== 'Conclusion').map(
                (section, sectionIndex) => (
                  <div key={sectionIndex}>
                    <p className="text-2xl">{section.content}</p>
                  </div>
                )
              )} */}

            {articleData.error ? (
              <p>Error loading content.</p>
            ) : (
              <>
                {articleData.data.Sections.filter((section) => section.sectionTitle !== 'Conclusion').map(
                  (section, sectionIndex) => (
                    <section
                      id={articleData.data['master-keyword'].toLowerCase().replace(/\s+/g, '-')}
                      key={sectionIndex}
                      className="mb-15"
                    >
                      <h2
                        className="pb-2 text-2xl text-white mb-4"
                        style={{ maxWidth: '100%', background: 'none', whiteSpace: 'pre-wrap' }}
                      >
                        {section.sectionTitle}
                      </h2>

                      {section.subSections.map((subSection, subIndex) => (
                        <Accordion
                          key={`article-${articleIndex}-${sectionIndex}-${subIndex}`}
                          no={parseInt(`${articleIndex}${sectionIndex}${subIndex + 1}`)}
                          heading={subSection.subSectionTitle}
                          body={<HighlightKeywords pageName={pageName}>{subSection.content}</HighlightKeywords>}
                          body2=""
                          expand={true}
                          type="plain"
                        />
                      ))}
                    </section>
                  )
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticlePage;

export async function getServerSideProps(context) {
  // Extract the glossary key from the URL
  const { glossaryKey } = context.params;

  // Fetch the glossary data based on the key, or define logic to retrieve it
  const glossary = await fetchGlossaryData(glossaryKey); // Implement fetchGlossaryData based on your application's logic

  // Fetch articles based on the glossary data
  const articleDataList = await fetchArticlesBasedOnGlossary(glossary); // Implement this based on your fetching logic

  return {
    props: {
      articleDataList
    }
  };
}
