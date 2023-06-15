import React, { useEffect, useState } from 'react';

import './SelectDropdown.css';
import '../../bootstrap-custom.css'
import CopyButton from '../../CopyButton';

// Libraries import
import Typography from 'typography';
import { MultiSelect, Select } from 'dropdown-lib';
import 'dropdown-lib/dist/index.css';
import 'typography/dist/index.css';

export const SelectDropdown: React.FC = () => {

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  const [selected, setSelected] = useState([]);
  const importSelectDropdown = `import { MultiSelect, Select } from 'dropdown-lib';`;
  const importSelectDropdownCSS = `@import 'dropdown-lib/dist/index.css';`;

  const copyBasicDropdownCode = `
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  const [selected, setSelected] = useState([]);
  
  <Select options={options} labelName='Select Option Default' onSelect={(value: any) => setSelected(value)} />
  `
  const copyMultiSelectCheckboxDropdownCode = `
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  const [selected, setSelected] = useState([]);
  
  <MultiSelect options={options} type='checkbox' labelName='Select Option Checkbox' onSelect={(value: any) => setSelected(value)} />
  `
  const copyMultiSelectIconDropdownCode = `
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  const [selected, setSelected] = useState([]);
  
  <MultiSelect options={options} type='icon' iconName='faUserCircle' labelName='Select Option Icon' onSelect={(value: any) => setSelected(value)} />
  `

  const copyMultiSelectChipDropdownCode = `
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  const [selected, setSelected] = useState([]);
  
  <MultiSelect options={options} type='chip' labelName='Select Option Chip' onSelect={(value: any) => setSelected(value)} />
  `

  return (
    <article>
      <div className='card-body'>
        <Typography type='h2'><b>Select & Dropdown</b></Typography>
        <p className='card-text'>
          
          <Typography type='h6' className='line_format'>SelectButton is used to choose single or multiple items from a list using buttons.</Typography>
          <Typography type='title' className='title_format'>Import</Typography>
          
          <div className='card'>
            <div className='row'>
              <div className='col'>
                <Typography className='code_format'>{importSelectDropdown}</Typography>
              </div>
              <div className='col'>
                <CopyButton text={importSelectDropdown} />
              </div>
            </div>
          </div>

          <div className='card' style={{ margin: '20px 0 0 0' }}>
            <div className='row'>
              <div className='col'>
                <Typography className='code_format'>{importSelectDropdownCSS}</Typography>
              </div>
              <div className='col'>
                <CopyButton text={importSelectDropdownCSS} />
              </div>
            </div>
          </div>

          <Typography className='line_format'> Please copy this line and import in out code for Select & Dropdown.</Typography>
          <Typography type='title' className='title_format'>Basic</Typography>
          <Typography> Dropdown is used as a controlled component with <b>options, labelName</b> and <b>onSelect</b>  properties along with an options collection.</Typography>

          <div className='card' style={{ margin: '20px 0 0 0' }}>
            <div className='row'>
              <div className='col'>
                <Select options={options} labelName='Select Option Default' onSelect={(value: any) => setSelected(value)} />
              </div>
            </div>
          </div>

          <div className='card' style={{ marginTop: '20px', padding: '5px 0 10px 0' }}>
            <div className='row'>
              <div className='col-10'>
                <Typography className='code_format' style={{ whiteSpace: 'pre-line' }}>{copyBasicDropdownCode}</Typography>
              </div>
              <div className='col-2'>
                <CopyButton text={copyBasicDropdownCode} />
              </div>
            </div>
          </div>

          <Typography type='title' className='title_format'>MultiSelect Checkbox</Typography>
          <Typography>MultiSelect Checkbox is used as a controlled component with <b>options, labelName, type</b> and <b>onSelect</b> properties along with an options collection. </Typography>

          <div className='card' style={{ margin: '20px 0 0 0' }}>
            <div className='row'>
              <div className='col'>
                <MultiSelect options={options} type='checkbox' labelName='Select Option Checkbox' onSelect={(value: any) => setSelected(value)} />
              </div>
            </div>
          </div>

          <div className='card' style={{ margin: '20px 0 0 0' }}>
            <div className='row'>
              <div className='col-10'>
                <Typography className='code_format' style={{ whiteSpace: 'pre-line' }}>{copyMultiSelectCheckboxDropdownCode}</Typography>
              </div>
              <div className='col-2'>
                <CopyButton text={copyMultiSelectCheckboxDropdownCode} />
              </div>
            </div>
          </div>

          <Typography type='title' className='title_format'>MultiSelect Icon</Typography>
          <Typography>MultiSelect Checkbox is used as a controlled component with <b>options, type, iconName, labelName, type</b> and <b>onSelect</b> properties along with an options collection. </Typography>

          <div className='card' style={{ margin: '20px 0 0 0' }}>
            <div className='row'>
              <div className='col'>
                <MultiSelect options={options} type='icon' iconName='faUserCircle' labelName='Select Option Icon' onSelect={(value: any) => setSelected(value)} />
              </div>
            </div>
          </div>

          <div className='card' style={{ marginTop: '20px', padding: '5px 0 10px 0' }}>
            <div className='row'>
              <div className='col-10'>
                <Typography className='code_format' style={{ whiteSpace: 'pre-line' }}>{copyMultiSelectIconDropdownCode}</Typography>
              </div>
              <div className='col-2'>
                <CopyButton text={copyMultiSelectIconDropdownCode} />
              </div>
            </div>
          </div>

          <div className='card' style={{ margin: '20px 0 0 0' }}>
            <div className='row' >
              <div className='col' >
                <MultiSelect options={options} type='chip' labelName='Select Option Chip' onSelect={(value: any) => setSelected(value)} />
              </div>
            </div>
          </div>

          <div className='card' style={{ margin: '20px 0 0 0' }}>
            <div className='row'>
              <div className='col-10'>
                <Typography className='code_format' style={{ whiteSpace: 'pre-line' }}>{copyMultiSelectChipDropdownCode}</Typography>
              </div>
              <div className='col-2'>
                <CopyButton text={copyMultiSelectChipDropdownCode} />
              </div>
            </div>
          </div>
        </p>
      </div>
    </article>
  );
};
