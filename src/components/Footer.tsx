const SECTIONS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#product" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Comparison", href: "#product" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Team", href: "#team" },
      { label: "Research", href: "#research" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
              VISTA
            </span>
            <p className="text-sm text-gray-500 mt-3 max-w-xs leading-relaxed">
              Spatial computing tools that make data accessible to everyone.
            </p>
          </div>

          {/* Link sections */}
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-gray-800 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; 2024–2026 VISTA INC. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Built by VISTA INC.
          </p>
        </div>
      </div>
    </footer>
  );
}
