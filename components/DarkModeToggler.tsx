import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons";

const ICON_SIZE = 32;

const DarkModeToggler = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      variant="outline"
      sx={{ padding: 4 }}
      color={dark ? "yellow" : "blue"}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <IconSun size={ICON_SIZE} /> : <IconMoonStars size={ICON_SIZE} />}
    </ActionIcon>
  );
};

export default DarkModeToggler;
