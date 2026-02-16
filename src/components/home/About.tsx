import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const features = [
  "Expert team with 5+ years in AI/ML",
  "Tailored solutions for every business size",
  "End-to-end project management",
  "Ongoing support and maintenance",
];

const About = () => {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-secondary to-accent/20 p-1">
              <div className="w-full h-full rounded-xl bg-card flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full">
                  {/* Abstract Tech Visual */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border-2 border-primary/30 animate-pulse-slow" />
                    <div className="absolute w-64 h-64 rounded-full border border-accent/20 animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
                    <div className="absolute w-80 h-80 rounded-full border border-primary/10 animate-pulse-slow" style={{ animationDelay: "1s" }} />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent glow-primary flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary-foreground">PP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">98%</div>
                  <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              Pioneering the Future of{" "}
              <span className="text-gradient">Technology</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Ponder Projects is a forward-thinking technology company dedicated to making artificial intelligence and machine learning accessible to businesses of all sizes. We combine deep technical expertise with a passion for innovation.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of experts works closely with clients to understand their unique challenges and deliver solutions that drive real business value.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg" asChild>
              <Link to="/mi-talents">
                Meet Our Team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
