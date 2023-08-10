<h1><-----  Datatable Library ----></h1>

<ul>
<li>columns:
    [{
        header:{headerValue},
        accessor:{accessorValue},
        sortable:true | false
    }],
    it is an array of given object in which accessor should match the key of rowData given to data attribute.</li>
  <li>data: {data}, it is an array of object, whose key should match the accessor of column's accessor.</li>
  <li>headerStyle: tailwind css classes, it will applicable to header.</li>
  <li>rowStyle: tailwind css classes, it will applicable to data rows.</li> 
  <li>align: left | center | right, alignment for header & row both.</li>
  <li>sticky: true | false, if header should stick to top or not.</li>
  <li>expandable: true | false, if expandable rows are required/not required.</li>
  <li>hoverEffect: true | false, if hover effect is required/not required.</li>
  <li>noHeader: true | false, if table header is required/not required.</li>
</ul>
