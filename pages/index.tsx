import { Button, Center, Modal, Stack } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  const pushNotification = () =>
    showNotification({
      title: "Default notification",
      message: "Hey there, your code is awesome! 🤥",
    });

  return (
    <Center sx={{ width: "100%", height: "100%" }}>
      <Stack>
        <Button onClick={openModal} color="blue">
          Show dialog!
        </Button>
        <Button onClick={pushNotification} color="lime">
          Push notification
        </Button>
      </Stack>

      <Modal onClose={closeModal} opened={modal}>
        Hello world
      </Modal>
    </Center>
  );
};

export default Home;
