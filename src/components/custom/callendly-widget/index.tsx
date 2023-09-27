import React, { useEffect } from 'react';
import { WidgetMain } from 'components/custom/callendly-widget/style';
import { useCalendlyEventListener, InlineWidget } from "react-calendly";
import { TCalendlyProps } from './types';

const CalendlyWidget = ({ onScheduled, shareCount, email, name }: TCalendlyProps) => {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => onScheduled(),
  });

  return (
    // <!-- Calendly inline widget begin -->
    // CHANGE DATA-URL TO IVAN'S LINK
    <InlineWidget
      url={"https://calendly.com/jurisicholdings/30min"}
      prefill={{
        email: email,
        name: name,
        customAnswers: {
          a1: shareCount?.toString(),
        },
      }} />
  );
};

export default CalendlyWidget;
