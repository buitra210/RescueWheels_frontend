import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
// import { socket } from "path/to/socket/package"; // Replace "path/to/socket/package" with the actual package path

type NotificationsProps = {
  userInfoName?: string;
};
export default function Notifications({ userInfoName }: NotificationsProps) {
  const [notifications, setNotifications] = useState<any[]>([]); // Specify the type of notifications as an array of any
  useEffect(() => {
    const handleLike = (notification: any) => {
      // Specify the type of notification as any
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        notification,
      ]);
    };

    const handleComment = (notification: any) => {
      // Specify the type of notification as any
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        notification,
      ]);
    };
    // socket.on("feedback_liked", handleLike);
    // socket.on("feedback_commented", handleComment);
  }, []);
  return <Box sx={{ padding: "20px" }}></Box>;
}
