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
  gap: 24px;
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
  background-color: ${({ theme }) => theme.colors.primary};
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

export const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 240px;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 12px 14px;
  border: 0.5px solid ${({ theme }) => theme.colors.primary}4D;
`;

export const FeatureIcon = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: ${({ theme }) => theme.radii.md};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
`;

export const FeatureText = styled.div`
  flex: 1;
`;

export const FeatureTitle = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

export const FeatureDesc = styled.p`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-top: 2px;
  opacity: 0.8;
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
  width: 100%;
  max-width: 320px;
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
  margin-bottom: 24px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

export const StrengthWrapper = styled.div`
  margin-top: 4px;
  margin-bottom: 4px;
`;

export const StrengthLabel = styled.p`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 4px;
`;

export const StrengthBar = styled.div`
  display: flex;
  gap: 3px;
`;

export const StrengthSegment = styled.div<{ filled: boolean; color: string }>`
  height: 3px;
  flex: 1;
  border-radius: 2px;
  background-color: ${({ filled, color }) => (filled ? color : "#E0DED8")};
  transition: background-color 0.2s;
`;

export const Terms = styled.p`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
  margin-top: 12px;
  line-height: 1.5;

  a {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 16px 0;

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

export const BackToLogin = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};

  a {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;
