import { ArrowLeft, Download, Lock } from 'lucide-react';
import { Link } from 'react-router';

export function WhitePaperPage() {
  const papers = [
    {
      title: 'Global Currency Dynamics: A Structural Framework',
      date: 'February 2026',
      pages: '48 pages',
      category: 'Foreign Exchange'
    },
    {
      title: 'Defense Spending & Strategic Positioning in the Indo-Pacific',
      date: 'January 2026',
      pages: '62 pages',
      category: 'Defense Analysis'
    },
    {
      title: 'Information Architecture in Modern Markets',
      date: 'December 2025',
      pages: '34 pages',
      category: 'Market Structure'
    },
    {
      title: 'Signal Processing: Filtering Noise in Financial Media',
      date: 'November 2025',
      pages: '41 pages',
      category: 'Research Methods'
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
            White Paper
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
            Foundational research and strategic analysis. Access our library of 
            comprehensive white papers on markets, defense, and systems intelligence.
          </p>
        </div>
      </section>

      {/* Papers List */}
      <section className="py-16 px-6 border-t border-[#1A1A1A]">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="mb-12"
            style={{ 
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
              fontWeight: 500,
              letterSpacing: '0.02em'
            }}
          >
            Available Research
          </h2>

          <div className="space-y-6">
            {papers.map((paper, index) => (
              <div 
                key={index}
                className="border border-[#1A1A1A] p-8 hover:border-[#404040] transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="mb-2">
                      <span 
                        className="text-[#606060] text-xs uppercase tracking-wider"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                      >
                        {paper.category}
                      </span>
                    </div>
                    
                    <h3 
                      className="mb-3"
                      style={{ 
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '1.5rem',
                        fontWeight: 500,
                        letterSpacing: '0.01em'
                      }}
                    >
                      {paper.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-[#808080]">
                      <span 
                        style={{ 
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.875rem',
                          fontWeight: 300
                        }}
                      >
                        {paper.date}
                      </span>
                      <span>•</span>
                      <span 
                        style={{ 
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.875rem',
                          fontWeight: 300
                        }}
                      >
                        {paper.pages}
                      </span>
                    </div>
                  </div>

                  <button
                    className="inline-flex items-center gap-2 px-6 py-3 border border-[#404040] text-[#D0D0D0] hover:border-[#707070] hover:text-[#F5F5F5] transition-all"
                    style={{ 
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      letterSpacing: '0.05em'
                    }}
                  >
                    <Lock className="w-4 h-4" />
                    REQUEST ACCESS
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Information */}
      <section className="py-16 px-6 border-t border-[#1A1A1A]">
        <div className="max-w-3xl mx-auto">
          <h2 
            className="mb-6"
            style={{ 
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: 500,
              letterSpacing: '0.02em'
            }}
          >
            Access & Distribution
          </h2>

          <div className="space-y-4 text-[#A0A0A0]">
            <p 
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontSize: '1rem',
                fontWeight: 300,
                lineHeight: 1.8,
                letterSpacing: '0.01em'
              }}
            >
              White papers are distributed on a selective basis to institutional clients, 
              research partners, and qualified individual subscribers.
            </p>
            
            <p 
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontSize: '1rem',
                fontWeight: 300,
                lineHeight: 1.8,
                letterSpacing: '0.01em'
              }}
            >
              All research is proprietary and subject to usage restrictions. 
              Contact us to discuss access arrangements.
            </p>
          </div>
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
            To request access to white papers or discuss research partnerships.
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
            Request Access
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
            Blackhorse Research © 2026
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