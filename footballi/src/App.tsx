import Layout from "./layout";
import GameList from "./components/game-list";
import { GamesProvider } from "./components/contexts/gameContext";

function App() {
  return (
    <GamesProvider>
      <Layout>
        <GameList />
      </Layout>
    </GamesProvider>
  );
}

export default App;
