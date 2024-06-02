import React, { FC } from 'react';
import Clipboard from 'react-clipboard.js';
import MegaList from '../../data/keywords';
type KeywordMegaListProps = {
  data: { title: string; url: string; pageName: string }[];
};
const KeywordMegaList: FC<KeywordMegaListProps> = ({ data }) => {
    const getIndexFromTitle = (title: string) => {
      return MegaList.findIndex((item) => item.title === title);
    };
  
    return (
      <ol  style={{ display: 'grid', height: 500, overflow: 'hidden', overflowY: 'scroll' }}>
        {data.map((obj, index) => {
          const itemIndex = getIndexFromTitle(obj.title);
  
          if (itemIndex === -1) {
            return null;
          }
  
          const item = MegaList[itemIndex];
  
          return (
            <li key={index} className={obj.pageName === '' ? 'order-1' : 'order-0'}>
              <figure className="d-inline itooltip itooltip-light hover-scale rounded" title={obj.pageName}>
                <div className="btn btn-primary rounded-3" style={{ height: 40, padding: 0, marginBottom: 10 }}>
                  <Clipboard
                    data-clipboard-text={`<NextLink title={${item.title}} href={${item.url} + "/" + ${item.title}.toLowerCase().replace(/ /g, '-')}>{${item.title}}</NextLink>`}
                  >
                     {/* {item.title} ({JSON.stringify(item)}) */}
                     {`${item.title} (${itemIndex})`}
                  </Clipboard>
                </div>
              </figure>
            </li>
          );
        })}
      </ol>
    );
  };
  
export default KeywordMegaList;
