import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Smartphone } from "lucide-react";

const buildings = [
  {
    name: "Liepājas muzeja ēka",
    nameEn: "Liepāja Museum Building",
    location: "Jāņa Čakstes Square, Alejas Park",
    description:
      "Opened on November 30, 1924, the building served as a cultural hub housing multiple cultural societies and institutions that were central to the civic life of Liepāja.",
    image3d: "/web/images/kulturekas/muzejs_3d.webp",
    imageHistoric: "/web/images/kulturekas/muzejs_historic.webp",
    mapImage: "/web/images/kulturekas/muzejs_map.webp",
    arScreenshot1: "/web/images/kulturekas/muzejs_ar1.webp",
    arScreenshot2: "/web/images/kulturekas/muzejs_ar2.webp",
    mapWithMarks: "/web/images/kulturekas/muzejs_map_marks.webp",
  },
  {
    name: "Liepājas Vācu teātris",
    nameEn: "German Theatre",
    location: "Liepāja city center",
    description:
      "Officially opened on April 15, 1804 and demolished in 1924. The theatre was built from wood with 350 seats and constructed with Russian imperial architectural influences. \"Even in a small theatre, great art can exist.\"",
    image3d: "/web/images/kulturekas/teatris_3d.webp",
    imageHistoric: "/web/images/kulturekas/teatris_historic.webp",
    mapImage: "/web/images/kulturekas/teatris_map.webp",
    arScreenshot1: "/web/images/kulturekas/teatris_ar1.webp",
    arScreenshot2: "/web/images/kulturekas/teatris_ar2.webp",
    mapWithMarks: "/web/images/kulturekas/teatris_map_marks.webp",
  },
  {
    name: "Liepājas Lielā Horālā sinagoga",
    nameEn: "Great Choral Synagogue",
    location: "Pētera Street 13 (now Kuršu 11/13)",
    description:
      "Built between 1870 and 1873 in neo-renaissance style. This magnificent synagogue was destroyed by German occupation forces in July 1941. The app preserves its memory for future generations.",
    portrait: true,
    image3d: "/web/images/kulturekas/sinagoga_3d.webp",
    imageHistoric: "/web/images/kulturekas/sinagoga_historic.webp",
    mapImage: "/web/images/kulturekas/sinagoga_map.webp",
    arScreenshot1: "/web/images/kulturekas/sinagoga_ar1.webp",
    arScreenshot2: "/web/images/kulturekas/sinagoga_ar2.webp",
    mapWithMarks: "/web/images/kulturekas/sinagoga_map_marks.webp",
  },
];

const team = [
  {
    name: "Jānis Jaunsleinis",
    role: "3D Architecture Designer",
    bio: "Contributed 3D modeling for Riga Technical University renovation projects and created energy efficiency visualizations. Researched pre-war Liepāja photographs and historical archives to faithfully reconstruct each building.",
    image: "/web/images/kulturekas/team_janis.jpg",
  },
  {
    name: "Kaspars Lēvalds",
    role: "Multimedia Artist & VR/AR Specialist",
    bio: "Graduate of the University of Liepāja's New Media Art program. Award-winning VR/AR developer with first and second-place finishes at AR/VR Hackathon 2018 and RIGA IFF GOES VR 2019.",
    image: "/web/images/kulturekas/team_kaspars.jpeg",
  },
  {
    name: "Arturs Vītiņš",
    role: "Programmer & AR Solutions Developer",
    bio: "Former building construction engineer at SIA \"AILE grupa\". Developed the iOS and Android application in Unity and built all augmented reality solutions powering the experience.",
    image: "/web/images/kulturekas/team_arturs.jpeg",
  },
];

