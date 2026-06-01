import { useState } from "react";
import Rating from "@mui/material/Rating";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import type { SelectChangeEvent } from "@mui/material/Select";
import Button from "../Button";
import type { GameStatus } from "../../types/game";
import {
  Overlay,
  Modal,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  SearchLabel,
  SearchWrap,
  SearchResults,
  SearchItem,
  SearchCover,
  SearchInfo,
  SearchTitle,
  SearchMeta,
  Divider,
  FieldsGrid,
  Field,
  RatingLabel,
  RatingRow,
  ModalFooter,
} from "./styles";

interface GameResult {
  id: string;
  title: string;
  cover: string;
  developer: string;
  year: string;
  genre: string;
}

const mockResults: GameResult[] = [
  {
    id: "1",
    title: "Elden Ring",
    cover: "https://picsum.photos/seed/g1/80/80",
    developer: "FromSoftware",
    year: "2022",
    genre: "RPG",
  },
  {
    id: "2",
    title: "Elden Ring: Shadow of the Erdtree",
    cover: "https://picsum.photos/seed/g2/80/80",
    developer: "FromSoftware",
    year: "2024",
    genre: "RPG",
  },
  {
    id: "3",
    title: "Elder Scrolls V: Skyrim",
    cover: "https://picsum.photos/seed/g3/80/80",
    developer: "Bethesda",
    year: "2011",
    genre: "RPG",
  },
];

const platforms = [
  "PC",
  "PS5",
  "PS4",
  "Xbox Series",
  "Xbox One",
  "Switch",
  "Mobile",
];

const statusOptions: { key: GameStatus; label: string }[] = [
  { key: "playing", label: "Jogando" },
  { key: "completed", label: "Zerado" },
  { key: "wishlist", label: "Quero jogar" },
  { key: "dropped", label: "Abandonado" },
];

const selectSx = {
  borderRadius: "8px",
  fontSize: "13px",
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#7F77DD" },
  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#7F77DD" },
};

type AddGameModalProps = {
  onClose: () => void;
  onAdd: (game: {
    gameId: string;
    platform: string;
    status: GameStatus;
    rating: number;
  }) => void;
};

function AddGameModal({ onClose, onAdd }: AddGameModalProps) {
  const [search, setSearch] = useState("");
  const [selectedGame, setSelectedGame] = useState<GameResult | null>(null);
  const [platform, setPlatform] = useState("PC");
  const [status, setStatus] = useState<GameStatus>("playing");
  const [rating, setRating] = useState<number>(0);

  const filteredResults = search.length > 1 ? mockResults : [];

  function handleAdd() {
    if (!selectedGame) return;
    onAdd({ gameId: selectedGame.id, platform, status, rating });
    onClose();
  }

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Adicionar jogo à estante</ModalTitle>
          <CloseButton onClick={onClose}>
            <i className="ti ti-x" aria-hidden="true" />
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          <SearchLabel htmlFor="game-search">Buscar jogo</SearchLabel>
          <SearchWrap>
            <i className="ti ti-search" aria-hidden="true" />
            <input
              id="game-search"
              type="text"
              placeholder="Ex: Elden Ring, Hades, Celeste..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </SearchWrap>

          {filteredResults.length > 0 && (
            <SearchResults>
              {filteredResults.map((game) => (
                <SearchItem
                  key={game.id}
                  selected={selectedGame?.id === game.id}
                  onClick={() => setSelectedGame(game)}
                >
                  <SearchCover src={game.cover} alt={game.title} />
                  <SearchInfo>
                    <SearchTitle>{game.title}</SearchTitle>
                    <SearchMeta>
                      {game.developer} · {game.year} · {game.genre}
                    </SearchMeta>
                  </SearchInfo>
                  {selectedGame?.id === game.id && (
                    <i
                      className="ti ti-circle-check-filled"
                      aria-hidden="true"
                      style={{ color: "#7F77DD", fontSize: 18 }}
                    />
                  )}
                </SearchItem>
              ))}
            </SearchResults>
          )}

          <Divider />

          <FieldsGrid>
            <Field>
              <label>Plataforma</label>
              <Select
                value={platform}
                onChange={(e: SelectChangeEvent) => setPlatform(e.target.value)}
                size="small"
                sx={selectSx}
              >
                {platforms.map((p) => (
                  <MenuItem key={p} value={p} sx={{ fontSize: "13px" }}>
                    {p}
                  </MenuItem>
                ))}
              </Select>
            </Field>

            <Field>
              <label>Status</label>
              <Select
                value={status}
                onChange={(e: SelectChangeEvent) =>
                  setStatus(e.target.value as GameStatus)
                }
                size="small"
                sx={selectSx}
              >
                {statusOptions.map((s) => (
                  <MenuItem key={s.key} value={s.key} sx={{ fontSize: "13px" }}>
                    {s.label}
                  </MenuItem>
                ))}
              </Select>
            </Field>
          </FieldsGrid>

          <RatingLabel>
            Avaliação <span>(opcional)</span>
          </RatingLabel>
          <RatingRow>
            <Rating
              value={rating}
              onChange={(_, value) => setRating(value ?? 0)}
              size="medium"
              sx={{
                color: "#EF9F27",
                "& .MuiRating-iconEmpty": { color: "#E0DED8" },
              }}
            />
            {rating > 0 && <span>{rating}.0 / 5.0</span>}
          </RatingRow>
        </ModalBody>

        <ModalFooter>
          <Button
            variant="outlined"
            sx={{ width: "auto", px: 2, py: 0.9 }}
            onClick={onClose}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            sx={{ width: "auto", px: 2.5, py: 0.9 }}
            onClick={handleAdd}
            disabled={!selectedGame}
          >
            <i
              className="ti ti-plus"
              aria-hidden="true"
              style={{ marginRight: 6, fontSize: 15 }}
            />
            Adicionar à estante
          </Button>
        </ModalFooter>
      </Modal>
    </Overlay>
  );
}

export default AddGameModal;
