import { 
  Monitor, Palette, LineChart, Lightbulb, Accessibility, Cloud, Users, Brain 
} from 'lucide-react';

export default function About() {
  const services = [
    {
      icon: Monitor,
      title: "Web Application & Development",
      description: "We develop award-winning websites and mobile applications built to deliver value and results.",
    },
    {
      icon: Palette,
      title: "Experience Design",
      description: "Our award-winning UX designers create visually memorable and functional online experiences.",
    },
    {
      icon: LineChart,
      title: "Digital Marketing",
      description: "Through SEO, content, email marketing and more, we develop strategies that grow your business.",
    },
    {
      icon: Lightbulb,
      title: "Strategy & Insights",
      description: "Through extensive research and analysis, we build a tailored digital strategy to fit your brand.",
    },
    {
      icon: Accessibility,
      title: "Accessibility",
      description: "We provide accessibility assessments, remediation services and training to maximize inclusion.",
    },
    {
      icon: Cloud,
      title: "Hosting & Managed Cloud Services",
      description: "We're a leading provider that provides fast, secure, PCI-Compliant hosting that's supported 24/7/365.",
    },
    {
      icon: Users,
      title: "Client Services",
      description: "We work with you to ensure when you ship, you're giving your clients the best possible experience.",
    },
    {
      icon: Brain,
      title: "Artificial Intelligence Consulting",
      description: "Automate tasks, solve tough problems, and streamline your business processes with AI-powered solutions.",
    },
  ];

  return (
 <>
      {/* Services Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container flex flex-col mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center sm:text-left mb-6 sm:mb-8 lg:mb-3">
            <h2 className="font-libre text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-center sm:text-left lg:mr-[74%] font-bold text-primary">Our Expertise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map(({ icon: Icon, title, description }, index) => (
              <div
                key={index}
                className="bg-white rounded-lg cursor-pointer group p-4 sm:p-0"
              >
                <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-accent mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl lg:text-[24px] font-bold font-libre mb-2 sm:mb-3 text-foreground">{title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{description}</p>
                <a
                  href="/about"
                  className="text-accent font-semibold hover:underline inline-flex items-center text-sm sm:text-base"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Section */}
   <section className="relative banner flex flex-col lg:flex-row items-center bg-white p-4 sm:p-6 mt-8 sm:mt-12 lg:mt-[5%] min-h-[400px] sm:min-h-[500px] lg:h-[600px] gap-6 sm:gap-8 max-w-7xl mx-auto">
  {/* Image Media */}


  <div className="relative z-20 banner__media flex-shrink-0 w-full lg:w-[55%] ml-0 lg:ml-[-10%]">
    <img
      src="https://resources.americaneagle.com/aecom-blobs/images/default-source/default-album/tablets1b1476df682348f7afe79be4f57c4862.png?sfvrsn=6289a0b2_8/"
      alt="Previous website design projects by Americaneagle.com digital agency teams with web design examples on tablets"
      className="w-full h-auto"
      loading="lazy"
      width={897}
      height={731}
    />
  </div>
        <div className="hidden lg:block absolute inset-0 w-[300px] sm:w-[400px] lg:w-[500px] bg-gray-300 rounded-lg shadow-lg mx-auto h-[200px] sm:h-[250px] lg:h-[370px] z-10 ml-[0%] mt-[7%]"></div>

  {/* Content */}
  <div className="banner__content flex flex-col w-full lg:w-[500px] lg:mb-[8%] ml-0 lg:ml-[10%] relative z-20">
    <h2 className="banner__title text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-primary mb-3 sm:mb-4 font-libre">
      Working to build your success
    </h2>
    <div className="banner__subtext text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
      <p>
        For over 25 years, Americaneagle.com, a premier digital agency, provides best-in-class web design, development, hosting, digital marketing, and managed services. With us, your success is our success, and we work with you to find powerful online solutions that fit your needs.
      </p>
    </div>
    <a
      href="/about"
      className="w-full sm:w-[200px] inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 sm:py-3 px-6 rounded shadow transition text-center"
      aria-label="More About Us .Working to build your success"
    >
      More About Us
    </a>
  </div>
</section>

 </>
  );
}