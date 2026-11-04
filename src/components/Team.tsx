const TEAM = [
  {
    name: "Joel Saji Varghese",
    role: "Co-founder",
    initials: "JS",
    linkedin: "https://www.linkedin.com/in/joel662/",
    bio: "MSc in Computer Science from Algoma University. Researches Human-Computer Interaction, Spatial Computing, and Natural User Interfaces at the SLIDE Research Studio. Has published and presented work at ISMAR, HCII, and ACM conferences.",
    tags: ["HCI", "Spatial Computing", "XR", "Unity"],
  },
  {
    name: "Niya Jose",
    role: "Co-founder",
    initials: "NJ",
    linkedin: "https://www.linkedin.com/in/niya-jose/",
    bio: "BBA from Algoma University in Business Analysis and Advertising. President of the Rotaract Club of Algoma University. Background in digital strategy, UX design, and human resources. Co-presented research at HCII 2026.",
    tags: ["Business Strategy", "UX Design", "Operations"],
  },
  {
    name: "Tarang Rana",
    role: "Co-founder",
    initials: "TR",
    linkedin: "https://www.linkedin.com/in/rana-tarang/",
    bio: "Research Assistant at the SLIDE Research Studio and the SaTS Lab. Also co-founded Boundless Reality Origin Studios, an accessibility-focused VR game studio for Meta Quest. Won the main track at ThunderHacks 2026 with ManualXR, a see-through 3D guide system.",
    tags: ["XR Development", "Unity", "Creative Direction"],
  },
];

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-violet-200 bg-violet-50 text-sm text-violet-600">
            Our Team
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            Meet the Founders
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            We believe everyone should be able to talk to their data and see
            the answer in the space around them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="reveal group flex flex-col p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:border-violet-300 hover:shadow-md transition-all duration-300"
            >
              {/* Avatar + name */}
              <div className="text-center mb-5">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-indigo-500/20">
                  {member.initials}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-indigo-600 text-sm font-medium">{member.role}</p>
              </div>

              {/* Bio */}
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                {member.bio}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {member.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-xs border border-gray-200 bg-gray-50 text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* LinkedIn */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#0a66c2] transition-colors"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
