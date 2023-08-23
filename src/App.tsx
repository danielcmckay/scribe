import { AppShell, Header } from "@mantine/core";
import { CurrentNotePage } from "./pages/current-note-page";

function App() {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} p="xs">
          stuff
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <CurrentNotePage />
    </AppShell>
  );
}

export default App;
