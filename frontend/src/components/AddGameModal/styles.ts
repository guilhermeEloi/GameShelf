import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  z-index: 200;
`;

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 16px;
  width: 100%;
  max-width: 520px;
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.border};
`;

export const ModalTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 18px;
  border: none;
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color 0.15s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }
`;

export const ModalBody = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

export const SearchLabel = styled.label`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-weight: 500;
  margin-bottom: 4px;
  display: block;
`;

export const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1.5px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 0 12px;
  background-color: ${({ theme }) => theme.colors.surface};
  transition: border-color 0.15s;

  i {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primary};
  }

  input {
    border: none;
    outline: none;
    background: transparent;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text.primary};
    padding: 11px 0;
    width: 100%;
    font-family: inherit;

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.hint};
    }
  }
`;

export const SearchResults = styled.div`
  margin-top: 8px;
  border: 0.5px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
`;

export const SearchItem = styled.div<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  cursor: pointer;
  transition: background-color 0.1s;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.primaryLight : "transparent"};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({ selected, theme }) =>
      selected ? theme.colors.primaryLight : theme.colors.background};
  }
`;

export const SearchCover = styled.img`
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.radii.sm};
  object-fit: cover;
  flex-shrink: 0;
`;

export const SearchInfo = styled.div`
  flex: 1;
`;

export const SearchTitle = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const SearchMeta = styled.p`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: 2px;
`;

export const Divider = styled.div`
  height: 0.5px;
  background-color: ${({ theme }) => theme.colors.border};
  margin: 20px 0;
`;

export const FieldsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 16px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.primaryDark};
    font-weight: 500;
  }
`;

export const RatingLabel = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-weight: 500;
  margin-bottom: 6px;

  span {
    font-size: 11px;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-weight: 400;
  }
`;

export const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  span {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-left: 6px;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  padding: 16px 24px;
  border-top: 0.5px solid ${({ theme }) => theme.colors.border};
`;
