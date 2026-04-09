import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import MITalents from "./pages/MITalents";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ARProjects from "./pages/ARProjects";
import Conferences from "./pages/Conferences";
import AITraining from "./pages/AITraining";
import AISolutions from "./pages/AISolutions";
import Kulturekas from "./pages/ar/Kulturekas";
import Berci from "./pages/ar/Berci";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <BrowserRouter basename="/web">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/mi-talents" element={<MITalents />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ar-projects" element={<ARProjects />} />
        <Route path="/ar-projects/kulturekas" element={<Kulturekas />} />
        <Route path="/ar-projects/berci" element={<Berci />} />
        <Route path="/conferences" element={<Conferences />} />
        <Route path="/ai-training" element={<AITraining />} />
        <Route path="/ai-solutions" element={<AISolutions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
