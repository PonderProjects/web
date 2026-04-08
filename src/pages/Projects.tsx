import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ExternalLink, Brain, Glasses, BarChart3, Bot, Layers, Workflow } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Conferences",
    category: "Public Speaking",
    description: "We offer expert speaking engagements at conferences worldwide, sharing insights on AI, machine learning, and augmented reality innovations.",
    icon: BarChart3,
    tags: ["AI", "Machine Learning", "AR", "Public Speaking"],
    conferencesPage: true,
  },
  {
    title: "AR Projects",
    category: "Augmented Reality",
    description: "We are building cutting-edge augmented reality projects that blend the digital and physical worlds — from industrial training to interactive experiences.",
    icon: Glasses,
    tags: ["Unity", "ARKit", "ARCore"],
    arPage: true,
  },
  {
    title: "AI Customer Service Bot",
    category: "Natural Language Processing",
    description: "Created an intelligent chatbot that handles customer inquiries with 95% accuracy, reducing support tickets by 60%.",
    icon: Bot,
    tags: ["GPT-4", "Node.js", "React"],
  },
  {
    title: "Computer Vision Quality Control",
    category: "Machine Learning",
    description: "Implemented real-time defect detection system for a manufacturing line, improving quality control efficiency by 80%.",
    icon: Brain,
    tags: ["PyTorch", "OpenCV", "Docker"],
  },
  {
    title: "VR Product Configurator",
    category: "Virtual Reality",
    description: "Built a virtual reality experience allowing customers to customize and visualize products in 3D before purchase.",
    icon: Layers,
    tags: ["Unreal Engine", "VR", "3D"],
  },
  {
    title: "ML Pipeline Automation",
    category: "MLOps",
    description: "Designed and implemented automated ML pipelines for continuous model training, testing, and deployment.",
    icon: Workflow,
    tags: ["Kubernetes", "MLflow", "Airflow"],
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(192_95%_55%_/_0.1)_0%,_transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Work</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore our portfolio of innovative AI and technology solutions that have transformed businesses across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group glass-card overflow-hidden hover-lift"
              >
                {/* Project Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                      <project.icon className="w-6 h-6 text-primary" />
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
                  {project.arPage ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group/btn p-0 h-auto text-muted-foreground hover:text-primary"
                      onClick={() => navigate("/ar-projects")}
                    >
                      Check our projects
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  ) : project.conferencesPage ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group/btn p-0 h-auto text-muted-foreground hover:text-primary"
                      onClick={() => navigate("/conferences")}
                    >
                      View conferences
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  ) : (
                    <Button variant="ghost" size="sm" className="group/btn p-0 h-auto text-muted-foreground hover:text-primary">
                      View Case Study
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how we can help bring your ideas to life with cutting-edge AI and technology solutions.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="/contact">Start a Conversation</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
