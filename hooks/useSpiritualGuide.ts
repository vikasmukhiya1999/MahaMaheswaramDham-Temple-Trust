
import { useState } from 'react';
import { askSpiritualGuide } from '../services/geminiService';
import { Message } from '../types';

export const useSpiritualGuide = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: 'Namaste! I am your spiritual guide. How can I assist you in your pilgrimage today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await askSpiritualGuide(text);
      const aiMessage: Message = { role: 'ai', text: response || 'The divine connection is silent.' };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Chat Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, sendMessage, isLoading };
};
