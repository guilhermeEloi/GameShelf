import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail } from "@mui/icons-material";
import Input from "../../components/Input";
import Button from "../../components/Button";
import {
  Container,
  LeftPanel,
  Logo,
  LogoIcon,
  Illustration,
  LeftTitle,
  LeftDesc,
  RightPanel,
  FormCard,
  FormTitle,
  FormSubtitle,
  SuccessBox,
  BackToLogin,
} from "./styles";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  function handleSubmit() {
    if (!email) return;
    setSubmitted(true);
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

        <Illustration>🔑</Illustration>
        <LeftTitle>Recupere seu acesso</LeftTitle>
        <LeftDesc>
          Enviaremos um link para redefinir sua senha no e-mail cadastrado.
        </LeftDesc>
      </LeftPanel>

      <RightPanel>
        <FormCard>
          <FormTitle>Esqueceu a senha?</FormTitle>
          <FormSubtitle>
            Informe seu e-mail e enviaremos as instruções para redefinir sua
            senha.
          </FormSubtitle>

          {submitted && (
            <SuccessBox>
              <i className="ti ti-circle-check" aria-hidden="true" />
              Enviamos as instruções para <strong>{email}</strong>. Verifique
              sua caixa de entrada.
            </SuccessBox>
          )}

          {!submitted && (
            <Input
              label="E-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              startIcon={<Mail sx={{ color: "#7F77DD", fontSize: 20 }} />}
            />
          )}

          {!submitted ? (
            <Button onClick={handleSubmit}>Enviar instruções</Button>
          ) : (
            <Button
              onClick={() => {
                setEmail("");
                setSubmitted(false);
              }}
            >
              Tentar outro e-mail
            </Button>
          )}

          <BackToLogin>
            <a onClick={() => navigate("/login")}>← Voltar para o login</a>
          </BackToLogin>
        </FormCard>
      </RightPanel>
    </Container>
  );
}

export default ForgotPassword;
