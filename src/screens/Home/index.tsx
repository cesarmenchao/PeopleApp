import { Container, Text, List, Card, Title } from "./styles";
import { People, PeopleDataProps } from "../../components/People";

const DATA = [
  {
    id: "1",
    avatar: "https:///github.com/cesarmenchao.png",
    name: "Cesar Menchão",
    speciality: "Mobile Developer",
  },
  {
    id: "2",
    avatar: "https:///github.com/dougb60.png",
    name: "Douglas Oliveira",
    speciality: "Mobile Developer",
  },
  {
    id: "3",
    avatar:
      "https://instagram.fldb3-1.fna.fbcdn.net/v/t51.2885-19/301994040_603738931345298_7057322539127418739_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fldb3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=EXUSOM18ABYAX9oBcH5&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfBih6E9Utnl7GYwMYz6y6ZbLTSdqE2IK2jtXozXHZJ-Ug&oe=635E3B4A&_nc_sid=6136e7",
    name: "Mariana Gilini",
    speciality: "dropshipper/Support",
  },
  {
    id: "4",
    avatar:
      "https://instagram.fldb3-1.fna.fbcdn.net/v/t51.2885-19/299491150_626060088848037_8478554232783707381_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fldb3-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=EkHGbjXWxssAX-4S_fJ&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfCU_kU8cfpcmh7zDm_jCfhVNckLbNS2ItT4kt1sqVSgnQ&oe=635F2777&_nc_sid=6136e7",
    name: "Karla Menchão",
    speciality: "Administrator",
  },
  {
    id: "5",
    avatar:
      "https://instagram.fldb3-1.fna.fbcdn.net/v/t51.2885-19/301760953_773684263876963_8410550130835305583_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fldb3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=s3zZhIvLVgAAX_0bQL1&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfAMrlqwNvBtYZuPgHl2J8viJR5HsBnu2je3LV2bjXbw9w&oe=635F027F&_nc_sid=6136e7",
    name: "Cristina David",
    speciality: "Seller",
  },
  {
    id: "6",
    avatar:
      "https://instagram.fldb3-1.fna.fbcdn.net/v/t51.2885-19/294963531_1154880901763233_2346981944611008533_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fldb3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=poazRgZStl8AX_3wqrX&tn=zRn3bl_8hp4NNa4y&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfDj3VAE2JKp5gZTpNCdhj5mCmhFGECVc8SmuAZLdCkoZA&oe=635E1D62&_nc_sid=6136e7",
    name: "Antonio Menchão",
    speciality: "Barber",
  },
  {
    id: "7",
    avatar:
      "https://instagram.fldb3-1.fna.fbcdn.net/v/t51.2885-19/81834748_698379970695377_6080773710803894272_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fldb3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=i1tRoU9oCwEAX_Hw6zu&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfB2S_IQuxNRSwkUcq0h_YbLyO6AiPzjJ6C9NldFZ40NAQ&oe=635F6BE2&_nc_sid=6136e7",
    name: "Cesar Menchão",
    speciality: "Student",
  },
];

export function Home() {
  return (
    <Card>
      <Title>listing people</Title>
      <List
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <People type="primary" data={item} />}
        numColumns={2}
      />
    </Card>
  );
}
