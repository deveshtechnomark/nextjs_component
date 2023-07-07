import React from "react";
import "progressbar/dist/index.css";
interface UploaderProps {
    multiSelect?: boolean;
    variant?: string;
    type?: string;
}
declare function Uploader({ multiSelect, variant, type }: UploaderProps): React.JSX.Element;
export default Uploader;
