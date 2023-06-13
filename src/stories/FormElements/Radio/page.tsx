import React from 'react';

import './Radio.css';
import '../../bootstrap-custom.css'
import RadioButton from 'radiobtn_lib'
import 'radiobtn_lib/dist/index.css'
import CopyButton from '../../CopyButton';
import Typography from 'typography';
import 'typography/dist/index.css';

export const Radio: React.FC = () => {
  const importRadio = `import { RadioButton } from 'radiobtn_lib'`;
  const importRadioCSS = `import 'radiobtn_lib/dist/index.css'`;

  const copyBasicDefaultRadio = ' <RadioButton label="Default" name="default" id="default" />';
  const copyBasicSelectedRadio = ' <RadioButton label="Selected" name="selected" id="selected" defaultChecked/>';
  const copyBasicDisabledRadio = ' <RadioButton label="Disabled" name="disabled" id="disabled" disabled/>';
  const copyBasicInvalidRadio = ' <RadioButton label="Invalid" name="invalid" id="invalid" invalid/>';
  const copyBasicInvalidSelectedRadio = ' <RadioButton label="Invalid Selected" name="invalidSelected" id="invalidSelected" invalid defaultChecked/>';
  const copyBasicSelectedDisabledRadio = ' <RadioButton label="Selected Disabled" name="selectedDisabled" id="selectedDisabled" defaultChecked disabled/>';


  return (
    <article>
      <div className="card" style={{ width: '100%', fontWeight:'normal' }}>
        <div className="card-body">
          <h5 className="card-title"><Typography type="h2">Radio</Typography></h5>
          <p className="card-text">
            <p><Typography type="h6">RadioButton is an extension to standard radio button element with theming.</Typography></p>

            <h5 className="card-title"><Typography type='title'>Import</Typography></h5>
            <div className="card">
              <div className="row" >
                <div className="col" >
                  <Typography className="code_format">{importRadio}</Typography>
                </div>
                <div className="col">
                  <CopyButton text={importRadio} />
                </div>
              </div>
              <div className="row" >
                <div className="col" >
                <Typography className="code_format">{importRadioCSS}</Typography>
                </div>
                <div className="col">
                  <CopyButton text={importRadioCSS} />
                </div>
              </div>
            </div>
            <Typography> Please copy this line and import in out code for Radio Button.</Typography>

            <h5 className="card-title"><Typography type='title' className='title_format'>Basic</Typography></h5>
            <Typography> RadioButton is used as a controlled input with <b>label, name, value, id, checked, disabled, invalid, className </b> and <b>onChange</b> properties.</Typography>
           
            <div className="card" style={{ marginTop: '10px' }}>
             
              <div className="row" >
                <div className="col" >
                <RadioButton label="Default" name="default" id="default" />
                </div>
                <div className="col" >
                  <RadioButton label="Selected" name="selected" id="selected" defaultChecked/>
                </div>
                <div className="col" >
                  <RadioButton label="Disabled" name="disabled" id="disabled" disabled/>
                </div>
                <div className="col" >
                  <RadioButton label="Invalid" name="invalid" id="invalid" invalid/>
                </div>
                
              </div>
              <div className='row'>
              <div className="col-4" >
                  <RadioButton label="Invalid Selected" name="invalidSelected" id="invalidSelected" invalid defaultChecked/>
                </div>
                <div className="col-8" >
                  <RadioButton label="Selected Disabled" name="selectedDisabled" id="selectedDisabled" defaultChecked disabled/>
                </div>
              </div>
            </div>

            <div className="card" style={{marginTop:'10px'}}>
                <div className="row" >
                  <div className="col-8">
                  <Typography className="code_format">{copyBasicDefaultRadio}</Typography>

                  </div>
                  <div className="col-4">
                    <CopyButton text={copyBasicDefaultRadio}  />
                  </div>
                </div>

                <div className="row" >
                  <div className="col-8">
                  <Typography className="code_format">{copyBasicSelectedRadio}</Typography>

                  </div>
                  <div className="col-4">
                    <CopyButton text={copyBasicSelectedRadio}  />
                  </div>
                </div>
                <div className="row" >
                  <div className="col-8">
                  <Typography className="code_format">{copyBasicDisabledRadio}</Typography>

                  </div>
                  <div className="col-4">
                    <CopyButton text={copyBasicDisabledRadio}  />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                  <Typography className="code_format">{copyBasicInvalidRadio}</Typography>

                  </div>
                  <div className="col-4">
                    <CopyButton text={copyBasicInvalidRadio}  />
                  </div>
                </div>

                <div className="row">
                  <div className="col-10">
                  <Typography className="code_format">{copyBasicInvalidSelectedRadio}</Typography>

                  </div>
                  <div className="col-2">
                    <CopyButton text={copyBasicInvalidSelectedRadio}  />
                  </div>
                </div>
                
                <div className="row" >
                  <div className="col-10">
                  <Typography className="code_format">{copyBasicSelectedDisabledRadio}</Typography>

                  </div>
                  <div className="col-2">
                    <CopyButton text={copyBasicSelectedDisabledRadio}  />
                  </div>
                </div>
            </div>

          </p>

        </div>
      </div>
    </article>
  );
};
