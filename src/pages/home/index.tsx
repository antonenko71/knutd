// library
import { useTranslation } from 'react-i18next';

// layout
import { MainLayout } from '@settings/layouts';

// component
import { Introduction, MakeupTypes, PrepareFace } from '@components';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <MainLayout
      title={t('home_page.name')}
      description={t('home_page.description')}
    >
      <Introduction home />
      <PrepareFace />
      <MakeupTypes />
    </MainLayout>
  );
};

export default HomePage;
