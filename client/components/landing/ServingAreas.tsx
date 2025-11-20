export function ServingAreas() {
  const areas = [
    'St. Louis County',
    'St. Louis City',
    'St. Charles County',
    'Franklin County',
    'Jefferson County'
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-poppins text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            We Proudly Serve These Areas
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-primary rounded p-6 sm:p-8 text-center"
            >
              <h3 className="font-poppins text-lg sm:text-xl font-bold text-gray-900">
                {area}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
