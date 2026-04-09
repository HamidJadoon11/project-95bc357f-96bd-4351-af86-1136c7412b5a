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
import PrayerTimesCountriesPage from "./pages/PrayerTimesCountriesPage";
import CountryPrayerTimesPage from "./pages/CountryPrayerTimesPage";
import GlobalCityPrayerTimesPage from "./pages/GlobalCityPrayerTimesPage";
import AzanTimesIndexPage from "./pages/AzanTimesIndexPage";
import AzanTimesCountryPage from "./pages/AzanTimesCountryPage";
import AzanTimesCityPage from "./pages/AzanTimesCityPage";
import AhadeesPage from "./pages/AhadeesPage";
import RamadanPage from "./pages/RamadanPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
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
              {/* Prayer Times */}
              <Route path="/prayer-times" element={<PrayerTimesCountriesPage />} />
              <Route path="/prayer-times/:countrySlug" element={<CountryPrayerTimesPage />} />
              <Route path="/prayer-times/:countrySlug/:citySlug" element={<GlobalCityPrayerTimesPage />} />
              {/* Azan Times */}
              <Route path="/azan-times" element={<AzanTimesIndexPage />} />
              <Route path="/azan-times/:countrySlug" element={<AzanTimesCountryPage />} />
              <Route path="/azan-times/:countrySlug/:citySlug" element={<AzanTimesCityPage />} />
              {/* Islamic Content */}
              <Route path="/azkar" element={<AzkarPage />} />
              <Route path="/duas" element={<DuasPage />} />
              <Route path="/ahadees" element={<AhadeesPage />} />
              {/* Ramadan */}
              <Route path="/ramadan" element={<RamadanPage />} />
              <Route path="/ramadan/:year" element={<RamadanPage />} />
              {/* Tools */}
              <Route path="/qibla" element={<QiblaPage />} />
              <Route path="/zakat" element={<ZakatPage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              {/* Legal & Info */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
