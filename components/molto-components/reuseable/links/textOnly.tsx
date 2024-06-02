import Link from 'next/link';
import { FC, ReactElement } from 'react';

// ==============================================================
type TitleProps = { 
  title: string;
};
// ==============================================================

const TextOnly: FC<TitleProps> = (props) => {
  const { title } = props;

  return (
  <>{title}</>
  );
};

export default TextOnly;
