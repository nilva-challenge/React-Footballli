import GameList from "./components/game-list";
import { GamesProvider } from "./components/contexts/gameContext";
import Layout from "./layout";

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
