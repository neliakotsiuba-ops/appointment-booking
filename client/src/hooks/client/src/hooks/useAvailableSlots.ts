import { useState, useEffect } from 'react';

export function useAvailableSlots(date: string) {
  const [slots, setSlots] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!date) { setSlots([]); return; }

    const fetchSlots = async () => {
      setIsLoading(true);
      setError('');
      try {
        const response = await fetch(`/api/available-slots/${date}`);
        if (!response.ok) throw new Error('Failed to fetch available slots');
        const data = await response.json();
        setSlots(data.slots || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch available slots');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSlots();
  }, [date]);

  return { slots, isLoading, error };
}
