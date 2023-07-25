import React, { ReactNode } from "react";
import  Typography  from "../Typography/Typography";


interface ModalTitleProps {
  children: ReactNode;
}

const ModalTitle: React.FC<ModalTitleProps> = ({ children }) => {
  return (
    <>
    <div className="text-pureBlack flex items-center justify-between border-b border-solid border-lightSilver rounded-t">
      {children || 'Modal Title'}
    </div>
    </>
  );
};

export default ModalTitle;