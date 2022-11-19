import React from 'react';

import { TabsMain, TabsTab } from 'components/custom/tabs/style';

import { TTabsProps } from 'components/custom/tabs/types';

const Tabs = ({ value, onValue, tabs, ...props }: TTabsProps) => {
  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    if (onValue) {
      onValue(newValue);
    }
  };

  return (
    <TabsMain
      value={value}
      // @ts-ignore
      onChange={handleChange}
      textColor="secondary"
      indicatorColor="secondary"
      {...props}
    >
      {tabs.map((x, y) => (
        <TabsTab key={x} label={x} value={y} />
      ))}
    </TabsMain>
  );
};

export default Tabs;
