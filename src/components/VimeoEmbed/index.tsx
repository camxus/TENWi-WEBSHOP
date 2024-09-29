import React, { useRef, useState } from "react";

function VimeoEmbed({
  videoId = 424448504,
  ...iframeProps
}: {
  videoId: number;
} & React.IframeHTMLAttributes<HTMLIFrameElement>) {
  return (
    <>
      <iframe
        {...iframeProps}
        src={
          "https://player.vimeo.com/video/" +
          videoId +
          "?autoplay=1&loop=1&muted=1&background=1"
        }
        style={{
          ...iframeProps.style,
          border: "0px #ffffff none",
        }}
        name="myiFrame"
        scrolling="yes"
        frameBorder="1"
        marginHeight={0}
        marginWidth={0}
        height="400px"
        width="600px"
        allowFullScreen
        allow="autoplay; fullscreen"
      />
    </>
  );
}

export default VimeoEmbed;
