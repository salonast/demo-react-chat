import React from 'react';
import * as LR from "@uploadcare/blocks";

LR.registerBlocks(LR);

export const UploadcareComponent: React.FC = () => {
  return (
    <div>
      {/* Your Uploadcare widget will go here */}
    </div>
  );
};
