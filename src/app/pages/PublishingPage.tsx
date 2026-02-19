import { ArrowLeft, BookOpen, PenTool, FileText } from 'lucide-react';
import { Link } from 'react-router';

export function PublishingPage() {
  const publications = [
    {
      icon: BookOpen,
      title: 'Research Reports',
      description: 'In-depth market research and economic analysis for institutional audiences.',
    },
    {
      icon: PenTool,
      title: 'Editorial Essays',
      description: 'Long-form thought pieces on markets, systems, and strategic frameworks.',
    },
    {
      icon: FileText,
      title: 'White Papers',
      description: 'Foundational research documents and technical analysis.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-[#F5F5F5] pt-24">
      {/* Back Link */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-[#909090] hover:text-[#F5F5F5] transition-colors"
          style={{ 
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.875rem',
            letterSpacing: '0.05em',
            fontWeight: 500
          }}
        >
          <ArrowLeft className="w-4 h-4" />
          BACK TO BLACKHORSE
        </Link>
      </div>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 
            style={{ 
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 500,
              letterSpacing: '0.03em'
            }}
          >
            Blackhorse Publishing
          </h1>
          
          <p 
            className="text-[#A0A0A0] max-w-2xl mx-auto leading-relaxed"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
              fontWeight: 300,
              lineHeight: 1.8
            }}
          >
            Independent research and publishing. We produce original analysis on markets, 
            systems, and signal for institutional and sophisticated individual readers.
          </p>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-16 px-6 border-t border-[#1A1A1A]">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="mb-12 text-center"
            style={{ 
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
              fontWeight: 500,
              letterSpacing: '0.02em'
            }}
          >
            Publication Types
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {publications.map((publication, index) => {
              const Icon = publication.icon;
              return (
                <div 
                  key={index}
                  className="border border-[#1A1A1A] p-8 hover:border-[#404040] transition-colors"
                >
                  <Icon className="w-10 h-10 mb-6 text-[#606060]" strokeWidth={1.5} />
                  
                  <h3 
                    className="mb-4"
                    style={{ 
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.35rem',
                      fontWeight: 500,
                      letterSpacing: '0.01em'
                    }}
                  >
                    {publication.title}
                  </h3>
                  
                  <p 
                    className="text-[#909090] leading-relaxed"
                    style={{ 
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.95rem',
                      fontWeight: 300,
                      lineHeight: 1.7
                    }}
                  >
                    {publication.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 px-6 border-t border-[#1A1A1A]">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="mb-8"
            style={{ 
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
              fontWeight: 500,
              letterSpacing: '0.02em'
            }}
          >
            Research Focus
          </h2>

          <div className="space-y-6">
            {[
              'Macroeconomic Analysis & Forecasting',
              'Currency Markets & Foreign Exchange',
              'Geopolitical Risk & Strategic Intelligence',
              'Financial Systems & Market Structure',
              'Language, Narrative & Information Flow'
            ].map((area, index) => (
              <div 
                key={index}
                className="border-b border-[#1A1A1A] pb-4"
              >
                <p 
                  className="text-[#D0D0D0]"
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '1.05rem',
                    fontWeight: 300,
                    letterSpacing: '0.01em'
                  }}
                >
                  {area}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 px-6 border-t border-[#1A1A1A]">
        <div className="max-w-3xl mx-auto">
          <p 
            className="text-[#808080] italic text-center leading-relaxed"
            style={{ 
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
              lineHeight: 1.8,
              letterSpacing: '0.01em'
            }}
          >
            "We publish what we believe to be true. We own our analysis. 
            We answer to readers, not advertisers or platforms."
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-[#1A1A1A]">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p 
            className="text-[#A0A0A0]"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.05rem',
              fontWeight: 300,
              lineHeight: 1.8
            }}
          >
            For editorial inquiries, research partnerships, or subscription information.
          </p>
          
          <a 
            href="mailto:contact@blackhorsepublishing.net"
            className="inline-block px-10 py-4 bg-[#F5F5F5] text-black transition-all duration-300 hover:bg-[#E5E5E5]"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              letterSpacing: '0.02em'
            }}
          >
            Contact Publishing
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1A1A1A] py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p 
            className="text-[#606060]"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.875rem',
              letterSpacing: '0.02em'
            }}
          >
            Blackhorse Publishing © 2026
          </p>
          
          <a 
            href="mailto:contact@blackhorsepublishing.net"
            className="text-[#606060] hover:text-[#909090] transition-colors"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.875rem',
              letterSpacing: '0.02em'
            }}
          >
            contact@blackhorsepublishing.net
          </a>
        </div>
      </footer>
    </div>
  );
}
