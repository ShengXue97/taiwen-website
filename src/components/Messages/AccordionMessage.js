import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionMessage(props) {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    const targetDate = new Date(props.time);
    const currentTime = new Date();

    if (currentTime >= targetDate) {
      setIsButtonEnabled(true);
    } else {
      const timeDifference = targetDate - currentTime;
      const timer = setTimeout(() => {
        setIsButtonEnabled(true);
      }, timeDifference);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div style={{
      margin: '10px',
    }}>
      <Accordion disabled={!isButtonEnabled} sx={{
        background: '#9e9e9e',
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {isButtonEnabled ?
            <Typography sx={{
              color: 'black !important',
            }}>
              {props.title}
            </Typography>
            :
            <Typography sx={{
              color: 'white !important',
            }}>
              Check back after {new Date(props.time).toLocaleString()}!
            </Typography>
          }
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