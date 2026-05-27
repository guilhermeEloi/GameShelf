import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from "@mui/icons-material";
import { useAuth } from "../../hooks/useAuth";
import Input from "../../components/Input";
import Button from "../../components/Button";
import StatusBadge from "../../components/StatusBadge";
import {
  Container,
  LeftPanel,
  Logo,
  LogoIcon,
  Tagline,
  ShelfPreview,
  ShelfItem,
  ShelfCover,
  ShelfInfo,
  ShelfTitle,
  RightPanel,
  FormCard,
  FormTitle,
  FormSubtitle,
  ForgotPassword,
  Divider,
  DividerLine,
} from "./styles";

const previewGames = [
  {
    id: 1,
    title: "Elden Ring",
    status: "completed" as const,
    cover: "https://picsum.photos/seed/g1/80/80",
  },
  {
    id: 2,
    title: "Hollow Knight",
    status: "playing" as const,
    cover: "https://picsum.photos/seed/g2/80/80",
  },
  {
    id: 3,
    title: "Hades II",
    status: "wishlist" as const,
    cover: "https://picsum.photos/seed/g3/80/80",
  },
];

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleLogin() {
    if (!email || !password) return;
    await login(email, password);
    navigate("/");
  }

  return (
    <Container>
      <LeftPanel>
        <Logo>
          <LogoIcon>
            <i className="ti ti-device-gamepad-2" aria-hidden="true" />
          </LogoIcon>
          GameShelf
        </Logo>

        <Tagline>
          Organize sua coleção, acompanhe seu progresso e descubra novos jogos.
        </Tagline>

        <ShelfPreview>
          {previewGames.map((game) => (
            <ShelfItem key={game.id}>
              <ShelfCover src={game.cover} alt={game.title} />
              <ShelfInfo>
                <ShelfTitle>{game.title}</ShelfTitle>
                <StatusBadge status={game.status} />
              </ShelfInfo>
            </ShelfItem>
          ))}
        </ShelfPreview>
      </LeftPanel>

      <RightPanel>
        <FormCard>
          <FormTitle>Bem-vindo de volta</FormTitle>
          <FormSubtitle>Entre na sua conta para ver sua estante</FormSubtitle>

          <Input
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            startIcon={<Mail sx={{ color: "#7F77DD", fontSize: 20 }} />}
          />

          <Input
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            startIcon={<Lock sx={{ color: "#7F77DD", fontSize: 20 }} />}
          />

          <ForgotPassword>
            <a>Esqueci minha senha</a>
          </ForgotPassword>

          <Button onClick={handleLogin}>Entrar</Button>

          <Divider>
            <DividerLine />
            <span>ou</span>
            <DividerLine />
          </Divider>

          <Button variant="outlined" onClick={() => navigate("/register")}>
            Criar uma conta
          </Button>
        </FormCard>
      </RightPanel>
    </Container>
  );
}

export default Login;
