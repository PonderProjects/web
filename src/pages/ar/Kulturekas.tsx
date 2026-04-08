import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Smartphone, MapPin, Layers, Image } from "lucide-react";

const buildings = [
  {
    name: "Liepāja Museum Building",
    location: "Alejas Park",
    description:
      "Opened on November 30, 1924, this building served as a cultural hub housing multiple cultural societies and institutions central to Liepāja's civic life.",
  },
  {
    name: "German Theatre",
    location: "Liepāja city center",
    description:
      "Inaugurated on April 15, 1804 and demolished in 1924. The theatre featured 350 seats and was built with Russian imperial architectural influences, representing a defining era of the city's cultural scene.",
  },
  {
    name: "Great Choral Synagogue",
    location: "Liepāja",
    description:
      "Built between 1870 and 1873 in neorenaissance style, this magnificent synagogue was destroyed by German occupation forces in July 1941. The app preserves its memory for future generations.",
  },
];

const viewingModes = [
  {
    icon: MapPin,
    title: "Location-Based AR",
    description: "Stand within 30 meters of the original building site and see the structure rise in front of you through your camera.",
  },
  {
    icon: Layers,
    title: "Virtual Space",
    description: "Place the reconstructed building anywhere in your environment without needing to visit the original location.",
  },
  {
    icon: Image,
    title: "Marker Tracking",
    description: "Point your camera at an image marker to instantly trigger the AR reconstruction.",
  },
];

const Kulturekas = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(192_95%_55%_/_0.1)_0%,_transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <Button
            variant="ghost"
            size="sm"
            className="mb-8 text-muted-foreground hover:text-primary p-0 h-auto"
            onClick={() => navigate("/ar-projects")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to AR Projects
          </Button>

          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Augmented Reality</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              3D <span className="text-gradient">kultūrēkas</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              An augmented reality mobile app that brings back three historic Liepāja buildings lost to history —
              letting residents and visitors see them in real life again through their device's camera.
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">Unity</span>
              <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">ARKit</span>
              <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">ARCore</span>
              <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">iOS</span>
              <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">Android</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              About the <span className="text-gradient">Project</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Liepāja's architectural heritage carries stories of a vibrant cultural past — yet several of its most iconic buildings no longer exist. <strong className="text-foreground">3D kultūrēkas</strong> uses augmented reality to reconstruct three of these lost landmarks, allowing anyone with a smartphone to see them standing as they once did.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The project promotes digital literacy, civic pride, and the preservation of architectural knowledge through modern technology — making history accessible and interactive for a new generation.
            </p>
          </div>
        </div>
      </section>

      {/* Viewing Modes */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              How It <span className="text-gradient">Works</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {viewingModes.map((mode, idx) => (
                <div key={idx} className="glass-card p-6 hover-lift group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                    <mode.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{mode.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{mode.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Buildings Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Featured <span className="text-gradient">Buildings</span>
            </h2>
            <div className="flex flex-col gap-6">
              {buildings.map((building, idx) => (
                <div key={idx} className="glass-card p-6 hover-lift group">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 mt-1 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                      <span className="text-primary text-sm font-bold">{idx + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {building.name}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                        <MapPin className="w-3 h-3" />
                        {building.location}
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{building.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team & Availability */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Team */}
            <div className="glass-card p-6">
              <h3 className="font-semibold text-foreground mb-4">Development Team</h3>
              <ul className="flex flex-col gap-3">
                {[
                  { name: "Jānis Jaunsleinis", role: "3D Architecture Designer" },
                  { name: "Kaspars Lēvalds", role: "Multimedia Artist & VR/AR Specialist" },
                  { name: "Arturs Vītiņš", role: "Programmer & AR Solutions Developer" },
                ].map((member, idx) => (
                  <li key={idx}>
                    <p className="text-foreground text-sm font-medium">{member.name}</p>
                    <p className="text-muted-foreground text-xs">{member.role}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Availability */}
            <div className="glass-card p-6">
              <h3 className="font-semibold text-foreground mb-4">Availability</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-foreground text-sm font-medium">iOS & Android</p>
                    <p className="text-muted-foreground text-xs">Available on both major mobile platforms</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                  Requires camera and location access. Works best on modern devices with ARKit or ARCore support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kulturekas;
