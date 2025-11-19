export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-primary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-12 py-4">
          <button
            onClick={() => scrollToSection('commitment')}
            className="font-poppins font-bold text-sm sm:text-base tracking-wider uppercase hover:text-accent transition"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('practice-areas')}
            className="font-poppins font-bold text-sm sm:text-base tracking-wider uppercase hover:text-accent transition"
          >
            Practice Areas
          </button>
          <button
            onClick={() => scrollToSection('consultation')}
            className="font-poppins font-bold text-sm sm:text-base tracking-wider uppercase hover:text-accent transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}
