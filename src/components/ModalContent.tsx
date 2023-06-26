import React, { ReactNode } from 'react';

interface ModalContentProps {
  children: ReactNode;
}

const ModalContent: React.FC<ModalContentProps> = ({ children }) => {
  return (
    <div className="p-2 mb-5 flex-auto">
      <div className="text-CsModalBlack leading-relaxed">
        {children || 'Modal Content'}
      </div>
    </div>
  );
};

export default ModalContent;
