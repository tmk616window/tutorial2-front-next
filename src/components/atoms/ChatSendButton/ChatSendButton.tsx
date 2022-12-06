import { Button } from "@mui/material";
import SendTwoToneIcon from "@mui/icons-material/SendTwoTone";

export const ChatSendButton = () => {
  return (
    <Button startIcon={<SendTwoToneIcon />} variant="contained">
      Send
    </Button>
  );
};
