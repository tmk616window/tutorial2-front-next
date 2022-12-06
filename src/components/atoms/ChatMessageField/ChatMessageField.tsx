import { styled, InputBase } from "@mui/material";

const MessageInputWrapper = styled(InputBase)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(18)};
    padding: ${theme.spacing(1)};
    width: 100%;
`
);

export const ChatMessageField = () => {
  return (
    <MessageInputWrapper
      autoFocus
      placeholder="Write your message here..."
      fullWidth
    />
  );
};
