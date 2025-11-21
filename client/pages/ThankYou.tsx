import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export default function ThankYou() {
  return (
    <div className="w-full">
      <Header />
      <section className="bg-white py-20 sm:py-28 lg:py-36 min-h-[60vh] flex items-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <svg
              className="mx-auto h-16 w-16 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Thank You!
          </h1>

          <p className="font-pt-sans text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
            We have received your consultation request and will contact you
            shortly. A member of our team will reach out to discuss your case
            and answer any questions you may have.
          </p>

          <div className="space-y-4">
            <p className="font-pt-sans text-base text-gray-600">
              For urgent matters, please call us directly:
            </p>
            <a
              href="tel:(314)582-8848"
              className="inline-block font-bold text-primary hover:text-primary/80 text-2xl sm:text-3xl"
            >
              (314) 582-8848
            </a>
          </div>

          <div className="mt-12">
            <a
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-poppins font-semibold rounded hover:bg-primary/90 transition-colors"
            >
              Return to Home
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
