import React, { useState } from 'react';

import { Collapse, Stack } from 'components/system';

import {
  HelpCollapseMain,
  HelpCollapseHeader,
  HelpCollapseHeaderText,
  HelpCollapseText,
} from 'features/help/elements/help-collapse/style';

import { THelpCollapseProps } from 'features/help/elements/help-collapse/types';

const HelpCollapse = ({
  title,
  openIcon,
  closeIcon,
  text,
  ...props
}: THelpCollapseProps) => {
  const [help, setHelp] = useState(false);

  const openHelp = () => {
    setHelp(!help);
  };

  return (
    <HelpCollapseMain {...props}>
      <Stack style={{ gap: '0px' }}>
        <HelpCollapseHeader onClick={openHelp}>
          <HelpCollapseHeaderText help={help}>{title}</HelpCollapseHeaderText>
          {help && closeIcon}
          {!help && openIcon}
        </HelpCollapseHeader>
        <Collapse
          style={
            window.innerWidth < 600
              ? { paddingRight: '0' }
              : { paddingRight: '150px' }
          }
          in={help}
        >
          {text.map((txt) => (
            <HelpCollapseText key={txt}>{txt}</HelpCollapseText>
          ))}
        </Collapse>
      </Stack>
    </HelpCollapseMain>
  );
};

export default HelpCollapse;
