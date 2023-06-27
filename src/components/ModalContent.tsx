import React, { ReactNode } from 'react';
import { Typography } from 'typography-ts';
import 'typography-ts/dist/index.css';

interface ModalContentProps {
  children: ReactNode;
}

const ModalContent: React.FC<ModalContentProps> = ({ children }) => {
  return (
    <div className="p-2 mb-5 flex-auto">
      <Typography type='body' className="text-CsModalBlack leading-relaxed">
        {children || 'Modal Content'}
      </Typography>
    </div>
  );
};

export default ModalContent;
