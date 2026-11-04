import SectionHeader from "./SectionHeader";

const TEAM = [
  {
    name: "Joel Saji Varghese",
    role: "Co-founder",
    linkedin: "https://www.linkedin.com/in/joel662/",
    bio: "MSc in Computer Science, Algoma University. Researches human-computer interaction, spatial computing, and natural user interfaces at the SLIDE Research Studio. Published and presented at ISMAR, HCII, and ACM conferences.",
  },
  {
    name: "Niya Jose",
    role: "Co-founder",
    linkedin: "https://www.linkedin.com/in/niya-jose/",
    bio: "BBA in Business Analysis and Advertising, Algoma University. President of the Rotaract Club of Algoma University. Background in digital strategy, UX design, and human resources. Co-presented research at HCII 2026.",
  },
  {
    name: "Tarang Rana",
    role: "Co-founder",
    linkedin: "https://www.linkedin.com/in/rana-tarang/",
    bio: "Research Assistant at the SLIDE Research Studio and the SaTS Lab. Co-founded Boundless Reality Origin Studios, an accessibility-focused VR studio for Meta Quest. Won the main track at ThunderHacks 2026 with ManualXR.",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-16 md:py-32 bg-canvas border-y border-line">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          index="06"
          label="Team"
          title="Leadership"
          intro="A founding team combining mixed-reality research, XR engineering, and business operations."
        />

        <div data-animate="fade" className="grid md:grid-cols-3 gap-px bg-line border border-line rounded-xl overflow-hidden">
          {TEAM.map((m) => (
            <article key={m.name} className="bg-paper p-6 md:p-8 flex flex-col">
              <h3 className="text-lg font-medium text-ink">{m.name}</h3>
              <p className="text-sm text-muted">{m.role}</p>
              <p className="mt-5 text-sm text-body leading-relaxed flex-1">{m.bio}</p>
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center min-h-11 text-sm font-medium text-accent hover:underline underline-offset-4"
              >
                LinkedIn →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
