import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Button from "../Button";
import { Nav, Logo, LogoIcon, NavRight, Avatar } from "./styles";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

type NavbarProps = {
  onAddGame?: () => void;
};

function Navbar({ onAddGame }: NavbarProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Nav>
      <Logo onClick={() => navigate("/")}>
        <LogoIcon>
          <i className="ti ti-device-gamepad-2" aria-hidden="true" />
        </LogoIcon>
        GameShelf
      </Logo>

      <NavRight>
        <Button
          variant="contained"
          sx={{ width: "auto", px: 2, py: 0.8 }}
          onClick={onAddGame}
        >
          <i
            className="ti ti-plus"
            aria-hidden="true"
            style={{ marginRight: 6, fontSize: 15 }}
          />
          Adicionar
        </Button>

        <Avatar onClick={logout} title="Sair">
          {user ? getInitials(user.name) : "U"}
        </Avatar>
      </NavRight>
    </Nav>
  );
}

export default Navbar;
