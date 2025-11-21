export function DWICaseResults() {
  const cases = [
    {
      title:
        ".12 BAC DWI reduced to reckless driving. Driver's license reinstated.",
      date: "Jul 23, 2025",
      description:
        "Client was charged with DWI after failing all field sobriety tests and blowing .12 on a breath test. We successfully challenged the breath test due to the officer failing to conduct a...",
    },
    {
      title:
        "DWI Resulting in Serious Physical Injury and ACA Charges Dismissed after Evidence Suppressed",
      date: "Mar 25, 2025",
      description:
        "A St. Louis man was charged with driving while intoxicated resulting in serious physical injury and armed criminal action after allegedly hitting another motorist and causing serious...",
    },
    {
      title: "DWI Resulting in Death Charges Reduced",
      date: "Mar 4, 2025",
      description:
        "Client was charged in DWI resulting in Death after allegedly taking police on a highspeed chase while intoxicated, wrecking his vehicle resulting in the death of a passenger. Client...",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="flex justify-center mb-4">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e3e79d800e58a7e383b75bc9e6d80dc199c24e32?width=144"
              alt="Court"
              className="h-16 sm:h-20 w-auto"
            />
          </div>
          <h2 className="font-poppins text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Latest Case Results
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 sm:p-8 bg-white hover:shadow-lg transition"
            >
              <h3 className="font-poppins text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {caseItem.title}
              </h3>
              <p className="text-sm text-gray-500 font-pt-sans mb-4">
                {caseItem.date}
              </p>
              <p className="font-pt-sans text-base sm:text-lg text-gray-800 mb-6 leading-relaxed">
                {caseItem.description}
              </p>
              <a
                href="tel:+1-314-582-8848"
                className="bg-primary text-white px-6 py-3 rounded font-pt-sans font-semibold hover:bg-blue-700 transition text-center"
              >
                Click to Call 24/7
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
