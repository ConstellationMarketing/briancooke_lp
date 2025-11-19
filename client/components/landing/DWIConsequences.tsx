export function DWIConsequences() {
  const consequences = [
    {
      offense: 'First Offense (Class B Misdemeanor)',
      penalties: ['Up to 6 months jail', '$500 fine', '90-day license suspension', 'Possible restricted driving privilege', 'SATOP usually required']
    },
    {
      offense: 'Second Offense (Class A Misdemeanor)',
      penalties: ['Up to 1 year in jail', '$2,000 fine', 'Minimum 10 days jail if probation is granted']
    },
    {
      offense: 'Third Offense (Class E Felony)',
      penalties: ['Up to 4 years in prison', '$10,000 fine', 'Minimum 30 days jail']
    },
    {
      offense: 'Fourth Offense (Class D Felony)',
      penalties: ['Up to 7 years in prison', '$10,000 fine', 'Minimum 60 days jail']
    },
    {
      offense: 'Fifth Offense (Class C Felony)',
      penalties: ['3–10 years in prison', 'Minimum 2 years before probation eligibility']
    },
    {
      offense: 'Sixth Offense (Class B Felony)',
      penalties: ['5–15 years in prison', 'Minimum 2 years before probation eligibility']
    }
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-poppins text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Common Consequences for a DWI in Missouri
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Consequences Grid */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="space-y-6">
            {consequences.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 sm:p-8 border border-gray-200">
                <h3 className="font-poppins text-lg sm:text-xl font-bold text-gray-900 mb-4">
                  {item.offense}
                </h3>
                <ul className="font-pt-sans text-base sm:text-lg text-gray-800 space-y-2">
                  {item.penalties.map((penalty, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>{penalty}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 sm:p-8 bg-blue-50 border border-primary rounded-lg">
            <p className="font-pt-sans text-base sm:text-lg text-gray-800 leading-relaxed">
              <strong>Aggravating factors</strong>—such as injuries, minors in the vehicle, or high BAC—can increase penalties. Administrative license consequences apply separately from court penalties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
