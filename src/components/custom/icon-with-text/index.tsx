import React from 'react';

import {
  IconWithTextMain,
  IconWithTextIcon,
  IconWithTextText,
  IconWithTextTitle,
  IconWithTextP,
} from 'components/custom/icon-with-text/style';

import { TIconWithText } from 'components/custom/icon-with-text/types';
import Link from 'next/link';

const IconWithText = ({ link, icon, title, text, ...props }: TIconWithText) => (
  <IconWithTextMain {...props}>
    {link ? (
      <a target="_blank" rel="noreferrer" href={link}>
        <IconWithTextIcon>{icon}</IconWithTextIcon>
      </a>
    ) : (
      <IconWithTextIcon>{icon}</IconWithTextIcon>
    )}

    <IconWithTextText>
      <IconWithTextTitle>{title}</IconWithTextTitle>
      {text.map((x) => (
        <IconWithTextP>{x}</IconWithTextP>
      ))}
    </IconWithTextText>
  </IconWithTextMain>
);

export default IconWithText;
