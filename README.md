<code>
  <Badge
    variant="{dot|pill}"
    badgetype="{dark|secondary|graph|success|warning|error|primary}"
    text="string"
  />
</code>
<ul>
  <li>variant: mandatory prop, it can be either dot or pill.</li>
  <li>
    badgetype: mandatory prop, it can be either
    dark,secondary,graph,success,error,warning or primary.
  </li>
  <li>text: optional prop, it indicates label for badge.</li>
</ul>
<br /><br />

<code>
<ProgressStep total={number} current={number} label={string[]}
  customized={boolean} icon={JSX/TSX-Element} />
  </code>
<ul>
  <li>total: mandatory prop, which includes the total no. of steps.</li>
  <li>label: optional prop, that includes array of label.</li>
  <li>current: mandatory prop, which indicates the active step.</li>
  <li>
    customized: optional prop, use if user wants to define icon inside steps.
  </li>
  <li>
    icon: optional prop, that must contain "JSX/TSX Element" as an icon & it
    will only work with "customized" prop.
  </li>
</ul>
