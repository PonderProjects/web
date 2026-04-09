import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Smartphone } from "lucide-react";

const buildings = [
  {
    name: "Pagaidu valdības nams",
    nameEn: "Temporary Government Building (1912)",
    location: "Lielā iela 6",
    description:
      "Built in 1912 as a merchant's property with shops and offices. In early 1919 it housed Latvia's Temporary Government with Prime Minister Kārlis Ulmanis. The building was destroyed during WWII.",
    image3d: "/web/images/ekas/valdibas_3d.png",
    mapStandpoint: "/web/images/ekas/pagvald_standpoint.jpg",
    mapPoint: "/web/images/ekas/pagvald_point.jpg",
    arScreenshots: [
      "/web/images/ekas/ar_inst_1.png",
      "/web/images/ekas/ar_inst_4.png",
    ],
  },
  {
    name: "Liepājas rātsnams",
    nameEn: "Town Hall (1750)",
    location: "Liepāja city center",
    description:
      "Built in 1750, this building stored city archives, hosted exhibitions and celebrations, and contained a tavern and city treasury. It was destroyed by bombing in 1941.",
    image3d: "/web/images/ekas/ratsnams_3d.png",
    mapStandpoint: "/web/images/ekas/ratsnams_standpoint.jpg",
    arScreenshots: [
      "/web/images/ekas/ar_inst_2.png",
      "/web/images/ekas/ar_inst_5.png",
    ],
  },
  {
    name: "Liepājas Latviešu biedrības nams",
    nameEn: "Latvian Society Building (1860)",
    location: "Ludviķa and Avotu street intersection",
    description:
      "Constructed in 1860, this rental building served as a cultural centre hosting amateur groups and orchestras. It was demolished around 1980.",
    image3d: null,
    historicPhoto: "/web/images/ekas/kulturas_historic.jpg",
    mapPoint: "/web/images/ekas/biedriba_point.jpg",
    arScreenshots: [
      "/web/images/ekas/ar_inst_3.png",
      "/web/images/ekas/ar_inst_6.png",
    ],
  },
];

const team = [
  {
    name: "Jānis Jaunsleinis",
    role: "3D Architecture Designer",
    bio: "Researched pre-war Liepāja photographs and historical sources to faithfully reconstruct each lost building in 3D.",
    image: "/web/images/kulturekas/team_janis.jpg",
  },
  {
    name: "Kaspars Lēvalds",
    role: "Multimedia Artist & VR/AR Specialist",
    bio: "Graduate of the University of Liepāja's New Media Art program. Award-winning VR/AR developer with expertise in Unity and Unreal Engine.",
    image: "/web/images/kulturekas/team_kaspars.jpeg",
  },
  {
    name: "Arturs Vītiņš",
    role: "Programmer & AR Solutions Developer",
    bio: "Former building construction engineer. Developed the iOS and Android application in Unity and built all augmented reality solutions powering the experience.",
    image: "/web/images/kulturekas/team_arturs.jpeg",
  },
];

const Ekas = () => {
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
              3D ēkas <span className="text-gradient">Liepājā</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Augmented reality mobile application that brings back three historic Liepāja buildings — letting residents and visitors see them standing in real life again through their device's camera.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {["Unity", "ARKit", "ARCore", "iOS", "Android"].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">{tag}</span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://apps.apple.com/lv/app/3d-%C4%93kas-liep%C4%81j%C4%81/id1553648532"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="lg">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Download on App Store
                </Button>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.digip.ekasLiepaja"
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
                3D ēkas Liepājā enables residents and visitors to explore three historic Liepāja buildings that no longer stand — using augmented reality technology on their smartphones.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The project was created with support from Liepāja's Culture Department and in collaboration with Liepāja Museum.
              </p>
            </div>

            <div className="glass-card p-6 md:p-8">
              <h2 className="text-xl font-bold mb-4">
                Project <span className="text-gradient">Goals</span>
              </h2>
              <ul className="flex flex-col gap-3">
                {[
                  "Foster creative, intellectual, and innovative environments for creative sector professionals.",
                  "Promote local patriotism among Liepāja residents and educate them about the city's architectural history.",
                  "Develop digital literacy through technology as an effective educational and professional tool.",
                  "Enhance professional development in architecture and augmented reality applications.",
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

      {/* All 3 locations map */}
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
                src="/web/images/ekas/all_map.png"
                alt="Map of all three building locations in Liepāja"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Buildings */}
      {buildings.map((building, idx) => (
        <section key={idx} className="pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
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

              {/* 3D render + historic photo / map */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {building.image3d && (
                  <div className="rounded-xl overflow-hidden border border-white/10">
                    <img
                      src={building.image3d}
                      alt={`${building.name} — 3D reconstruction`}
                      className="w-full h-64 object-cover"
                    />
                    <p className="text-xs text-muted-foreground px-4 py-2">3D Reconstruction</p>
                  </div>
                )}
                {building.historicPhoto && (
                  <div className="rounded-xl overflow-hidden border border-white/10">
                    <img
                      src={building.historicPhoto}
                      alt={`${building.name} — historic photograph`}
                      className="w-full h-64 object-cover"
                    />
                    <p className="text-xs text-muted-foreground px-4 py-2">Historic Photograph</p>
                  </div>
                )}
                {(building.mapStandpoint || building.mapPoint) && (
                  <div className="rounded-xl overflow-hidden border border-white/10">
                    <img
                      src={building.mapStandpoint ?? building.mapPoint}
                      alt={`${building.name} — location map`}
                      className="w-full h-64 object-cover"
                    />
                    <p className="text-xs text-muted-foreground px-4 py-2">Location map — approach within 50 m to trigger AR</p>
                  </div>
                )}
              </div>

              {/* AR screenshots */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {building.arScreenshots.map((src, sIdx) => (
                  <div key={sIdx} className="rounded-xl overflow-hidden border border-white/10">
                    <img
                      src={src}
                      alt={`${building.name} — AR view ${sIdx + 1}`}
                      className="w-full object-cover"
                    />
                    <p className="text-xs text-muted-foreground px-4 py-2">In-app AR view</p>
                  </div>
                ))}
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
              Two ways to experience the reconstructed buildings.
            </p>

            {/* Mode 1 — Urban / GPS */}
            <div className="glass-card p-6 md:p-8 mb-6 hover-lift">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">1. Urban Setting (GPS)</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Approach within <strong className="text-foreground">50 metres</strong> of a building's original location.
                    Use the red controls to align the phone with the building's corners, then press "Place" to anchor the 3D structure at the historic site.
                    For Biedrības nams, image marker technology is used at the Ludviķa and Avotu street intersection.
                    Best used during daytime with a clear GPS signal.
                  </p>
                </div>
              </div>
            </div>

            {/* Mode 2 — Flat surface */}
            <div className="glass-card p-6 md:p-8 hover-lift">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">AR</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">2. Flat Surface</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Open the app and point your camera at any flat surface — indoors or outdoors. Wait at least 6 seconds for surface detection,
                    then place the building on the recognised surface. Walk around for a full 360° view.
                  </p>
                  <div className="rounded-lg overflow-hidden border border-white/10">
                    <img
                      src="/web/images/ekas/flat_surface.png"
                      alt="Flat surface AR mode"
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
                  Location/GPS access required (for urban mode)
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
      <section className="pb-24">
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
    </Layout>
  );
};

export default Ekas;
