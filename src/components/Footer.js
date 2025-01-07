const Footer = () => {
      return (
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm">&copy; {new Date().getFullYear()} BY1.net. All rights reserved.</p>
              <div className="mt-4 md:mt-0">
                <a href="/privacy" className="text-gray-300 hover:text-white mr-4">Privacy Policy</a>
                <a href="/terms" className="text-gray-300 hover:text-white">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;
