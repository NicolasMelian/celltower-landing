import Link from "next/link";

export const APP_STORE_URL =
  "https://apps.apple.com/app/cell-tower-locator-find-5g/id6758106959";

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.nicomelian.celltower";

// Drop a photo in /public (e.g. a cell-tower shot from Unsplash) and set this
// to its path, e.g. "/tower.jpg", to turn every hero into a photo background
// with a dark overlay. Leave empty to use the built-in gradient + signal motif.
export const HERO_IMAGE = "";

export function HeroBackdrop({
  image = HERO_IMAGE,
}: {
  image?: string;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
      {image ? (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a0a0e]/85" />
        </>
      ) : null}
      {/* Gradient glow */}
      <div className="absolute -top-40 -right-32 h-[42rem] w-[42rem] rounded-full bg-gradient-to-br from-blue-600/25 via-indigo-600/10 to-transparent blur-3xl" />
      {/* Signal-wave motif */}
      <svg
        className="absolute right-6 top-24 h-72 w-72 text-blue-500/15 md:right-24 lg:h-96 lg:w-96"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <circle cx="100" cy="140" r="18" />
        <path d="M70 110a42 42 0 0160 0M55 95a64 64 0 0190 0M40 80a86 86 0 01120 0" />
      </svg>
    </div>
  );
}

export function AppStoreButton({
  size = "md",
  className = "",
}: {
  size?: "md" | "lg";
  className?: string;
}) {
  const h = size === "lg" ? "h-14" : "h-12";
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Cell Tower Locator on the App Store"
        className="inline-block hover:scale-105 transition-transform"
      >
        <img
          src="/applebutton.png"
          alt="Download Cell Tower Locator on the App Store"
          className={`${h} w-auto`}
        />
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get Cell Tower Locator on Google Play"
        className="inline-block hover:scale-105 transition-transform"
      >
        <img
          src="/playstore.png"
          alt="Get Cell Tower Locator on Google Play"
          className={`${h} w-auto`}
        />
      </a>
    </div>
  );
}

export function Nav() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
      <Link href="/" className="flex items-center gap-3">
        <img
          src="/app-icon.jpeg"
          alt="Cell Tower Locator app logo"
          className="w-9 h-9 rounded-lg"
        />
        <span className="text-2xl font-bold text-white">
          Cell<span className="text-blue-500">Tower</span>
        </span>
      </Link>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#111116] border-t border-gray-700 py-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div className="space-y-3">
            <div className="font-semibold text-white">Find Towers</div>
            <Link
              href="/cell-tower-finder"
              className="block text-gray-300 hover:text-white"
            >
              Cell Tower Finder
            </Link>
            <Link
              href="/5g-tower-map"
              className="block text-gray-300 hover:text-white"
            >
              5G Tower Map
            </Link>
            <Link
              href="/cell-signal-strength"
              className="block text-gray-300 hover:text-white"
            >
              Cell Signal Strength
            </Link>
            <Link
              href="/alternatives"
              className="block text-gray-300 hover:text-white"
            >
              App Comparisons
            </Link>
          </div>
          <div className="space-y-3">
            <div className="font-semibold text-white">By Carrier</div>
            <Link
              href="/carriers/verizon"
              className="block text-gray-300 hover:text-white"
            >
              Verizon Towers
            </Link>
            <Link
              href="/carriers/att"
              className="block text-gray-300 hover:text-white"
            >
              AT&amp;T Towers
            </Link>
            <Link
              href="/carriers/t-mobile"
              className="block text-gray-300 hover:text-white"
            >
              T-Mobile Towers
            </Link>
            <Link
              href="/carriers"
              className="block text-gray-300 hover:text-white"
            >
              All carriers →
            </Link>
          </div>
          <div className="space-y-3">
            <div className="font-semibold text-white">More Carriers</div>
            <Link
              href="/carriers/consumer-cellular"
              className="block text-gray-300 hover:text-white"
            >
              Consumer Cellular
            </Link>
            <Link
              href="/carriers/us-cellular"
              className="block text-gray-300 hover:text-white"
            >
              UScellular
            </Link>
            <Link
              href="/carriers/boost-mobile"
              className="block text-gray-300 hover:text-white"
            >
              Boost Mobile
            </Link>
          </div>
          <div className="space-y-3">
            <div className="font-semibold text-white">Company</div>
            <a
              href="https://meliann.notion.site/Privacy-Policy-For-Cell-Tower-Locator-2ef476f8f04180ad945dcb2cc01b742e"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-300 hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-300 hover:text-white"
            >
              Terms of Use
            </a>
            <a
              href="mailto:info@nicomelian.com"
              className="block text-gray-300 hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3 border-t border-gray-700 pt-6">
          <img
            src="/app-icon.jpeg"
            alt="Cell Tower Locator"
            className="w-7 h-7 rounded-md"
          />
          <span className="text-lg font-bold text-white">
            Cell<span className="text-blue-500">Tower</span>
          </span>
          <span className="text-gray-500">
            &copy; {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-4">
      {items.map((f) => (
        <details
          key={f.q}
          className="group bg-[#1a1a20] border border-gray-700 rounded-2xl px-6 py-5"
        >
          <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-white list-none">
            {f.q}
            <span className="ml-4 text-blue-500 transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 text-gray-300 leading-relaxed">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function FaqJsonLd({ items }: { items: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
