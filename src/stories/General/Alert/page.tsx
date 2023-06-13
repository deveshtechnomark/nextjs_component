import React from 'react';
import './Alerts.css';
import '../../bootstrap-custom.css'

import CopyButton from '../../CopyButton';
import {Alert} from 'alert'
import 'alert/dist/index.css'
import Typography from 'typography';
import 'typography/dist/index.css';

export const Alerts: React.FC = () => {
  const importAlerts = `import { Alerts } from 'alert'`;
  const importAlertsCSS = `import 'alert/dist/index.css'`;

  const copyBasicSuccessAlert = `<Alert variant='success' head='A simple success alert—check it out!'/>`;
  const copyBasicWarningAlert = `<Alert variant='warning' head='A simple warning alert—check it out!'/>`;
  const copyBasicInformationAlert = `<Alert variant='information' head='A simple info alert—check it out!'/>`;
  const copyBasicErrorAlert = `<Alert variant='error' head='A simple error alert—check it out!'/>`;
  const copyBasicSuccessAlertMsg = `<Alert variant='success' message='This is success message' head='A simple success alert—check it out!'/>`;

  return (
    <article>

      <div className="card" style={{ width: '100%' }}>
        <div className="card-body">
          <h5 className="card-title"><Typography type="h2">Alerts</Typography></h5>
          <p className="card-text">
            <p><Typography type="h6">Alert messages refer to notifications that are displayed to the user to provide <b>information, warnings, success, danger</b> or prompts for interaction.</Typography></p>

            <h5 className="card-title"><Typography type='title'>Import</Typography></h5>
            <div className="card">
              <div className="row" >
                <div className="col" >
                  <Typography className="code_format">{importAlerts}</Typography>
                </div>
                <div className="col">
                  <CopyButton text={importAlerts} />
                </div>
              </div>
              <div className="row" >
                <div className="col" >
                  <Typography className="code_format">{importAlertsCSS}</Typography>
                </div>
                <div className="col">
                  <CopyButton text={importAlertsCSS} />
                </div>
              </div>
            </div>
            <Typography> Please copy this line and import in out code for Alerts.</Typography>

            <h5 className="card-title"><Typography type='title' className='title_format'>Basic</Typography></h5>

            <div className='card' style={{ marginTop: '10px' }}>

              <div className="row" style={{margin:'10px 5px 5px 5px'}}>
                <div className="col">
                  <Alert variant='success' head="A simple success alert—check it out!"/>
                </div>
                <div className="col">
                  <Alert variant='warning' head="A simple warning alert—check it out!"/>
                </div>
              </div>

              <div className="row" style={{margin:'10px 5px 5px 5px'}}>
                <div className="col">
                  <Alert variant='information' head="A simple info alert—check it out!"/>
                </div>
                <div className="col">
                  <Alert variant='error' head="A simple error alert—check it out!"/>
                </div>
              </div>

              <div className="row" style={{margin:'10px 5px 5px 5px'}}>
                <div className="col">
                  <Alert variant='success' head="A simple success alert—check it out!" message="This is success message"/>
                </div>
                <div className="col">
                  <Alert variant='warning' head="A simple warning alert—check it out!" message="This is warning message"/>
                </div>
              </div>

              <div className="row" style={{margin:'10px 5px 5px 5px'}}>
                <div className="col">
                  <Alert variant='information' head="A simple info alert—check it out!" message="This is information message"/>
                </div>
                <div className="col">
                  <Alert variant='error' head="A simple error alert—check it out!" message="This is error message"/>
                </div>
              </div>

            </div>

            <div className="card" style={{ marginTop: '10px' }}>
              <div className="row" >
                <div className="col-8">
                  <Typography className="code_format">{copyBasicSuccessAlert}</Typography>

                </div>
                <div className="col-4">
                  <CopyButton text={copyBasicSuccessAlert} />
                </div>
              </div>

              <div className="row" >
                <div className="col-8">
                  <Typography className="code_format">{copyBasicWarningAlert}</Typography>

                </div>
                <div className="col-4">
                  <CopyButton text={copyBasicWarningAlert} />
                </div>
              </div>
              <div className="row" >
                <div className="col-8">
                  <Typography className="code_format">{copyBasicInformationAlert}</Typography>

                </div>
                <div className="col-4">
                  <CopyButton text={copyBasicInformationAlert} />
                </div>
              </div>
              <div className="row" >
                <div className="col-8">
                  <Typography className="code_format">{copyBasicErrorAlert}</Typography>

                </div>
                <div className="col-4">
                  <CopyButton text={copyBasicErrorAlert} />
                </div>
              </div>

              <div className="row" >
                <div className="col-10">
                  <Typography className="code_format">{copyBasicSuccessAlertMsg}</Typography>

                </div>
                <div className="col-2">
                  <CopyButton text={copyBasicSuccessAlertMsg} />
                </div>
              </div>

              


            </div>

          </p>

        </div>
      </div>
    </article>
  );
};
