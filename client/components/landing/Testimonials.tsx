import { useState, useEffect } from 'react';

export function Testimonials() {
  const testimonials = [
    {
      text: "I came across numerous of lawyers, and by far Brian has been one of the best, not only did he help me with my case but he has also been there for me mentally, whatever question i asked he answered, if i became nervous he encouraged me and simply reassured me there where to be no worries. He goes above and beyond to help his clients, if there's a solution he's going to try every one possible, he's been my lawyer for a year now and with every call no matter what time Brian was there. I'm so thankful to of had a lawyer as Brian, he's highly recommended. Thank you Brian for helping and sticking by me, i really appreciate it.",
      author: "Dasia",
      source: "AVVO.com"
    },
    {
      text: "Brian was upfront and honest with me about everything immediately and told me exactly what to expect. He was also able to get all my charges dropped. HIGHLY RECOMMEND.",
      author: "LouGotti",
      source: "Client"
    },
    {
      text: "Amazing attorney, attention to detail is fantastic will come to him in the future 100%",
      author: "Alexis Treas",
      source: "Client"
    },
    {
      text: "Brian Cook is absolutely amazing. He was very informative with all of his information. He caught touch quickly, extremely professional I would 100% recommend him as a lawyer. He is the best of the best.",
      author: "Lillian Ellsworth",
      source: "Client"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section
      className="bg-primary py-16 sm:py-20 lg:py-28 relative overflow-hidden"
      style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-poppins text-4xl sm:text-5xl font-bold text-white mb-6">
            Client Testimonials
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Content */}
            <div className="min-h-[280px] sm:min-h-[320px] flex flex-col justify-center text-center">
              <p className="font-pt-sans text-lg sm:text-xl text-white leading-relaxed mb-6 italic transition-opacity duration-500">
                "{testimonials[currentIndex].text}"
              </p>
              <p className="font-pt-sans text-lg text-accent italic font-semibold transition-opacity duration-500">
                {testimonials[currentIndex].author} - {testimonials[currentIndex].source}
              </p>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-accent w-8'
                      : 'bg-white/40 w-2.5 hover:bg-white/60'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="#testimonials"
              className="font-pt-sans text-lg font-bold text-accent hover:underline"
            >
              View More Testimonials
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
