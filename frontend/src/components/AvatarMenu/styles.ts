import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const AvatarButton = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryDark};
  cursor: pointer;
  user-select: none;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 0.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  width: 220px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  z-index: 300;
`;

export const DropdownHeader = styled.div`
  padding: 14px 16px;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const AvatarLg = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryDark};
  flex-shrink: 0;
`;

export const UserInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const UserName = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const UserEmail = styled.p`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DropdownItem = styled.button<{ danger?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 16px;
  cursor: pointer;
  font-size: 13px;
  width: 100%;
  border: none;
  background: none;
  font-family: inherit;
  text-align: left;
  transition: background-color 0.1s;
  color: ${({ danger, theme }) =>
    danger ? "#993C1D" : theme.colors.text.primary};

  i {
    font-size: 16px;
    color: ${({ danger, theme }) =>
      danger ? "#993C1D" : theme.colors.text.secondary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const DropdownDivider = styled.div`
  height: 0.5px;
  background-color: ${({ theme }) => theme.colors.border};
`;
