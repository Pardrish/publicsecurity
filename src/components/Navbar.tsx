
import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Shield, Menu, X, Globe, UserCog, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    toast.success("You have been logged out");
    navigate("/");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Report", path: "/report" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Community", path: "/community" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center space-x-2 text-blue-700 transition-all hover:opacity-90"
          aria-label="SafetyNet Logo"
        >
          <Shield className="h-6 w-6" />
          <span className="font-bold text-xl">SafetyNet</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700 hover:text-blue-700 hover:bg-blue-50/80"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
          
          {/* Admin Dashboard Link - Only show if user is not logged in or is admin */}
          {(!user || isAdmin()) && (
            <NavLink
              to={user ? "/admin" : "/login"}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5",
                  isActive
                    ? "text-red-700 bg-red-50"
                    : "text-gray-700 hover:text-red-700 hover:bg-red-50/80"
                )
              }
            >
              <UserCog className="h-4 w-4" />
              <span>Admin</span>
            </NavLink>
          )}
          
          {/* Logout Button - Only show if user is logged in */}
          {user && (
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 text-gray-700 hover:text-red-700 hover:bg-red-50/80"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          )}
        </nav>

        {/* Language Selector */}
        <div className="hidden md:flex items-center">
          <button
            className="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-200"
            aria-label="Change language"
          >
            <Globe className="h-4 w-4" />
            <span className="text-sm font-medium">Language</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out md:hidden pt-20",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col p-6 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "px-4 py-3 rounded-xl text-base font-medium transition-colors",
                  isActive
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
          
          {/* Admin Dashboard Link for Mobile - Only show if user is not logged in or is admin */}
          {(!user || isAdmin()) && (
            <NavLink
              to={user ? "/admin" : "/login"}
              className={({ isActive }) =>
                cn(
                  "px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center gap-2",
                  isActive
                    ? "text-red-700 bg-red-50"
                    : "text-gray-700 hover:text-red-700 hover:bg-red-50"
                )
              }
            >
              <UserCog className="h-5 w-5" />
              <span>Admin Dashboard</span>
            </NavLink>
          )}
          
          {/* Logout Button for Mobile - Only show if user is logged in */}
          {user && (
            <button
              onClick={handleLogout}
              className="px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center gap-2 text-gray-700 hover:text-red-700 hover:bg-red-50"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          )}
          
          <button
            className="flex items-center space-x-2 px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors mt-4"
            aria-label="Change language"
          >
            <Globe className="h-5 w-5" />
            <span>Language</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
