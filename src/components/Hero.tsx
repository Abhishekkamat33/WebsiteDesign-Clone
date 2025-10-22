import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
<div className="bg-white overflow-visible pt-12 relative">
  <div className="relative container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 gap-8 pt-6 sm:pt-12 mt-4 overflow-x-hidden">
    {/* Text Content */}
    <div className="flex-1 w-full lg:max-w-xxl  relative z-20">
      <h1 style={{ color: '#003057' }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl w-full lg:w-[600px] font-libre font-extrabold leading-tight mb-4 sm:mb-6">
        Creating Digital Experiences That Drive Growth
      </h1>
      <p style={{color:'#262626'}} className="text-base sm:text-lg md:text-xl lg:text-[24px] font-libre mb-6 sm:mb-8">
        A web design, development, and digital marketing agency with a passionate belief in the power of technology to positively transform business practices.
      </p>
      <a
        href="/about"
        target="_blank"
        aria-label="Learn More Creating Digital Experiences That Drive Growth"
        className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded shadow-lg transition"
      >
        Learn More
      </a>
    </div>

    {/* Background Middle Div */}
    <div className="hidden lg:block absolute inset-0 max-w-4xl bg-gray-300 rounded-lg shadow-lg w-full mx-auto h-[300px] lg:h-[600px] z-10 ml-[40%]"></div>

    {/* Image Content */}
 <div className="flex-1 w-full lg:min-w-[900px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[600px] mt-0 lg:mt-[3%] relative z-20 flex items-center justify-center overflow-hidden">
  <img
  src="https://resources.americaneagle.com/aecom-blobs/images/default-source/default-album/ae_homepage_deviceimagery.png?sfvrsn=b87b782e_3"
  alt="Responsive Website Design and Web Development Examples by Americaneagle.com Website Company's Service"
  width={2500}
  height={1500}
  className="w-full h-full sm:w-[600px] sm:h-[400px] lg:w-[800px] lg:h-[600px] object-cover rounded-lg"
  loading="lazy"
/>
</div>

  </div>
</div>


  );
}