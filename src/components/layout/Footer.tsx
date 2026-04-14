"use client";

import BrandSlider from "@/components/BrandSlider";

export function Footer() {
  return (
    <>
      <BrandSlider />
      <footer className="border-white/10 border-t pt-16 pb-8 m-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-5 h-5 rounded bg-orange-500 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
            </div>
            <span className="text-sm font-medium text-white uppercase tracking-wide">ORGNLFAKE</span>
          </div>
          <p className="text-neutral-500 text-sm mb-8 max-w-sm">
            Curating the finest creative talent and high fashion content. Join our pro-choice collective.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/orgnlfake_/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram w-4 h-4">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@orgnlfakecreators" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.8-5.46-.4-2.51.3-5.26 2.05-7.1 1.77-1.89 4.41-2.9 6.96-2.58v4.08c-1.31-.22-2.73.08-3.79.91-.84.6-1.39 1.58-1.48 2.62-.1 1.25.4 2.53 1.33 3.33 1.12.98 2.8.99 3.99.1.84-.6 1.34-1.57 1.4-2.6.08-3.05.02-6.11.05-9.17z"/>
              </svg>
            </a>
            <a href="https://za.pinterest.com/orgnlfake/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026h.032z"/>
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
        <p>© 2026 ORGNLFAKE. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="/privacy" className="hover:text-neutral-400">Privacy Policy</a>
          <a href="/terms" className="hover:text-neutral-400">Terms of Service</a>
        </div>
      </div>
    </footer>
    </>
  );
}
