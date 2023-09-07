import React, { Children, useEffect, useState } from 'react';
import {
  CalendarCardMain,
  CalendarCardGrid,
  CalendarCardCell,
  CalendarCardCellDate,
  CalendarCardDay,
  CalendarCardDays,
  CalendarReset,
  CalendarTitle,
  CalendarEventStatus,
  CalendarEventContainer,
} from 'components/custom/calendar-card/styles';
import {
  TCalendarCardProps,
  TCalendarDate,
  TCalendarEvents,
} from 'components/custom/calendar-card/types';
import { getCalendarDates } from 'utilities/calendar';
import { format } from 'date-fns';
// import { useModal } from 'hooks';
import {
  CalendarControls,
  // Scheduler,
} from 'components/custom/calendar-card/elements';
import { RestartAlt } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import { NotificationAPI } from 'api';
import { useAppContext } from 'context';

const CalendarCard = ({ ...props }: TCalendarCardProps) => {
  const { houseStatus } = useAppContext();
  const [date, setDate] = useState(new Date());

  const days: TCalendarDate[] = getCalendarDates(date);
  const [events, setEvents] = useState<TCalendarEvents[]>([]);

  const handleClick = (x: TCalendarDate) => () => {
    setDate(x.date);
    getCalendarEvents();
    // scModalOpen();
  };

  const handleDate = (v: Date) => {
    setDate(v);
    getCalendarEvents();
  };

  const handleToday = () => {
    setDate(new Date());
    getCalendarEvents();
  };

  const getCalendarEvents = async () => {
    let lastElement = days.pop();
    let firstElement = days[0];
    const startDate = new Date(firstElement.date).toISOString();
    //@ts-ignore
    const endDate = new Date(lastElement?.date).toISOString();
    const events = await NotificationAPI.getAll('', startDate, endDate);
    setEvents([...events]);
  };

  useEffect(() => {
    getCalendarEvents();
  }, [houseStatus]);

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
          const todayEvents = events.filter(
            (event) =>
              format(new Date(event.createdAt), 'MM/dd/yyyy') ===
                format(x.date, 'MM/dd/yyyy') &&
              event?.notificationPayload[0]?.houseId !== null
          );
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
              <CalendarEventContainer>
                {todayEvents.map((event, index: any) => {
                  return (
                    <Tooltip key={index} title={event.description}>
                      <CalendarEventStatus
                        variant={event.variant}
                        href={`/cars/overview?houseId=${event?.notificationPayload[0]?.houseId}`}
                      />
                    </Tooltip>
                  );
                })}
              </CalendarEventContainer>
            </CalendarCardCell>
          );
        })}
      </CalendarCardGrid>
      {/* {scModal && <Scheduler onClose={scModalClose} date={date} />} */}
    </CalendarCardMain>
  );
};

export default CalendarCard;
