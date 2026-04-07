import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import AzkarPage from "./pages/AzkarPage";
import DuasPage from "./pages/DuasPage";
import QiblaPage from "./pages/QiblaPage";
import ZakatPage from "./pages/ZakatPage";
import CalendarPage from "./pages/CalendarPage";
import PrayerTimesIndexPage from "./pages/PrayerTimesIndexPage";
import CityPrayerTimesPage from "./pages/CityPrayerTimesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/prayer-times" element={<PrayerTimesIndexPage />} />
              <Route path="/saudi-arabia/:citySlug" element={<CityPrayerTimesPage />} />
              <Route path="/azkar" element={<AzkarPage />} />
              <Route path="/duas" element={<DuasPage />} />
              <Route path="/qibla" element={<QiblaPage />} />
              <Route path="/zakat" element={<ZakatPage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
