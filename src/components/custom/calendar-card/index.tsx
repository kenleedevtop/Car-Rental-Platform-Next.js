import React, { Children, useState } from 'react';
import {
  CalendarCardMain,
  CalendarCardGrid,
  CalendarCardCell,
  CalendarCardCellDate,
  CalendarCardDay,
  CalendarCardDays,
  CalendarReset,
  CalendarTitle,
} from 'components/custom/calendar-card/styles';
import {
  TCalendarCardProps,
  TCalendarDate,
} from 'components/custom/calendar-card/types';
import { getCalendarDates } from 'utilities/calendar';
import { format } from 'date-fns';
import { useModal } from 'hooks';
import {
  CalendarControls,
  Scheduler,
} from 'components/custom/calendar-card/elements';
import { RestartAlt } from '@mui/icons-material';
import { Tooltip } from '@mui/material';

const CalendarCard = ({ ...props }: TCalendarCardProps) => {
  const [scModal, scModalOpen, scModalClose] = useModal(false);
  const [date, setDate] = useState(new Date());

  const days: TCalendarDate[] = getCalendarDates(date);

  const handleClick = (x: TCalendarDate) => () => {
    setDate(x.date);
    scModalOpen();
  };

  const handleDate = (v: Date) => {
    setDate(v);
  };

  const handleToday = () => {
    setDate(new Date());
  };

  return (
    <CalendarCardMain
      title={
        <CalendarTitle>
          Calendar
          <Tooltip title="Reset to today's date">
            <CalendarReset onClick={handleToday}>
              <RestartAlt />
            </CalendarReset>
          </Tooltip>
        </CalendarTitle>
      }
      actions={Children.toArray([
        <CalendarControls
          date={date}
          onBack={handleDate}
          onForward={handleDate}
        />,
      ])}
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
        {days.map((x, index) => {
          const isHighlighted = x.date.toISOString() === date.toISOString();

          return (
            <CalendarCardCell
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              onClick={handleClick(x)}
              isHighlighted={isHighlighted}
            >
              <CalendarCardCellDate
                currentMonth={x.currentMonth}
                today={x.today}
              >
                {format(x.date, 'd')}
              </CalendarCardCellDate>
            </CalendarCardCell>
          );
        })}
      </CalendarCardGrid>
      {scModal && <Scheduler onClose={scModalClose} date={date} />}
    </CalendarCardMain>
  );
};

export default CalendarCard;
