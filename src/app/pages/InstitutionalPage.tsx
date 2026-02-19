import { ArrowLeft, Building2, TrendingUp, Globe } from 'lucide-react';
import { Link } from 'react-router';

export function InstitutionalPage() {
  const services = [
    {
      icon: Building2,
      title: 'Custom Research',
      description: 'Bespoke analysis tailored to institutional investment mandates and strategic requirements.',
    },
    {
      icon: TrendingUp,
      title: 'Market Intelligence',
      description: 'Proprietary data synthesis and forecasting frameworks for institutional portfolios.',
    },
    {
      icon: Globe,
      title: 'Geopolitical Analysis',
      description: 'Strategic intelligence on global risk factors and cross-border capital flows.',
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
            Institutional White Paper
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
            Institutional-grade research and market intelligence. We provide sophisticated 
            analysis for asset managers, family offices, and strategic institutions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
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
            Institutional Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
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
                    {service.title}
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
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Areas */}
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
            Coverage Areas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Global Macro & Central Bank Policy',
              'Foreign Exchange & Currency Markets',
              'Sovereign Risk & Credit Analysis',
              'Defense & Security Intelligence',
              'Emerging Markets & Frontier Economies',
              'ESG & Regulatory Frameworks',
              'Technology & Innovation Trends',
              'Capital Markets Structure'
            ].map((area, index) => (
              <div 
                key={index}
                className="border border-[#1A1A1A] p-6 hover:border-[#404040] transition-colors"
              >
                <p 
                  className="text-[#D0D0D0]"
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '1rem',
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

      {/* Client Types */}
      <section className="py-16 px-6 border-t border-[#1A1A1A]">
        <div className="max-w-3xl mx-auto">
          <h2 
            className="mb-8"
            style={{ 
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
              fontWeight: 500,
              letterSpacing: '0.02em'
            }}
          >
            We Work With
          </h2>

          <div className="space-y-6">
            {[
              'Asset Management Firms',
              'Family Offices & Private Wealth',
              'Hedge Funds & Macro Investors',
              'Corporate Strategy Divisions',
              'Government & Policy Institutions',
              'Research & Academic Organizations'
            ].map((client, index) => (
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
                  {client}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 px-6 border-t border-[#1A1A1A]">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 
            className="mb-6"
            style={{ 
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
              fontWeight: 500,
              letterSpacing: '0.02em'
            }}
          >
            Our Approach
          </h2>

          <p 
            className="text-[#A0A0A0] leading-relaxed"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.05rem',
              fontWeight: 300,
              lineHeight: 1.8,
              letterSpacing: '0.01em'
            }}
          >
            We operate as an independent research partner—not a sell-side firm, not a data vendor. 
            Our work is analytical, structural, and designed to inform institutional decision-making.
          </p>

          <p 
            className="text-[#A0A0A0] leading-relaxed"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.05rem',
              fontWeight: 300,
              lineHeight: 1.8,
              letterSpacing: '0.01em'
            }}
          >
            All research is proprietary. We maintain strict confidentiality protocols and 
            work under tailored engagement structures.
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
            For institutional research inquiries and partnership discussions.
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
            Contact Institutional Services
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
            Blackhorse Institutional © 2026
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
