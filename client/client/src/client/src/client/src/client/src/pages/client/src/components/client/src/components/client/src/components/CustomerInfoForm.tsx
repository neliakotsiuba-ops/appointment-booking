import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { FormData } from "../hooks/useAppointmentForm";

interface CustomerInfoFormProps {
  formData: FormData;
  onFieldChange: (field: keyof FormData, value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
  error: string;
  successMessage: string;
}

export function CustomerInfoForm({ formData, onFieldChange, onSubmit, isLoading, error, successMessage }: CustomerInfoFormProps) {
  const isFormValid = formData.name && formData.email && formData.phone && formData.date && formData.time_slot;

  return (
    <Card className="p-4 sm:p-6">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Your Information</h2>
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" placeholder="Enter your name" value={formData.name} onChange={e => onFieldChange('name', e.target.value)} disabled={isLoading} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" value={formData.email} onChange={e => onFieldChange('email', e.target.value)} disabled={isLoading} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="Enter your phone number" value={formData.phone} onChange={e => onFieldChange('phone', e.target.value)} disabled={isLoading} />
        </div>
        {error && <div className="rounded-md bg-red-50 p-3 text-sm text-red-700">{error}</div>}
        {successMessage && <div className="rounded-md bg-green-50 p-3 text-sm text-green-700">{successMessage}</div>}
        <Button onClick={onSubmit} disabled={!isFormValid || isLoading} className="w-full" size="lg">
          {isLoading ? 'Booking...' : 'Book Appointment'}
        </Button>
      </div>
    </Card>
  );
}
