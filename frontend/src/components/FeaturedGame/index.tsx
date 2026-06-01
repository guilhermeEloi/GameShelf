import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";
import type { Game } from "../../types/game";
import { Card, Cover, Body, Tag, Title, Actions } from "./styles";

type FeaturedGameProps = {
  game: Game;
};

function FeaturedGame({ game }: FeaturedGameProps) {
  return (
    <Card>
      <Cover src={game.cover} alt={game.title} />
      <Body>
        <div>
          <Tag>Jogando agora</Tag>
          <Title>{game.title}</Title>
        </div>
        <Actions>
          {game.rating && (
            <Rating
              value={game.rating}
              readOnly
              size="small"
              sx={{
                color: "#EF9F27",
                "& .MuiRating-iconEmpty": { color: "#E0DED8" },
              }}
            />
          )}
          <Chip
            label="Jogando"
            size="small"
            sx={{
              bgcolor: "#E1F5EE",
              color: "#0F6E56",
              fontSize: "11px",
              height: "22px",
            }}
          />
          <Chip
            label={game.platform}
            size="small"
            sx={{
              bgcolor: "#F1EFE8",
              color: "#5F5E5A",
              fontSize: "11px",
              height: "22px",
            }}
          />
        </Actions>
      </Body>
    </Card>
  );
}

export default FeaturedGame;
