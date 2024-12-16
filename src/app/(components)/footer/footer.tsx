const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-start">
        {/* Left Div */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-blue-600 font-bold text-lg">MORENT</h2>
          <pre className="mt-4 text-gray-600 text-sm">
            Our vision is to provide convenience 
            and help increase your sales business.
          </pre>
        </div>

        {/* Right Div */}
        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:underline">How it works</a></li>
              <li><a href="#" className="hover:underline">Featured</a></li>
              <li><a href="#" className="hover:underline">Partnership</a></li>
              <li><a href="#" className="hover:underline">Business Relation</a></li>
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:underline">Events</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Podcast</a></li>
              <li><a href="#" className="hover:underline">Invite a friend</a></li>
            </ul>
          </div>

          {/* Socials Section */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Socials</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:underline">Discord</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-200 mt-8 pt-4 text-gray-600 text-sm text-center">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy;2022 MORENT. All rights reserved</p>
          <div className="mt-2 md:mt-0 space-x-4">
            <a href="#" className="hover:underline">Privacy & Policy</a>
            <a href="#" className="hover:underline">Terms & Condition</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;