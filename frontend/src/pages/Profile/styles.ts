import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  padding: 24px;
  max-width: 800px;
  margin: 0 auto;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

export const AvatarXl = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

export const AvatarEditIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: #fff;
`;

export const ProfileName = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ProfileEmail = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: 2px;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 0.5px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 18px 20px;
  margin-bottom: 16px;
`;

export const CardTitle = styled.p`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
`;

export const FieldsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

export const FieldsRowThree = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
`;

export const SaveRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 4px;
`;

export const DangerZone = styled.div`
  border: 0.5px solid #993c1d33;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 18px 20px;
  background-color: ${({ theme }) => theme.colors.surface};
  margin-bottom: 16px;
`;

export const DangerTitle = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: #993c1d;
  margin-bottom: 4px;
`;

export const DangerDesc = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 12px;
`;
