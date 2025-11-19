export function Badges() {
  const badges = [
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/756426623e739cd33be04ce9f6d2d592a4bbed6f?width=296',
      alt: 'AVVO Superb'
    },
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/417bba08358e33a291f264b71399aa92684f753c?width=296',
      alt: 'NACDL'
    },
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/b4aa9f246d93f9687132aafc8cc0a9d88a76d00f?width=370',
      alt: 'Super Lawyers'
    },
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/cc3b5f83e41dfdcef65e65b2ed760073a650fff9?width=241',
      alt: '10 Best DUI'
    },
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/7252c6abfdec506a111c540564e75225f1b13d0d?width=276',
      alt: 'MACDL'
    }
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={badge.src}
                alt={badge.alt}
                className="h-20 sm:h-24 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
