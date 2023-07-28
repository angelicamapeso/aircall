const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const yearMonthDate = (callDate) => {
  return `${callDate.getFullYear()}-${callDate.getMonth()}-${callDate.getDate()}`;
};

const isInThisYear = (today, callDate) => {
  return today.getFullYear() === callDate.getFullYear();
};

const isInThisMonth = (today, callDate) => {
  return (
    today.getMonth() === callDate.getMonth() && isInThisYear(today, callDate)
  );
};

const isWithinAWeek = (today, callDate) => {
  const startDate = today.getDate() - 6;
  const endDate = today.getDate();

  return (
    isInThisMonth(today, callDate) &&
    callDate.getDate() >= startDate &&
    callDate.getDate() <= endDate
  );
};

const isYesterday = (callDate) => {
  const yesterday = new Date(Date.now());
  yesterday.setHours(yesterday.getHours() - 24);

  return isToday(yesterday, callDate);
};

const isToday = (today, callDate) => {
  return (
    today.getDate() === callDate.getDate() && isInThisMonth(today, callDate)
  );
};

const formatTime = (hours, minutes) => {
  const amPM = hours > 12 ? "PM" : "AM";
  let formattedHour = hours === 0 ? 12 : hours;
  if (formattedHour > 12) {
    formattedHour -= 12;
  }
  let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHour}:${formattedMinutes}${amPM}`;
};

export const getDuration = (duration) => {
  if (duration === 0) {
    return null;
  }

  let totalDuration = duration;

  let durationText = "";
  if (totalDuration > 3600) {
    const hours = Math.floor(totalDuration / 3600);
    durationText += `${hours} hour${hours > 1 ? "s" : ""}, `;
    totalDuration -= hours * 3600;
  }

  if (totalDuration > 60) {
    const minutes = Math.floor(totalDuration / 60);
    durationText += `${minutes} minute${minutes > 1 ? "s" : ""}, `;
    totalDuration -= minutes * 60;
  }

  if (totalDuration > 0) {
    durationText += `${totalDuration} second${totalDuration > 1 ? "s" : ""}`;
  }

  return durationText;
};

export const getDate = (date) => {
  const callDate = new Date(date);
  const day = callDate.getDay();
  const dateVal = callDate.getDate();
  const month = callDate.getMonth();
  const year = callDate.getFullYear();

  return `${DAYS_OF_WEEK[day]}, ${MONTHS[month]} ${dateVal}, ${year}`;
};

export const getTime = (date) => {
  const callDate = new Date(date);
  return formatTime(callDate.getHours(), callDate.getMinutes());
};

export const dateRelativeToToday = (date) => {
  const callDate = new Date(date);
  const today = new Date(Date.now());

  if (isToday(today, callDate)) {
    return formatTime(callDate.getHours(), callDate.getMinutes());
  }

  if (isYesterday(callDate)) {
    return "Yesterday";
  }

  if (isWithinAWeek(today, callDate)) {
    return DAYS_OF_WEEK[callDate.getDay()];
  }

  return yearMonthDate(callDate);
};
