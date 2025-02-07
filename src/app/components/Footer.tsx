import Link from "next/link";

export default function Footer() {
  return (
    <main className="w-full bg-blue-100 text-black py-16">
      {/* Footer Container */}
      <footer className="w-full py-2 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Address Column */}
            <div className="text-sm text-black mt-12">
              <h3 className="font-medium mb-4 text-black">Our Address</h3>
              <p>400 University Drive Suite 200 Coral Gables,</p>
              <p>FL 33134 USA</p>
            </div>

            {/* Links Column */}
            <div>
              <h3 className="font-medium mb-4 text-black">Quick Links</h3>
              <nav className="flex flex-col space-y-3 text-sm">
                <Link href="#" className="hover:text-gray-700 transition-all">
                  Home
                </Link>
                <Link href="/Shop" className="hover:text-gray-700 transition-all">
                  Shop
                </Link>
                <Link href="/Blog" className="hover:text-gray-700 transition-all">
                  Blog
                </Link>
                <Link href="/Contact" className="hover:text-gray-700 transition-all">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Help Column */}
            <div>
              <h3 className="font-medium mb-4 text-black">Help</h3>
              <nav className="flex flex-col space-y-3 text-sm">
                <Link href="#" className="hover:text-gray-700 transition-all">
                  Payment Options
                </Link>
                <Link href="#" className="hover:text-gray-700 transition-all">
                  Returns
                </Link>
                <Link href="#" className="hover:text-gray-700 transition-all">
                  Privacy Policies
                </Link>
              </nav>
            </div>

            {/* Newsletter Column */}
            <div>
              <h3 className="font-medium mb-4 text-black">Newsletter</h3>
              <form className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-1 px-4 py-2 rounded-md text-sm bg-white text-black border border-gray-300 focus:outline-none focus:border-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-all"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <p className="text-sm text-black">© 2025 Ali Sher Jutt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
