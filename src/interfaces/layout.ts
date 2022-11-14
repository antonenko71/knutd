import { ReactNode } from 'react';

// interfaces
import ISeoProps from './seo';

interface ILayoutProps extends ISeoProps {
  children: ReactNode;
}

export default ILayoutProps;
