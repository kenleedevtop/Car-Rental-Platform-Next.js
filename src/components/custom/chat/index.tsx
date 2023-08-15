import React, { useState } from 'react';
import { ChatMain, ChatMessages } from 'components/custom/chat/style';
import { Input } from 'components/ui';
import { SendIcon } from 'components/svg';
import { ChatMessage } from 'components/custom/chat/elements';

const Chat = ({ ...props }) => {
  const [messages, setMessages] = useState<any>([]);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    setMessages((prev: any) => [
      ...prev,
      { message, date: today.toDateString() },
    ]);
    setMessage('');
  };

  return (
    <ChatMain {...props}>
      <ChatMessages>
        {messages.map((x: any) => (
          <ChatMessage message={x.message} time={x.date} />
        ))}
      </ChatMessages>
      <Input
        type="text"
        placeholder="Type your message..."
        endAdornment={
          <SendIcon
            onClick={() => {
              if (message.trim() !== '') {
                handleSend();
              }
            }}
          />
        }
        value={message}
        onValue={(input) => setMessage(input)}
      />
    </ChatMain>
  );
};

export default Chat;
