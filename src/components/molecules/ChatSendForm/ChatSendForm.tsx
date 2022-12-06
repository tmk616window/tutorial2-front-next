import { Box } from "@mui/material";
import { red } from "@mui/material/colors";
import { ChatMessageField } from "../../atoms/ChatMessageField/ChatMessageField";
import { ChatUploadFileButton } from "../../atoms/ChatUploadFileButton/ChatUploadFileButton";
import { ChatSendButton } from "../../atoms/ChatSendButton/ChatSendButton";

export const ChatForm = () => {
  const user = {
    name: "Catherine Pike",
    avatar: "/static/images/avatars/1.jpg",
  };

  return (
    <Box
      sx={{
        background: red,
        display: "flex",
        alignItems: "center",
        p: 2,
      }}
    >
      <ChatMessageField />
      <ChatUploadFileButton />
      <ChatSendButton />
    </Box>
  );
};
