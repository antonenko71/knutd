// styles
import * as S from './styles';

// interface
import { IMakeupRulesProps } from '@interfaces';

const MakeupRules = (props: IMakeupRulesProps) => {
  const { rules } = props;

  return (
    <ul>
      {rules?.map((rule) => (
        <S.Item key={rule}>{rule}</S.Item>
      ))}
    </ul>
  );
};

export default MakeupRules;
