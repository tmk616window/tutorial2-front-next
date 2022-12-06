import { Tooltip, IconButton, styled } from "@mui/material";
import AttachFileTwoToneIcon from "@mui/icons-material/AttachFileTwoTone";

const Input = styled("input")({
  display: "none",
});

export const ChatUploadFileButton = () => {
  return (
    <>
      <Input accept="image/*" id="messenger-upload-file" type="file" />
      <Tooltip arrow placement="top" title="Attach a file">
        <label htmlFor="messenger-upload-file">
          <IconButton sx={{ mx: 1 }} color="primary" component="span">
            <AttachFileTwoToneIcon fontSize="small" />
          </IconButton>
        </label>
      </Tooltip>
    </>
  );
};
