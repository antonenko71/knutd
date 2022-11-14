// library
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// data
import { NAVIGATION_LINKS } from '@data';

// styles
import * as S from './styles';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <S.List>
        {NAVIGATION_LINKS?.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{t(link.lngKey)}</Link>
          </li>
        ))}
      </S.List>
    </nav>
  );
};

export default Navigation;
