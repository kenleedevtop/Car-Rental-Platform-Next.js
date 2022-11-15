import React from 'react';

import { TabsMain, TabsLabel } from 'components/custom/tabs/style';

import { TTabsProps } from 'components/custom/tabs/types';

const Tabs = ({ value, onValue, tabs, ...props }: TTabsProps) => {
  const handleChange = (newValue: number) => {
    if (onValue) {
      onValue(newValue);
    }
  };

  return (
    <TabsMain {...props}>
      {tabs.map((x, id) => (
        <TabsLabel
          active={id === value}
          onClick={() => {
            handleChange(id);
          }}
        >
          {x}
        </TabsLabel>
      ))}
    </TabsMain>
  );
};

export default Tabs;
