import React, { useEffect } from 'react';
import { WidgetMain } from 'components/custom/callendly-widget/style';

const CalendlyWidget = () => {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    );
    if (script && head) {
      head.appendChild(script);
    }
  }, []);

  return (
    // <!-- Calendly inline widget begin -->
    // CHANGE DATA-URL TO IVAN'S LINK
    <WidgetMain
      className="calendly-inline-widget"
      style={{ height: '500px' }}
      data-url="https://calendly.com/mperovic2210/coaching-call"
    />
  );
};

export default CalendlyWidget;
