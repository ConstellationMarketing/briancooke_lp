export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-1">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f27eaa918495e42b83efbb89b0f4ad96f25fa727?width=313"
              alt="Brian Cooke Criminal Defense"
              className="h-20 sm:h-24 w-auto"
            />
          </div>

          {/* Right side contact info */}
          <div className="flex flex-col sm:text-right gap-2 text-sm">
            <div className="font-bold text-primary">
              Free Consultation:
            </div>
            <a
              href="tel:314-526-3779"
              className="font-bold text-primary hover:underline"
            >
              314-526-3779
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
