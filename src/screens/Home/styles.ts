import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";
import { PeopleDataProps } from "../../components/People/index";

export const Card = styled.View`
  flex: 1;
  width: auto;
  padding-top: 25px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Text = styled.Text`
  font-size: 48px;
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`;

export const Title = styled.Text`
  margin: 7px;
  align-items: center;
  font-size: 24px;
  text-align: center;
`;

export const List = styled(
  FlatList as new (
    props: FlatListProps<PeopleDataProps>
  ) => FlatList<PeopleDataProps>
)``;

export const Container = styled.View`
  flex: auto;
  width: auto;
  align-items: center;
  padding-top: 40px;
`;
