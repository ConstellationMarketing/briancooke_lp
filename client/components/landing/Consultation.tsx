export function Consultation() {
  return (
    <section
      id="consultation"
      className="bg-white py-16 sm:py-20 lg:py-28 bg-cover bg-center relative"
      style={{
        backgroundImage:
          'url(https://api.builder.io/api/v1/image/assets/TEMP/514673afc02c3ed92c05252b9953b6ba78094825?width=3840)'
      }}
    >
      <div className="absolute inset-0 bg-white/80"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left content */}
          <div>
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Free Consultation
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-primary mb-8"></div>

            <p className="font-pt-sans text-base sm:text-lg leading-relaxed mb-6 text-gray-800">
              Have you been accused of a DWI in the St. Louis area? Reach out to The Law Offices of Brian J. Cooke.
            </p>

            <p className="font-pt-sans text-base sm:text-lg leading-relaxed mb-8 text-gray-800">
              While no outcome can be guaranteed, what we can promise is our relentless pursuit of the most favorable outcome in your case.
            </p>

            <p className="font-pt-sans text-base sm:text-lg mb-4 text-gray-800">
              Our satisfaction comes not just from successful case resolutions, but also from the knowledge that we have helped you navigate through one of your most challenging journeys.
            </p>

            <p className="font-pt-sans text-base sm:text-lg mb-8 text-gray-800">
              Contact us today to schedule a free consultation.
            </p>

            <div className="border-t border-primary pt-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" className="text-primary">
                  <path d="M11 0C4.9 0 0 4.9 0 11s4.9 11 11 11 11-4.9 11-11S17.1 0 11 0zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm3.5-9c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm-7 0c0 .83-.67 1.5-1.5 1.5S4 11.83 4 11s.67-1.5 1.5-1.5S7.5 10.17 7.5 11z" />
                </svg>
                <a href="tel:314-526-3779" className="font-pt-sans text-lg font-bold text-primary hover:underline transition">
                  314-526-3779
                </a>
              </div>

              <div className="flex items-start gap-3 mb-6">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" className="text-primary">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <div>
                  <a href="mailto:Brian@stlouiscriminaldefense.com" className="font-pt-sans text-lg font-bold text-primary hover:underline transition">
                    Brian@stlouiscriminaldefense.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" className="text-primary">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                </svg>
                <div className="font-pt-sans text-lg font-bold text-gray-900">
                  1015 Locust St., Unit 1000, St Louis, MO 63101
                </div>
              </div>
            </div>
          </div>

          {/* Right map placeholder */}
          <div className="hidden lg:block bg-white/90 rounded-lg p-4 h-96 shadow-lg">
            <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
              <p className="text-gray-600 font-pt-sans">Map location</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
