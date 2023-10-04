export const isToday = (d: Date) => {
  const today = new Date();
  return (
    d.getDate() === today.getDate() &&
    d.getMonth() === today.getMonth() &&
    d.getFullYear() === today.getFullYear()
  );
};

export const getCalendarDates = (d: Date) => {
  const y = d.getFullYear();
  const m = d.getMonth();
  const firstDay = new Date(y, m, 1).getDay();

  const from = -firstDay;
  const to = -firstDay + 42;

  // 42 elements array
  const datesArray = [];

  for (let i = from + 1; i <= to; i += 1) {
    const date = new Date(y, m, i);
    const currentMonth = date.getMonth() === m;
    const today = isToday(date);
    datesArray.push({
      currentMonth,
      date,
      today,
    });
  }
  return datesArray;
};

export const compareDates = (from: any, to: any, v: boolean): boolean => {
  if (v) {
    const { $y, $M, $D } = to;
    const dateFromString = new Date(from);
    const dateFromObj = new Date($y, $M, $D + 1, 23, 59, 59);

    return dateFromString.getTime() <= dateFromObj.getTime();
  }
  else {
    const dateFromString = new Date(from.$y, from.$M, from.$D);
    const dateFromObj = new Date(to.$y, to.$M, to.$D);
    
    return dateFromString.getTime() < dateFromObj.getTime();
  }

}

export const validateUntilEndOfTheYear = (from: any, to: any): boolean => {
  const { $y } = to;
  const startDate = new Date(from);
  return $y == startDate.getFullYear();
}


export const calculateLeftDays = (startDate: any) => {
  const dateFromString = new Date(startDate);
  const lastDateOfTheYear = new Date(dateFromString.getFullYear() + 1, 0, 1);

  return Math.floor((lastDateOfTheYear.getTime() - dateFromString.getTime()) / (24 * 3600 * 1000))

}
export const dateFromObj = (date: any): string => {
  const { $y, $M, $D } = date;

  return `${$y}-${$M + 1}-${$D}`;
}