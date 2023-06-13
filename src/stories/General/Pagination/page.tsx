import React from 'react';

import './Pagination.css';
import '../../bootstrap-custom.css'
import Paginations from "pagination_lib";
import 'pagination_lib/dist/index.css';
import CopyButton from '../../CopyButton';
import Typography from 'typography';
import 'typography/dist/index.css';

export const Pagination: React.FC = () => {
  const importPagination = `import { Paginations } from 'pagination_lib'`;
  const importPaginationCSS = `import 'pagination_lib/dist/index.css'`;

  return (
    <article>

      <div className="card" style={{ width: '100%' }}>
        <div className="card-body">
          <h5 className="card-title"><Typography type="h2">Paginations</Typography></h5>
          <p className="card-text">
          <p>
            <Typography type="h6">Paginator displays data in paged format and provides navigation between pages.</Typography></p>
            <h5 className="card-title"><Typography type='title'>Import</Typography></h5>
            <div className="card">
              <div className="row" >
                <div className="col" >
                  <Typography className="code_format">{importPagination}</Typography>
                </div>
                <div className="col">
                  <CopyButton text={importPagination} />
                </div>
              </div>
              <div className="row" >
                <div className="col" >
                <Typography className="code_format">{importPaginationCSS}</Typography>
                </div>
                <div className="col">
                  <CopyButton text={importPaginationCSS} />
                </div>
              </div>
            </div>
            <Typography style={{padding:'10px 0 0 0'}}> Please copy this line and import in out code for Paginator.</Typography>

            <h5 className="card-title"><Typography type='title' className='title_format'>Basic</Typography></h5>
            <Typography> RadioButton is used as a controlled input with <b>label, name, value, id, checked, disabled, invalid, className </b> and <b>onChange</b> properties.</Typography>
           
          </p>

        </div>
      </div>
    </article>
  );
};
