import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 0.5px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.15s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary}80;
  }
`;

export const Cover = styled.img`
  width: 100%;
  height: 130px;
  object-fit: cover;
  display: block;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Info = styled.div`
  padding: 10px 12px 6px;
`;

export const Title = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Platform = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 12px 10px;
`;

export const NoRating = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const AddCard = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 0.5px dashed ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  cursor: pointer;
  transition: border-color 0.15s;
  gap: 8px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 13px;

  i {
    font-size: 28px;
    color: ${({ theme }) => theme.colors.border};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};

    i {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
