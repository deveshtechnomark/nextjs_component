import React, { ReactNode } from 'react';

interface ModalContentProps {
  children: ReactNode;
}

const ModalContent: React.FC<ModalContentProps> = ({ children }) => {

  return (
    <div
    className={`flex-auto max-h-96 overflow-y-auto text-pureBlack`}
  >
        {children || 'Modal Content'}
      </div>
  );
};

export default ModalContent;