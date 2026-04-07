import { useState, useEffect } from 'react';

export interface PrayerTimesData {
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  date: { readable: string; hijri: { date: string; month: { en: string; ar: string }; year: string; day: string } };
}

export interface LocationData {
  latitude: number;
  longitude: number;
  city: string;
  country: string;
}

export function useLocation() {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          const data = await res.json();
          setLocation({
            latitude,
            longitude,
            city: data.city || data.locality || 'Unknown',
            country: data.countryName || 'Unknown',
          });
        } catch {
          setError('Could not detect city');
        } finally {
          setLoading(false);
        }
      },
      () => {
        // Fallback to Mecca
        setLocation({ latitude: 21.4225, longitude: 39.8262, city: 'Mecca', country: 'Saudi Arabia' });
        setLoading(false);
      },
      { timeout: 5000 }
    );
  }, []);

  return { location, error, loading };
}

export function usePrayerTimes(lat: number | undefined, lng: number | undefined) {
  const [times, setTimes] = useState<PrayerTimesData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (lat === undefined || lng === undefined) return;

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    fetch(
      `https://api.aladhan.com/v1/timings/${dd}-${mm}-${yyyy}?latitude=${lat}&longitude=${lng}&method=4`
    )
      .then((res) => res.json())
      .then((data) => {
        const t = data.data.timings;
        setTimes({
          fajr: t.Fajr,
          sunrise: t.Sunrise,
          dhuhr: t.Dhuhr,
          asr: t.Asr,
          maghrib: t.Maghrib,
          isha: t.Isha,
          date: data.data.date,
        });
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [lat, lng]);

  return { times, loading };
}

export function getNextPrayer(times: PrayerTimesData | null): { name: string; time: string; remaining: string } | null {
  if (!times) return null;

  const now = new Date();
  const prayers = [
    { name: 'fajr', time: times.fajr },
    { name: 'sunrise', time: times.sunrise },
    { name: 'dhuhr', time: times.dhuhr },
    { name: 'asr', time: times.asr },
    { name: 'maghrib', time: times.maghrib },
    { name: 'isha', time: times.isha },
  ];

  for (const prayer of prayers) {
    const [h, m] = prayer.time.split(':').map(Number);
    const prayerDate = new Date();
    prayerDate.setHours(h, m, 0, 0);

    if (prayerDate > now) {
      const diff = prayerDate.getTime() - now.getTime();
      const hours = Math.floor(diff / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      return {
        name: prayer.name,
        time: prayer.time,
        remaining: `${hours}h ${mins}m`,
      };
    }
  }

  // After isha, next is fajr tomorrow
  return { name: 'fajr', time: times.fajr, remaining: '—' };
}
