import { useState, useCallback } from 'react';

export interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time_slot: string;
}

export function useAppointmentForm(onSuccess?: () => void) {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', date: '', time_slot: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const updateField = useCallback((field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError('');
  }, []);

  const resetForm = useCallback(() => {
    setFormData({ name: '', email: '', phone: '', date: '', time_slot: '' });
    setError('');
    setSuccessMessage('');
  }, []);

  const submitForm = useCallback(async () => {
    if (!formData.name.trim()) { setError('Please enter your name'); return; }
    if (!formData.email.trim()) { setError('Please enter your email'); return; }
    if (!formData.phone.trim()) { setError('Please enter your phone number'); return; }
    if (!formData.date) { setError('Please select a date'); return; }
    if (!formData.time_slot) { setError('Please select a time slot'); return; }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to book appointment');
      }
      setSuccessMessage('Appointment booked successfully!');
      resetForm();
      onSuccess?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to book appointment');
    } finally {
      setIsLoading(false);
    }
  }, [formData, resetForm, onSuccess]);

  return { formData, updateField, submitForm, resetForm, isLoading, error, successMessage };
}
