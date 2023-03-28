import React from 'react';

import {
  ChatMessageMain,
  ChatMessageAvatar,
  ChatMessageTextContainer,
  ChatMessageText,
  ChatMessageTime,
} from 'components/custom/chat/elements/chat-message/style';

import { TChatMessageProps } from 'components/custom/chat/elements/chat-message/types';

const ChatMessage = ({ message, time, ...props }: TChatMessageProps) => (
  <ChatMessageMain>
    <ChatMessageAvatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLy0iBBKr839kRpNKRTr4nh7y-uMIeqgboOH6-O-9h&s" />
    <ChatMessageTextContainer>
      <ChatMessageText>{message}</ChatMessageText>
      <ChatMessageTime>{time}</ChatMessageTime>
    </ChatMessageTextContainer>
  </ChatMessageMain>
);

export default ChatMessage;
