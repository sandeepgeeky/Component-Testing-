import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Center, Fab, Select, HStack } from "@/components";
import * as React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const data = ["xs", "md", "sm", "lg", "xl"];
  const [value, setValue] = React.useState("md");

  return (
    <Center h="100vh" w="$full" bg="white">
      <Select onValueChange={(x: any) => setValue(x)}>
        <Select.Trigger>
          <Select.Input placeholder="Select option" />
        </Select.Trigger>
        <Select.Portal>
          <Select.Backdrop />
          <Select.Content>
            <Select.DragIndicatorWrapper>
              <Select.DragIndicator />
            </Select.DragIndicatorWrapper>
            {data.map((item) => {
              return <Select.Item label={item} value={item} key={item} />;
            })}
          </Select.Content>
        </Select.Portal>
      </Select>
      {/* @ts-ignore */}
      <HStack space={value} pt={122}>
        <Box sx={{ w: 200, h: 200, bg: "$blue300" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
        </Box>
        <Box sx={{ w: 200, h: 200, bg: "$blue400" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quia
        </Box>
        <Box sx={{ w: 200, h: 200, bg: "$blue500" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nisi in
        </Box>
      </HStack>
    </Center>
  );
}
