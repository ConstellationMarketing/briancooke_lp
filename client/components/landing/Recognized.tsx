export function Recognized() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-poppins text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Recognized In The Industry
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-accent mx-auto mb-8"></div>
          <p className="font-pt-sans text-base sm:text-lg text-gray-800 leading-relaxed max-w-3xl mx-auto">
            St. Louis Criminal Defense Attorney Brian Cooke has been named a "Rising Star" by SuperLawyers Magazine, was awarded "10 Best in Client Satisfaction" for DWI cases in Missouri, and the Client's choice award by Avvo.com. Brian is a member of the Missouri Association of Criminal Defense Attorneys, The National Association of Criminal Defense Attorneys, and the National College for DWI defense.
          </p>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/756426623e739cd33be04ce9f6d2d592a4bbed6f?width=296"
            alt="AVVO Superb"
            className="h-20 sm:h-24 w-auto"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/417bba08358e33a291f264b71399aa92684f753c?width=296"
            alt="NACDL"
            className="h-20 sm:h-24 w-auto"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/f77b0d629e66422edd1987b9bde12de179a09dd1?width=370"
            alt="Super Lawyers"
            className="h-16 sm:h-20 w-auto"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/cc3b5f83e41dfdcef65e65b2ed760073a650fff9?width=241"
            alt="10 Best DUI"
            className="h-20 sm:h-24 w-auto"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7252c6abfdec506a111c540564e75225f1b13d0d?width=276"
            alt="MACDL"
            className="h-20 sm:h-24 w-auto"
          />
        </div>
      </div>
    </section>
  );
}
