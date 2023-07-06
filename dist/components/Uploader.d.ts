import React from "react";
import "progressbar/dist/index.css";
interface UploaderProps {
    multiSelect?: boolean;
    variant?: string;
}
declare function Uploader({ multiSelect, variant }: UploaderProps): React.JSX.Element;
export default Uploader;
