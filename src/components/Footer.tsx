const Footer = () => {
  return (
    <footer className="bg-[#1F3A2E] text-[#E8DFD1] px-6 md:px-16 lg:px-24 pt-20 pb-10">
      <div className="flex flex-wrap justify-between gap-14 border-b border-[#3d5747] pb-14">
        {/* Brand */}
        <div className="max-w-sm">
          <h2 className="text-3xl font-serif text-[#F8F5F0]">ELYSIAN</h2>

          <p className="mt-5 text-sm leading-7 text-[#d7d0c7]">
            Exceptional residences curated for individuals who value elegance,
            privacy and timeless architecture.
          </p>

          <div className="flex gap-4 mt-6 text-[#C6A87A]">
            <svg
              className="w-5 h-5 hover:text-white cursor-pointer transition"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5z" />
            </svg>

            <svg
              className="w-5 h-5 hover:text-white cursor-pointer transition"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8v3h2.5V21h3v-7.5H16l.5-3h-3z" />
            </svg>

            <svg
              className="w-5 h-5 hover:text-white cursor-pointer transition"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 5.92a8.2 8.2 0 01-2.36.65" />
            </svg>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-[#C6A87A] uppercase tracking-[0.2em] text-sm">
            Company
          </h3>

          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a className="hover:text-white transition" href="#">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="#">
                Properties
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="#">
                Investments
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="max-w-sm">
          <h3 className="text-[#C6A87A] uppercase tracking-[0.2em] text-sm">
            Newsletter
          </h3>

          <p className="mt-5 text-sm leading-7 text-[#d7d0c7]">
            Receive exclusive listings and luxury market insights.
          </p>

          <div className="flex mt-6">
            <input
              type="email"
              placeholder="Your email"
              className="bg-[#2D4A3A] border border-[#3d5747] px-4 py-3 outline-none text-sm w-full"
            />

            <button className="bg-[#C6A87A] text-[#1F3A2E] px-6 hover:bg-[#d8bc93] transition">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-sm text-[#bfb8ae]">
        <p>© {new Date().getFullYear()} ELYSIAN. All rights reserved.</p>

        <div className="flex gap-6">
          <a className="hover:text-white transition" href="#">
            Privacy
          </a>
          <a className="hover:text-white transition" href="#">
            Terms
          </a>
          <a className="hover:text-white transition" href="#">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
