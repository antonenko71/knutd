// library
import { useTranslation } from 'react-i18next';

// layout
import { MainLayout } from '@settings/layouts';

// component
import { Introduction } from '@components';

const BrushesPage = () => {
  const { t } = useTranslation();

  return (
    <MainLayout
      title={t('brushes_page.name')}
      description={t('brushes_page.description')}
    >
      <Introduction brushes />
    </MainLayout>
  );
};

export default BrushesPage;
