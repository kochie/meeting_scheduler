"use client";

import { createContext, useContext, useState } from "react";
import Notification, { NotificationProps } from ".";

let id = 0;

const NotificationContext = createContext({
  addNotification: ({ message, timeout = 5000, title }) => {},
});

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);

  const addNotification = ({ message, timeout = 5000, title }) => {
    setNotifications([...notifications, { id: id++, message, timeout, title }]);
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {notifications.map((notification) => (
            <Notification {...notification} key={notification.id} />
          ))}
        </div>
      </div>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const { addNotification } = useContext(NotificationContext);
  return addNotification;
};
