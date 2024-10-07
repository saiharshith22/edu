import { Box, TextField } from "@mui/material";
import React from "react";

const McqGenerator2ShowCase = () => {
  const text = `Elon Musk has shown again he can influence the digital currency market with just his tweets. After saying that his electric vehicle-making company Tesla will not accept payments in Bitcoin because of environmental concerns, he tweeted that he was working with developers of Dogecoin to improve system transaction efficiency.

Following the two distinct statements from him, the world's largest cryptocurrency hit a two-month low, while Dogecoin rallied by about 20 percent. The SpaceX CEO has in recent months often tweeted in support of Dogecoin, but rarely for Bitcoin. In a recent tweet, Musk put out a statement from Tesla that it was concerned about the rapidly increasing use of fossil fuels for Bitcoin (price in India) mining and transaction, and hence was suspending vehicle purchases using the cryptocurrency.

A day later he again tweeted saying, To be clear, I strongly believe in crypto, but it can't drive a massive increase in fossil fuel use, especially coal. It triggered a downward spiral for Bitcoin value but the cryptocurrency has stabilized since. A number of Twitter users welcomed Musk's statement. One of them said it's time people started realizing that Dogecoin is here to stay and another referred to Musk's previous assertion that crypto could become the world's future currency.

The story of Dogecoin is far from over, and its future trajectory remains as unpredictable as ever. As with all cryptocurrencies, Dogecoin is subject to the ebb and flow of market forces, the speculative whims of investors, and the unpredictability of technological and regulatory changes. Investors would do well to remember that while cryptocurrency has the potential for high returns, this usually comes with much higher risk and volatility. Dogecoin is no exception.`;

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        height: "267px",
        justifyContent: "center",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-multiline-static"
        multiline
        rows={10}
        value={text}
        slotProps={{
          readOnly: true,
          //   style: {
          //     whiteSpace: "pre-line",
          //   },
        }}
        sx={{
          m: 1,
          width: { xs: "280px", sm: "500px", md: "746px", lg: "746px" },
          //maxWidth: "746px",
          borderRadius: "5px",
          border: "1px solid #000",
          background: "#FFF",
          "& .MuiInputBase-input": {
            whiteSpace: "pre-line",
            font: {
              xs: "normal 400 10px/normal 'Inter'",
              sm: "normal 400 10px/normal 'Inter'",
              md: "normal 400 12px/normal 'Inter'",
              lg: "normal 400 14px/normal 'Inter'",
            },
            color: "#000",
            letterSpacing: "0.021px",
          },
        }}
      />
    </Box>
  );
};

export default McqGenerator2ShowCase;
