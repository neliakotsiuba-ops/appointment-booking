import { useState } from "react";
import { DateSelector } from "../components/DateSelector";
import { TimeSlotSelector } from "../components/TimeSlotSelector";
import { CustomerInfoForm } from "../components/CustomerInfoForm";
import { BookingStep } from "../components/BookingStep";
import { BookingSummary } from "../components/BookingSummary";
import { useAppointmentForm } from "../hooks/useAppointmentForm";

export function BookingPage() {
  const { formData, updateField, submitForm, isLoading, error, successMessage } = useAppointmentForm();
  const isDateSelected = !!formData.date;
  const isTimeSelected = !!formData.time_slot;

  const handleSuccess = () => {
    setTimeout(() => { window.location.reload(); }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-6 sm:py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">Book an Appointment</h1>
          <p className="text-center text-gray-600 text-sm sm:text-base">Schedule your appointment in just a few steps</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <BookingStep stepNumber={1} isCompleted={isDateSelected} isActive={!isDateSelected} title="Select Date">
              <DateSelector selectedDate={formData.date} onDateSelect={date => updateField('date', date)} />
            </BookingStep>
            <BookingStep stepNumber={2} isCompleted={isTimeSelected} isActive={isDateSelected && !isTimeSelected} title="Select Time">
              <TimeSlotSelector selectedDate={formData.date} selectedSlot={formData.time_slot} onSlotSelect={slot => updateField('time_slot', slot)} />
            </BookingStep>
            <BookingStep stepNumber={3} isCompleted={false} isActive={isDateSelected && isTimeSelected} title="Your Information">
              <CustomerInfoForm formData={formData} onFieldChange={updateField} onSubmit={() => submitForm().then(() => handleSuccess())} isLoading={isLoading} error={error} successMessage={successMessage} />
            </BookingStep>
          </div>
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-6">
              <BookingSummary date={formData.date} time_slot={formData.time_slot} name={formData.name} email={formData.email} phone={formData.phone} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
