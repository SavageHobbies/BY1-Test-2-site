import { useState } from 'react';

    const Chat = () => {
      const [messages, setMessages] = useState([
        { text: "Hi, I'm MAX, BY1's AI consultant. How can I help you today?", sender: 'bot' },
      ]);
      const [input, setInput] = useState('');

      const handleSendMessage = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { text: input, sender: 'user' };
        setMessages([...messages, userMessage]);

        let botResponse = '';
        const lowerCaseInput = input.toLowerCase();

        if (lowerCaseInput.includes('services')) {
          botResponse = "We offer a range of services including Reputation Management, Marketing Systems, Digital Advertising, and more. You can find more details on our services page.";
        } else if (lowerCaseInput.includes('pricing')) {
          botResponse = "Our pricing plans are designed to fit various business needs. Please visit our pricing page for more information.";
        } else if (lowerCaseInput.includes('contact')) {
          botResponse = "If you have more specific questions, please use the contact form to get in touch with us.";
        } else {
          botResponse = "I'm here to help! If you have specific questions about our services, pricing, or anything else, feel free to ask.";
        }

        setTimeout(() => {
          setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
        }, 500);

        setInput('');
      };

      return (
        <div className="bg-gray-100 rounded p-4">
          <div className="mb-4 h-64 overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded ${message.sender === 'user' ? 'bg-blue-200' : 'bg-gray-200'}`}>
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="border border-gray-300 rounded py-2 px-3 mr-2 flex-1"
            />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Send
            </button>
          </form>
        </div>
      );
    };

    export default Chat;
