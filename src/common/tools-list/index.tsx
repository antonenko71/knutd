// component
import { Typography } from '@mui/material';

// styles
import * as S from './styles';

// interface
import { IToolsProps } from '@interfaces';

const ToolsList = (props: IToolsProps) => {
  const { tools } = props;

  return (
    <S.List>
      {tools.map((tool) => (
        <li key={tool.title}>
          <Typography
            variant="subtitle2"
            gutterBottom
            component="div"
            sx={{ color: '#c473ea' }}
          >
            {tool.title}
          </Typography>
          <S.Description>{tool.description}</S.Description>
        </li>
      ))}
    </S.List>
  );
};

export default ToolsList;
