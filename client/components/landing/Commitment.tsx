export function Commitment() {
  const values = [
    {
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=103',
      title: 'Open and Accessible',
      description:
        'I provide each client with my personal cell phone number, so they can reach me anytime day or night. Furthermore, we utilize cloud-based software so our clients can access their file anytime.'
    },
    {
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=120',
      title: 'Fair and Upfront Fees',
      description:
        'While we aren\'t the cheapest lawyers in St. Louis, we strive to work with our clients on a payment plan that won\'t break the bank. Our fees are set a flat rate based on the estimated amount of work for your case.'
    },
    {
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=107',
      title: 'Holistic representation',
      description:
        'In many cases, we work with our clients to address the underlying issues that got them in trouble in the first place. We routinely assist clients with placement in drug, alcohol, and mental health treatment.'
    }
  ];

  return (
    <section id="commitment" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-poppins text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Commitment To Our Clients
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-accent mx-auto mb-6"></div>
          <p className="font-pt-sans text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            The overwhelming majority of people we represent are good people who find themselves in bad situations. We want to help you achieve an outcome that will put you on the best path forward.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 lg:mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-primary rounded p-6 sm:p-8"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={value.icon}
                  alt={value.title}
                  className="w-16 sm:w-20 h-auto mb-4"
                />
                <h3 className="font-poppins text-lg sm:text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="font-pt-sans text-sm sm:text-base text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Extended description */}
        <div className="bg-white border-t border-accent pt-12 lg:pt-16">
          <p className="font-pt-sans text-base sm:text-lg text-gray-800 leading-relaxed text-center max-w-4xl mx-auto">
            The overwhelming majority of people we represent are good people who find themselves in bad situations. Most criminal defense attorneys accept the State's first offer and tell their client that's the best they can do. We take a different approach. Our St. Louis Criminal Defense attorney strives to not only understand the facts of your case, but also on getting to know you, what's important to you, and how to find an outcome that will put you on the best path forward. For some clients, this means keeping the matter discreet by negotiating with the prosecution to avoid a criminal conviction. For others, this means taking the case all the way to trial and securing a not guilty verdict. Either way, we pride ourselves on being open and accessible to our clients throughout the process.
          </p>
        </div>
      </div>
    </section>
  );
}
