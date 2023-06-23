import React, { ReactNode } from "react";

interface ModalTitleProps {
  children: ReactNode;
}

const ModalTitle: React.FC<ModalTitleProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-between p-3 border-b border-solid border-slate-200 rounded-t">
      {children}
    </div>
  );
};

export default ModalTitle;
