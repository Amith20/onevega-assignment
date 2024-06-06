"use client";

import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Collapse, Typography, Box } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { getBcfBoards } from "@/lib/FetchData";

interface Boards {
  id: number;
  name: string;
  createdAt: string;
  bcfs: {
    id: number;
    name: string;
    createdAt: string;
    bcfBoards: {
      id: number;
      name: string;
      createdAt: string;
    };
  };
}

const Sidebar = () => {
  const [open, setOpen] = useState(null);
  const [subOpen, setSubOpen] = useState(null);
  const [boards, setBoards] = useState<Boards[]>([]);

  useEffect(() => {
    getBcfBoards().then((res): any => {
      console.log('aa',res.boards);
      if (res.boards && res.boards.length > 0) {
        setBoards(res.boards);
      }
    });
  }, []);

  const handleClick = (id: any) => {
    setOpen(open === id ? null : id);
  };

  const handleSubClick = (id: any) => {
    setSubOpen(subOpen === id ? null : id);
  };

  console.log('abcc' , boards);

  return (
    <div
      style={{
        width: "250px",
        backgroundColor: "#3D1C53",
        color: "white",
        height: "auto",
        padding:'10px'
      }}
    >
      <Box display="flex" alignItems="center" mb={2}>
        {/* <img src="/path/to/logo.png" alt="Company Logo" style={{ width: '24px', height: '24px', marginRight: '8px' }} /> */}
        <Typography variant="h4" component="div">
          Industry
        </Typography>
      </Box>
      <List>
        {boards.map((board: any, index: any) => (
          <div key={index} style={{ border: '1px solid white'}}>
            <ListItem onClick={() => handleClick(board.id)} >
              <ListItemText primary={board.name} />
              {open === board.id ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open === board.id} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {board.bcfs.map((bcf: any) => (
                  <div key={bcf.id}>
                    <ListItem
                      sx={{ pl: 4 }}
                      onClick={() => handleSubClick(bcf.id)}
                    >
                      <ListItemText primary={bcf.name} />
                      {subOpen === bcf.id ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse
                      in={subOpen === bcf.id}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {bcf.bcfBoards.map((bcfBoard: any) => (
                          <ListItem sx={{ pl: 8 }} key={bcfBoard.id}>
                            <ListItemText primary={bcfBoard.name} />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </div>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
