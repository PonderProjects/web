import { Brain, Glasses, GraduationCap, Code2, Cpu, Cog } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Custom ML models tailored to your business needs, from predictive analytics to natural language processing.",
  },
  {
    icon: Glasses,
    title: "AR Solutions",
    description: "Immersive augmented reality experiences that transform how users interact with your products.",
  },
  {
    icon: GraduationCap,
    title: "AI Training",
    description: "Comprehensive AI courses for teams looking to integrate artificial intelligence into their daily workflows.",
  },
  {
    icon: Code2,
    title: "Custom Development",
    description: "End-to-end software development with AI integration, from concept to deployment and beyond.",
  },
  {
    icon: Cpu,
    title: "AI Consulting",
    description: "Strategic guidance on AI adoption, helping you identify opportunities and implement solutions effectively.",
  },
  {
    icon: Cog,
    title: "Process Automations",
    description: "Streamline your workflows by automating repetitive tasks, saving time and reducing human error.",
  },
];

const Services = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(280_80%_60%_/_0.05)_0%,_transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-muted-foreground">
            From concept to deployment, we provide comprehensive solutions to help your business leverage the power of AI and emerging technologies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group glass-card p-6 hover-lift cursor-pointer"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
