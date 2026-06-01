import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  padding: 28px 24px 24px;
`;

export const Hero = styled.div`
  margin-bottom: 20px;

  h1 {
    font-size: 22px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: 4px;
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 20px;
`;

export const Divider = styled.div`
  height: 0.5px;
  background-color: ${({ theme }) => theme.colors.border};
  margin-bottom: 20px;
`;

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 16px;
  overflow-x: auto;
`;

export const Tab = styled.button<{ active?: boolean }>`
  padding: 7px 16px;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
  white-space: nowrap;
  border: 0.5px solid transparent;
  font-family: inherit;
  transition: all 0.15s;

  ${({ active, theme }) =>
    active
      ? `
    background-color: ${theme.colors.primaryLight};
    color: ${theme.colors.primaryDark};
    border-color: ${theme.colors.primary}80;
  `
      : `
    background-color: transparent;
    color: ${theme.colors.text.secondary};

    &:hover {
      background-color: ${theme.colors.background};
    }
  `}
`;

export const TabCount = styled.span<{ active?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 20px;
  font-size: 11px;
  margin-left: 6px;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary + "33" : theme.colors.background};
  color: ${({ active, theme }) =>
    active ? theme.colors.primaryDark : theme.colors.text.secondary};
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const SectionTitle = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;
