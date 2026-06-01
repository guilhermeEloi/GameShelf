import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 14px 16px;
  border: 0.5px solid ${({ theme }) => theme.colors.border};
`;

export const Label = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Value = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};

  span {
    font-size: 13px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-left: 4px;
  }
`;
