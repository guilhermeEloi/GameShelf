import Rating from "@mui/material/Rating";
import type { Game } from "../../types/game";
import StatusBadge from "../StatusBadge";
import {
  Card,
  Cover,
  Info,
  Title,
  Meta,
  Platform,
  Bottom,
  NoRating,
  AddCard,
} from "./styles";

type GameCardProps = {
  game: Game;
  onClick?: () => void;
};

type AddGameCardProps = {
  onClick?: () => void;
};

export function GameCard({ game, onClick }: GameCardProps) {
  return (
    <Card onClick={onClick}>
      <Cover src={game.cover} alt={game.title} />
      <Info>
        <Title>{game.title}</Title>
        <Meta>
          <StatusBadge status={game.status} />
          <Platform>{game.platform}</Platform>
        </Meta>
      </Info>
      <Bottom>
        {game.rating ? (
          <Rating
            value={game.rating}
            readOnly
            size="small"
            sx={{
              color: "#EF9F27",
              "& .MuiRating-iconEmpty": { color: "#E0DED8" },
            }}
          />
        ) : (
          <NoRating>Sem nota ainda</NoRating>
        )}
      </Bottom>
    </Card>
  );
}

export function AddGameCard({ onClick }: AddGameCardProps) {
  return (
    <AddCard onClick={onClick}>
      <i className="ti ti-plus" aria-hidden="true" />
      Adicionar jogo
    </AddCard>
  );
}
