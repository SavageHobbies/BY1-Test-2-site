const PricingPage = () => {
      return (
        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Pricing
            </h1>
            <p className="text-gray-700 mb-8 text-center">
              Choose the plan that best fits your needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded shadow hover:shadow-md transition duration-300">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Basic Plan</h2>
                <p className="text-gray-600 mb-4">Ideal for small businesses.</p>
                <p className="text-3xl font-bold text-blue-500 mb-4">$99/month</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Basic features</li>
                  <li>Limited support</li>
                </ul>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Get Started
                </button>
              </div>
              <div className="bg-white p-6 rounded shadow hover:shadow-md transition duration-300">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Standard Plan</h2>
                <p className="text-gray-600 mb-4">Great for growing businesses.</p>
                <p className="text-3xl font-bold text-blue-500 mb-4">$199/month</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Advanced features</li>
                  <li>Priority support</li>
                </ul>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Get Started
                </button>
              </div>
              <div className="bg-white p-6 rounded shadow hover:shadow-md transition duration-300">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Premium Plan</h2>
                <p className="text-gray-600 mb-4">For large enterprises.</p>
                <p className="text-3xl font-bold text-blue-500 mb-4">$299/month</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>All features</li>
                  <li>24/7 support</li>
                </ul>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default PricingPage;
