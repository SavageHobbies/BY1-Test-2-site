import Chat from './Chat';

    const Contact = () => {
      return (
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Contact Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <form className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border border-gray-300 rounded py-3 px-4 mb-4"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="border border-gray-300 rounded py-3 px-4 mb-4"
                  />
                  <textarea
                    placeholder="Your Message"
                    className="border border-gray-300 rounded py-3 px-4 mb-4"
                  />
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
                    Send Message
                  </button>
                </form>
              </div>
              <div>
                <Chat />
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default Contact;
