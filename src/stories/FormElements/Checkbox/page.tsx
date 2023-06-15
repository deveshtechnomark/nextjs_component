import React from 'react';

import './Checkbox.css';
import '../../bootstrap-custom.css'
import CopyButton from '../../CopyButton';

// Libraries import

import { CheckBox } from 'checkbox';
import 'checkbox/dist/index.css';
import Typography from 'typography';
import 'typography/dist/index.css';

export const Checkbox: React.FC = () => {

  const importCheckbox = `import { CheckBox } from 'checkbox'`;
  const importCheckboxCSS = `@import 'checkbox/dist/index.css'`;
  const copyBasicDefaultCheckbox = `<CheckBox label='Default' value='default' name='default' id='default' />`;
  const copyBasicSelectedCheckbox = `<CheckBox label='Selected' value='selected' name='selected' id='selected' checked/>`;
  const copyBasicDisabledCheckbox = `<CheckBox label='Disabled' value='disabled' name='disabled' id='disabled' disabled/>`;
  const copyBasicInvalidCheckbox = `<CheckBox label='Invalid' value='invalid' name='invalid' id='invalid' invalid/>`;
  const copyBasicInvalidSelectedCheckbox = `<CheckBox label='InvalidSelected' value='invalidSelected' name='invalidSelected' id='invalidSelected' invalid checked/>`;
  const copyBasicSelectedDisabledCheckbox = `<CheckBox label='selectedDisabled' value='selectedDisabled' name='selectedDisabled' id='selectedDisabled' checked disabled/>`;

  return (
    <article>
      <div className='card-body'>
        <Typography type='h2'><b>CheckBox</b></Typography>
        <p className='card-text'>
          <Typography type='h6' className='line_format'>Checkbox is an extension to standard checkbox element with theming.</Typography>
          <Typography type='title' className='title_format'>Import</Typography>

          <div className='card'>
            <div className='row'>
              <div className='col'>
                <Typography className='code_format'>{importCheckbox}</Typography>
              </div>
              <div className='col'>
                <CopyButton text={importCheckbox} />
              </div>
            </div>
          </div>

          <div className='card' style={{ margin: '20px 0 0 0' }}>
            <div className='row'>
              <div className='col'>
                <Typography className='code_format'>{importCheckboxCSS}</Typography>
              </div>
              <div className='col'>
                <CopyButton text={importCheckboxCSS} />
              </div>
            </div>
          </div>

          <Typography className='line_format'> Please copy this line and import in out code for Checkbox Button.</Typography>
          <Typography type='title' className='title_format'>Basic</Typography>
          <Typography> CheckboxButton is used as a controlled input with <b>label, name, value, checked, disabled, invalid, className </b> and <b>onChange</b> properties.</Typography>

          <div className='card' style={{ marginTop: '10px' }}>
            <div className='row'>
              <div className='col'>
                <CheckBox id='default' label='Default' value='default' name='default' />
              </div>
              <div className='col'>
                <CheckBox id='selected' label='Selected' value='selected' name='selected' checked />
              </div>
              <div className='col'>
                <CheckBox id='invalid' label='Invalid' value='invalid' name='invalid' invalid />
              </div>
              <div className='col'>
                <CheckBox id='disabled' label='Disabled' value='disabled' name='disabled' disabled />
              </div>
              <div className='col'>
                <CheckBox id='selectedDisabled' label='Selected Disabled' value='selectedDisabled' name='selectedDisabled' checked disabled />
              </div>
            </div>
          </div>

          <div className='card' style={{ marginTop: '20px', padding: '5px 0 10px 0' }}>

            <div className='row'>
              <div className='col-10'>
                <Typography className='code_format'>{copyBasicDefaultCheckbox}</Typography>
              </div>
              <div className='col-2'>
                <CopyButton text={copyBasicDefaultCheckbox} />
              </div>
            </div>

            <div className='row' >
              <div className='col-10'>
                <Typography className='code_format'>{copyBasicSelectedCheckbox}</Typography>
              </div>
              <div className='col-2'>
                <CopyButton text={copyBasicSelectedCheckbox} />
              </div>
            </div>

            <div className='row'>
              <div className='col-10'>
                <Typography className='code_format'>{copyBasicDisabledCheckbox}</Typography>
              </div>
              <div className='col-2'>
                <CopyButton text={copyBasicDisabledCheckbox} />
              </div>
            </div>

            <div className='row'>
              <div className='col-10'>
                <Typography className='code_format'>{copyBasicInvalidCheckbox}</Typography>
              </div>
              <div className='col-2'>
                <CopyButton text={copyBasicInvalidCheckbox} />
              </div>
            </div>

            <div className='row'>
              <div className='col-10'>
                <Typography className='code_format'>{copyBasicInvalidSelectedCheckbox}</Typography>
              </div>
              <div className='col-2'>
                <CopyButton text={copyBasicInvalidSelectedCheckbox} />
              </div>
            </div>

            <div className='row'>
              <div className='col-10'>
                <Typography className='code_format'>{copyBasicSelectedDisabledCheckbox}</Typography>
              </div>
              <div className='col-2'>
                <CopyButton text={copyBasicSelectedDisabledCheckbox} />
              </div>
            </div>

          </div>
        </p>
      </div>
    </article>
  );
};
