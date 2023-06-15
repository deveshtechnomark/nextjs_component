import React from 'react';

import './CloseButtons.css';
import '../../bootstrap-custom.css'
import { Close } from 'closebuttonlib';
import 'closebuttonlib/dist/index.css';
import CopyButton from '../../CopyButton';
import Typography from 'typography';
import 'typography/dist/index.css';

export const CloseButtons: React.FC = () => {
  const importClose = `import { Close } from 'closebuttonlib';`;
  const importCloseCSS = `@import closebuttonlib/dist/index.css`;

  const copyBasicCloseButton = ` <Close />`;

  return (
    <article>
      <div className='card-body'>
        <Typography type='h2' ><b>Close Button</b></Typography>
        <p className='card-text'>
          <Typography type='h6' className='line_format'>A generic close button for dismissing content like modals and alerts.</Typography>

          <h5 className='card-title'><Typography type='title' className='title_format'>Import</Typography></h5>
          <div className='card' >
            <div className='row' >
              <div className='col' >
                <Typography className='code_format'>{importClose}</Typography>
              </div>
              <div className='col'>
                <CopyButton text={importClose} />
              </div>
            </div>

          </div>

          <div className='card' style={{ margin: '20px 0 0 0' }}>

            <div className='row' >
              <div className='col' >
                <Typography className='code_format'>{importCloseCSS}</Typography>
              </div>
              <div className='col'>
                <CopyButton text={importCloseCSS} />
              </div>
            </div>
          </div>

          <Typography className='line_format'> Please copy this line and import in out code for Close Button.</Typography>

          <h5 className='card-title'><Typography type='title' className='title_format'>Basic</Typography></h5>

          <div className='card' style={{ marginTop: '10px' }}>
            <div className='row'>
              <div className='col'>
                <Close />
              </div>
            </div>
          </div>

          <div className='card' style={{ marginTop: '20px', padding: '5px 0 10px 0' }}>
            <div className='row'>
              <div className='col-8'>
                <Typography className='code_format'>{copyBasicCloseButton}</Typography>

              </div>
              <div className='col-4'>
                <CopyButton text={copyBasicCloseButton} />
              </div>
            </div>
          </div>

        </p>

      </div>
    </article>
  );
};
