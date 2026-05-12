import { Button } from "./ui/button";
import { useAvailableSlots } from "../hooks/useAvailableSlots";

interface TimeSlotSelectorProps {
  selectedDate: string;
  selectedSlot: string;
  onSlotSelect: (slot: string) => void;
}

export function TimeSlotSelector({ selectedDate, selectedSlot, onSlotSelect }: TimeSlotSelectorProps) {
  const { slots, isLoading, error } = useAvailableSlots(selectedDate);

  if (!selectedDate) return <div className="space-y-3"><h2 className="text-lg font-semibold">Select Time</h2><p className="text-sm text-gray-500">Please select a date first</p></div>;
  if (isLoading) return <div className="space-y-3"><h2 className="text-lg font-semibold">Select Time</h2><p className="text-sm text-gray-500">Loading available times...</p></div>;
  if (error) return <div className="space-y-3"><h2 className="text-lg font-semibold">Select Time</h2><p className="text-sm text-red-500">{error}</p></div>;
  if (slots.length === 0) return <div className="space-y-3"><h2 className="text-lg font-semibold">Select Time</h2><p className="text-sm text-gray-500">No available slots for this date</p></div>;

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">Select Time</h2>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
        {slots.map(slot => (
          <Button key={slot} onClick={() => onSlotSelect(slot)} variant={selectedSlot === slot ? "default" : "outline"} className="w-full text-sm">{slot}</Button>
        ))}
      </div>
    </div>
  );
}
