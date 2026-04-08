import Layout from "@/components/layout/Layout";
import { Bot } from "lucide-react";

const sessions = [
  {
    title: "AI Training Session 1",
    category: "Live Workshop",
    description: "Temporary placeholder for AI Training Session 1. More details coming soon.",
    tags: ["AI", "Machine Learning"],
  },
  {
    title: "AI Training Session 2",
    category: "Live Workshop",
    description: "Temporary placeholder for AI Training Session 2. More details coming soon.",
    tags: ["Generative AI", "Workshops"],
  },
  {
    title: "AI Training Session 3",
    category: "Live Workshop",
    description: "Temporary placeholder for AI Training Session 3. More details coming soon.",
    tags: ["Machine Learning", "Hands-on"],
  },
];

const AITraining = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(192_95%_55%_/_0.1)_0%,_transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Education</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Live <span className="text-gradient">AI Training</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Hands-on live training sessions for teams and individuals — covering machine learning, generative AI, and practical implementation strategies to accelerate your AI journey.
            </p>
          </div>
        </div>
      </section>

      {/* Sessions Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessions.map((session, idx) => (
              <div
                key={idx}
                className="group glass-card overflow-hidden hover-lift"
              >
                {/* Session Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                      <Bot className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {session.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {session.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {session.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="px-6 pb-6">
                  <div className="flex flex-wrap gap-2">
                    {session.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-xs px-2 py-1 rounded bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AITraining;
