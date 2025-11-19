export function Hero() {
  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2Fa20fd3c7a4a842c7a353e617a6076f53?format=webp&width=800)',
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-gray-900 z-10">
            <h3 className="font-poppins text-primary font-bold text-base sm:text-lg uppercase tracking-wide mb-4">
              St. Louis Criminal Defense Lawyer
            </h3>

            <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Results Driven
              <br />
              Defense.
            </h1>

            <div className="w-24 sm:w-32 h-1 bg-primary mb-6"></div>

            <p className="font-poppins text-xl sm:text-2xl font-bold leading-relaxed mb-8">
              Criminal defense is all we do. And we do it very well.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToConsultation}
                className="bg-primary text-white px-6 py-3 rounded font-pt-sans font-semibold hover:bg-blue-700 transition"
              >
                Schedule a Free Consultation
              </button>
              <a
                href="tel:314-526-3779"
                className="bg-primary text-white px-6 py-3 rounded font-pt-sans font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                <svg width="21" height="21" viewBox="0 0 21 21" fill="currentColor">
                  <path d="M15.75 21C16.1055 21 16.4131 20.8701 16.6729 20.6104C16.9326 20.3506 17.0625 20.043 17.0625 19.6875V1.3125C17.0625 0.957031 16.9326 0.649414 16.6729 0.389648C16.4131 0.129883 16.1055 0 15.75 0H6.5625C6.20703 0 5.89941 0.129883 5.63965 0.389648C5.37988 0.649414 5.25 0.957031 5.25 1.3125V19.6875C5.25 20.043 5.37988 20.3506 5.63965 20.6104C5.89941 20.8701 6.20703 21 6.5625 21H15.75ZM10.5 18.9492C10.5 18.7441 10.5718 18.5698 10.7153 18.4263C10.8589 18.2827 11.0332 18.2109 11.2383 18.2109C11.4434 18.2109 11.6177 18.2827 11.7612 18.4263C11.9048 18.5698 11.9766 18.7441 11.9766 18.9492C11.9766 19.1543 11.9048 19.3286 11.7612 19.4722C11.6177 19.6157 11.4434 19.6875 11.2383 19.6875C11.0332 19.6875 10.8589 19.6157 10.7153 19.4722C10.5718 19.3286 10.5 19.1543 10.5 18.9492ZM13.7812 1.3125C13.959 1.3125 14.1128 1.37744 14.2427 1.50732C14.3726 1.63721 14.4375 1.79102 14.4375 1.96875C14.4375 2.14648 14.3726 2.30029 14.2427 2.43018C14.1128 2.56006 13.959 2.625 13.7812 2.625H12.4688C12.291 2.625 12.1372 2.56006 12.0073 2.43018C11.8774 2.30029 11.8125 2.14648 11.8125 1.96875C11.8125 1.79102 11.8774 1.63721 12.0073 1.50732C12.1372 1.37744 12.291 1.3125 12.4688 1.3125H13.7812ZM10.5 1.96875C10.5 2.14648 10.4351 2.30029 10.3052 2.43018C10.1753 2.56006 10.0215 2.625 9.84375 2.625C9.66602 2.625 9.51221 2.56006 9.38232 2.43018C9.25244 2.30029 9.1875 2.14648 9.1875 1.96875C9.1875 1.79102 9.25244 1.63721 9.38232 1.50732C9.51221 1.37744 9.66602 1.3125 9.84375 1.3125C10.0215 1.3125 10.1753 1.37744 10.3052 1.50732C10.4351 1.63721 10.5 1.79102 10.5 1.96875ZM6.5625 3.9375H15.75V17.0625H6.5625V3.9375Z" />
                </svg>
                Click to Call 24/7
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:flex justify-center items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/8d3d8a7aeeb7ba7f29d3921d0439b8f538952c76?width=997"
              alt="Brian Cooke"
              className="w-full max-w-md rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
