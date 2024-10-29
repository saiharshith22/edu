import {
  FormControl,
  Grid2 as Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { McqGeneratorContext } from ".";

export default function McqGeneratorSelectOp() {
  const context = useContext(McqGeneratorContext);
  const { mcqType, setMcqType, mcqCount, setMcqCount, mcqLevel, setMcqLevel } =
    context;

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
    // width: { xs: "100%", sm: "100%", md: "100%", lg: "359px" },
    width: { xs: "100%", sm: "100%", md: "600px", lg: "380px" },
    borderRadius: "5px",
    border: "0.5px solid #000",
    background: "#FFF",
  };

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

  console.table({ mcqType, mcqCount, mcqLevel });

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
          justifyContent: {
            xs: "none",
            sm: "none",
            md: "center",
            lg: "center",
          },
          alignItems: { xs: "none", sm: "none", md: "center", lg: "center" },
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          marginBottom: "32px",
        }}
      >
        <Grid sx={GridStyle}>
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
              <MenuItem value={"mcq"}>MCQ (Multiple Choise Question)</MenuItem>
              <MenuItem value={"true/false"}>
                True & False (For paid Subscribers)
              </MenuItem>
              <MenuItem value={"fillInTheBlanks"}>
                Fill in the blanks (For paid Subscribers)
              </MenuItem>
              <MenuItem value={"highOrderQA"}>
                High order QA (For paid Subscribers)
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid sx={GridStyle}>
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
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={100}>100 (For paid Subscribers)</MenuItem>
              <MenuItem value={150}>150 (For paid Subscribers)</MenuItem>
              <MenuItem value={200}>200+ (For paid Subscribers)</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid sx={GridStyle}>
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
              <MenuItem value={"easy"}>Easy</MenuItem>
              <MenuItem value={"medium"}>Medium</MenuItem>
              <MenuItem value={"hard"}>Hard</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}
