import React, { useState } from 'react';

import { Collapse, Stack } from 'components/system';

import {
  HelpCollapseMain,
  HelpCollapseHeader,
} from 'features/help/elements/help-collapse/style';

import { THelpCollapseProps } from 'features/help/elements/help-collapse/types';

const HelpCollapse = ({ title, icon, text, ...props }: THelpCollapseProps) => {
  const [help, setHelp] = useState(false);

  const openHelp = () => {
    setHelp(!help);
  };

  return (
    <HelpCollapseMain {...props}>
      <Stack>
        <HelpCollapseHeader onClick={openHelp}>
          <h2>{title}</h2>
          {icon}
        </HelpCollapseHeader>
        <Collapse
          style={
            window.innerWidth < 600
              ? { paddingRight: '0' }
              : { paddingRight: '150px' }
          }
          in={help}
        >
          {text}
        </Collapse>
      </Stack>
    </HelpCollapseMain>
  );
};

export default HelpCollapse;
