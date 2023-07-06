<Badge variant={dot|pill} badgetype={dark|secondary|graph|success|warning|error|primary} text="string" />

--> variant: mandatory prop, it can be either dot or pill.
--> badgetype: mandatory prop, it can be either dark,secondary,graph,success,error,warning or primary.
--> text: optional prop, it indicates label for badge.

<ProgressStep
total={number}
current={number} 
label={string[]}
customized={boolean} 
icon={JSX/TSX-Element} 
/>

--> total: mandatory prop, which includes the total no. of steps.
--> label: optional prop, that includes array of label.
--> current: mandatory prop, which indicates the active step.
--> customized: optional prop, use if user wants to define icon inside steps.
--> icon: optional prop, that must contain "JSX/TSX Element" as an icon & it will only work with "customized" prop.
