import { View, Image, FlatList } from "react-native";
import Card from "../components/Card";

type Property = {
  id: string;
  name: string;
  price: number;
  stars: number;
  photos: string[];
  favorite: boolean;
};

const properties: Property[] = [
  {
    id: "24reaf6r8er7852u",
    name: "Modern Loft in Roma Norte",
    price: 50,
    stars: 4.9,
    photos: [
      "https://a0.muscache.com/im/pictures/8a8cd589-717e-4868-80d1-a3e4cf4cb5ad.jpg?im_w=960",
      "https://a0.muscache.com/im/pictures/1941b1de-2d60-4a91-9d61-d5f520381201.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/996f2751-4750-421a-9707-78479fdbcfa9.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/7812e961-5a4e-4197-94e4-48343ba7fe81.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/1fb357f7-564e-48e6-910d-92b59506886e.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/151e31d7-62da-44c3-b4b8-1ca48d93b9ed.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/b9522497-cb02-4e0d-9790-d3eee46a208d.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/9cf836f8-38bb-4cb8-856c-125ed5ca7fc3.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-53940221/original/68ac9d9b-ffa9-4e82-9092-8636e4012d34.png?im_w=720",
      "https://a0.muscache.com/im/pictures/d1e873aa-5686-45d0-a3a2-349b1421ff92.jpg?im_w=720",
    ],
    favorite: true,
  },
  {
    id: "24785asfdmeoainrveaiuo2u",
    name: "Classy loft, appealing light, flawless & security",
    price: 50,
    stars: 4.7,
    photos: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-54392931/original/38d6a397-211d-40eb-8d47-1c4e8b1baf70.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-54392931/original/d5c85624-4049-4dd7-8b15-7e96e536a879.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-54392931/original/9273caec-1cb6-4581-af85-9725b52c3c12.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-54392931/original/737df23c-2d5d-4efc-ae26-ae32fed80ad4.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-54392931/original/9ac9faa8-5d44-44ed-a1b6-f4717d7220cb.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-54392931/original/b179d9bc-641c-4212-b9df-63e080509211.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-54392931/original/2e795ce4-914c-49cc-930f-3c312bd0c5a0.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-54392931/original/7c28adc5-9025-4cd6-a65c-854a4d175b79.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-54392931/original/ad00812f-0989-4e92-850d-895d343a1298.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-54392931/original/c023c678-d9aa-49f0-86fe-7c7b73040714.jpeg?im_w=1200",
    ],
    favorite: false,
  },
  {
    id: "2afomeoivioe47852u",
    name: "Cozy apartment near the Zocalo - D103",
    price: 30,
    stars: 4.6,
    photos: [
      "https://a0.muscache.com/im/pictures/18581632-b828-4f50-9368-b065de6ecd2e.jpg?im_w=960",
      "https://a0.muscache.com/im/pictures/0cebd469-af76-46b3-b86d-a2855947f736.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/3414f979-542d-4509-ab09-2bb9a64d9c0d.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/19e1b33e-c79f-4d20-974d-e4f425853c5b.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/2ed369ac-19cd-401b-881b-e9a3ddc6b827.jpg?im_w=480",
    ],
    favorite: false,
  },
  {
    id: "247saofmierneaieurb852u",
    name: "Cozy private room with large bathroom and garden front. Casa Mariscal.",
    price: 45,
    stars: 4.7,
    photos: [
      "https://a0.muscache.com/im/pictures/7b0190c7-3af2-4e3b-b3ed-24750a7f0314.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/2f740368-6826-41fb-8a07-dea41f8e5132.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/bf0c34db-da8c-41a5-9f77-478019ce0bc9.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/be81ad82-ca11-459e-8ef9-23a26458130e.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/1fb357f7-564e-48e6-910d-92b59506886e.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/d03ee3a7-1c80-47dc-b64d-1bbaf1f96dce.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/b9e8f9cc-baf5-42cf-8fdf-e6850b7b3134.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/d71236cd-d49d-471f-9323-cf80fa379e63.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/25ac7230-899c-4e11-980f-9677a43ad305.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/d4530fd3-01dc-4a2e-9633-508e2f65b6e5.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/78d2f84c-e1d2-4a7f-9ef4-70f04b0f7398.jpg?im_w=720",
    ],
    favorite: true,
  },
];

export default function TabOneScreen() {
  return (
    <View>
      <FlatList
        data={properties}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card
            heading={item.name}
            images={item.photos}
            subheading={item.price}
            stars={item.stars}
            favorite={item.favorite}
            onPress={() =>
              alert(
                "navigation.navigate passing in data " + JSON.stringify(item)
              )
            }
          />
        )}
      />
    </View>
  );
}
