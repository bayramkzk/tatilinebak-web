import { HEADER_HEIGHT } from "@/components/Header";
import Layout from "@/components/Layout";
import {
  Button,
  Center,
  createStyles,
  Modal,
  Stack,
  useMantineColorScheme,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import type { NextPage } from "next";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  container: {
    height: `calc(100% - ${HEADER_HEIGHT * 2}px)`,
  },
}));

const Home: NextPage = () => {
  const { classes } = useStyles();
  const [modal, setModal] = useState(false);
  const { toggleColorScheme } = useMantineColorScheme();

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  const pushNotification = () =>
    showNotification({
      title: "Notification example",
      message: "Hello world 🙃!",
    });
  const toggleDarkMode = () => toggleColorScheme();

  return (
    <Layout containerProps={{ className: classes.container }} omitPadding>
      <Center sx={{ width: "100%", height: "100%" }}>
        <Stack>
          <Button onClick={openModal} color="blue">
            Show dialog!
          </Button>
          <Button onClick={pushNotification} color="lime">
            Push notification
          </Button>
          <Button onClick={toggleDarkMode} color="indigo">
            Toggle dark mode
          </Button>
        </Stack>

        <Modal onClose={closeModal} opened={modal}>
          Hello world
        </Modal>
      </Center>
    </Layout>
  );
};

export default Home;
