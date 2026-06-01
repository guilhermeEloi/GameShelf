import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Person, Mail, Lock, LockOutlined } from "@mui/icons-material";
import Input from "../../components/Input";
import Button from "../../components/Button";
import {
  Container,
  LeftPanel,
  Logo,
  LogoIcon,
  Tagline,
  FeatureList,
  FeatureItem,
  FeatureIcon,
  FeatureText,
  FeatureTitle,
  FeatureDesc,
  RightPanel,
  FormCard,
  FormTitle,
  FormSubtitle,
  Row,
  StrengthWrapper,
  StrengthLabel,
  StrengthBar,
  StrengthSegment,
  Terms,
  Divider,
  DividerLine,
  BackToLogin,
} from "./styles";

const features = [
  {
    icon: "ti-stack-2",
    title: "Gerencie seu backlog",
    desc: "Organize todos os seus jogos",
  },
  {
    icon: "ti-star",
    title: "Avalie e critique",
    desc: "Registre suas impressões",
  },
  {
    icon: "ti-chart-bar",
    title: "Veja suas estatísticas",
    desc: "Acompanhe seu progresso",
  },
];

function getPasswordStrength(password: string) {
  if (password.length === 0) return { score: 0, label: "", color: "" };
  if (password.length < 6)
    return { score: 1, label: "Fraca", color: "#E24B4A" };
  if (password.length < 10)
    return { score: 2, label: "Razoável", color: "#EF9F27" };
  if (/[A-Z]/.test(password) && /[0-9]/.test(password) && password.length >= 10)
    return { score: 4, label: "Forte", color: "#1D9E75" };
  return { score: 3, label: "Média", color: "#EF9F27" };
}

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const strength = getPasswordStrength(password);

  async function handleRegister() {
    if (!firstName || !lastName || !email || !password || !confirmPassword)
      return;
    if (password !== confirmPassword) return;
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
          Crie sua conta e comece a organizar sua coleção hoje mesmo.
        </Tagline>

        <FeatureList>
          {features.map((feature) => (
            <FeatureItem key={feature.title}>
              <FeatureIcon>
                <i className={`ti ${feature.icon}`} aria-hidden="true" />
              </FeatureIcon>
              <FeatureText>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDesc>{feature.desc}</FeatureDesc>
              </FeatureText>
            </FeatureItem>
          ))}
        </FeatureList>
      </LeftPanel>

      <RightPanel>
        <FormCard>
          <FormTitle>Criar conta</FormTitle>
          <FormSubtitle>Preencha os dados abaixo para começar</FormSubtitle>

          <Row>
            <Input
              label="Nome"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="João"
              startIcon={<Person sx={{ color: "#7F77DD", fontSize: 20 }} />}
            />
            <Input
              label="Sobrenome"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Paulo"
              startIcon={<Person sx={{ color: "#7F77DD", fontSize: 20 }} />}
            />
          </Row>

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

          {password.length > 0 && (
            <StrengthWrapper>
              <StrengthLabel>
                Força da senha:{" "}
                <strong style={{ color: strength.color }}>
                  {strength.label}
                </strong>
              </StrengthLabel>
              <StrengthBar>
                {[1, 2, 3, 4].map((i) => (
                  <StrengthSegment
                    key={i}
                    filled={i <= strength.score}
                    color={strength.color}
                  />
                ))}
              </StrengthBar>
            </StrengthWrapper>
          )}

          <Input
            label="Confirmar senha"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            helperText={
              confirmPassword.length > 0 && password !== confirmPassword
                ? "As senhas não coincidem"
                : undefined
            }
            error={confirmPassword.length > 0 && password !== confirmPassword}
            startIcon={<LockOutlined sx={{ color: "#7F77DD", fontSize: 20 }} />}
          />

          <Button onClick={handleRegister}>Criar conta</Button>

          <Terms>
            Ao criar uma conta você concorda com os <a>Termos de uso</a> e a{" "}
            <a>Política de privacidade</a>
          </Terms>

          <Divider>
            <DividerLine />
            <span>Já tem conta?</span>
            <DividerLine />
          </Divider>

          <BackToLogin>
            <a onClick={() => navigate("/login")}>Entrar na minha conta</a>
          </BackToLogin>
        </FormCard>
      </RightPanel>
    </Container>
  );
}

export default Register;
