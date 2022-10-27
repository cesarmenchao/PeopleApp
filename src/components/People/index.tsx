import { Container, Avatar, Name, Speciality, PeopleProps } from "./styles";

export type PeopleDataProps = {
  id: string;
  name: string;
  avatar: string;
  speciality: string;
};

type Props = PeopleProps & {
  data: PeopleDataProps;
};

export function People({ type, data, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Avatar source={{ uri: data.avatar }} />
      <Name>{data.name}</Name>
      <Speciality>{data.speciality}</Speciality>
    </Container>
  );
}
