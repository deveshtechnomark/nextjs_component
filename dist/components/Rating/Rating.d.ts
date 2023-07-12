import React from "react";
interface Props {
    icon?: string;
    selected?: string;
    editable?: boolean;
    rateId: string;
    disabled?: boolean;
}
declare const Rating: React.FC<Props>;
export { Rating };
