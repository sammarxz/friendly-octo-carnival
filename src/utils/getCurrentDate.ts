const getCurrentDate = (): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  const currentDate = new Date();
  const formattedDate = formatter.format(currentDate);

  return formattedDate;
};

export { getCurrentDate };
