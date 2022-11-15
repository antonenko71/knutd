// library
import { useTranslation } from 'react-i18next';

// layout
import { MainLayout } from '@settings/layouts';

// component
import { Introduction, MakeupTools } from '@components';

// assets
import { brushesTypesImg } from '@assets';

// styles
import * as S from './styles';

const BrushesPage = () => {
  const { t } = useTranslation();

  return (
    <MainLayout
      title={t('brushes_page.name')}
      description={t('brushes_page.description')}
    >
      <Introduction brushes />
      <S.MakeupToolsWrapper>
        <MakeupTools />
      </S.MakeupToolsWrapper>
      <S.ImgContainer>
        <img
          src={brushesTypesImg}
          alt={t('brushes_page.brushesTypesImg.alt')!}
          width="450px"
          height="450px"
        />
      </S.ImgContainer>
    </MainLayout>
  );
};

export default BrushesPage;
