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
        <Route path="/conferences" element={<Conferences />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
