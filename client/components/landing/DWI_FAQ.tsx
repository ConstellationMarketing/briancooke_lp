export function DWI_FAQ() {
  const faqs = [
    {
      question: 'What does it mean to be charged with a DWI in Missouri?',
      answer:
        'A DWI charge means the state believes you were operating a vehicle while impaired by alcohol or drugs. Even a first-time allegation—whether based on a breath test, blood test, or the officer\'s observations—can immediately threaten your license, employment, insurance rates, and criminal record. A DWI is a serious criminal charge that can follow you for years if not handled properly.'
    },
    {
      question: 'What happens right after a DWI arrest, and why does timing matter?',
      answer:
        'After an arrest, officers typically conduct chemical testing and issue paperwork that may trigger an automatic license suspension. You usually have only 15 days to request a hearing to fight this suspension. Missing this deadline almost guarantees a loss of driving privileges. A lawyer can act fast to protect your license and preserve crucial evidence.'
    },
    {
      question: 'Why are there two separate cases against me?',
      answer:
        'A DWI creates an administrative case with the Department of Revenue (license-related) and a criminal case in court (guilt, penalties, and your record). You can win one and lose the other unless both are strategically managed. An attorney who understands both systems can protect every aspect of your case.'
    },
    {
      question: 'What penalties am I really facing?',
      answer:
        'Depending on whether this is a first offense or a repeat charge, you may face license suspension or revocation, jail time or probation, heavy fines, ignition interlock device, higher insurance costs, a damaging criminal record, and professional or employment consequences. A lawyer can often reduce these penalties—or help you avoid them—by challenging the evidence or negotiating effectively.'
    },
    {
      question: 'Why is having an attorney so important?',
      answer:
        'DWI cases rely on technical evidence such as breath tests, police observations, field sobriety tests, and machine calibration records. Any error by police can be used to your advantage, but only if a skilled attorney knows how to find it. A lawyer will protect your rights immediately, identify weaknesses in the prosecution\'s case, challenge unreliable or improperly collected evidence, negotiate aggressively for reduced charges, and fight to protect your license, your record, and your future. Trying to handle a DWI alone puts your freedom, finances, and reputation at risk.'
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-poppins text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            FAQ About DWI Charges — What You Need to Know Right Now
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-primary mx-auto"></div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-l-4 border-primary pl-6 sm:pl-8">
              <h3 className="font-poppins text-lg sm:text-xl font-bold text-gray-900 mb-4">
                {faq.question}
              </h3>
              <p className="font-pt-sans text-base sm:text-lg text-gray-800 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
