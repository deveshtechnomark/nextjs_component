import React from 'react';

import './Breadcrumbs.css';
import '../../bootstrap-custom.css'
import { Breadcrumb } from 'breadcrumb';
import 'breadcrumb/dist/index.css';
import CopyButton from '../../CopyButton';
import Typography from 'typography';
import 'typography/dist/index.css';

interface BreadcrumbItem {
  label: string;
  url: string;
}

const breadcrumbItems: BreadcrumbItem[] = [
  { label: "Home", url: "/home" },
  { label: "Page1", url: "/page1" },
  { label: "Page2", url: "/page2" },
];


export const Breadcrumbs: React.FC = () => {

  const importBreadcrumb = `import { Breadcrumb } from 'breadcrumb'`;
  const importBreadcrumbCSS = `import 'breadcrumb/dist/index.css'`;
  const copyBasicBreadcrumbCode = `
  interface BreadcrumbItem { 
    label: string;
    url: string;
  }
  
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Home", url: "/home" },
    { label: "Page1", url: "/page1" },
    { label: "Page2", url: "/page2" },
  ];
  
  <Breadcrumb items={breadcrumbItems} ></Breadcrumb>
  `
  const copyBasicBreadcrumbVariantCode = `
  interface BreadcrumbItem { 
    label: string;
    url: string;
  }
  
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Home", url: "/home" },
    { label: "Page1", url: "/page1" },
    { label: "Page2", url: "/page2" },
  ];
  
  <Breadcrumb items={breadcrumbItems} variant='>'></Breadcrumb>
  `

  return (
    <article>
      <Typography type='h2' ><b>Breadcrumb</b></Typography>
      <p className='card-text'>
        <Typography type='h6' className='line_format'>Breadcrumb provides contextual information about page hierarchy.</Typography>

        <h5 className='card-title'><Typography type='title' className='title_format'>Import</Typography></h5>
        <div className='card'>
          <div className='row'>
            <div className='col'>
              <Typography className='code_format'>{importBreadcrumb}</Typography>
            </div>
            <div className='col'>
              <CopyButton text={importBreadcrumb} />
            </div>
          </div>

        </div>

        <div className='card' style={{ margin: '20px 0 0 0' }}>

          <div className='row' >
            <div className='col' >
              <Typography className='code_format'>{importBreadcrumbCSS}</Typography>
            </div>
            <div className='col'>
              <CopyButton text={importBreadcrumbCSS} />
            </div>
          </div>
        </div>

        <Typography className='line_format'> Please copy this line and import in out code for Breadcrumb.</Typography>

        <Typography type='title' className='title_format'>Basic</Typography>
        <Typography> BreadCrumb requires a collection of menuitems as its <b>items</b>.</Typography>

        <div className='card' style={{ marginTop: '10px' }}>
          <div className='row' style={{ padding: '10px 10px 0 10px' }}>
            <div className='col'>
              <Breadcrumb items={breadcrumbItems} ></Breadcrumb>
            </div>
          </div>
        </div>

        <div className='card' style={{ marginTop: '20px', padding: '5px 0 10px 0' }}>
          <div className='row'>
            <div className='col-8'>
              <Typography className='code_format' style={{ whiteSpace: 'pre-line' }}>{copyBasicBreadcrumbCode}</Typography>
            </div>
            <div className='col-4'>
              <CopyButton text={copyBasicBreadcrumbCode} />
            </div>
          </div>
        </div>

        <Typography type='title' className='title_format'>Variant</Typography>
        <Typography> BreadCrumb requires a collection of menuitems as its <b>items & variant</b>.</Typography>
        <Typography> Here you can also use different type of variants like <b>*,&nbsp;&nbsp; /,&nbsp;&nbsp; -, </b>etc.</Typography>

        <div className='card' style={{ margin: '10px 0 10px 0' }}>
          <div className='row' style={{ padding: '10px 10px 0 10px' }}>
            <div className='col'>
              <Breadcrumb items={breadcrumbItems} variant=">" ></Breadcrumb>
            </div>
          </div>
        </div>

        <div className='card' style={{ marginTop: '20px', padding: '5px 0 10px 0' }}>
          <div className='row'>
            <div className='col-8'>
              <Typography className='code_format' style={{ whiteSpace: 'pre-line' }}>{copyBasicBreadcrumbVariantCode}</Typography>
            </div>
            <div className='col-4'>
              <CopyButton text={copyBasicBreadcrumbVariantCode} />
            </div>
          </div>
        </div>

      </p>

    </article>

  );
}





