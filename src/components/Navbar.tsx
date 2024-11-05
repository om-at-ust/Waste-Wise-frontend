import React from 'react';
import { Menu, User, MapPin, BookOpen, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-emerald-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <MapPin className="h-8 w-8" />
            <span className="font-bold text-xl">WasteWise</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="hover:bg-emerald-700 px-3 py-2 rounded-md">
              Map
            </Link>
            <Link to="/report" className="hover:bg-emerald-700 px-3 py-2 rounded-md">
              Report
            </Link>
            <Link to="/education" className="hover:bg-emerald-700 px-3 py-2 rounded-md">
              Learn
            </Link>
            <Link to="/profile" className="hover:bg-emerald-700 px-3 py-2 rounded-md">
              Profile
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-emerald-700"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md hover:bg-emerald-700"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Map</span>
              </div>
            </Link>
            <Link
              to="/report"
              className="block px-3 py-2 rounded-md hover:bg-emerald-700"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Report</span>
              </div>
            </Link>
            <Link
              to="/education"
              className="block px-3 py-2 rounded-md hover:bg-emerald-700"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>Learn</span>
              </div>
            </Link>
            <button
              className="w-full text-left px-3 py-2 rounded-md hover:bg-emerald-700"
              onClick={() => {
                setIsOpen(false);
                // Add logout logic here
              }}
            >
              <div className="flex items-center space-x-2">
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </div>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}