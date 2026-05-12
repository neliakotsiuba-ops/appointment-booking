import { Card } from "./ui/card";
import { CheckCircle } from "lucide-react";

interface BookingStepProps {
  stepNumber: number;
  isCompleted: boolean;
  isActive: boolean;
  title: string;
  children: React.ReactNode;
}

export function BookingStep({ stepNumber, isCompleted, isActive, title, children }: BookingStepProps) {
  return (
    <Card className={`p-4 sm:p-6 transition-all ${isActive ? 'border-blue-500 bg-blue-50' : isCompleted ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`flex items-center justify-center w-8 h-8 rounded-full font-semibold text-white ${isCompleted ? 'bg-green-600' : isActive ? 'bg-blue-600' : 'bg-gray-400'}`}>
          {isCompleted ? <CheckCircle size={20} /> : stepNumber}
        </div>
        <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
      </div>
      {children}
    </Card>
  );
}