const Kulturekas = () => {
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
              3D <span className="text-gradient">kultūrēkas</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Augmented reality mobile application that brings back three historic Liepāja buildings lost to history —
              letting residents and visitors see them standing in real life again through their device's camera.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {["Unity", "ARKit", "ARCore", "iOS", "Android"].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">{tag}</span>
              ))}
            </div>
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://apps.apple.com/lv/app/3d-kult%C5%ABr%C4%93kas/id6444926399"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="lg">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Download on App Store
                </Button>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.ekasliepaja3d.workerlv"
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

      {/* All 3 locations map overview */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Three Lost <span className="text-gradient">Landmarks</span>
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Each building has been faithfully reconstructed in 3D using historical photographs and archival records.
              Visit their original locations in Liepāja or explore them anywhere through virtual space.
            </p>
            <div className="rounded-xl overflow-hidden border border-white/10">
              <img
                src="/web/images/kulturekas/all_points.webp"
                alt="Map of all three building locations in Liepāja"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Buildings — each with 3D render, historic photo, map, AR screenshots */}
      {buildings.map((building, idx) => (
        <section key={idx} className="pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Building header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                  <span className="text-primary text-sm font-bold">{idx + 1}</span>
                </div>
                <span className="text-primary text-sm font-medium uppercase tracking-wider">{building.nameEn}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{building.name}</h2>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                <MapPin className="w-3 h-3" />
                {building.location}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">{building.description}</p>

              {/* 3D render + historic photo */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={building.image3d}
                    alt={`${building.name} — 3D reconstruction`}
                    className={`w-full object-contain ${building.portrait ? "bg-black/20" : "h-64 object-cover"}`}
                  />
                  <p className="text-xs text-muted-foreground px-4 py-2">3D Reconstruction</p>
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={building.imageHistoric}
                    alt={`${building.name} — historic photograph`}
                    className={`w-full object-contain ${building.portrait ? "bg-black/20" : "h-64 object-cover"}`}
                  />
                  <p className="text-xs text-muted-foreground px-4 py-2">Historic Photograph</p>
                </div>
              </div>

              {/* Location map */}
              <div className="rounded-xl overflow-hidden border border-white/10 mb-4">
                <img
                  src={building.mapWithMarks}
                  alt={`${building.name} — location map`}
                  className="w-full object-cover"
                />
                <p className="text-xs text-muted-foreground px-4 py-2">Location map — approach within 30 m to trigger AR</p>
              </div>

              {/* AR screenshots */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={building.arScreenshot1}
                    alt={`${building.name} — AR view 1`}
                    className="w-full object-cover"
                  />
                  <p className="text-xs text-muted-foreground px-4 py-2">In-app AR view</p>
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={building.arScreenshot2}
                    alt={`${building.name} — AR view 2`}
                    className="w-full object-cover"
                  />
                  <p className="text-xs text-muted-foreground px-4 py-2">In-app AR view</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* How to use */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
              How to <span className="text-gradient">Use the App</span>
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Three different ways to experience the reconstructed buildings — choose what works best for you.
            </p>

            {/* Mode 1 — Location */}
            <div className="glass-card p-6 md:p-8 mb-6 hover-lift">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">1. Physical Location (GPS)</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Visit the original location of the building in Liepāja. When you are within <strong className="text-foreground">30 meters</strong> of the site,
                    the AR experience activates automatically. Point your camera and watch the building rise in front of you.
                    Best used during daytime with a clear GPS signal.
                  </p>
                  <div className="rounded-lg overflow-hidden border border-white/10">
                    <img
                      src="/web/images/kulturekas/all_points.webp"
                      alt="GPS location mode — building site locations"
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Mode 2 — Virtual Space */}
            <div className="glass-card p-6 md:p-8 mb-6 hover-lift">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">VR</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">2. Virtual Space</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Can't visit Liepāja? Place the reconstructed building anywhere in your environment.
                    The app uses your phone's camera to scan the space around you and lets you position the 3D structure wherever you like.
                  </p>
                  <div className="rounded-lg overflow-hidden border border-white/10">
                    <img
                      src="/web/images/kulturekas/virtual_space.webp"
                      alt="Virtual space mode"
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Mode 3 — Image marker */}
            <div className="glass-card p-6 md:p-8 hover-lift">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">IMG</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">3. Image Recognition (Marker)</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Point your camera at a printed or on-screen image marker to instantly trigger the AR reconstruction.
                    Works both indoors and outdoors without needing GPS or a specific location.
                  </p>
                  <div className="rounded-lg overflow-hidden border border-white/10">
                    <img
                      src="/web/images/kulturekas/image_marker.webp"
                      alt="Image marker recognition mode"
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-6 md:p-8">
              <h3 className="font-semibold text-foreground mb-4">Device Requirements</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Camera access required
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Location/GPS access required (for location mode)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  ARKit support (iOS) or ARCore support (Android)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Best used in daytime with a clear GPS signal
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
              Development <span className="text-gradient">Team</span>
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
              The people who researched, designed, and built every detail of this experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* Contact & Support */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-6 md:p-8 text-center">
              <h3 className="font-semibold text-foreground text-lg mb-2">Questions or Support?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Supported by Liepāja Culture Administration. Reach out to the team for any questions about the project.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm">
                <a
                  href="mailto:team@ponder.lv"
                  className="text-primary hover:underline"
                >
                  team@ponder.lv
                </a>
                <span className="hidden sm:inline text-muted-foreground">·</span>
                <a
                  href="tel:+37128241990"
                  className="text-primary hover:underline"
                >
                  +371 28241990
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kulturekas;
