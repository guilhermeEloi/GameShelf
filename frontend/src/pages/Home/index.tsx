import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Navbar from "../../components/Navbar";
import StatCard from "../../components/StatCard";
import FeaturedGame from "../../components/FeaturedGame";
import { GameCard, AddGameCard } from "../../components/GameCard";
import { mockGames, mockStats } from "../../mocks/games";
import type { GameStatus } from "../../types/game";
import {
  Container,
  Content,
  Hero,
  StatsGrid,
  Divider,
  Tabs,
  Tab,
  TabCount,
  SectionHeader,
  SectionTitle,
  GamesGrid,
} from "./styles";
import AddGameModal from "../../components/AddGameModal";

type TabFilter = "all" | GameStatus;

const tabs: { key: TabFilter; label: string }[] = [
  { key: "all", label: "Todos" },
  { key: "playing", label: "Jogando" },
  { key: "completed", label: "Zerados" },
  { key: "wishlist", label: "Quero jogar" },
  { key: "dropped", label: "Abandonados" },
];

function Home() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<TabFilter>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const featuredGame = mockGames.find((g) => g.status === "playing");

  const filteredGames =
    activeTab === "all"
      ? mockGames
      : mockGames.filter((g) => g.status === activeTab);

  function getCount(key: TabFilter) {
    if (key === "all") return mockStats.total;
    return mockGames.filter((g) => g.status === key).length;
  }

  return (
    <Container>
      <Navbar onAddGame={() => setIsModalOpen(true)} />

      {isModalOpen && (
        <AddGameModal
          onClose={() => setIsModalOpen(false)}
          onAdd={(data) => console.log("Jogo adicionado:", data)}
        />
      )}
      <Content>
        <Hero>
          <h1>Minha Estante 🎮</h1>
          <p>Olá, {user?.name.split(" ")[0]}! Continue de onde parou.</p>
        </Hero>

        <StatsGrid>
          <StatCard
            icon={
              <i
                className="ti ti-stack-2"
                style={{ color: "#7F77DD", fontSize: 15 }}
              />
            }
            label="Total de jogos"
            value={mockStats.total}
            suffix="títulos"
          />
          <StatCard
            icon={
              <i
                className="ti ti-player-play"
                style={{ color: "#1D9E75", fontSize: 15 }}
              />
            }
            label="Jogando agora"
            value={mockStats.playing}
            suffix="ativos"
          />
          <StatCard
            icon={
              <i
                className="ti ti-trophy"
                style={{ color: "#534AB7", fontSize: 15 }}
              />
            }
            label="Zerados"
            value={mockStats.completed}
            suffix="jogos"
          />
          <StatCard
            icon={
              <i
                className="ti ti-heart"
                style={{ color: "#BA7517", fontSize: 15 }}
              />
            }
            label="Gênero favorito"
            value={mockStats.favoriteGenre}
            suffix="12 jogos"
          />
        </StatsGrid>

        <Divider />

        <Tabs>
          {tabs.map((tab) => (
            <Tab
              key={tab.key}
              active={activeTab === tab.key}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
              <TabCount active={activeTab === tab.key}>
                {getCount(tab.key)}
              </TabCount>
            </Tab>
          ))}
        </Tabs>

        {featuredGame && activeTab === "all" && (
          <>
            <SectionHeader>
              <SectionTitle>Em destaque</SectionTitle>
            </SectionHeader>
            <FeaturedGame game={featuredGame} />
          </>
        )}

        <SectionHeader>
          <SectionTitle>Recentes</SectionTitle>
        </SectionHeader>

        <GamesGrid>
          {filteredGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onClick={() => navigate(`/game/${game.id}`)}
            />
          ))}
          <AddGameCard onClick={() => setIsModalOpen(true)} />
        </GamesGrid>
      </Content>
    </Container>
  );
}

export default Home;
