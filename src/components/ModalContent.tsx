import React, { ReactNode } from 'react';

interface ModalContentProps {
  children: ReactNode;
}

const ModalContent: React.FC<ModalContentProps> = ({ children }) => {
  return (
      <div className="flex-auto overflow-y-scroll max-h-[500px] text-pureBlack leading-relaxed">
        {children || 'Modal Content'}
      </div>
  );
};

export default ModalContent;