// library
import { useTranslation } from 'react-i18next';

// layout
import { MainLayout } from '@settings/layouts';

// component
import { Introduction } from '@components';

const CorrectionPage = () => {
  const { t } = useTranslation();

  return (
    <MainLayout
      title={t('correction_page.name')}
      description={t('correction_page.description')}
    >
      <Introduction correction />
    </MainLayout>
  );
};

export default CorrectionPage;
