import Layout from "@/components/layout/Layout";
import { Brain } from "lucide-react";

const solutions = [
  {
    title: "AI Solution 1",
    category: "AI & Consulting",
    description: "Temporary placeholder for AI Solution 1. More details coming soon.",
    tags: ["AI", "Custom Models"],
  },
  {
    title: "AI Solution 2",
    category: "AI & Consulting",
    description: "Temporary placeholder for AI Solution 2. More details coming soon.",
    tags: ["Data Pipelines", "Consulting"],
  },
  {
    title: "AI Solution 3",
    category: "AI & Consulting",
    description: "Temporary placeholder for AI Solution 3. More details coming soon.",
    tags: ["AI", "Integration"],
  },
];

const AISolutions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(192_95%_55%_/_0.1)_0%,_transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">AI & Consulting</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Our <span className="text-gradient">AI Solutions</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              From custom model development and data pipelines to AI strategy and integration consulting — we deliver tailored AI solutions that drive real business impact.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, idx) => (
              <div
                key={idx}
                className="group glass-card overflow-hidden hover-lift"
              >
                {/* Solution Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                      <Brain className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {solution.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {solution.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="px-6 pb-6">
                  <div className="flex flex-wrap gap-2">
                    {solution.tags.map((tag, tagIdx) => (
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

export default AISolutions;
