
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import BookSummaries from "./pages/BookSummaries";
import Articles from "./pages/Articles";
import Tools from "./pages/Tools";
import Pomodoro from "./pages/Pomodoro";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main className="min-h-[60vh] pt-8 bg-background">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/books" element={<BookSummaries />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/pomodoro" element={<Pomodoro />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
