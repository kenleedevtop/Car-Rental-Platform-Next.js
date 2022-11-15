import React, { useState } from 'react';

import { TabsMain, TabsLabel } from 'components/custom/tabs/style';

import { TTabsProps } from 'components/custom/tabs/types';

const Tabs = ({ tabs, ...props }: TTabsProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
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
