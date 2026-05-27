import { useParams, useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import { mockGames } from "../../mocks/games";
import type { GameStatus } from "../../types/game";
import {
  Container,
  Content,
  BackButton,
  Main,
  LeftColumn,
  CoverWrapper,
  Cover,
  ActionsWrapper,
  RightColumn,
  Card,
  CardTitle,
  GameTitle,
  BadgesRow,
  InfoGrid,
  InfoItem,
  RatingRow,
  RatingValue,
  ReviewText,
  ReviewEmpty,
  StatusGrid,
  StatusOption,
  StatusDot,
} from "./styles";

const statusOptions: { key: GameStatus; label: string; color: string }[] = [
  { key: "playing", label: "Jogando", color: "#1D9E75" },
  { key: "completed", label: "Zerado", color: "#534AB7" },
  { key: "wishlist", label: "Quero jogar", color: "#854F0B" },
  { key: "dropped", label: "Abandonado", color: "#993C1D" },
];

const statusChipConfig = {
  playing: { label: "Jogando", sx: { bgcolor: "#E1F5EE", color: "#0F6E56" } },
  completed: { label: "Zerado", sx: { bgcolor: "#EEEDFE", color: "#534AB7" } },
  wishlist: {
    label: "Quero jogar",
    sx: { bgcolor: "#FAEEDA", color: "#854F0B" },
  },
  dropped: {
    label: "Abandonado",
    sx: { bgcolor: "#FAECE7", color: "#993C1D" },
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function GameDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const game = mockGames.find((g) => g.id === id);

  if (!game) {
    return (
      <Container>
        <Navbar />
        <Content>
          <BackButton onClick={() => navigate("/")}>
            <i
              className="ti ti-arrow-left"
              aria-hidden="true"
              style={{ fontSize: 14 }}
            />
            Voltar para estante
          </BackButton>
          <p>Jogo não encontrado.</p>
        </Content>
      </Container>
    );
  }

  const chipConfig = statusChipConfig[game.status];

  return (
    <Container>
      <Navbar />
      <Content>
        <BackButton onClick={() => navigate("/")}>
          <i
            className="ti ti-arrow-left"
            aria-hidden="true"
            style={{ fontSize: 14 }}
          />
          Voltar para estante
        </BackButton>

        <Main>
          <LeftColumn>
            <CoverWrapper>
              <Cover src={game.cover} alt={game.title} />
            </CoverWrapper>

            <ActionsWrapper>
              <Button
                variant="contained"
                sx={{ width: "100%", py: 1.1 }}
                onClick={() => {}}
              >
                <i
                  className="ti ti-edit"
                  aria-hidden="true"
                  style={{ marginRight: 6, fontSize: 15 }}
                />
                Editar jogo
              </Button>

              <Button
                variant="outlined"
                sx={{
                  width: "100%",
                  py: 1,
                  color: "#993C1D",
                  borderColor: "#993C1D",
                  "&:hover": { bgcolor: "#FAECE7", borderColor: "#993C1D" },
                }}
                onClick={() => {}}
              >
                <i
                  className="ti ti-trash"
                  aria-hidden="true"
                  style={{ marginRight: 6, fontSize: 15 }}
                />
                Remover da estante
              </Button>
            </ActionsWrapper>
          </LeftColumn>

          <RightColumn>
            <Card>
              <GameTitle>{game.title}</GameTitle>
              <BadgesRow>
                <Chip
                  label={chipConfig.label}
                  size="small"
                  sx={{ ...chipConfig.sx, fontSize: "12px", height: "24px" }}
                />
                <Chip
                  label={game.platform}
                  size="small"
                  sx={{
                    bgcolor: "#F1EFE8",
                    color: "#5F5E5A",
                    fontSize: "12px",
                    height: "24px",
                  }}
                />
              </BadgesRow>
              <InfoGrid>
                <InfoItem>
                  <label>Adicionado em</label>
                  <p>{formatDate(game.createdAt)}</p>
                </InfoItem>
                <InfoItem>
                  <label>Última atualização</label>
                  <p>{formatDate(game.createdAt)}</p>
                </InfoItem>
              </InfoGrid>
            </Card>

            <Card>
              <CardTitle>Minha avaliação</CardTitle>
              <RatingRow>
                <Rating
                  value={game.rating ?? 0}
                  readOnly
                  size="medium"
                  sx={{
                    color: "#EF9F27",
                    "& .MuiRating-iconEmpty": { color: "#E0DED8" },
                  }}
                />
                {game.rating ? (
                  <RatingValue>{game.rating}.0 / 5.0</RatingValue>
                ) : (
                  <RatingValue style={{ color: "#B4B2A9" }}>
                    Sem avaliação
                  </RatingValue>
                )}
              </RatingRow>
            </Card>

            <Card>
              <CardTitle>Minha review</CardTitle>
              {game.review ? (
                <ReviewText>{game.review}</ReviewText>
              ) : (
                <ReviewEmpty>Nenhuma review escrita ainda.</ReviewEmpty>
              )}
            </Card>

            <Card>
              <CardTitle>Status</CardTitle>
              <StatusGrid>
                {statusOptions.map((option) => (
                  <StatusOption
                    key={option.key}
                    active={game.status === option.key}
                  >
                    <StatusDot color={option.color} />
                    {option.label}
                  </StatusOption>
                ))}
              </StatusGrid>
            </Card>
          </RightColumn>
        </Main>
      </Content>
    </Container>
  );
}

export default GameDetail;
