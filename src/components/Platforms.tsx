export default function Platforms() {

 
  return (
<section className="py-8 sm:py-12 mb-[250px] lg:py-16 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
    {/* Section Title */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-libre font-bold mb-4 sm:mb-6 lg:mb-4">The Latest Insights</h2>

    {/* Insight Items Grid */}
    <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-4 lg:gap-1" style={{height:'800px'}}>
      {/* Featured News */}
      <article className="flex w-full lg:w-[98%] mb-8 sm:mb-12 lg:mb-[194px] flex-col overflow-hidden lg:mr-[40px]">
        
        <div className="img w-full sm:w-[350px] md:w-[400px] h-auto sm:h-[350px] md:h-[400px] mx-auto sm:ml-[40px] lg:ml-[80px]">
        <img
          src="https://resources.americaneagle.com/aecom-blobs/images/default-source/news-images/nevco-sports-fanzone-site-launch-news-story.jpg"
          alt="Nevco Sports launches Fanzone website featuring custom scoreboards and fan experiences, signifying successful web development"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        </div>
        <div className="p-4 sm:p-6 flex flex-col flex-grow">
          <div className="flex items-center space-x-3 text-xs uppercase text-blue-600 font-semibold mb-2">
            <span>News</span>
            <span>•</span>
            <time dateTime="2025-09-09" className="text-gray-500">September 9, 2025</time>
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-navy mb-2 sm:mb-3">
            <a
              href="https://www.americaneagle.com/insights/news/news-article/2025/09/09/americaneagle-launches-fanzone-scoreboards-website-that-is-built-to-win"
              className="hover:underline text-base sm:text-[18px] font-bold font-libre"
            >
              Americaneagle.com Launches FanZone Scoreboards Website That is Built to Win
            </a>
          </h3>
          <p className="text-gray-700 flex-grow mb-4 text-sm sm:text-base lg:text-[18px] font-libre" style={{color:'#262626'}}>
            Americaneagle.com has teamed up with Nevco Sports to launch{' '}
            <a
              href="https://www.fanzonescoreboards.com"
              className="text-blue-600 hover:underline text-sm sm:text-base lg:text-[18px] font-bold font-libre"
           
            >
              www.fanzonescoreboards.com
            </a >
            , a new ecommerce site showcasing FanZone Scoreboards—team-licensed NFL displays designed to bring the energy of game day into homes and businesses.
               <a
            href="https://www.americaneagle.com/insights/news/news-article/2025/09/09/americaneagle-launches-fanzone-scoreboards-website-that-is-built-to-win"
            aria-label="Read more about Americaneagle.com Launches FanZone Scoreboards Website That is Built to Win"
            className="text-red-600 font-semibold hover:underline block mt-2"
            style={{color:'#003057'}}
          >
            Read More
          </a>
          </p>
       
        </div>
      </article>


      <div className="second flex flex-col gap-4 lg:gap-1 w-full lg:w-[98%]">
<div className="thied flex flex-col md:flex-row items-start justify-between w-full gap-4">
      {/* Case Study */}
      <article className="flex flex-col rounded-lg overflow-hidden min-h-0 md:min-h-[446.917px] w-full md:w-1/2">
        <img
          src="https://resources.americaneagle.com/aecom-blobs/images/default-source/project-images/case-study-images/cleveland-metroparks-portfolio-tile.png"
          alt="Autumn waterfall in forest, reflecting success with digital services for parks, civic engagement, and public outreach"
          className="w-full h-40 sm:h-48 object-cover"
          loading="lazy"
        />
        <div className="p-4 sm:p-6 flex flex-col flex-grow">
          <div className="text-xs uppercase text-blue-600 font-semibold mb-2">Case Study</div>
          <h3 className="text-base sm:text-lg font-semibold text-navy mb-2 sm:mb-3">
            <a
              href="https://www.americaneagle.com/projects/detail/cleveland-metroparks"
              className="hover:underline"
            >
              Cleveland Metroparks
            </a>
          </h3>
          <p className="text-gray-700 flex-grow mb-3 sm:mb-4 text-sm sm:text-base">
            Cleveland Metroparks is a vast network of hiking trails, lakefront parks, nature centers, golf courses, and more in Greater Cleveland, ...
          </p>
          <a
            href="https://www.americaneagle.com/projects/detail/cleveland-metroparks"
            aria-label="Read more about Cleveland Metroparks"
            className="text-red-600 font-semibold hover:underline text-sm sm:text-base"
          >
            Read More
          </a>
        </div>
      </article>

      {/* Blog */}
      <article className="flex flex-col rounded-lg overflow-hidden  md:min-h-[446.917px] w-full md:w-1/2">
        <img
          src="https://resources.americaneagle.com/aecom-blobs/images/default-source/blog-images/retargeting-advertising-without-cookies.jpg"
          alt="Person on a laptop analyzing data driven marketing strategies and insights for retargeting advertising based on user intent"
          className="w-full h-40 sm:h-48 object-cover"
          loading="lazy"
        />
        <div className="p-4 sm:p-6 flex flex-col flex-grow">
          <div className="text-xs uppercase text-blue-600 font-semibold mb-2">Blog</div>
          <h3 className="text-base sm:text-lg font-semibold text-navy mb-2 sm:mb-3">
            <a
              href="https://www.americaneagle.com/insights/blog/post/retargeting-advertising-without-cookies"
              className="hover:underline"
            >
              Retargeting Advertising Without Cookies: The Future of Intent-Driven Marketing
            </a>
          </h3>
          <p className="text-gray-700 flex-grow mb-3 sm:mb-4 text-sm sm:text-base">
            Discover how to run effective retargeting advertising without cookies by optimizing for search intent, buyer journeys, and intent-based...
          </p>
          <a
            href="https://www.americaneagle.com/insights/blog/post/retargeting-advertising-without-cookies"
            aria-label="Read more about Retargeting Advertising Without Cookies: The Future of Intent-Driven Marketing"
            className="text-red-600 font-semibold hover:underline text-sm sm:text-base"
          >
            Read More
          </a>
        </div>
      </article>
   
    </div>
        {/* Bottom Banner */}
           <div className="text-center  mt-4 sm:mt-6   lg:mt-2 border-2 border-gray-600 p-6 sm:p-8 min-h-[180px] sm:min-h-[200px]">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-libre font-bold mb-4 sm:mb-6">Take a closer look...</h2>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
        <a
          href="/projects"
          className="w-full sm:w-auto sm:min-w-[200px] lg:min-w-[240.438px] inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded shadow transition"
        >
          View Portfolio
        </a>
        <a
          href="/insights"
          className="w-full sm:w-auto sm:min-w-[200px] lg:min-w-[240.438px] inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded shadow transition"
        >
          Read Insights
        </a>
      </div>
    </div>
      </div>
    </div>



  </div>
</section>

  );
}