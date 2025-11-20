export function AboutBrian() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-poppins text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Meet Brian Cooke
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Main Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16 lg:mb-20">
          <div className="order-2 lg:order-1">
            <p className="font-pt-sans text-base sm:text-lg text-gray-800 leading-relaxed mb-6">
              At The Law Offices of Brian J. Cooke, LLC we understand a criminal charge is one of the most stressful experiences imaginable. After being arrested, taken to jail, and hauled into court, it often feels as if you've already been convicted. While no attorney can ethically guarantee a result, we do guarantee that we will do everything possible to obtain the best outcome possible in your case. Whether you're facing a serious felony charge or a low-level misdemeanor, it's always a serious matter when your reputation is at stake.
            </p>
            <p className="font-pt-sans text-base sm:text-lg text-gray-800 leading-relaxed mb-8">
              At The Law Offices of Brian J. Cooke, we treat your criminal case as if it were our own. We're not interested in taking the prosecutor's first offer. We don't pressure our clients into plea deals. We explore every possible defense and prepare each case as if it is going to trial. The founding attorney of our law firm, Brian Cooke, has represented individuals facing just about every charge–from misdemeanors to murder. Whether you are a first-time offender or have a significant criminal history, we fight each case with everything we have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:314-526-3779" className="bg-primary text-white px-6 py-3 rounded font-pt-sans font-semibold hover:bg-blue-700 transition text-center">
                Click to Call 24/7
              </a>
              <button className="bg-primary text-white px-6 py-3 rounded font-pt-sans font-semibold hover:bg-blue-700 transition">
                Schedule a Free Consultation
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/6954551955b5167d051da3916fa534f94a1a4fc0?width=1286"
              alt="Brian Cooke"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Get Help */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="order-2 lg:order-1">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/b43a009d0b79ec50fde15ed6ee6daf458b2ef7a9?width=1270"
              alt="Get Help"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="font-poppins text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Get Help From The Law Offices of Brian J. Cooke
            </h3>
            <p className="font-pt-sans text-base sm:text-lg text-gray-800 leading-relaxed mb-8">
              Receive legal advice and help from St. Louis criminal defense attorney Brian Cooke. If you are facing DWI charges, you need an experienced defense lawyer to ensure that your rights are protected. The Law Offices of Brian J. Cooke offers quality representation. Call or email us 24/7 to schedule a free 30 minute consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:314-526-3779" className="bg-primary text-white px-6 py-3 rounded font-pt-sans font-semibold hover:bg-blue-700 transition text-center">
                Click to Call 24/7
              </a>
              <button className="bg-primary text-white px-6 py-3 rounded font-pt-sans font-semibold hover:bg-blue-700 transition">
                Schedule a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
