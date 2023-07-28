export const capitalize = (word) => {
  const capital = word.toUpperCase();
  return capital.charAt(0) + word.slice(1);
};

export const getTypeText = ({ call_type, direction }) => {
  if (!call_type && !direction) {
    return "Unknown call received";
  }

  if (call_type === "missed") {
    return "Missed call";
  }

  if (direction === "inbound") {
    if (call_type === "answered") {
      return "Answered call";
    }

    if (call_type === "voicemail") {
      return "Voicemail received";
    }

    return "Call received";
  }

  if (direction === "outbound") {
    if (call_type === "answered") {
      return "Call answered";
    }

    if (call_type === "voicemail") {
      return "Voicemail left";
    }

    return "Started Call";
  }
};
