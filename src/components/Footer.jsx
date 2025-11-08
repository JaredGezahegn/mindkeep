import { Link } from "react-router-dom";
import { BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Section */}
        <p className="text-sm">&copy; {new Date().getFullYear()} MindKeep. All rights reserved.</p>

        {/* Middle Section - Links */}

        <div className="flex gap-4">
         <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>   
        <Link to="/about" className="hover:text-blue-500 transition-colors">About</Link>
        <Link to="/privacy" className="hover:text-blue-500 transition-colors">Privacy</Link>
        <Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
        </div>

        {/* Right Section - Social Icons */}
      <div className="flex gap-4 text-xl">
        <a href="https://twitter.com/JaredGezahegn?t=xYkEQwYJmaCwuMY2pRwOKg&s=35" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
          <BsTwitter />
        </a>
        <a href="https://www.linkedin.com/in/yared-gezahegn-224368388/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
          <BsLinkedin />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
          <BsInstagram />
        </a>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
