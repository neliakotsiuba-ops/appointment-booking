import { Card } from "./ui/card";
import { formatDate } from "../lib/dateUtils";
import { Calendar, Clock, User, Mail, Phone } from "lucide-react";

interface BookingSummaryProps {
  date: string;
  time_slot: string;
  name: string;
  email: string;
  phone: string;
}

export function BookingSummary({ date, time_slot, name, email, phone }: BookingSummaryProps) {
  return (
    <Card className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
      <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>
      <div className="space-y-3">
        {date && (
          <div className="flex items-center gap-3 text-sm">
            <Calendar size={18} className="text-blue-600" />
            <div><p className="text-gray-600">Date</p><p className="font-medium">{formatDate(date)}</p></div>
          </div>
        )}
        {time_slot && (
          <div className="flex items-center gap-3 text-sm">
            <Clock size={18} className="text-blue-600" />
            <div><p className="text-gray-600">Time</p><p className="font-medium">{time_slot}</p></div>
          </div>
        )}
        {name && (
          <div className="flex items-center gap-3 text-sm">
            <User size={18} className="text-blue-600" />
            <div><p className="text-gray-600">Name</p><p className="font-medium">{name}</p></div>
          </div>
        )}
        {email && (
          <div className="flex items-center gap-3 text-sm">
            <Mail size={18} className="text-blue-600" />
            <div><p className="text-gray-600">Email</p><p className="font-medium break-all">{email}</p></div>
          </div>
        )}
        {phone && (
          <div className="flex items-center gap-3 text-sm">
            <Phone size={18} className="text-blue-600" />
            <div><p className="text-gray-600">Phone</p><p className="font-medium">{phone}</p></div>
          </div>
        )}
      </div>
    </Card>
  );
}
