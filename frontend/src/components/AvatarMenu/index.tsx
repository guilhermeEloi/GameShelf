import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import {
  Wrapper,
  AvatarButton,
  Dropdown,
  DropdownHeader,
  AvatarLg,
  UserInfo,
  UserName,
  UserEmail,
  DropdownItem,
  DropdownDivider,
} from "./styles";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function AvatarMenu() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleProfile() {
    setOpen(false);
    navigate("/profile");
  }

  function handleLogout() {
    setOpen(false);
    logout();
    navigate("/login");
  }

  return (
    <Wrapper ref={wrapperRef}>
      <AvatarButton onClick={() => setOpen((prev) => !prev)}>
        {user ? getInitials(user.name) : "U"}
      </AvatarButton>

      {open && (
        <Dropdown>
          <DropdownHeader>
            <AvatarLg>{user ? getInitials(user.name) : "U"}</AvatarLg>
            <UserInfo>
              <UserName>{user?.name}</UserName>
              <UserEmail>{user?.email}</UserEmail>
            </UserInfo>
          </DropdownHeader>

          <DropdownItem onClick={handleProfile}>
            <i className="ti ti-user" aria-hidden="true" />
            Meu perfil
          </DropdownItem>

          <DropdownDivider />

          <DropdownItem danger onClick={handleLogout}>
            <i className="ti ti-logout" aria-hidden="true" />
            Sair
          </DropdownItem>
        </Dropdown>
      )}
    </Wrapper>
  );
}

export default AvatarMenu;
