import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const LeftPanel = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  gap: 28px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.surface};
`;

export const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  border-radius: ${({ theme }) => theme.radii.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
`;

export const Tagline = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.surface};
  text-align: center;
  line-height: 1.6;
  max-width: 220px;
`;

export const ShelfPreview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 240px;
`;

export const ShelfItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 10px 12px;
  border: 0.5px solid ${({ theme }) => theme.colors.primary}4D;
`;

export const ShelfCover = styled.img`
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.radii.sm};
  object-fit: cover;
  flex-shrink: 0;
`;

export const ShelfInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ShelfTitle = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryDark};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ShelfBadge = styled.span<{
  status: "playing" | "completed" | "wishlist" | "dropped";
}>`
  display: inline-flex;
  align-items: center;
  font-size: 10px;
  padding: 2px 7px;
  border-radius: ${({ theme }) => theme.radii.full};
  margin-top: 3px;
  background-color: ${({ theme, status }) => theme.colors.status[status].bg};
  color: ${({ theme, status }) => theme.colors.status[status].text};
`;

export const RightPanel = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 36px;
  background-color: ${({ theme }) => theme.colors.surface};
`;

export const FormCard = styled.div`
  width: 50%;
`;

export const FormTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 6px;
`;

export const FormSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 28px;
`;

export const Field = styled.div`
  margin-bottom: 16px;

  label {
    display: block;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: 6px;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 0.5px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 0 12px;
  background-color: ${({ theme }) => theme.colors.surface};
  transition: border-color 0.15s;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  i {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  input {
    border: none;
    outline: none;
    background: transparent;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text.primary};
    padding: 10px 0;
    width: 100%;
    font-family: inherit;

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.hint};
    }
  }
`;

export const ForgotPassword = styled.div`
  text-align: right;
  margin-top: -8px;
  margin-bottom: 16px;

  a {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;

export const ButtonPrimary = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 11px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;

  span {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.text.secondary};
    white-space: nowrap;
  }
`;

export const DividerLine = styled.div`
  flex: 1;
  height: 0.5px;
  background-color: ${({ theme }) => theme.colors.border};
`;

export const ButtonSecondary = styled.button`
  width: 100%;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 0.5px solid ${({ theme }) => theme.colors.primary}80;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  font-family: inherit;
  transition: background-color 0.15s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;
