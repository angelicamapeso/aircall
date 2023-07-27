const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
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
  const amPM = hours >= 12 ? "PM" : "AM";
  let formattedHour = hours + 1;
  if (formattedHour > 12) {
    formattedHour -= 12;
  }
  let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHour}:${formattedMinutes} ${amPM}`;
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
