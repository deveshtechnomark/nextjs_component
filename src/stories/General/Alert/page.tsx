import React from 'react';
import { useState } from 'react';
import CopyButton from '../../CopyButton';
import './Alert.css';
import '../../bootstrap-custom.css'


export const Alert: React.FC = () => {
  const textToCopy = 'This is the text to be copied';

  return (
    <article>

      <div className="card" style={{ width: '100%' }}>
        <div className="card-body">
          <h5 className="card-title">Alert title</h5>
          <p className="card-text">

            <div className="card">
                <div className="row" >
                  <div className="col" >
                    <p style={{padding:'10px 10px 0px 10px'}}>{textToCopy}</p>
                  </div>
                  <div className="col">
                    <CopyButton text={textToCopy}  />
                  </div>
                </div>
            </div>

          </p>
          <a href="#" className="btn btn-primary">

            Go somewhere
          </a>
        </div>
      </div>
    </article>
  );
};
