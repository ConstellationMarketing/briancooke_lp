import { ConsultationForm } from './ConsultationForm';

export function Consultation() {
  return (
    <section
      id="consultation"
      className="bg-primary py-12 sm:py-16 lg:py-20 relative overflow-hidden"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-poppins text-4xl sm:text-5xl font-bold text-white mb-6">
            Free Consultation
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-white mx-auto"></div>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg p-8 sm:p-12 shadow-lg">
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}
