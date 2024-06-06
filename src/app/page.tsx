"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Sidebar from "@/components/SideBar";
import SearchBar from "@/components/SearchBar";
import PromptCard from "@/components/PromptCard";
import { getPrompts } from "@/lib/FetchData";

interface Prompts {
  name: string;
  createdAt: string;
}

const Home = () => {
  const [prompts, setPrompts] = useState<Prompts[]>([]);

  useEffect(() => {
    getPrompts().then((res): any => {
      if (res && res.length > 0) {
        setPrompts(res);
      }
    });
  }, []);

  return (
    <Box display="flex">
      <Sidebar />
      <Box flexGrow={1} p={2} bgcolor="#8246A1">
        <SearchBar />
        <Container>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="h5" color="white">
              BCF Board 1
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
              gap={6}
              bgcolor="white"
              paddingY={1.5}
              paddingX={5}
              borderRadius={3}
            >
              <Typography>Today</Typography>
              <Typography>Week</Typography>
              <Typography>Month</Typography>
            </Box>
          </Box>
          <Grid container spacing={2}>
            {prompts.map((prompt, index) => (
              <Grid item md={2.4} key={index}>
                <PromptCard
                  title={prompt.name}
                  date={new Date(prompt.createdAt).toDateString()}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
