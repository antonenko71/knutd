// library
import { useState } from 'react';
import Cookies from 'js-cookie';

// component
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material';

// utils
import { i18n } from '@utils/i18n';

// icons
import { US, UA } from 'country-flag-icons/react/3x2';

const LanguageFlags = () => {
  const [language, setLanguage] = useState(`${Cookies.get('i18next')}`);

  const handleChangeLanguage = (evt: SelectChangeEvent) => {
    setLanguage(evt.target.value as string);
    return i18n.changeLanguage(evt.target.value as string);
  };

  return (
    <FormControl
      sx={{
        width: '70px',
        '& .MuiSvgIcon-root': {
          display: 'none'
        }
      }}
    >
      <Select
        value={language}
        onChange={handleChangeLanguage}
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            border: 0
          },

          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderWith: '0 !important'
            }
          }
        }}
        MenuProps={{
          sx: {
            '& .MuiPaper-root': {
              backgroundColor: '#c473ea',
              boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )'
            }
          }
        }}
      >
        <MenuItem value="en">
          <US />
        </MenuItem>
        <MenuItem value="ua">
          <UA />
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageFlags;
