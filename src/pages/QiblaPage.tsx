import { useEffect, useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useLocation as useGeoLocation } from '@/hooks/usePrayerTimes';
import { Compass, MapPin, Loader2 } from 'lucide-react';

function calculateQibla(lat: number, lng: number): number {
  const meccaLat = (21.4225 * Math.PI) / 180;
  const meccaLng = (39.8262 * Math.PI) / 180;
  const userLat = (lat * Math.PI) / 180;
  const userLng = (lng * Math.PI) / 180;

  const dLng = meccaLng - userLng;
  const x = Math.sin(dLng);
  const y = Math.cos(userLat) * Math.tan(meccaLat) - Math.sin(userLat) * Math.cos(dLng);

  let qibla = (Math.atan2(x, y) * 180) / Math.PI;
  return (qibla + 360) % 360;
}

export default function QiblaPage() {
  const { t } = useLanguage();
  const { location, loading } = useGeoLocation();
  const [qiblaAngle, setQiblaAngle] = useState<number | null>(null);
  const [heading, setHeading] = useState<number>(0);

  useEffect(() => {
    if (location) {
      setQiblaAngle(calculateQibla(location.latitude, location.longitude));
    }
  }, [location]);

  useEffect(() => {
    const handler = (e: DeviceOrientationEvent) => {
      if ((e as any).webkitCompassHeading !== undefined) {
        setHeading((e as any).webkitCompassHeading);
      } else if (e.alpha !== null) {
        setHeading(360 - (e.alpha || 0));
      }
    };

    window.addEventListener('deviceorientation', handler, true);
    return () => window.removeEventListener('deviceorientation', handler, true);
  }, []);

  const rotation = qiblaAngle !== null ? qiblaAngle - heading : 0;

  return (
    <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-12">
      <h1 className="text-center font-heading text-3xl font-bold text-foreground">{t('qiblaDirection')}</h1>

      {loading && (
        <div className="mt-8 flex items-center gap-2 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>{t('detectingLocation')}</span>
        </div>
      )}

      {location && (
        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{location.city}, {location.country}</span>
        </div>
      )}

      {qiblaAngle !== null && (
        <div className="mt-10 flex flex-col items-center">
          {/* Compass */}
          <div className="relative flex h-64 w-64 items-center justify-center rounded-full border-4 border-primary/20 bg-card shadow-xl">
            {/* Qibla arrow */}
            <div
              className="absolute inset-0 flex items-center justify-center transition-transform duration-500"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div className="flex flex-col items-center">
                <div className="h-24 w-1 rounded-full bg-primary" />
                <div className="h-0 w-0 border-b-[12px] border-l-[8px] border-r-[8px] border-b-primary border-l-transparent border-r-transparent -mt-1 rotate-180" />
              </div>
            </div>

            {/* Center */}
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
              <Compass className="h-8 w-8" />
            </div>

            {/* Cardinal directions */}
            <span className="absolute top-2 text-xs font-bold text-foreground">N</span>
            <span className="absolute bottom-2 text-xs font-bold text-foreground">S</span>
            <span className="absolute end-2 text-xs font-bold text-foreground">E</span>
            <span className="absolute start-2 text-xs font-bold text-foreground">W</span>
          </div>

          <p className="mt-6 text-center text-lg font-semibold text-foreground">
            {qiblaAngle.toFixed(1)}°
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            🕋 Kaaba Direction
          </p>
        </div>
      )}
    </div>
  );
}
