import { RouterTransition } from "@/components/RouterTransition";
import "@/styles/globals.css";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  MantineThemeOverride,
} from "@mantine/core";
import { useColorScheme, useHotkeys, useLocalStorage } from "@mantine/hooks";
import { NotificationsProvider } from "@mantine/notifications";
import { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const preferredColorScheme = useColorScheme();

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  const mantineTheme: MantineThemeOverride = {
    colorScheme,
    colors: {
      brandPrimary: [
        "#fbe9e7",
        "#ffccbc",
        "#ffab91",
        "#ff8a65",
        "#ff7043",
        "#ff5722",
        "#f4511e",
        "#e64a19",
        "#d84315",
        "#bf360c",
      ],
      brandSecondary: [
        "#fffde7",
        "#fff9c4",
        "#fff59d",
        "#fff176",
        "#ffee58",
        "#ffeb3b",
        "#fdd835",
        "#fbc02d",
        "#f9a825",
        "#f57f17",
      ],
      brandGradient:
        colorScheme === "dark"
          ? ["#ce2e3c", "#ce9240"]
          : ["#ee4e5c", "#eeb260"],
    },
    primaryColor: "brandPrimary",
    primaryShade: { light: 6, dark: 8 },
  };

  return (
    <>
      <Head>
        <title>tatilinebak.com</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
          <RouterTransition />
          <NotificationsProvider>
            <Component {...pageProps} />
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
