import React from 'react';
import './Typographies.css';
import './bootstrap-custom.css'

// Libraries import
import Typography from 'typography';
import 'typography/dist/index.css';

export const Typographies: React.FC = () => {

  return (
    <article>

      <Typography type='h2'><b>Typography</b></Typography>
      <div className='card' style={{ width: '100%', marginTop: '10px' }}>
        <div className='card-body'>
          <Typography type='h6' >Heading-Regular</Typography>
          <p className='card-text'>
            <div className='row' style={{ padding: '20px 0 0 0' }}>
              <div className='col-4'>
                <Typography>H1</Typography>
              </div>
              <div className='col-8'>
                <Typography type='h1'>Heading 1</Typography>
                <Typography className='types_styling'>font-size: 40px / line-height: 120% / letter-spacing: 2% / font-weight: Regular</Typography>
              </div>
            </div>

            <div className='row' style={{ padding: '10px 0 0 0' }}>
              <div className='col-4'>
                <Typography>H2</Typography>
              </div>
              <div className='col-8'>
                <Typography type='h2'>Heading 2</Typography>
                <Typography className='types_styling'>font-size: 32px / line-height: 120% / letter-spacing: 2% / font-weight: Regular</Typography>
              </div>
            </div>

            <div className='row' style={{ padding: '10px 0 0 0' }}>
              <div className='col-4'>
                <Typography>H3</Typography>
              </div>
              <div className='col-8'>
                <Typography type='h3'>Heading 3</Typography>
                <Typography className='types_styling'>font-size: 28px / line-height: 120% / letter-spacing: 2% / font-weight: Regular</Typography>
              </div>
            </div>

            <div className='row' style={{ padding: '10px 0 0 0' }}>
              <div className='col-4'>
                <Typography>H4</Typography>
              </div>
              <div className='col-8'>
                <Typography type='h4'>Heading 4</Typography>
                <Typography className='types_styling'>font-size: 24px / line-height: 120% / letter-spacing: 2% / font-weight: Regular</Typography>
              </div>
            </div>

            <div className='row' style={{ padding: '10px 0 0 0' }}>
              <div className='col-4'>
                <Typography>H5</Typography>
              </div>
              <div className='col-8'>
                <Typography type='h5'>Heading 5</Typography>
                <Typography className='types_styling'>font-size: 20px / line-height: 120% / letter-spacing: 2% / font-weight: Regular</Typography>
              </div>
            </div>

            <div className='row' style={{ padding: '10px 0 0 0' }}>
              <div className='col-4'>
                <Typography>H6</Typography>
              </div>
              <div className='col-8'>
                <Typography type='h6'>Heading 6</Typography>
                <Typography className='types_styling'>font-size: 16px / line-height: 120% / letter-spacing: 2% / font-weight: Regular</Typography>
              </div>
            </div>
          
          </p>
        </div>
      </div>

      <div className='card' style={{ width: '100%', marginTop: '10px' }}>
        <div className='card-body'>
          <Typography type='h6' >Body-Texts</Typography>
          <p className='card-text'>
          
            <div className='row' style={{ padding: '20px 0 0 0' }}>
              <div className='col-4'>
                <Typography>title</Typography>
              </div>
              <div className='col-8'>
                <Typography type='h5'>Heading 1</Typography>
                <Typography className='types_styling'>font-size: 20px / line-height: 120% / letter-spacing: 2% / font-weight: Medium</Typography>
              </div>
            </div>

            <div className='row' style={{ padding: '10px 0 0 0' }}>
              <div className='col-4'>
                <Typography>sub-title</Typography>
              </div>
              <div className='col-8'>
                <Typography type='sub-title'>Heading 1</Typography>
                <Typography className='types_styling'>font-size: 16px / line-height: 120% / letter-spacing: 2% / font-weight: Medium</Typography>
              </div>
            </div>

            <div className='row' style={{ padding: '10px 0 0 0' }}>
              <div className='col-4'>
                <Typography>table-title</Typography>
              </div>
              <div className='col-8'>
                <Typography type='table-title'>TABLE TITLE</Typography>
                <Typography className='types_styling'>font-size: 16px / line-height: 17.5% / font-weight: Bold / font-weight: Medium</Typography>
              </div>
            </div>

            <div className='row' style={{ padding: '10px 0 0 0' }}>
              <div className='col-4'>
                <Typography>label</Typography>
              </div>
              <div className='col-8'>
                <Typography type='label'>Labeling</Typography>
                <Typography className='types_styling'>font-size: 14px / line-height: 150% / letter-spacing: 2% / font-weight: Regular</Typography>
              </div>
            </div>

            <div className='row' style={{ padding: '10px 0 0 0' }}>
              <div className='col-4'>
                <Typography>body</Typography>
              </div>
              <div className='col-8'>
                <Typography type='body'>Heading 5</Typography>
                <Typography className='types_styling'>font-size: 16px / line-height: 150% / letter-spacing: 2% / font-weight: Regular</Typography>
              </div>
            </div>

            <div className='row' style={{ padding: '10px 0 0 0' }}>
              <div className='col-4'>
                <Typography>button</Typography>
              </div>
              <div className='col-8'>
                <Typography type='button'>Heading 6</Typography>
                <Typography className='types_styling'>font-size: 16px / line-height: 120% / letter-spacing: 2% / font-weight: Regular</Typography>
              </div>
            </div>

            <div className='row' style={{ padding: '10px 0 0 0' }}>
              <div className='col-4'>
                <Typography>badge</Typography>
              </div>
              <div className='col-8'>
                <Typography type='badge'>Heading 6</Typography>
                <Typography className='types_styling'>font-size: 10px / line-height: 120% / letter-spacing: 2% / font-weight: Regular</Typography>
              </div>
            </div>

            <div className='row' style={{ padding: '10px 0 0 0' }}>
              <div className='col-4'>
                <Typography>tool-tip</Typography>
              </div>
              <div className='col-8'>
                <Typography type='button'>Heading 6</Typography>
                <Typography className='types_styling'>font-size: 14px / line-height: 150% / letter-spacing: 2% / font-weight: Regular</Typography>
              </div>
            </div>

          </p>
        </div>
      </div>
    </article>
  );
};
