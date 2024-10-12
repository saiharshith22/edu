import {
  FormControl,
  Grid2 as Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";

export default function McqGeneratorSelectOp() {
  const GridStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "10px",
  };
  const TypoStyle = {
    font: {
      xs: "normal 400 12px/normal 'Inter'",
      sm: "normal 400 14px/normal 'Inter'",
      md: "normal 400 16px/normal 'Inter'",
      lg: "normal 400 16px/normal 'Inter'",
    },
    color: "#000",
    letterSpacing: "0.024px",
  };
  const FormStyle = {
    m: 0,
    width: { xs: "190px", sm: "250px", md: "359px", lg: "359px" },
    borderRadius: "5px",
    border: "0.5px solid #000",
    background: "#FFF",
  };
  const [mcqType, setMcqType] = React.useState(1);
  const [mcqCount, setMcqCount] = React.useState(1);
  const [mcqLevel, setMcqLevel] = React.useState(1);

  const [open, setOpen] = React.useState(false);

  const handleChange = (type) => (event) => {
    if (type === "mcq") {
      setMcqType(event.target.value);
    } else if (type === "count") {
      setMcqCount(event.target.value);
    } else if (type === "level") {
      setMcqLevel(event.target.value);
    }
  };

  const handleClose = (type) => () => {
    setOpen((prev) => ({ ...prev, [type]: true }));
  };

  const handleOpen = (type) => () => {
    setOpen((prev) => ({ ...prev, [type]: false }));
  };
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Grid size={{ xs: "12", sm: "7", md: "6", lg: "6" }} sx={GridStyle}>
          <Typography sx={TypoStyle}>Question type</Typography>
          <FormControl sx={FormStyle}>
            <InputLabel id="mcq-select-label"></InputLabel>
            <Select
              labelId="mcq-select-label"
              id="mcq-select"
              open={open.mcq}
              onClose={handleClose("mcq")}
              onOpen={handleOpen("mcq")}
              value={mcqType}
              onChange={handleChange("mcq")}
              sx={{
                height: { xs: "30px", sm: "40px" },
                display: "flex",
                alignItems: "center",
              }}
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={1}>MCQ (Multiple Choise Question)</MenuItem>
              <MenuItem value={2}>True & False (For paid Subscribers)</MenuItem>
              <MenuItem value={3}>
                Fill in the blanks (For paid Subscribers)
              </MenuItem>
              <MenuItem value={4}>
                High order QA (For paid Subscribers)
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{ xs: "12", sm: "5", md: "6", lg: "6" }} sx={GridStyle}>
          <Typography sx={TypoStyle}>Question Count</Typography>
          <FormControl sx={FormStyle}>
            <InputLabel id="count-select-label"></InputLabel>
            <Select
              labelId="count-select-label"
              id="count-select"
              open={open.count}
              onClose={handleClose("count")}
              onOpen={handleOpen("count")}
              value={mcqCount}
              onChange={handleChange("count")}
              sx={{
                height: { xs: "30px", sm: "40px" },
                display: "flex",
                alignItems: "center",
              }}
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={1}>10</MenuItem>
              <MenuItem value={2}>100 (For paid Subscribers)</MenuItem>
              <MenuItem value={3}>150 (For paid Subscribers)</MenuItem>
              <MenuItem value={4}>200+ (For paid Subscribers)</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Difficulty level */}
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
          marginBottom: "32px",
          paddingRight: { xs: "0px", sm: "265px", md: "375px" },
        }}
      >
        <Grid
          //   size={{ xs: "12", sm: "7", md: "6", lg: "6" }}
          sx={GridStyle}
        >
          <Typography sx={TypoStyle}>Difficulty level</Typography>
          <FormControl sx={FormStyle}>
            <InputLabel id="level-select-label"></InputLabel>
            <Select
              labelId="level-select-label"
              id="level-select"
              open={open.level}
              onClose={handleClose("level")}
              onOpen={handleOpen("level")}
              value={mcqLevel}
              onChange={handleChange("level")}
              sx={{
                height: { xs: "30px", sm: "40px" },
                display: "flex",
                alignItems: "center",
              }}
            >
              <MenuItem value=""> </MenuItem>
              <MenuItem value={1}>Easy</MenuItem>
              <MenuItem value={2}>Medium</MenuItem>
              <MenuItem value={3}>Hard</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}
