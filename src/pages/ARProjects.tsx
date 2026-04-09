import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Glasses, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const arProjects = [
  {
    title: "3D kultūrēkas",
    category: "Augmented Reality",
    description: "An AR mobile app that brings back three historic Liepāja buildings lost to history — letting you see them in real life again through your device's camera.",
    tags: ["Unity", "ARKit", "ARCore", "iOS", "Android"],
    detailPage: "/ar-projects/kulturekas",
  },
  {
    title: "3D Berči ēkas Liepājā",
    category: "Augmented Reality",
    description: "An AR mobile app that reconstructs three historic Liepāja buildings designed by architect Pauls Makss Berči and his son — see them standing again through your camera.",
    tags: ["Unity", "ARKit", "ARCore", "iOS", "Android"],
    detailPage: "/ar-projects/berci",
  },
  {
    title: "AR Project 3",
    category: "Augmented Reality",
    description: "Temporary placeholder for AR project 3. More details coming soon.",
    tags: ["Unity", "ARKit", "ARCore"],
  },
];

const ARProjects = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(192_95%_55%_/_0.1)_0%,_transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Augmented Reality</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Our <span className="text-gradient">AR Projects</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore our augmented reality projects — immersive experiences built with Unity, ARKit, and ARCore that blend the digital and physical worlds.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {arProjects.map((project, idx) => (
              <div
                key={idx}
                className="group glass-card overflow-hidden hover-lift"
              >
                {/* Project Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                      <Glasses className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tags & Action */}
                <div className="px-6 pb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-xs px-2 py-1 rounded bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.detailPage && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group/btn p-0 h-auto text-muted-foreground hover:text-primary"
                      onClick={() => navigate(project.detailPage!)}
                    >
                      About project
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ARProjects;
