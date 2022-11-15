// library
import { useTranslation } from 'react-i18next';

// component
import { Container, Typography } from '@mui/material';
import { ToolsList } from '@common';

const MakeupTools = () => {
  const { t } = useTranslation();

  const toolsList: any[] = t('brushes_page.makeup_tools.tools', {
    returnObjects: true
  });

  return (
    <section>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom component="h2" align="center">
          {t('brushes_page.makeup_tools.title')}
        </Typography>
        <ToolsList tools={toolsList} />
      </Container>
    </section>
  );
};

export default MakeupTools;
