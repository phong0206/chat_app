import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
const Container = styled.div`
  margin-bottom: 10px;
  

  .author {
    margin-left: 34px;
    margin-top: -32px;
    font-weight: bold;
    font-size: 18px;
  }
  .date {
    margin-left: 100px;
    font-size: 11px;
    color: aqua;
    margin-top: -20px;
  }
  .content {
    margin-left: 34px;
    margin-top: 10px;
  }
`;

 function Message({ text, displayName, createAt, photoUrl }) {
  return (
    <Container>
      <div>
        <div>
          <Avatar
            style={{ width: "30px", height: "30px" }}
            src={photoUrl}
            alt={displayName}
          />
          <Typography className="author" align="left">
            {displayName}
          </Typography>
          <Typography align="left" className="date">
            {createAt}
          </Typography>
          <div>
            <Typography align="left" className="content">
              {text}
            </Typography>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Message;
