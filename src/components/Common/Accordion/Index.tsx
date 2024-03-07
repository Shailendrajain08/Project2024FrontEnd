import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { GridExpandMoreIcon } from '@mui/x-data-grid';
import '../index.css';

interface IAccordionProp {
  title: string;
  children: React.ReactNode;
}

const AccordionComp = ({ title, children }: IAccordionProp) => {
  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<GridExpandMoreIcon />}
        aria-controls="panel3-content"
        id="panel3-header"
        className="accordion-heading">
        {title}
      </AccordionSummary>
      <AccordionDetails className="accordion-body">{children}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionComp;
