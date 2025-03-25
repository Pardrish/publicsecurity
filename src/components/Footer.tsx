
import { Link } from "react-router-dom";
import { Shield, Github, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-2xl text-gray-900">SafetyNet</span>
            </Link>
            <p className="text-gray-600 text-sm max-w-xs">
              Empowering communities to collaborate for safer neighborhoods through technology and shared responsibility.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Platform</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
                  </li>
                  <li>
                    <Link to="/report" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Report</Link>
                  </li>
                  <li>
                    <Link to="/dashboard" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/community" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Community</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/about" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">About</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Privacy</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Terms</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Help Center</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Community Guidelines</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Resources</a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Cookie Policy</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Data Processing</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 xl:text-center">
            &copy; {new Date().getFullYear()} SafetyNet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
