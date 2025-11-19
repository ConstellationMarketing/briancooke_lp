export function Testimonials() {
  return (
    <section className="bg-gradient-to-r from-primary to-blue-700 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-poppins text-4xl sm:text-5xl font-bold text-white mb-6">
            Client Testimonials
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-pt-sans text-lg sm:text-xl text-white leading-relaxed mb-6 italic">
            "I came across numerous of lawyers, and by far Brian has been one of the best, not only did he help me with my case but he has also been there for me mentally, whatever question i asked he answered, if i became nervous he encouraged me and simply reassured me there where to be no worries. He goes above and beyond to help his clients, if there's a solution he's going to try every one possible, he's been my lawyer for a year now and with every call no matter what time Brian was there. I'm so thankful to of had a lawyer as Brian, he's highly recommended. Thank you Brian for helping and sticking by me, i really appreciate it."
          </p>
          <p className="font-pt-sans text-lg text-accent italic font-semibold">
            Dasia - AVVO.com
          </p>
          <div className="mt-8">
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
