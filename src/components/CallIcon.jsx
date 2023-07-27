import React from "react";
import InboundIcon from "../icons/inbound.svg";
import OutboundIcon from "../icons/outbound.svg";

const CallIcon = ({ direction }) => {
  const callIcons = {
    inbound: InboundIcon,
    outbound: OutboundIcon,
  };
  const src = callIcons[direction];

  if (!src) {
    return null;
  }

  return <img className="call-icon" src={src} />;
};

export default CallIcon;
