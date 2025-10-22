import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaRss,
} from 'react-icons/fa';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

    const socials = [
    { href: "https://www.facebook.com/americaneaglecom", label: "Facebook", Icon: FaFacebookF },
    { href: "https://twitter.com/_americaneagle", label: "Twitter", Icon: FaTwitter },
    { href: "https://www.linkedin.com/company/americaneagle-com/", label: "LinkedIn", Icon: FaLinkedinIn },
    { href: "https://www.youtube.com/@Americaneagle-com", label: "YouTube", Icon: FaYoutube },
    { href: "https://www.pinterest.com/Americaneaglecom", label: "Pinterest", Icon: FaPinterestP },
    { href: "/feeds/blogs-feed", label: "Feeds", Icon: FaRss },
  ];
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
   <footer id="site-footer" className=" text-white" style={{backgroundColor:'#003057'}}>
  {/* Contact Us CTA */}


  <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {/* Office Headquarters */}
    <div>
      <h2 className="text-xl text-white font-bold text-[28px] font-libre mb-4">Office Headquarters</h2>
      <address className="not-italic mb-4 text-[16px] font-libre space-y-1">
        <p className=' text-[16px] font-libre space-y-1'>Americaneagle.com</p>
        <p className=' text-[16px] font-libre space-y-1'>2600 South River Road</p>
        <p className=' text-[16px] font-libre space-y-1'>
          Des Plaines, IL 60018
        </p>
      </address>
      <div className="space-y-2 text-sm">
        <div className="flex items-center space-x-2">
          <img
            src="https://resources.americaneagle.com/aecom-blobs/images/default-source/default-album/united-states-flag-icon.png?sfvrsn=cc1e739_2"
            alt="United States Flag"
            className="w-4 h-2.5 object-contain"
          />
          <a href="tel:+18779326691" className="hover:text-blue-600  text-[16px] font-libre space-y-1">
            +1 (877) 932-6691
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src="https://resources.americaneagle.com/aecom-blobs/images/default-source/default-album/united-kingdom-flag-icon.png?sfvrsn=4e3f3b2c_2"
            alt="United Kingdom Flag"
            className="w-4 h-2.5 object-contain"
          />
          <a href="tel:+4402081919000" className="hover:text-blue-600  text-[16px] font-libre space-y-1">
            +44 (0) 20 8191-9000
          </a>
        </div>
        <div>
          <span className="font-semibold  text-[16px] font-libre space-y-1">Fax: </span>
          <span className=' text-[16px] font-libre space-y-1'>+1 (847) 699-4207</span>
        </div>
        <div>
          <span className="font-semibold  text-[16px] font-libre space-y-1">Email: </span>
          <a href="mailto:info@americaneagle.com" className="hover:text-blue-600  text-[16px] font-libre space-y-1">
            info@americaneagle.com
          </a>
        </div>
      </div>
    </div>

    {/* Locations Links */}
    <div>
      <h2 className="text-xl font-bold mb-4">
        <a href="/locations" className="hover:underline font-libre text-[28px] font-bold ">Locations</a>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-10 lg:min-w-[500px] text-sm ">
        <ul className="space-y-2">
          <li><a href="/locations/des-plaines" className="hover:underline font-libre text-[16px] font-bold">Des Plaines (HQ)</a></li>
          <li><a href="/locations/chicago" className="hover:underline font-libre text-[16px] font-bold">Chicago</a></li>
          <li><a href="/locations/cleveland" className=" hover:underline font-libre text-[16px] font-bold">Cleveland</a></li>
          <li><a href="/locations/fort-wayne" className=" hover:underline font-libre text-[16px] font-bold">Ft. Wayne</a></li>
          <li><a href="/locations/los-angeles" className=" hover:underline font-libre text-[16px] font-bold">Los Angeles</a></li>
        </ul>
        <ul className="space-y-2">
          <li><a href="/locations/milwaukee" className="font-bold  font-libre text-[16px]   hover:underline">Milwaukee</a></li>
          <li><a href="/locations/nashville" className="font-bold font-libre text-[16px]   hover:underline">Nashville</a></li>
          <li><a href="/locations/new-york" className="font-bold  font-libre text-[16px]  hover:underline">New York</a></li>
          <li><a href="/locations/washington-dc" className="font-bold  font-libre text-[16px]  hover:underline">Washington D.C.</a></li>
        </ul>
        <ul className="space-y-2">
          <li><a href="/locations/brighton" className="font-bold font-libre text-[16px]   hover:underline">Brighton, England</a></li>
          <li><a href="/locations/sofia" className="font-bold font-libre text-[16px]   hover:underline">Sofia, Bulgaria</a></li>
          <li><a href="/locations/zurich" className="font-bold  font-libre text-[16px]  hover:underline">Zurich, Switzerland</a></li>
        </ul>
      </div>
    </div>

    {/* Social Links */}
   <div>
      <h2 className="text-xl font-bold mb-4 lg:ml-[100px]">Follow Us</h2>
      <ul className="flex space-x-4 lg:ml-[100px]">
        {socials.map(({ href, label, Icon }, idx) => (
          <li key={idx}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} - Opens a new window`}
              className="text-white hover:text-blue-600 transition-colors text-2xl"
            >
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* Subfooter */}
  <div className=" py-4 mt-8">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-white ">
      <div className="mb-2 sm:mb-0">© 2025 Americaneagle.com. All rights reserved.</div>
      <div className="flex flex-wrap gap-x-4 gap-y-1">
        <a href="/legal/terms" className="hover:underline">Terms</a>
        <a href="/legal/privacy" className="hover:underline">Privacy</a>
        <a href="/legal/website-accessibility" className="hover:underline">Accessibility</a>
        <a href="/sitemap" className="hover:underline">Sitemap</a>
        <a href="#" id="lnkKetchPrivacy" className="hover:underline">Privacy Settings</a>
      </div>
    </div>
  </div>
</footer>

  );
}