export function Footer() {
  return (
    <footer className="border-white/10 border-t pt-16 pb-8 m-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-5 h-5 rounded bg-orange-500 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
            </div>
            <span className="text-sm font-medium text-white uppercase tracking-wide">Panorama</span>
          </div>
          <p className="text-neutral-500 text-sm mb-8 max-w-sm">
            Curating the world's finest destinations for the modern traveler. Join our community of explorers.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-neutral-600 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram w-4 h-4">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="text-neutral-600 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter w-4 h-4">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" className="text-neutral-600 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin w-4 h-4">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Menu</h4>
          <ul className="space-y-4 text-sm text-neutral-500">
            <li><a href="/" className="hover:text-orange-500 transition-colors">Home</a></li>
            <li><a href="/portfolio" className="hover:text-orange-500 transition-colors">Portfolio</a></li>
            <li><a href="/production" className="hover:text-orange-500 transition-colors">Production</a></li>
            <li><a href="/services" className="hover:text-orange-500 transition-colors">Services</a></li>
            <li><a href="/talent" className="hover:text-orange-500 transition-colors">Content Creators</a></li>
            <li><a href="/contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Newsletter</h4>
          <form className="flex flex-col gap-3">
            <input type="email" placeholder="Enter your email" className="bg-white/5 border border-white/10 rounded px-4 py-2 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500 transition-colors" />
            <button className="bg-orange-600 hover:bg-orange-500 text-white text-xs font-medium uppercase tracking-widest py-2.5 rounded transition-colors">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-neutral-600 uppercase tracking-wider">
        <p>© 2024 Panorama Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-neutral-400">Privacy Policy</a>
          <a href="#" className="hover:text-neutral-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
