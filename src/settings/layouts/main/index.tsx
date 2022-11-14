// components
import { Seo, Header, Footer } from '@components';

// interfaces
import { ILayoutProps } from '@interfaces';

// styles
import * as S from './styles';

const MainLayout = (props: ILayoutProps) => {
  const { title, icon, description, children } = props;

  return (
    <>
      <Seo title={title} description={description} icon={icon} />
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </>
  );
};

export default MainLayout;
