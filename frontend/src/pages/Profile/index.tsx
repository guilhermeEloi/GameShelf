import { useState } from "react";
import { Person, Mail, Lock, LockOutlined } from "@mui/icons-material";
import Navbar from "../../components/Navbar";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";
import {
  Container,
  Content,
  ProfileHeader,
  AvatarWrapper,
  AvatarXl,
  AvatarEditIcon,
  ProfileName,
  ProfileEmail,
  Card,
  CardTitle,
  FieldsRow,
  FieldsRowThree,
  SaveRow,
  DangerZone,
  DangerTitle,
  DangerDesc,
} from "./styles";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Profile() {
  const { user } = useAuth();

  const [firstName, setFirstName] = useState(user?.name.split(" ")[0] ?? "");
  const [lastName, setLastName] = useState(user?.name.split(" ")[1] ?? "");
  const [email, setEmail] = useState(user?.email ?? "");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSaveInfo() {
    console.log("Salvar info:", { firstName, lastName, email });
  }

  function handleChangePassword() {
    if (!currentPassword || !newPassword || !confirmPassword) return;
    if (newPassword !== confirmPassword) return;
    console.log("Alterar senha");
  }

  function handleDeleteAccount() {
    console.log("Excluir conta");
  }

  return (
    <Container>
      <Navbar />
      <Content>
        <ProfileHeader>
          <AvatarWrapper>
            <AvatarXl>{user ? getInitials(user.name) : "U"}</AvatarXl>
            <AvatarEditIcon>
              <i
                className="ti ti-camera"
                aria-hidden="true"
                style={{ fontSize: 10 }}
              />
            </AvatarEditIcon>
          </AvatarWrapper>
          <div>
            <ProfileName>{user?.name}</ProfileName>
            <ProfileEmail>{user?.email}</ProfileEmail>
          </div>
        </ProfileHeader>

        <Card>
          <CardTitle>Informações pessoais</CardTitle>
          <FieldsRow>
            <Input
              label="Nome"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              startIcon={<Person sx={{ color: "#7F77DD", fontSize: 20 }} />}
            />
            <Input
              label="Sobrenome"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              startIcon={<Person sx={{ color: "#7F77DD", fontSize: 20 }} />}
            />
          </FieldsRow>
          <Input
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            startIcon={<Mail sx={{ color: "#7F77DD", fontSize: 20 }} />}
          />
          <SaveRow>
            <Button
              variant="contained"
              sx={{ width: "auto", px: 2.5, py: 0.9 }}
              onClick={handleSaveInfo}
            >
              Salvar alterações
            </Button>
          </SaveRow>
        </Card>

        <Card>
          <CardTitle>Alterar senha</CardTitle>
          <FieldsRowThree>
            <Input
              label="Senha atual"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              startIcon={<Lock sx={{ color: "#7F77DD", fontSize: 20 }} />}
            />
            <Input
              label="Nova senha"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              startIcon={<Lock sx={{ color: "#7F77DD", fontSize: 20 }} />}
            />
            <Input
              label="Confirmar senha"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={
                confirmPassword.length > 0 && newPassword !== confirmPassword
              }
              helperText={
                confirmPassword.length > 0 && newPassword !== confirmPassword
                  ? "As senhas não coincidem"
                  : undefined
              }
              startIcon={
                <LockOutlined sx={{ color: "#7F77DD", fontSize: 20 }} />
              }
            />
          </FieldsRowThree>
          <SaveRow>
            <Button
              variant="contained"
              sx={{ width: "auto", px: 2.5, py: 0.9 }}
              onClick={handleChangePassword}
            >
              Alterar senha
            </Button>
          </SaveRow>
        </Card>

        <DangerZone>
          <DangerTitle>Zona de perigo</DangerTitle>
          <DangerDesc>
            Ao excluir sua conta todos os dados serão perdidos permanentemente.
          </DangerDesc>
          <Button
            variant="outlined"
            sx={{
              width: "auto",
              px: 2,
              py: 0.9,
              color: "#993C1D",
              borderColor: "#993C1D",
              "&:hover": { bgcolor: "#FAECE7", borderColor: "#993C1D" },
            }}
            onClick={handleDeleteAccount}
          >
            Excluir minha conta
          </Button>
        </DangerZone>
      </Content>
    </Container>
  );
}

export default Profile;
