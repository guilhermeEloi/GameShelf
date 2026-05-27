import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 0.5px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  margin-bottom: 20px;
`;

export const Cover = styled.img`
  width: 180px;
  min-height: 140px;
  object-fit: cover;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Body = styled.div`
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const Tag = styled.p`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Title = styled.p`
  font-size: 17px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 6px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
