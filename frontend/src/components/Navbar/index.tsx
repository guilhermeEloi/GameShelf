import { useNavigate } from "react-router-dom";
import AvatarMenu from "../AvatarMenu";
import Button from "../Button";
import { Nav, Logo, LogoIcon, NavRight } from "./styles";

type NavbarProps = {
  onAddGame?: () => void;
};

function Navbar({ onAddGame }: NavbarProps) {
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

        <AvatarMenu />
      </NavRight>
    </Nav>
  );
}

export default Navbar;
