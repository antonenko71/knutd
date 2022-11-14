// library
import { useTranslation } from 'react-i18next';

// component
import { Container, Typography } from '@mui/material';
import MakeupRules from '@common/makeup-rules';

// assets
import {
  homeBackground,
  contouringBackground,
  brushesBackground
} from '@assets';

// styles
import * as S from './styles';
import { AccordionList } from '@common';

const Introduction = (props: {
  home?: boolean;
  correction?: boolean;
  brushes?: boolean;
}) => {
  const { home, correction, brushes } = props;
  const { t } = useTranslation();

  const makeupRules: any[] = t('home_page.makeup_rules', {
    returnObjects: true
  });
  const correctionAccordion: any[] = t(
    'correction_page.introduction.accordion',
    {
      returnObjects: true
    }
  );
  const subTitleList: any[] = t('brushes_page.sub_title.list', {
    returnObjects: true
  });

  const homeBg = home && homeBackground;
  const correctionBg = correction && contouringBackground;
  const brushesBg = brushes && brushesBackground;

  return (
    <S.HomeSection
      homeBg={homeBg}
      correctionBg={correctionBg}
      brushesBg={brushesBg}
    >
      <Container sx={{ maxWidth: 'lg' }}>
        <S.Content correction={correction}>
          {home && (
            <Typography variant="h1" gutterBottom component="h1" align="center">
              {t('home_page.title')}
            </Typography>
          )}
          {correction && (
            <Typography variant="h1" gutterBottom component="h1" align="center">
              {t('correction_page.title')}
            </Typography>
          )}
          {brushes && (
            <Typography variant="h1" gutterBottom component="h1" align="center">
              {t('brushes_page.title')}
            </Typography>
          )}
          <Typography variant="subtitle1" gutterBottom component="div">
            {home && <MakeupRules rules={makeupRules} />}
            {correction && (
              <AccordionList accordionList={correctionAccordion} />
            )}
            {brushes && (
              <>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                  align="center"
                >
                  {t('brushes_page.sub_title.title')}
                </Typography>
                <ul>
                  {subTitleList?.map((item: string) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </Typography>
        </S.Content>
      </Container>
    </S.HomeSection>
  );
};

export default Introduction;
