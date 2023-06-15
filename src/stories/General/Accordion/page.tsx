import React from 'react';

import './Accordions.css';
import '../../bootstrap-custom.css'
import CopyButton from '../../CopyButton';

// Libraries import
import { Accordion, MultiAccordion } from 'accordion'
import 'accordion/dist/index.css'
import Typography from 'typography';
import 'typography/dist/index.css';


export const Accordions: React.FC = () => {

  const importAccordion = `import { Accordion, MultiAccordion } from 'accordion'`;
  const importAccordionCSS = `@import 'accordion/dist/index.css'`;

  const copyAccordionCode = `<Accordion heading='Your header' description='Your description' />`;
  const copyAccordionCodeIcon = `<Accordion heading='Your header' description='Your description' icon="plus" />`;

  const copyMultiAccordionCode = `
  <MultiAccordion heading='Your header' description='Your description' />
  <MultiAccordion heading='Your header' description='Your description' />
  <MultiAccordion heading='Your header' description='Your description' />
  `
  return (
    <article>

      <div className='card-body'>
        <Typography type='h2'><b>Radio</b></Typography>
        <p className='card-text'>
          <Typography type='h6' className='line_format'>The accordion uses collapse internally to make it collapsible.</Typography>
          <Typography type='title' className='title_format'>Import</Typography>

          <div className='card'>
            <div className='row'>
              <div className='col'>
                <Typography className='code_format'>{importAccordion}</Typography>
              </div>
              <div className='col'>
                <CopyButton text={importAccordion} />
              </div>
            </div>
          </div>

          <div className='card' style={{ margin: '20px 0 0 0' }}>
            <div className='row'>
              <div className='col'>
                <Typography className='code_format'>{importAccordionCSS}</Typography>
              </div>
              <div className='col'>
                <CopyButton text={importAccordionCSS} />
              </div>
            </div>
          </div>

          <Typography className='line_format'> Please copy this line and import in out code for Accordion.</Typography>
          <Typography type='title' className='title_format'>Basic</Typography>
          <Typography>Click the accordions below to expand/collapse the accordion content with different types of variantion.</Typography>

          <div className='card' style={{ margin: '10px 0 0 0' }}>
            <div className='row' style={{ margin: '20px' }}>
              <div className='col'>
                <Accordion heading='Header I' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
              </div>
            </div>

            <div className='row' style={{ margin: '0 20px 20px 20px' }}>
              <div className='col'>
                <Accordion heading='Header II' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' icon="plus" />
              </div>
            </div>
          </div>

          <div className='card' style={{ marginTop: '20px', padding: '5px 0 10px 0' }}>

            <div className='row'>
              <div className='col-8'>
                <Typography className='code_format'>{copyAccordionCode}</Typography>
              </div>
              <div className='col-4'>
                <CopyButton text={copyAccordionCode} />
              </div>
            </div>

            <div className='row' >
              <div className='col-8'>
                <Typography className='code_format'>{copyAccordionCodeIcon}</Typography>
              </div>
              <div className='col-4'>
                <CopyButton text={copyAccordionCodeIcon} />
              </div>
            </div>

          </div>

          <Typography type='title' className='title_format'>Multi Accordion</Typography>
          <Typography>Click the accordions below to expand/collapse the accordion content with different types of variantion.</Typography>

          <div className='card' style={{ margin: '10px 0 0 0' }}>
            <div className='row' style={{ margin: '20px' }}>
              <div className='col'>
                <MultiAccordion heading='Header I' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
                <MultiAccordion heading='Header II' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
                <MultiAccordion heading='Header III' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />            
              </div>
            </div>

          </div>

          <div className='card' style={{ marginTop: '20px', padding: '5px 0 10px 0' }}>
            <div className='row'>
              <div className='col-8'>
                <Typography className='code_format' style={{ whiteSpace: 'pre-line' }}>{copyMultiAccordionCode}</Typography>
              </div>
              <div className='col-4'>
                <CopyButton text={copyMultiAccordionCode} />
              </div>
            </div>
          </div>
        </p>
      </div>
    </article>
  );
};
