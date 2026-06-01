import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  padding: 24px;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.secondary};
  background: none;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
  font-family: inherit;
  padding: 0;
  transition: color 0.15s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CoverWrapper = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  border: 0.5px solid ${({ theme }) => theme.colors.border};
`;

export const Cover = styled.img`
  width: 100%;
  height: 360px;
  object-fit: cover;
  display: block;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 0.5px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 18px 20px;
`;

export const CardTitle = styled.p`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 14px;
`;

export const GameTitle = styled.h1`
  font-size: 26px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
`;

export const BadgesRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

export const InfoItem = styled.div`
  label {
    font-size: 11px;
    color: ${({ theme }) => theme.colors.text.secondary};
    display: block;
    margin-bottom: 4px;
    text-transform: uppercase;
    letter-spacing: 0.4px;
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RatingValue = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 500;
`;

export const ReviewText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.6;
`;

export const ReviewEmpty = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-style: italic;
`;

export const StatusGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`;

export const StatusOption = styled.button<{ active?: boolean }>`
  border: 0.5px solid
    ${({ active, theme }) =>
      active ? theme.colors.primary : theme.colors.border};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primaryLight : "transparent"};
  color: ${({ active, theme }) =>
    active ? theme.colors.primaryDark : theme.colors.text.secondary};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 10px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-family: inherit;
  transition: all 0.15s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const StatusDot = styled.div<{ color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: ${({ color }) => color};
`;
