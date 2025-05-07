
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', content: 'Hi there! 👋 I\'m your SoftSell assistant. How can I help you with software license reselling today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (input.trim() === '') return;
    
    // Add user message
    setMessages([...messages, { type: 'user', content: input }]);
    setInput('');
    setIsTyping(true);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages(prev => [...prev, { type: 'bot', content: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userInput) => {
    const normalizedInput = userInput.toLowerCase();
    
    if (normalizedInput.includes('sell') || normalizedInput.includes('how') || normalizedInput.includes('process')) {
      return "To sell your software licenses with us, simply follow these three easy steps: 1) Upload your license details through our secure portal, 2) Get a valuation within 24 hours, and 3) Accept our offer and get paid within 48 hours!";
    }
    
    if (normalizedInput.includes('license') || normalizedInput.includes('accept') || normalizedInput.includes('support')) {
      return "We accept licenses from all major software vendors including Microsoft, Adobe, Oracle, Salesforce, IBM, SAP, VMware, Autodesk, and many more. If you have a specific license type you'd like to sell, please let us know!";
    }
    
    if (normalizedInput.includes('price') || normalizedInput.includes('value') || normalizedInput.includes('worth')) {
      return "License values vary based on type, remaining term, and market demand. Our AI-powered valuation system analyzes current market conditions to provide you with the best possible offer. To get a specific valuation, please submit your license details through our form.";
    }
    
    if (normalizedInput.includes('payment') || normalizedInput.includes('paid') || normalizedInput.includes('money')) {
      return "We offer multiple payment methods including direct bank transfer, PayPal, and cryptocurrency. Most payments are processed within 48 hours of accepting our offer, making it one of the fastest payment turnarounds in the industry!";
    }
    
    if (normalizedInput.includes('secure') || normalizedInput.includes('safe') || normalizedInput.includes('trust')) {
      return "Security is our top priority! We use end-to-end encryption for all license transfers and financial transactions. Our platform is SOC 2 compliant and we implement multi-factor authentication to ensure your data and transactions are always protected.";
    }
    
    return "Thanks for your message! If you have questions about selling your software licenses or need more information about our process, please let me know. I'm here to help!";
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="glass mb-4 w-80 sm:w-96 rounded-lg overflow-hidden flex flex-col shadow-xl animate-slide-in">
          <div className="bg-gradient-to-r from-softsell-purple to-softsell-blue p-4 flex justify-between items-center">
            <h3 className="font-bold text-white">SoftSell Assistant</h3>
            <Button variant="ghost" size="icon" onClick={toggleChat} className="text-white hover:bg-white/20">
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="p-4 h-80 overflow-y-auto bg-white/80 dark:bg-gray-800/80">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`mb-3 flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`p-3 rounded-lg max-w-[80%] ${
                    msg.type === 'user' 
                      ? 'bg-softsell-purple text-white rounded-br-none' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-bl-none'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start mb-3">
                <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <form onSubmit={handleSubmit} className="p-2 border-t border-gray-200 dark:border-gray-700 flex bg-white dark:bg-gray-800">
            <input 
              type="text" 
              value={input} 
              onChange={handleInputChange} 
              placeholder="Type your message..." 
              className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 border-none rounded-l-md focus:outline-none"
            />
            <button 
              type="submit"
              className="px-4 py-2 bg-softsell-purple text-white rounded-r-md hover:bg-softsell-blue transition-colors"
              disabled={isTyping}
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}
      
      <Button 
        onClick={toggleChat} 
        className={`rounded-full h-14 w-14 shadow-lg ${
          isOpen ? 'bg-gray-500 hover:bg-gray-600' : 'bg-gradient-to-r from-softsell-purple to-softsell-blue hover:opacity-90'
        } transition-all`}
      >
        <MessageSquare className="h-6 w-6 text-white" />
      </Button>
    </div>
  );
};

export default ChatWidget;
