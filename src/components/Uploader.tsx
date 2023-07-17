'use client';

import React from 'react';
import '@/lib/react-dropzone-uploader/dist/styles.css';
// library bug: ignore blocking ts Type
// import Dropzone, { IDropzoneProps } from 'react-dropzone-uploader';
import Dropzone, {
  IDropzoneProps,
  IFileWithMeta,
} from '@/lib/react-dropzone-uploader';
import axios from 'axios';

import { changeUrl, reset } from '@/redux/features/productImageSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export default function Uploader() {
  const image = useAppSelector((state) => state.productImageReducer.value);
  const dispatch = useAppDispatch();

  const handleChangeStatus: IDropzoneProps['onChangeStatus'] = (
    fileWithMeta,
    status,
  ) => {
    if (status === 'done') {
      manualSubmit(fileWithMeta);
    }
  };

  // use manualSubmit behavior
  const manualSubmit = async (file: IFileWithMeta) => {
    const S3_PRESIGNED_URL =
      'https://bj4rvryv8c.execute-api.ap-southeast-1.amazonaws.com/default/getPresignedUrl-nutech-rizqirakun';

    // GET request: presigned URL lambda
    const response = await axios({
      method: 'GET',
      // send s3 dynamic type
      params: {
        type: file.meta.type,
      },
      url: S3_PRESIGNED_URL,
    });

    // PUT request: upload file to S3
    const result = await fetch(response.data.uploadURL, {
      method: 'PUT',
      body: file['file'],
    });

    if (result.status === 200) {
      const productObj = new URL(response.data.uploadURL);
      const productUrl = `${productObj.origin}/${response.data.filename}`;

      dispatch(changeUrl(productUrl));
      console.log(productUrl);
    }
  };

  // depracted use manual instead
  const handleSubmit: IDropzoneProps['onSubmit'] = async (files) => {
    const f = files[0];
    const S3_PRESIGNED_URL =
      'https://bj4rvryv8c.execute-api.ap-southeast-1.amazonaws.com/default/getPresignedUrl-nutech-rizqirakun';

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
  };

  return (
    <>
      <Dropzone
        onChangeStatus={handleChangeStatus}
        // onSubmit={handleSubmit}
        accept="image/png, image/jpeg"
        maxFiles={1}
        maxSizeBytes={100000}
        multiple={false}
        canCancel={false}
        inputContent="Drop Image Here"
        submitButtonDisabled={true}
        submitButtonContent=""
        styles={{
          dropzone: { height: 200, overflow: 'hidden' },
          dropzoneActive: { borderColor: 'green' },
        }}
      />
    </>
  );
}
