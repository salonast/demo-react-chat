import React from 'react';
import * as LR from "@uploadcare/blocks";

LR.registerBlocks(LR);

export const UploadcareComponent: React.FC = () => {
  return (
    <div>
      <lr-config
        ctx-name="my-uploader"
        pubkey="9a23719f8b1f058adbac"
        maxLocalFileSizeBytes={10000000}
        multiple={false}
        imgOnly={true}
        sourceList="local, url, camera, facebook, gphotos, instagram"
      ></lr-config>
      <lr-file-uploader-regular
        css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.25.0/web/lr-file-uploader-regular.min.css"
        ctx-name="my-uploader"
        className="my-config"
      >
      </lr-file-uploader-regular>
    </div>
  );
};
