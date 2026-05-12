import { Button } from "./ui/button";
import { formatDate, getNextDays } from "../lib/dateUtils";

interface DateSelectorProps {
  selectedDate: string;
  onDateSelect: (date: string) => void;
}

export function DateSelector({ selectedDate, onDateSelect }: DateSelectorProps) {
  const dates = getNextDays(14);
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">Select Date</h2>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {dates.map(date => (
          <Button key={date} onClick={() => onDateSelect(date)} variant={selectedDate === date ? "default" : "outline"} className="w-full text-sm sm:text-base">
            <div className="flex flex-col items-center">
              <span className="text-xs sm:text-sm">{formatDate(date).split(',')[0]}</span>
              <span className="text-xs sm:text-sm font-semibold">{new Date(date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}
