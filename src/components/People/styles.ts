import styled, { css } from "styled-components/native";

export type PeopleProps = {
  type: "primary" | "secondary";
};

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})<PeopleProps>`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  margin: 5px;
  width: 180px;
  padding: 22px;
  border-radius: 7px;

  background-color: ${({ theme, type }) => theme.COLORS.INFO};

  align-items: center;
  justify-content: center;

  ${({ type, theme }) =>
    type === "primary" &&
    css`
      border: 5px solid ${theme.COLORS.PRIMARY_700};
    `};
`;

export const Avatar = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;
`;
export const Name = styled.Text`
  text-align: center;
  font-weight: 700;
  margin-top: 7px;
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY_900};
`;
export const Speciality = styled.Text`
  font-size: 10px;

  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY_900};
`;
