'use client';

import React from 'react';
// library bug: ignore blocking ts Type
// import Dropzone, { IDropzoneProps } from 'react-dropzone-uploader';
import Dropzone, { IDropzoneProps } from '@/lib/react-dropzone-uploader';
import axios from 'axios';

export default function Uploader() {
  const S3_PRESIGNED_URL = process.env.S3_PRESIGNED_URL;
  const handleChangeStatus: IDropzoneProps['onChangeStatus'] = (
    { meta, remove },
    status,
  ) => {
    console.log(status, meta, remove);
  };

  const handleSubmit: IDropzoneProps['onSubmit'] = async (files) => {
    const f = files[0];

    // GET request: presigned URL lambda
    const response = await axios({
      method: 'GET',
      // send s3 dynamic type
      params: {
        type: f.meta.type,
      },
      url: S3_PRESIGNED_URL,
    });

    // PUT request: upload file to S3
    const result = await fetch(response.data.uploadURL, {
      method: 'PUT',
      body: f['file'],
    });

    if (result.status === 200) {
      const productUrl = `${response.data.productUrl}`;
      console.log(productUrl);
    }
  };

  return (
    <>
      {/* @ts-ignore */}
      <Dropzone
        // onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        maxFiles={1}
        multiple={false}
        canCancel={false}
        inputContent="Drop A File"
        styles={{
          dropzone: { height: 200 },
          dropzoneActive: { borderColor: 'green' },
        }}
      />
    </>
  );
}
