import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import { ChevronDown } from 'lucide-react';

export function Navigation() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProjectsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const projects = [
    { name: 'Blackhorse Defense Systems', path: '/defense' },
    { name: 'Blackhorse Publishing', path: '/publishing' },
    { name: 'White Paper', path: '/whitepaper' },
    { name: 'Institutional White Paper', path: '/institutional' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span 
              style={{ 
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.5rem',
                fontWeight: 500,
                letterSpacing: '0.05em',
                color: '#F5F5F5'
              }}
            >
              Blackhorse
            </span>
            <span style={{ fontSize: '1.25rem', color: '#F5F5F5' }}>♛</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link 
              to="/"
              className={`transition-colors ${
                location.pathname === '/' ? 'text-[#F5F5F5]' : 'text-[#909090] hover:text-[#F5F5F5]'
              }`}
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9rem',
                letterSpacing: '0.05em',
                fontWeight: 500
              }}
            >
              HOME
            </Link>

            {/* Projects Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                className="projects-dropdown flex items-center gap-1 text-[#909090] hover:text-[#F5F5F5] transition-colors"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em',
                  fontWeight: 500
                }}
              >
                PROJECTS
                <ChevronDown className={`w-4 h-4 transition-transform ${isProjectsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isProjectsOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-[#0A0A0A] border border-[#1A1A1A] shadow-xl">
                  {projects.map((project) => (
                    <Link
                      key={project.path}
                      to={project.path}
                      onClick={() => setIsProjectsOpen(false)}
                      className="block px-6 py-3 text-[#D0D0D0] hover:text-[#F5F5F5] hover:bg-[#151515] transition-all border-b border-[#1A1A1A] last:border-b-0"
                      style={{ 
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.9rem',
                        letterSpacing: '0.02em',
                        fontWeight: 300
                      }}
                    >
                      {project.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a 
              href="mailto:contact@blackhorsepublishing.net"
              className="text-[#909090] hover:text-[#F5F5F5] transition-colors"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9rem',
                letterSpacing: '0.05em',
                fontWeight: 500
              }}
            >
              INQUIRE
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}