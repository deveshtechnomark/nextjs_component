import React, { ReactNode } from "react";
import { Typography } from "typography-ts";

interface ModalTitleProps {
  children: ReactNode;
}

const ModalTitle: React.FC<ModalTitleProps> = ({ children }) => {
  return (
    <>
    <Typography type='body' className="text-CsModalBlack flex items-center justify-between p-3 border-b border-solid border-CsModalGray rounded-t">
      {children || 'Modal Title'}
    </Typography>
    </>
  );
};

export default ModalTitle;
