import React from "react";
import "./index.css";
interface Props {
    icon?: string;
    selected?: string;
    editable?: boolean;
    rateId: string;
    change?: boolean;
}
declare const Rating: React.FC<Props>;
export { Rating };
