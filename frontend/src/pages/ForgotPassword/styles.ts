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
  gap: 20px;
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

export const Illustration = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  border: 0.5px solid ${({ theme }) => theme.colors.primary}4D;
`;

export const LeftTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.surface};
  text-align: center;
`;

export const LeftDesc = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.surface};
  text-align: center;
  line-height: 1.6;
  max-width: 200px;
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
  margin-bottom: 28px;
  line-height: 1.5;
`;

export const SuccessBox = styled.div`
  background-color: #e1f5ee;
  border: 0.5px solid #1d9e754d;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 14px 16px;
  font-size: 13px;
  color: #0f6e56;
  line-height: 1.5;
  margin-bottom: 16px;
  display: flex;
  align-items: flex-start;
  gap: 8px;

  i {
    font-size: 16px;
    flex-shrink: 0;
    margin-top: 1px;
  }
`;

export const BackToLogin = styled.div`
  text-align: center;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: 16px;

  a {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;
