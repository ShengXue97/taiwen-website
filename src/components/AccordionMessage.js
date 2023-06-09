import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionMessage(props) {
  return (
    <div style={{
      margin: '10px',
    }}>
      <Accordion sx={{
        background: '#9e9e9e',
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{
            color: 'black !important',
          }}>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            color: 'white !important',
            textAlign: 'left !important',
            width: '100% !important',
          }}>
            {props.body}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}