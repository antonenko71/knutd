// library
import { SyntheticEvent, useState } from 'react';
import { styled } from '@mui/material/styles';

// component
import {
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  AccordionProps,
  AccordionSummaryProps,
  Typography
} from '@mui/material';

// icon
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

// styles
import * as S from './styles';

// interface
import { IAccordionList } from '@interfaces';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  }
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '#c473ea' }} />
    }
    {...props}
  />
))(({ theme }) => ({
  color: '#c473ea',
  backgroundColor: '#000',
  borderColor: '#000',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1)
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)'
}));

const AccordionList = (props: IAccordionList) => {
  const { accordionList } = props;
  const [expanded, setExpanded] = useState<string | false>(
    `${accordionList[0].title}`
  );

  const handleChange =
    (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <S.AccordionWrapper>
      {accordionList?.map((item) => (
        <Accordion
          key={item.title}
          expanded={expanded === `${item.title}`}
          onChange={handleChange(`${item.title}`)}
        >
          <AccordionSummary>
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          {item.information && (
            <AccordionDetails>
              {item.information && <Typography>{item.information}</Typography>}
            </AccordionDetails>
          )}
          {item.img && (
            <AccordionDetails
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              {item.img && (
                // <img src={item.img.src} alt={item.img.alt} width="80px" />
                <img src="/test/age_related.png" alt="test" />
              )}
            </AccordionDetails>
          )}
        </Accordion>
      ))}
    </S.AccordionWrapper>
  );
};

export default AccordionList;
