import * as React from 'react';

import { Calendar } from '~/components/ui/calendar';

export function Calendly() {
  const today = new Date();
  const initialDays: Date[] = [today];
  const [days] = React.useState<Date[] | undefined>(initialDays);

  return <Calendar mode="multiple" selected={days} className="flex justify-center" />;
}
