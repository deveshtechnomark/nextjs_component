### How to Use:

'use client'

import React from 'react';
import Pagination from 'pagination';
import 'pagination/dist/index.css';

const Page: React.FC = () => {

return (

<div>
{/_ simple pagination with arrow _/}
<Pagination totalPages={50} onChangePage={(e:any) => console.log("Hello Guys!")} space={''} variant={''} />

      {/* pagination with arrow and space */}
      <Pagination space totalPages={50} onChangePage={(e:any) => console.log("Hello Guys!")} variant={""} />

      {/* pagination with button */}
      <Pagination variant="buttons" totalPages={50} onChangePage={(e:any) => console.log("Hello Guys!")} space={''} />

      {/* pagination with button and space */}
      <Pagination variant="buttons" space totalPages={50} onChangePage={(e:any) => console.log("Hello Guys!")} />
    </div>

);
};

export default Page;
