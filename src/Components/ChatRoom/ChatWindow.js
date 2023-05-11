import React from "react";
import "../../App.css";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import Message from "./Message";
import styled from "styled-components";
import Input from "@mui/material/Input";
const MessageList = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 82vh;
  overflow-y: auto;

`;

function Header() {
  return (
    <div className="container-header">
      <div>
        <h2>Room 1</h2>
        <span>Describle room 1</span>
      </div>
      <div>
        <Button className="add-room">
          
          <AddIcon /> Invite{" "}
        </Button>
        <AvatarGroup
          className="avatar-group"
          total={10}
          max={3}
          sx={{ maxWidth: "0px" }}
          spacing="small"
        >
          <Avatar
            
            sx={{ bgcolor: "green" }}
          >
            A
          </Avatar>
          <Avatar
            
            sx={{ bgcolor: "green" }}
          >
            G
          </Avatar>
          <Avatar
           
            sx={{ bgcolor: "green" }}
          >
            F
          </Avatar>
          <Avatar
            
            sx={{ bgcolor: "green" }}
          >
            G
          </Avatar>
        </AvatarGroup>
      </div>
    </div>
  );
}
function FormMessage() {
  return (
    <div className="form-message">
      <form>
        <Input
          bordered={false}
          autoComplete="off"
          className="input-message"
          type="text"
          placeholder="Enter message..."
        />

        <Button className="btn-message" type="primary">
          {" "}
          <stronge>Send</stronge>
        </Button>
      </form>
    </div>
  );
}

export default function ChatWindow() {
  return (
    <div>
      <Header />
      <MessageList className="message-list">
        <Message
          text="phofdfsodfjs"
          photoUrl="null"
          displayName="phong"
          createAt={1231231}
        />
        <Message
          text="phofdfsodfjs"
          photoUrl="null"
          displayName="phong"
          createAt={1231231}
        />
        <Message
          text="phofdfsodfjs"
          photoUrl="null"
          displayName="phong"
          createAt={1231231}
        />

        <Message
          text="phofdfsodfjs"
          photoUrl="null"
          displayName="phong"
          createAt={1231231}
        />
        <Message
          text="phofdfsodfjs"
          photoUrl="null"
          displayName="phong"
          createAt={1231231}
        />
        <Message
          text="phofdfsodfjs"
          photoUrl="null"
          displayName="phong"
          createAt={1231231}
        />
        <Message
          text="phofdfsodfjs"
          photoUrl="null"
          displayName="phong"
          createAt={1231231}
        />
        <Message
          text="phofdfsodfjs"
          photoUrl="null"
          displayName="phong"
          createAt={1231231}
        />
        <Message
          text="phofdfsodfjs"
          photoUrl="null"
          displayName="phong"
          createAt={1231231}
        />
        <Message
          text="phofdfsodfjs"
          photoUrl="null"
          displayName="phong"
          createAt={1231231}
        />

        <Message
          text="phofdfsodfjs"
          photoUrl="null"
          displayName="phong"
          createAt={1231231}
        />
        <Message
          text="phofdfsodfjs"
          photoUrl="null"
          displayName="phong"
          createAt={1231231}
        />
        <Message
          text="phofdfsodfjs"
          photoUrl="null"
          displayName="phong"
          createAt={1231231}
        />
        <Message
          text="phofdfsodfjs"
          photoUrl="null"
          displayName="phong"
          createAt={1231231}
        />
        <Message
          text="phofdfsodfjs"
          photoUrl="null"
          displayName="phong"
          createAt={1231231}
        />
      </MessageList>
      <FormMessage />
    </div>
  );
}
