import React, { useState } from "react";

import {
  Box,
  Typography,
  Button,
  TextField,
} from "@/common/components/components";

type Properties = {
  title: string;
  description: string;
  submitValue: string;
  selectedRows: string[];
};

const SelectedModal: React.FC<Properties> = ({
  title,
  description,
  submitValue,
  selectedRows,
}) => {
  const [submitTerm, setSubmitTerm] = useState("");

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        backgroundColor: "background.default",
        width: 500,
        height: 500,
        m: "auto",
        mt: 2,
        p: 5,
        gap: 2,
      }}
    >
      <Typography variant="h4" color="primary">
        {title}
      </Typography>
      <Typography>{description}</Typography>
      <Typography color="gray">
        {`to ${title.toLowerCase()} please enter `}
        <Typography component="span" color="info">
          '{submitValue}'
        </Typography>
        {` below.`}
      </Typography>
      <Box
        sx={{
          flex: 1,
          border: "solid 1px",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          p: 2,
          overflowY: "auto",
        }}
      >
        {selectedRows.map((row, index) => (
          <Typography key={index} variant="caption" component="span">
            {row}
          </Typography>
        ))}
      </Box>
      <TextField
        value={submitTerm}
        onChange={(e) => setSubmitTerm(e.target.value)}
        placeholder={`${submitValue}...`}
        fullWidth
      />
      <Button variant="contained">Submit</Button>
    </Box>
  );
};

export { SelectedModal };
