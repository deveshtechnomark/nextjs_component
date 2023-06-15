import React from 'react';

import './Pagination.css';
import Paginations from 'pagination_lib';
import 'pagination_lib/dist/index.css';
import CopyButton from '../../CopyButton';
import Typography from 'typography';
import 'typography/dist/index.css';
import '../../bootstrap-custom.css'

export const Pagination: React.FC = () => {
  const importPagination = `import { Paginations } from 'pagination_lib'`;
  const importPaginationCSS = `@import 'pagination_lib/dist/index.css'`;

  const copyBasicPaginationArrow = ' <Paginations total={12} limit={4} arrows />';
  const copyBasicPaginationArrowGrid = ' <Paginations total={12} limit={4} arrows grid />';
  const copyTextPagination = '  <Paginations total={12} limit={4} next last />';
  const copyTextPaginationGrid = ' <Paginations total={12} limit={4} next last grid />';


  return (
    <article>

      <div className='card-body'>
        <Typography type='h2'><b>Paginations</b></Typography>
        <p className='card-text'>
          <Typography type='h6' className='line_format'>Paginator displays data in paged format and provides navigation between pages.</Typography>
          <Typography type='title' className='title_format'>Import</Typography>
          
          <div className='card'>
            <div className='row'>
              <div className='col' >
                <Typography className='code_format'>{importPagination}</Typography>
              </div>
              <div className='col'>
                <CopyButton text={importPagination} />
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <Typography className='code_format'>{importPaginationCSS}</Typography>
              </div>
              <div className='col'>
                <CopyButton text={importPaginationCSS} />
              </div>
            </div>
          </div>

          <Typography className='line_format'> Please copy this line and import in out code for Paginator.</Typography>
          <Typography type='title' className='title_format'>Basic</Typography>
          <Typography>Paginator is used as a controlled component and it includes: <b>'total'</b> determines the overall number of pages to be displayed, <b>'limit'</b> specifies the maximum number of pages shown, <b>'arrows'</b> controls whether pagination arrows are included for navigation, <b>'grid'</b> adds a border around the pagination, and <b>'withSpace'</b> adds space between the pagination boxes.</Typography>

          <div className='card' style={{ marginTop: '10px' }}>
            <div className='row' style={{ padding: '10px 10px 10px 10px' }}>
              <div className='col'>
                <Paginations total={12} limit={4} arrows size='large' />
              </div>
            </div>

            <div className='row' style={{ padding: '10px 10px 10px 10px' }}>
              <div className='col'>
                <Paginations total={12} limit={4} arrows grid size='large' />
              </div>
            </div>
          </div>

          <div className='card' style={{ marginTop: '10px' }}>
            <div className='row'>
              <div className='col-10'>
                <Typography className='code_format'>{copyBasicPaginationArrow}</Typography>
              </div>
              <div className='col-2'>
                <CopyButton text={copyBasicPaginationArrow} />
              </div>
            </div>

            <div className='row'>
              <div className='col-10'>
                <Typography className='code_format'>{copyBasicPaginationArrowGrid}</Typography>

              </div>
              <div className='col-2'>
                <CopyButton text={copyBasicPaginationArrowGrid} />
              </div>
            </div>
          </div>

          <Typography type='title' className='title_format'>Text Pagination</Typography>
          <Typography>Paginator is used as a controlled component with options for specifying the total number of pages, the maximum number of pages to be displayed, the inclusion of <b>'Previous'</b> and <b>'Next'</b> buttons, the inclusion of <b>'First'</b> and <b>'Last'</b> buttons, the addition of a border to the pagination, and the inclusion of space between the pagination boxes.</Typography>

          <div className='card' style={{ marginTop: '10px' }}>
            <div className='row' style={{ padding: '10px 10px 10px 10px' }}>
              <div className='col'>
                <Paginations total={12} limit={4} next last size='large' />
              </div>
            </div>

            <div className='row' style={{ padding: '10px 10px 10px 10px' }}>
              <div className='col'>
                <Paginations total={12} limit={4} next last grid size='large' />
              </div>
            </div>
          </div>

          <div className='card' style={{ marginTop: '10px' }}>
            <div className='row' >
              <div className='col-10'>
                <Typography className='code_format'>{copyTextPagination}</Typography>
              </div>
              <div className='col-2'>
                <CopyButton text={copyTextPagination} />
              </div>
            </div>

            <div className='row'>
              <div className='col-10'>
                <Typography className='code_format'>{copyTextPaginationGrid}</Typography>
              </div>
              <div className='col-2'>
                <CopyButton text={copyTextPaginationGrid} />
              </div>
            </div>

          </div>
        </p>
      </div>
    </article>
  );
};
