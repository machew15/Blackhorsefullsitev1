import { useEffect, useState } from 'react';
import '/styles.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Update page title and favicon based on current page
    const titles: Record<string, string> = {
      home: 'Blackhorse ♛',
      defense: 'Defense Systems | Blackhorse',
      publishing: 'Publishing | Blackhorse',
      whitepaper: 'White Paper | Blackhorse',
      institutional: 'Institutional White Paper | Blackhorse'
    };
    
    document.title = titles[currentPage] || 'Blackhorse ♛';
    
    // Set favicon
    const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🐴</text></svg>";
    if (!document.querySelector("link[rel*='icon']")) {
      document.head.appendChild(favicon);
    }

    // Close dropdown when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.nav-dropdown')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [currentPage]);

  useEffect(() => {
    // Scroll to top when page changes
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    setIsDropdownOpen(false);
    window.location.hash = page;
  };

  return (
    <>
      {/* Navigation */}
      <nav id="navigation">
        <div className="nav-container">
          <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }}>
            <span className="logo-text">Blackhorse</span>
            <span className="logo-icon">♛</span>
          </a>

          <div className="nav-links">
            <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }}>HOME</a>
            
            <div className="nav-dropdown">
              <button 
                className="nav-link projects-dropdown" 
                onClick={(e) => { e.stopPropagation(); setIsDropdownOpen(!isDropdownOpen); }}
              >
                PROJECTS
                <svg className={`chevron ${isDropdownOpen ? 'rotated' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div className={`dropdown-menu ${isDropdownOpen ? 'active' : ''}`}>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('defense'); }}>Blackhorse Defense Systems</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('publishing'); }}>Blackhorse Publishing</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('whitepaper'); }}>White Paper</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('institutional'); }}>Institutional White Paper</a>
              </div>
            </div>

            <a href="mailto:contact@blackhorsepublishing.net" className="nav-link">INQUIRE</a>
          </div>
        </div>
      </nav>

      {/* Home Page */}
      <div id="page-home" className={`page ${currentPage === 'home' ? 'active' : ''}`}>
        <div className="home-container">
          <div className="home-content">
            <div className="home-wordmark">
              <h1 className="wordmark">Blackhorse</h1>
              <span className="wordmark-icon">♛</span>
            </div>
            
            <p className="home-descriptor">Research, intelligence, and publishing.</p>
            
            <div className="home-buttons">
              <button className="btn btn-primary" onClick={() => setIsDropdownOpen(true)}>
                Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              
              <a href="mailto:contact@blackhorsepublishing.net" className="btn btn-secondary">
                Inquire
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>

          <footer className="home-footer">
            <p>© 2026</p>
          </footer>
        </div>
      </div>

      {/* Defense Page */}
      <div id="page-defense" className={`page ${currentPage === 'defense' ? 'active' : ''}`}>
        <div className="page-content">
          <div className="back-link-container">
            <a href="#" className="back-link" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              BACK TO BLACKHORSE
            </a>
          </div>

          <section className="hero-section">
            <h1 className="page-title">Blackhorse Defense Systems</h1>
            <p className="page-subtitle">Independent defense intelligence and strategic analysis. We provide institutional-grade research on global security dynamics, military capabilities, and strategic positioning.</p>
          </section>

          <section className="content-section">
            <h2 className="section-title">Core Capabilities</h2>
            <div className="grid-3">
              <div className="card">
                <svg className="card-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h3 className="card-title">Strategic Defense Analysis</h3>
                <p className="card-description">Comprehensive assessment of global defense postures and strategic capabilities.</p>
              </div>
              <div className="card">
                <svg className="card-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
                <h3 className="card-title">Threat Intelligence</h3>
                <p className="card-description">Real-time monitoring and analysis of emerging security threats and geopolitical shifts.</p>
              </div>
              <div className="card">
                <svg className="card-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="2"></circle>
                  <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
                </svg>
                <h3 className="card-title">Signal Intelligence</h3>
                <p className="card-description">Advanced signal processing and intelligence gathering frameworks.</p>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2 className="section-title">Services</h2>
            <div className="list-items">
              <div className="list-item">Geopolitical Risk Assessment</div>
              <div className="list-item">Defense Industry Analysis</div>
              <div className="list-item">Strategic Forecasting</div>
              <div className="list-item">Intelligence Briefings</div>
              <div className="list-item">Custom Research & Consulting</div>
            </div>
          </section>

          <section className="cta-section">
            <p className="cta-text">For inquiries regarding defense intelligence services and strategic analysis partnerships.</p>
            <a href="mailto:contact@blackhorsepublishing.net" className="btn btn-primary">Contact Defense Systems</a>
          </section>

          <footer className="page-footer">
            <p>Blackhorse Defense Systems © 2026</p>
            <a href="mailto:contact@blackhorsepublishing.net">contact@blackhorsepublishing.net</a>
          </footer>
        </div>
      </div>

      {/* Publishing Page */}
      <div id="page-publishing" className={`page ${currentPage === 'publishing' ? 'active' : ''}`}>
        <div className="page-content">
          <div className="back-link-container">
            <a href="#" className="back-link" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              BACK TO BLACKHORSE
            </a>
          </div>

          <section className="hero-section">
            <h1 className="page-title">Blackhorse Publishing</h1>
            <p className="page-subtitle">Independent research and publishing. We produce original analysis on markets, systems, and signal for institutional and sophisticated individual readers.</p>
          </section>

          <section className="content-section">
            <h2 className="section-title">Publication Types</h2>
            <div className="grid-3">
              <div className="card">
                <svg className="card-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
                <h3 className="card-title">Research Reports</h3>
                <p className="card-description">In-depth market research and economic analysis for institutional audiences.</p>
              </div>
              <div className="card">
                <svg className="card-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  <path d="M2 2l7.586 7.586"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
                <h3 className="card-title">Editorial Essays</h3>
                <p className="card-description">Long-form thought pieces on markets, systems, and strategic frameworks.</p>
              </div>
              <div className="card">
                <svg className="card-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <h3 className="card-title">White Papers</h3>
                <p className="card-description">Foundational research documents and technical analysis.</p>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2 className="section-title">Research Focus</h2>
            <div className="list-items">
              <div className="list-item">Macroeconomic Analysis & Forecasting</div>
              <div className="list-item">Currency Markets & Foreign Exchange</div>
              <div className="list-item">Geopolitical Risk & Strategic Intelligence</div>
              <div className="list-item">Financial Systems & Market Structure</div>
              <div className="list-item">Language, Narrative & Information Flow</div>
            </div>
          </section>

          <section className="philosophy-section">
            <p className="philosophy-quote">"We publish what we believe to be true. We own our analysis. We answer to readers, not advertisers or platforms."</p>
          </section>

          <section className="cta-section">
            <p className="cta-text">For editorial inquiries, research partnerships, or subscription information.</p>
            <div className="home-buttons">
              <a href="mailto:contact@blackhorsepublishing.net" className="btn btn-primary">Contact Publishing</a>
              <a href="https://substack.com/@vicarofdrip" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Visit Substack
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </section>

          <footer className="page-footer">
            <p>Blackhorse Publishing © 2026</p>
            <a href="mailto:contact@blackhorsepublishing.net">contact@blackhorsepublishing.net</a>
          </footer>
        </div>
      </div>

      {/* White Paper Page */}
      <div id="page-whitepaper" className={`page ${currentPage === 'whitepaper' ? 'active' : ''}`}>
        <div className="page-content">
          <div className="back-link-container">
            <a href="#" className="back-link" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              BACK TO BLACKHORSE
            </a>
          </div>

          <section className="hero-section">
            <h1 className="page-title">White Paper</h1>
            <p className="page-subtitle">Foundational research and strategic analysis. Access our library of comprehensive white papers on markets, defense, and systems intelligence.</p>
          </section>

          <section className="content-section">
            <h2 className="section-title">Available Research</h2>
            <div className="papers-list">
              <div className="paper-item">
                <div className="paper-content">
                  <span className="paper-category">FOREIGN EXCHANGE</span>
                  <h3 className="paper-title">Global Currency Dynamics: A Structural Framework</h3>
                  <div className="paper-meta">
                    <span>February 2026</span>
                    <span>•</span>
                    <span>48 pages</span>
                  </div>
                </div>
                <a href="mailto:contact@blackhorsepublishing.net?subject=Request%20Access%3A%20Global%20Currency%20Dynamics" className="btn btn-secondary btn-small">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  REQUEST ACCESS
                </a>
              </div>

              <div className="paper-item">
                <div className="paper-content">
                  <span className="paper-category">DEFENSE ANALYSIS</span>
                  <h3 className="paper-title">Defense Spending & Strategic Positioning in the Indo-Pacific</h3>
                  <div className="paper-meta">
                    <span>January 2026</span>
                    <span>•</span>
                    <span>62 pages</span>
                  </div>
                </div>
                <a href="mailto:contact@blackhorsepublishing.net?subject=Request%20Access%3A%20Defense%20Spending%20%26%20Indo-Pacific" className="btn btn-secondary btn-small">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  REQUEST ACCESS
                </a>
              </div>

              <div className="paper-item">
                <div className="paper-content">
                  <span className="paper-category">MARKET STRUCTURE</span>
                  <h3 className="paper-title">Information Architecture in Modern Markets</h3>
                  <div className="paper-meta">
                    <span>December 2025</span>
                    <span>•</span>
                    <span>34 pages</span>
                  </div>
                </div>
                <a href="mailto:contact@blackhorsepublishing.net?subject=Request%20Access%3A%20Information%20Architecture%20in%20Modern%20Markets" className="btn btn-secondary btn-small">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  REQUEST ACCESS
                </a>
              </div>

              <div className="paper-item">
                <div className="paper-content">
                  <span className="paper-category">RESEARCH METHODS</span>
                  <h3 className="paper-title">Signal Processing: Filtering Noise in Financial Media</h3>
                  <div className="paper-meta">
                    <span>November 2025</span>
                    <span>•</span>
                    <span>41 pages</span>
                  </div>
                </div>
                <a href="mailto:contact@blackhorsepublishing.net?subject=Request%20Access%3A%20Signal%20Processing" className="btn btn-secondary btn-small">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  REQUEST ACCESS
                </a>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2 className="section-title">Access & Distribution</h2>
            <div className="access-info">
              <p>White papers are distributed on a selective basis to institutional clients, research partners, and qualified individual subscribers.</p>
              <p>All research is proprietary and subject to usage restrictions. Contact us to discuss access arrangements.</p>
            </div>
          </section>

          <section className="cta-section">
            <p className="cta-text">To request access to white papers or discuss research partnerships.</p>
            <a href="mailto:contact@blackhorsepublishing.net" className="btn btn-primary">Request Access</a>
          </section>

          <footer className="page-footer">
            <p>Blackhorse Research © 2026</p>
            <a href="mailto:contact@blackhorsepublishing.net">contact@blackhorsepublishing.net</a>
          </footer>
        </div>
      </div>

      {/* Institutional Page */}
      <div id="page-institutional" className={`page ${currentPage === 'institutional' ? 'active' : ''}`}>
        <div className="page-content">
          <div className="back-link-container">
            <a href="#" className="back-link" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              BACK TO BLACKHORSE
            </a>
          </div>

          <section className="hero-section">
            <h1 className="page-title">Institutional White Paper</h1>
            <p className="page-subtitle">Institutional-grade research and market intelligence. We provide sophisticated analysis for asset managers, family offices, and strategic institutions.</p>
          </section>

          <section className="content-section">
            <h2 className="section-title">Institutional Services</h2>
            <div className="grid-3">
              <div className="card">
                <svg className="card-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                <h3 className="card-title">Custom Research</h3>
                <p className="card-description">Bespoke analysis tailored to institutional investment mandates and strategic requirements.</p>
              </div>
              <div className="card">
                <svg className="card-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
                <h3 className="card-title">Market Intelligence</h3>
                <p className="card-description">Proprietary data synthesis and forecasting frameworks for institutional portfolios.</p>
              </div>
              <div className="card">
                <svg className="card-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <h3 className="card-title">Geopolitical Analysis</h3>
                <p className="card-description">Strategic intelligence on global risk factors and cross-border capital flows.</p>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2 className="section-title">Coverage Areas</h2>
            <div className="grid-2">
              <div className="card-small">Global Macro & Central Bank Policy</div>
              <div className="card-small">Foreign Exchange & Currency Markets</div>
              <div className="card-small">Sovereign Risk & Credit Analysis</div>
              <div className="card-small">Defense & Security Intelligence</div>
              <div className="card-small">Emerging Markets & Frontier Economies</div>
              <div className="card-small">ESG & Regulatory Frameworks</div>
              <div className="card-small">Technology & Innovation Trends</div>
              <div className="card-small">Capital Markets Structure</div>
            </div>
          </section>

          <section className="content-section">
            <h2 className="section-title">We Work With</h2>
            <div className="list-items">
              <div className="list-item">Asset Management Firms</div>
              <div className="list-item">Family Offices & Private Wealth</div>
              <div className="list-item">Hedge Funds & Macro Investors</div>
              <div className="list-item">Corporate Strategy Divisions</div>
              <div className="list-item">Government & Policy Institutions</div>
              <div className="list-item">Research & Academic Organizations</div>
            </div>
          </section>

          <section className="content-section">
            <h2 className="section-title">Our Approach</h2>
            <div className="approach-text">
              <p>We operate as an independent research partner—not a sell-side firm, not a data vendor. Our work is analytical, structural, and designed to inform institutional decision-making.</p>
              <p>All research is proprietary. We maintain strict confidentiality protocols and work under tailored engagement structures.</p>
            </div>
          </section>

          <section className="cta-section">
            <p className="cta-text">For institutional research inquiries and partnership discussions.</p>
            <a href="mailto:contact@blackhorsepublishing.net" className="btn btn-primary">Contact Institutional Services</a>
          </section>

          <footer className="page-footer">
            <p>Blackhorse Institutional © 2026</p>
            <a href="mailto:contact@blackhorsepublishing.net">contact@blackhorsepublishing.net</a>
          </footer>
        </div>
      </div>
    </>
  );
}