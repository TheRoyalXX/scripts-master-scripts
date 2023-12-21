import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const ShareToSocialMedia = ({ url }) => {
  return (
    <>
      <FacebookShareButton url={url} quote={"Share"} hashtag="#SCRIPTS">
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <EmailShareButton url={url}>
        <EmailIcon size={32} round />
      </EmailShareButton>
      <WhatsappShareButton url={url}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </>
  );
};

export default ShareToSocialMedia;
