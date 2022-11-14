// library
import { useTranslation } from 'react-i18next';

// styles
import * as S from './styles';

// interface
import { ICopyrightProps } from '@interfaces';

const currentYear = new Date().getFullYear();

const Copyright = (props: ICopyrightProps) => {
  const { fullName, city } = props;

  const { t } = useTranslation();

  return (
    <S.Copyright>
      © {currentYear} {t(fullName.lastName)} {t(fullName.firstName)}, {t(city)}.{' '}
      {t('rights')}
    </S.Copyright>
  );
};

export default Copyright;
