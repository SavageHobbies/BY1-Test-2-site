const LeadMagnet = () => {
      return (
        <div className="bg-blue-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Your Free AI Implementation Guide
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Download our guide to learn how to implement AI in your business.
            </p>
            <form className="flex flex-col md:flex-row justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded py-3 px-4 mr-2 mb-2 md:mb-0"
              />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
                Download Now
              </button>
            </form>
          </div>
        </div>
      );
    };

    export default LeadMagnet;
