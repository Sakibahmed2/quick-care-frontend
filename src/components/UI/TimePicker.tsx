"use client"; // Required for client-side interactivity

import { useState } from "react";

interface TimePickerProps {
  value: string;
  onChange: (time: string) => void;
}

export const TimePicker = ({ value, onChange }: TimePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedHour, setSelectedHour] = useState<string>("");
  const [selectedMinute, setSelectedMinute] = useState<string>("");
  const [selectedAmPm, setSelectedAmPm] = useState<string>("AM");

  const hours = Array.from({ length: 12 }, (_, i) =>
    (i + 1).toString().padStart(2, "0")
  );
  const minutes = Array.from({ length: 12 }, (_, i) =>
    (i * 5).toString().padStart(2, "0")
  );

  const handleHourChange = (hour: string) => {
    setSelectedHour(hour);
    updateTime(hour, selectedMinute, selectedAmPm);
  };

  const handleMinuteChange = (minute: string) => {
    setSelectedMinute(minute);
    updateTime(selectedHour, minute, selectedAmPm);
  };

  const handleAmPmChange = (amPm: string) => {
    setSelectedAmPm(amPm);
    updateTime(selectedHour, selectedMinute, amPm);
  };

  const updateTime = (hour: string, minute: string, amPm: string) => {
    if (hour && minute && amPm) {
      const time = `${hour}:${minute} ${amPm}`;
      onChange(time);
    }
  };

  return (
    <div className="max-w-32">
      <div className="relative w-full">
        <input
          type="text"
          className="py-2.5 sm:py-3 ps-4 pe-12 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder-neutral-400 dark:focus:ring-neutral-600"
          placeholder="hh:mm aa"
          value={value}
          readOnly
          onClick={() => setIsOpen(!isOpen)}
        />

        <div className="absolute inset-y-0 end-0 flex items-center pe-3">
          <div className="hs-dropdown [--auto-close:inside] relative inline-flex">
            <button
              type="button"
              className="hs-dropdown-toggle size-7 shrink-0 inline-flex justify-center items-center rounded-full bg-white text-gray-500 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              aria-label="Dropdown"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Dropdown</span>
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </button>

            {isOpen && (
              <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 min-w-30 bg-white border border-gray-200 shadow-xl rounded-lg mt-2 dark:bg-neutral-800 dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full">
                <div className="flex flex-row divide-x divide-gray-200 dark:divide-neutral-700">
                  {/* Hours */}
                  <div className="p-1 max-h-56 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-white [&::-webkit-scrollbar-thumb]:bg-transparent hover:[&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-800 dark:hover:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                    {hours.map((hour) => (
                      <button
                        key={hour}
                        className={`group relative flex justify-center items-center p-1.5 w-10 text-center text-sm text-gray-800 cursor-pointer rounded-md hover:bg-gray-100 hover:text-gray-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-neutral-200 ${
                          selectedHour === hour
                            ? "bg-blue-600 text-white dark:bg-blue-500"
                            : ""
                        }`}
                        onClick={() => handleHourChange(hour)}
                      >
                        {hour}
                      </button>
                    ))}
                  </div>

                  {/* Minutes */}
                  <div className="p-1 max-h-56 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-white [&::-webkit-scrollbar-thumb]:bg-transparent hover:[&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-800 dark:hover:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                    {minutes.map((minute) => (
                      <button
                        key={minute}
                        className={`group relative flex justify-center items-center p-1.5 w-10 text-center text-sm text-gray-800 cursor-pointer rounded-md hover:bg-gray-100 hover:text-gray-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-neutral-200 ${
                          selectedMinute === minute
                            ? "bg-blue-600 text-white dark:bg-blue-500"
                            : ""
                        }`}
                        onClick={() => handleMinuteChange(minute)}
                      >
                        {minute}
                      </button>
                    ))}
                  </div>

                  {/* AM/PM */}
                  <div className="p-1 max-h-56 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-white [&::-webkit-scrollbar-thumb]:bg-transparent hover:[&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-800 dark:hover:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                    {["AM", "PM"].map((amPm) => (
                      <button
                        key={amPm}
                        className={`group relative flex justify-center items-center p-1.5 w-10 text-center text-sm text-gray-800 cursor-pointer rounded-md hover:bg-gray-100 hover:text-gray-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-neutral-200 ${
                          selectedAmPm === amPm
                            ? "bg-blue-600 text-white dark:bg-blue-500"
                            : ""
                        }`}
                        onClick={() => handleAmPmChange(amPm)}
                      >
                        {amPm}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="py-2 px-3 flex flex-wrap justify-between items-center gap-2 border-t border-gray-200 dark:border-neutral-700">
                  <button
                    type="button"
                    className="text-[13px] font-medium rounded-md bg-white text-blue-600 hover:text-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:text-blue-700 dark:bg-neutral-800 dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
                    onClick={() => {
                      const now = new Date();
                      const hour = now.getHours() % 12 || 12;
                      const minute = now.getMinutes();
                      const amPm = now.getHours() >= 12 ? "PM" : "AM";
                      handleHourChange(hour.toString().padStart(2, "0"));
                      handleMinuteChange(minute.toString().padStart(2, "0"));
                      handleAmPmChange(amPm);
                    }}
                  >
                    Now
                  </button>
                  <button
                    type="button"
                    className="py-1 px-2.5 text-[13px] font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    onClick={() => setIsOpen(false)}
                  >
                    OK
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
