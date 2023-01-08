import React, { useState } from 'react';
import {
  CalendarCardMain,
  CalendarCardGrid,
  CalendarCardCell,
  CalendarCardCellDate,
  CalendarCardDay,
  CalendarCardDays,
} from 'components/custom/calendar-card/styles';
import {
  TCalendarCardProps,
  TCalendarDate,
} from 'components/custom/calendar-card/types';
import { getCalendarDates } from 'utilities/calendar';
import { format } from 'date-fns';

const CalendarCard = ({ ...props }: TCalendarCardProps) => {
  const [date, setDate] = useState(new Date());

  const days: TCalendarDate[] = getCalendarDates(date);

  const handleClick = (x: TCalendarDate) => () => {
    setDate(x.date);
  };

  return (
    <CalendarCardMain
      title="Calendar"
      actions={[<div>{format(date, 'MMM, yyyy')}</div>]}
      {...props}
    >
      <CalendarCardDays columns={7}>
        <CalendarCardDay weekend>SUN</CalendarCardDay>
        <CalendarCardDay>MON</CalendarCardDay>
        <CalendarCardDay>TUE</CalendarCardDay>
        <CalendarCardDay>WED</CalendarCardDay>
        <CalendarCardDay>THU</CalendarCardDay>
        <CalendarCardDay>FRI</CalendarCardDay>
        <CalendarCardDay weekend>SAT</CalendarCardDay>
      </CalendarCardDays>
      <CalendarCardGrid columns={7}>
        {days.map((x) => (
          <CalendarCardCell onClick={handleClick(x)}>
            <CalendarCardCellDate currentMonth={x.currentMonth} today={x.today}>
              {format(x.date, 'd')}
            </CalendarCardCellDate>
          </CalendarCardCell>
        ))}
      </CalendarCardGrid>
    </CalendarCardMain>
  );
};

export default CalendarCard;