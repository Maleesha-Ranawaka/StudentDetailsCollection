import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import School from './school';
import Undergraduate from './undergraduate';
import Postgradiate from './postgraduate';


const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const RoleSelectorAccordians = () => {

  
  const [expanded, setExpanded] = React.useState('panel1');
  const [value, setValue] = React.useState('school');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChangeRadio = (event) => {
    setValue(event.target.value);
  };

  return ( 
    <div>

      <Accordion expanded={expanded === 'panel1'}>
        <AccordionSummary
          
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >

          <RadioGroup aria-label="roleSelect" name="roleSelect" value={value} onChange={handleChangeRadio}>
            <FormControlLabel value="school" control={<Radio color="primary" />} label="I'm still schooling" onChange={handleChange('panel1')} />
          </RadioGroup>
          
        </AccordionSummary>
        <AccordionDetails>
          <School />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'}>
        <AccordionSummary
          
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          
          <RadioGroup aria-label="roleSelect" name="roleSelect" value={value} onChange={handleChangeRadio}>
            <FormControlLabel value="undergraduate" control={<Radio color="primary" />} label="After completing my schooling now I m following my higher/ undergraduate studies"  onChange={handleChange('panel2')}/>
          </RadioGroup>

        </AccordionSummary>
        <AccordionDetails>
          <Undergraduate />
        </AccordionDetails>
      </Accordion>
      
      <Accordion square expanded={expanded === 'panel3'}>
        <AccordionSummary
          
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          
          <RadioGroup aria-label="roleSelect" name="roleSelect" value={value} onChange={handleChangeRadio}>
            <FormControlLabel value="postgraduate" control={<Radio color="primary" />} label="After completing my higher/ undergraudate studies now I m looking for an employment/ postgraduate studies"  onChange={handleChange('panel3')}/>
          </RadioGroup>

        </AccordionSummary>
        <AccordionDetails>
          <Postgradiate />
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel4'}>
        <AccordionSummary
          
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          
          <RadioGroup aria-label="roleSelect" name="roleSelect" value={value} onChange={handleChangeRadio}>
            <FormControlLabel value="other" control={<Radio color="primary" />} label="Other"  onChange={handleChange('panel4')}/>
          </RadioGroup>

        </AccordionSummary>

      </Accordion>

    </div>
  );
}
 
export default RoleSelectorAccordians;
