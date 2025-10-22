import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'expertise', 'platforms', 'insights', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { 
      id: 'Expertise', 
      label: 'Expertise',
      hasDropdown: true,
      dropdownItems: [
        'Web Design',
        'Web Development',
        'Digital Marketing',
        'Mobile Apps',
        'E-commerce Solutions'
      ]
    },
    { id: 'Projects', label: 'Projects' },
    { 
      id: 'Platforms', 
      label: 'Platforms',
      hasDropdown: true,
      dropdownItems: [
        'WordPress',
        'Shopify',
        'Magento',
        'Custom CMS',
        'Sitecore'
      ]
    },
    { 
      id: 'Insights', 
      label: 'Insights',
      hasDropdown: true,
      dropdownItems: [
        'Blog',
        'Case Studies',
        'Whitepapers',
        'Industry Reports',
        'News & Updates'
      ]
    },
    { id: 'Careers', label: 'Careers' },
    { id: 'About', label: 'About' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div style={{ color: '#E5E5E5' }} className="bg-gray-200 border-b border-gray-200">
        <div className="container mx-auto px-4 py-1 flex items-center justify-end text-xs sm:text-sm">
          <img
            src="https://resources.americaneagle.com/aecom-blobs/images/default-source/default-album/united-states-flag-icon.png?sfvrsn=cc1e739_2"
            alt="United States Flag"
            className="w-3 h-2 sm:w-4 sm:h-2.5 mr-1 sm:mr-2 object-contain"
            loading="lazy"
          />
          <a
            href="tel:+18779326691"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
          >
            +1 (877) 932-6691
          </a>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex-shrink-0">
            <button onClick={() => scrollToSection('home')} className="">
              <img
                src="https://resources.americaneagle.com/aecom-blobs/images/default-source/default-album/logo77462a6763c4412b9e51c1748903cc85.png?sfvrsn=d5826bc9_8"
                alt="Company Logo"
                className="h-12 sm:h-16 lg:h-[80px] mr-2 sm:mr-5 w-auto"
              />
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-1 mt-2">
            {menuItems.map((item) => (
              <div 
                key={item.id} 
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item?.id)}
                onMouseLeave={() => item.hasDropdown && setOpenDropdown(null)}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  style={{ color: '#003057' }}
                  className={`px-4 py-2 rounded-lg text-lg font-bold font-libre h-12 transition-all leading-[1.4] flex items-center gap-1 ${
                    activeSection === item.id
                      ? ''
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={16} />}
                </button>

                {item.hasDropdown && openDropdown === item.id && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    {item.dropdownItems.map((dropdownItem, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection(item.id)}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                      >
                        {dropdownItem}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden lg:block ml-4 px-6 py-2.5 bg-[#C8102E] text-white rounded-lg font-medium hover:bg-[#8A0B1F] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 h-[40px] pb-8 min-w-[130px]"
          >
            Contact us
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            {menuItems.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => {
                    if (item.hasDropdown) {
                      toggleDropdown(item.id);
                    } else {
                      scrollToSection(item.id);
                    }
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center justify-between ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={16} />}
                </button>
                
                {item.hasDropdown && openDropdown === item.id && (
                  <div className="pl-4 mt-1">
                    {item.dropdownItems.map((dropdownItem, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection(item.id)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                      >
                        {dropdownItem}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full mt-4 px-6 py-3 bg-[#A80E26] text-white rounded-lg font-medium hover:bg-[#8A0B1F] transition-all"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}