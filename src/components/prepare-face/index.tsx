// library
import { useTranslation } from 'react-i18next';

// component
import { AccordionList } from '@common';
import { Container, Typography } from '@mui/material';

// styles
import * as S from './styles';

const PrepareFace = () => {
  const { t } = useTranslation();

  const accordionList: any[] = t('home_page.prepare_face.accordion', {
    returnObjects: true
  });

  return (
    <S.Section>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom component="h2" align="center">
          {t('home_page.prepare_face.title')}
        </Typography>
        <AccordionList accordionList={accordionList} />
      </Container>
    </S.Section>
  );
};

export default PrepareFace;
