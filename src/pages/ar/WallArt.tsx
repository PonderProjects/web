import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Smartphone } from "lucide-react";

const artworks = [
  {
    name: "Pegazs",
    artist: "Uldis Rubežis",
    location: "Kuršu iela 21",
    description:
      "A mythical winged horse symbolising wisdom and glory. The mural incorporates heraldic symbols referencing Liepāja's history alongside spectral colours representing 21st-century aesthetics — bridging the historical and the contemporary.",
    image: "/web/images/wallart/pegazs.jpg",
  },
  {
    name: "Vārna",
    artist: "Uldis Rubežis",
    location: "Veca ostmala 55",
    description:
      "A black raven chosen for its rich symbolic depth — intelligence, adaptability, and cunning. Designed as a visual landmark and gathering point along the promenade area.",
    image: "/web/images/wallart/varna.jpg",
  },
  {
    name: "Kvantu kaija",
    artist: "Uldis Rubežis",
    location: "Julianna's Courtyard, Kuģniecību iela 5",
    description:
      "A mural packed with references to the 1970s, quantum physics, conspiracy theories, and David Bowie. Built with substantial visual and conceptual depth — far more than purely decorative.",
    image: "/web/images/wallart/kvantu_kaija.jpg",
  },
];

const team = [
  {
    name: "Agnese Damberga",
    role: "Graphic Artist & Animator",
    bio: "Liepāja University student specialising in computer design, with animation studies at Ballyfermot College, Ireland. Skilled in Affinity Photo, Blender, 3ds Max, and Maya.",
    image: "/web/images/wallart/team_agnese.jpg",
  },
  {
    name: "Arturs Vītiņš",
    role: "Programmer & AR Solutions Developer",
    bio: "ML engineer. Developed the iOS and Android application in Unity and built all augmented reality solutions powering the experience.",
    image: "/web/images/wallart/team_arturs.jpeg",
  },
];

const WallArt = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero */}
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
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Augmented Reality · Liepāja</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Wall Art <span className="text-gradient">Liepāja</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              An augmented reality mobile app that brings three large-scale Liepāja murals to life — point your camera at the artwork and watch it animate in front of you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {["Unity", "ARKit", "ARCore", "iOS", "Android", "Street Art"].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">{tag}</span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://apps.apple.com/lv/app/wall-art-liepaja-ar/id1631659025"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="lg">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Download on App Store
                </Button>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=av.digipandroid.arsienugleznojumiliepaja"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Get it on Google Play
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction & Project Goals */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6 md:p-8">
              <h2 className="text-xl font-bold mb-4">
                About <span className="text-gradient">the App</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Wall Art Liepāja uses augmented reality to animate three large-scale murals painted on walls across the city. Open the app, point your camera at the mural, and watch the artwork come to life.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                All three murals were created by Liepāja-based artist Uldis Rubežis and are integrated into the city's urban landscape as permanent installations.
              </p>
            </div>

            <div className="glass-card p-6 md:p-8">
              <h2 className="text-xl font-bold mb-4">
                Project <span className="text-gradient">Goals</span>
              </h2>
              <ul className="flex flex-col gap-3">
                {[
                  "Foster creative, intellectual, and innovative environments for creative sector professionals.",
                  "Promote local patriotism among Liepāja residents through public art and digital experiences.",
                  "Develop knowledge that supports digital literacy through technology as an effective professional and cultural tool.",
                ].map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Artworks */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Featured <span className="text-gradient">Murals</span>
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Three large-scale murals across Liepāja — each with its own story, symbolism, and AR animation.
            </p>

            <div className="flex flex-col gap-10">
              {artworks.map((art, idx) => (
                <div key={idx} className="glass-card overflow-hidden hover-lift group">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={art.image}
                        alt={art.name}
                        className="w-full h-72 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                          <span className="text-primary text-sm font-bold">{idx + 1}</span>
                        </div>
                        <span className="text-primary text-xs font-medium uppercase tracking-wider">Mural</span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {art.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-1">Artist: {art.artist}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                        <MapPin className="w-3 h-3 shrink-0" />
                        {art.location}
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{art.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
              How to <span className="text-gradient">Use the App</span>
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Just four steps to bring the murals to life.
            </p>
            <div className="glass-card p-6 md:p-8">
              <ol className="flex flex-col gap-5">
                {[
                  { step: "1", text: "Navigate to one of the three mural locations in Liepāja." },
                  { step: "2", text: "Open the Wall Art Liepāja app on your phone." },
                  { step: "3", text: "Step back far enough to capture the entire mural on your screen." },
                  { step: "4", text: "Watch the artwork animate in front of you through the app." },
                ].map(({ step, text }) => (
                  <li key={step} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                      <span className="text-primary text-sm font-bold">{step}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed pt-1">{text}</p>
                  </li>
                ))}
              </ol>
              <p className="text-xs text-muted-foreground mt-6 border-t border-white/10 pt-4">
                Note: The app may function poorly in low-light or nighttime conditions. Exercise caution near traffic when using the app outdoors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
              Development <span className="text-gradient">Team</span>
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
              The people who designed and built the AR experience behind the murals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {team.map((member, idx) => (
                <div key={idx} className="glass-card p-6 hover-lift group text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary text-xs mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WallArt;
