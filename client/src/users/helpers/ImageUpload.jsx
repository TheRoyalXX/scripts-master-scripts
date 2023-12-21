import React, { useState } from "react";

import { Button, Container, Stack } from "@mui/material";

const ImageUploadComp = ({ onChange, data, name, imageUrl }) => {
  const image = JSON.stringify(imageUrl);
  return (
    <Container>
      <Stack direction="row" alignItems="center" spacing={2}>
        <label htmlFor="upload-image">
          <Button variant="contained" component="span">
            Upload
          </Button>
          <input
            id="upload-image"
            accept="image/*"
            type="file"
            onChange={onChange}
            data={data}
            name={name}
          />
        </label>
        {imageUrl && <img src={image} alt="UploadedImage" height="300" />}
      </Stack>
    </Container>
  );
};

export default ImageUploadComp;
