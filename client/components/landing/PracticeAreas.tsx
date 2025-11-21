export function PracticeAreas() {
  const practiceAreas = [
    {
      title: 'Assault Charges',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/bd87a02c22e1aa693c44374b978825edae0d6a74?width=640'
    },
    {
      title: 'DWI Charges',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/9857504698dc348902511ba491e0d3a0724aabcc?width=640'
    },
    {
      title: 'Murder Charges',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/8dfbb4a06b9ede4d9ab8b3bbb0237a33816ab273?width=640'
    },
    {
      title: 'Stealing Charges',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/48fc7d214a346fbb7b8fb4533f38d19e56914cc5?width=640'
    },
    {
      title: 'Domestic Violence',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/88e58f1adf768fadbf89052f97c434081d1468a7?width=640'
    },
    {
      title: 'Fraud Charges',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/38df7ac22d5f5a6116d0bc40eef40a0bb3f6ec2e?width=640'
    },
    {
      title: 'Probation Violations',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/6468652a19e0fce207116372ae226d916b6ab759?width=640'
    },
    {
      title: 'Traffic Tickets',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/c17d1cb4e0e1a9262f8c8a34d1829c5157eff4f7?width=640'
    },
    {
      title: 'Drug Charges',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/fda0d87cb740ed9e53154d43fab137315d9a0735?width=640'
    },
    {
      title: 'Juvenile Offenses',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/9700034c1ae348cded4ac6fe711eaa4a815b6282?width=640'
    },
    {
      title: 'Sex Offenses',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/66c8101b4b3ddd541098c97d75a4121164e3b90e?width=640'
    },
    {
      title: 'Weapons Offenses',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/572c9cec31a54383750e1da85818428f1cd43d4e?width=640'
    }
  ];

  return (
    <section id="practice-areas" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-poppins text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Practice Areas
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-primary mx-auto mb-8"></div>
          <div className="max-w-3xl mx-auto text-gray-800 font-pt-sans text-base sm:text-lg leading-relaxed">
            <p>
              At The Law Offices of Brian J. Cooke, we focus entirely on criminal defense, delivering aggressive and effective legal services tailored to protect our clients' rights and provide them with a strong defense. Our legal team has extensive experience across various criminal issues, including sex crimes, drug offenses, white-collar crimes, and more.   We understand that each criminal charge has its own set of complexities, and our results speak for themselves.
            </p>
          </div>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="relative h-32 sm:h-40 rounded overflow-hidden group cursor-pointer"
            >
              <img
                src={area.image}
                alt={area.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 flex items-end justify-center p-4">
                <h3 className="font-pt-sans font-bold text-white text-center text-sm sm:text-base leading-tight">
                  {area.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
