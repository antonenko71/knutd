// library
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

// interfaces
import { ISeoProps } from '@interfaces';

const Seo = (props: ISeoProps) => {
  const { title, description, icon } = props;
  const { t } = useTranslation();

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        {t('brand_name')} | {title}
      </title>
      <meta name="description" content={description} />
      <link rel="canonical" href={icon} />
    </Helmet>
  );
};

export default Seo;
