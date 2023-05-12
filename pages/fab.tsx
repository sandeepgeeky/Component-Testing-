import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Center, Fab, Select } from "@/components";
import * as React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const data = [
    "top-right",
    "top-left",
    "bottom-right",
    "bottom-left",
    "top-center",
    "bottom-center",
  ];
  const [value, setValue] = React.useState("top-right");

  return (
    <Center h="100vh" w="$full" bg="$red500">
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
      <Fab placement={value}>
        <Fab.Label>Fab</Fab.Label>
      </Fab>
    </Center>
  );
}
