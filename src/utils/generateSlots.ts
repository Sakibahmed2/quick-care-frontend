export type GeneratedSlot = {
  startTime: Date;
  endTime: Date;
  label: string;
};

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

const generateSlots = (
  startTime: string,
  endTime: string,
  slotDuration: number,
): GeneratedSlot[] => {
  const slots: GeneratedSlot[] = [];

  let start = new Date(startTime);
  const end = new Date(endTime);

  while (start < end) {
    const slotEnd = new Date(start.getTime() + slotDuration * 60 * 1000);

    if (slotEnd > end) {
      break;
    }

    slots.push({
      startTime: new Date(start),
      endTime: slotEnd,
      label: formatTime(start),
    });

    start = slotEnd;
  }

  return slots;
};

export default generateSlots;
