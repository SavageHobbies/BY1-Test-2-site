const Stats = () => {
      return (
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-5xl font-bold text-blue-500">100+</p>
                <p className="text-gray-700 mt-2">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-blue-500">200%</p>
                <p className="text-gray-700 mt-2">Average ROI</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-blue-500">500+</p>
                <p className="text-gray-700 mt-2">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default Stats;
