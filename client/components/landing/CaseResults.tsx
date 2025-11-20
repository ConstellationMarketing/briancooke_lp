export function CaseResults() {
  const cases = [
    {
      title: 'Teacher accused of felony assault on student: Case Dismissed',
      date: 'Oct 19, 2025',
      description:
        'Client was a teacher accused of kicking a student, causing physical injury. During our investigation we uncovered that the alleged bruise was actually a birth mark and that the allegation...'
    },
    {
      title: 'Domestic Assault, UUW, and Stealing Charges Dismissed; Probation Reinstated',
      date: 'Oct 13, 2025',
      description:
        'Client was on probation for shooting at or from a motor vehicle and faced a mandatory 15 year sentence if revoked. While on probation, Client was charged with felony Domestic Assault,...'
    },
    {
      title: 'Missouri Woman Acquitted of Statutory Sodomy',
      date: 'Aug 22, 2025',
      description:
        'A Missouri woman was charged with statutory sodomy after her daughter alleged that she had shown her pornography and touched her genitals. Attorney Brian Cooke assisted Phil Eisenhauer in...'
    },
    {
      title: '.12 BAC DWI reduced to reckless driving. Driver\'s license reinstated.',
      date: 'Jul 23, 2025',
      description:
        'Client was charged with DWI after failing all field sobriety tests and blowing .12 on a breath test. We successfully challenged the breath test due to the officer failing to conduct a...'
    },
    {
      title: 'Aggravated Felony Fleeing Charges Reduced to Misdemeanor',
      date: 'Jul 10, 2025',
      description:
        'Client was charged with aggravated fleeing under Missouri\'s new Valentine\'s Law. Client was accused of taking police on a high speed chase in a manner that created a substantial risk of...'
    },
    {
      title: 'Felony Domestic Assault Charges Dismissed after "victim" forced to admit allegation was fabrication',
      date: 'Jun 18, 2025',
      description:
        'A prominent St. Louis night club promoter was charged with Domestic Assault in the 2nd Degree, Domestic Assault in the 3rd Degree, and Stealing after a former girlfriend accused him of...'
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
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
            <div key={index} className="border border-gray-200 rounded-lg p-6 sm:p-8 bg-white hover:shadow-lg transition">
              <h3 className="font-poppins text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {caseItem.title}
              </h3>
              <p className="text-sm text-gray-500 font-pt-sans mb-4">
                {caseItem.date}
              </p>
              <p className="font-pt-sans text-base sm:text-lg text-gray-800 mb-6 leading-relaxed">
                {caseItem.description}
              </p>
              <a href="tel:314-526-3779" className="bg-primary text-white px-6 py-3 rounded font-pt-sans font-semibold hover:bg-blue-700 transition text-center">
                Click to Call 24/7
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
