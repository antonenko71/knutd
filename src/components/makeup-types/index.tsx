// library
import { useTranslation } from 'react-i18next';

// component
import { MyCarousel } from '@common';
import { Container, Typography } from '@mui/material';

// styles
import * as S from './styles';

const MakeupTypes = () => {
  const { t } = useTranslation();

  const typesArray: any[] = t('home_page.makeup_types.carousel', {
    returnObjects: true
  });

  return (
    <section>
      <Container
        maxWidth="lg"
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography variant="h2" gutterBottom component="h2" align="center">
          {t('home_page.makeup_types.title')}
        </Typography>
        <S.CarouselContainer>
          <MyCarousel list={typesArray} />
        </S.CarouselContainer>
      </Container>
    </section>
  );
};

export default MakeupTypes;
