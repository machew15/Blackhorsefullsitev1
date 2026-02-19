import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function HomePage() {
  return (
    <div className="min-h-screen bg-black text-[#F5F5F5] flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center space-y-12">
        {/* Wordmark */}
        <div className="flex items-center justify-center gap-3">
          <h1 
            style={{ 
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              fontWeight: 500,
              letterSpacing: '0.05em'
            }}
          >
            blackhorse
          </h1>
          <span 
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              lineHeight: 1
            }}
          >
            ♛
          </span>
        </div>
        
        {/* Descriptor */}
        <p 
          className="text-[#A0A0A0]"
          style={{ 
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
            fontWeight: 300,
            letterSpacing: '0.02em'
          }}
        >
          Research, intelligence, and publishing.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <a 
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('.projects-dropdown')?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
            }}
            className="group px-10 py-3 bg-[#F5F5F5] text-black transition-all duration-300 hover:bg-[#E5E5E5] inline-flex items-center gap-2"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: '0.02em' }}
          >
            Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          
          <a 
            href="mailto:contact@blackhorsepublishing.net"
            className="group px-10 py-3 border border-[#404040] text-[#F5F5F5] transition-all duration-300 hover:border-[#707070] hover:bg-[#0A0A0A] inline-flex items-center gap-2"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: '0.02em' }}
          >
            Inquire
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p 
            className="text-[#606060]"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              letterSpacing: '0.02em'
            }}
          >
            © 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
