import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Calculator, Brain, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    icon: Code,
    title: "Python Programming",
    description: "Master Python from basics to advanced concepts. Learn data structures, algorithms, and best practices for writing clean, efficient code.",
    topics: ["Fundamentals", "OOP", "Data Structures", "Libraries"],
  },
  {
    icon: Cpu,
    title: "C++ Programming",
    description: "Dive deep into C++ for high-performance computing. Understand memory management, pointers, and build efficient applications.",
    topics: ["Syntax & Basics", "Memory Management", "STL", "Performance"],
  },
  {
    icon: Calculator,
    title: "Mathematics for ML",
    description: "Build a strong mathematical foundation essential for machine learning. Cover linear algebra, calculus, probability, and statistics.",
    topics: ["Linear Algebra", "Calculus", "Probability", "Statistics"],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Learn ML algorithms, neural networks, and deep learning. Apply your knowledge to real-world projects with hands-on exercises.",
    topics: ["Supervised Learning", "Neural Networks", "Deep Learning", "Projects"],
  },
];

const MITalents = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(280_80%_60%_/_0.1)_0%,_transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">ML School</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Learn from <span className="text-gradient">Advanced Teachers</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Join our ML school and unlock your potential in artificial intelligence. Our experienced instructors guide students through comprehensive courses designed to build real-world skills.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="group glass-card p-6 hover-lift"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                  <course.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Info */}
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {course.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-2">
                  {course.topics.map((topic, topicIdx) => (
                    <span
                      key={topicIdx}
                      className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enroll CTA */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Start Your <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Ready to begin your path in machine learning? Contact us to learn more about enrollment, schedules, and how our courses can help you achieve your goals.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MITalents;
