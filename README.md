```html
<Badge
  variant="dot|pill"
  badgetype="dark|secondary|graph|success|warning|error|primary"
  text="string"
/>
```

<ul>
  <li>variant: mandatory prop, it can be either dot or pill.</li>
  <li>
    badgetype: mandatory prop, it can be either dark, secondary, graph, success, error, warning or primary.
  </li>
  <li>text: optional prop, it indicates label for badge.</li>
</ul>

```html
<CheckBox id="string" label="string" variant="invalid" intermediate />
```

<ul>
  <li>id: mandatory prop, it must be unique.</li>
  <li>
    label: optional prop, it will be used to show label beside checkbox.
  </li>
  <li>variant: optional prop, it indicates the checkbox with invalidity i.e. danger/error.</li>
  <li>intermediate: optional prop, it will take boolean value & render the intermediate checkbox.</li>
  <li>Other props applicable to html input checkbox type can be applied as per requirement.</li>
</ul>

```html
<ProgressStep total={number} current={number} label={string[]} customized
icon={JSX/TSX-Element} />
```

<ul>
  <li>total: mandatory prop, which includes the total no. of steps.</li>
  <li>label: optional prop, that includes array of label.</li>
  <li>current: mandatory prop, which indicates the active step.</li>
  <li>
    customized: optional prop, it will take boolean value & used if user wants to define custom icon inside steps.
  </li>
  <li>
    icon: optional prop, that must contain "JSX/TSX Element" as an icon & it
    will only work with "customized" prop.
  </li>
</ul>

```html
<Radio id="string" label="string" variant="invalid" />
```

<ul>
  <li>id: mandatory prop, it must be unique.</li>
  <li>
    label: optional prop, it will be used to show label beside radio.
  </li>
  <li>variant: optional prop, it indicates the radio with invalidity i.e. danger/error.</li>
  <li>Other props applicable to html input radio type can be applied as per requirement.</li>
</ul>

```html
<TabBar
  tabs="[[{id:string,label:string}]]"
  getTabId="{(arg1: string) => {} }"
/>
```

<ul>
<li>tabs: mandatory prop, it contains the array of objects containing id & label.</li>
<li>getTabId: mandatory prop, it takes a function with one argument, to provide the selected tab id to user.</li>
</ul>
