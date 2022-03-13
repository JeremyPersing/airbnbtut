import { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  FlatList,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Location } from "../types/location";

export default function TabTwoScreen() {
  const [input, setInput] = useState<string>();
  const [data, setData] = useState<Location[]>();

  const onChangeText = async (text: string) => {
    setInput(text);
    if (text.length === 0) return setData([]);
    if (text.length > 2) {
      let endpoint = `http://192.168.30.21:4000/api/search?location=${text}&limit=${5}`;
      const res = await fetch(endpoint);
      if (res) {
        const data: Location[] = await res.json();
        if (data.length > 0) setData(data);
      }
    }
  };

  const getItemText = (item: Location) => {
    let mainText = item.address.name;
    if (item.type === "city" && item.address.state)
      mainText += ", " + item.address.state;

    return (
      <View style={styles.itemTextConatiner}>
        <MaterialIcons
          name={item.type === "city" ? "location-city" : "location-on"}
          color={"black"}
          size={30}
        />
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>{mainText}</Text>
          <Text style={styles.country}>{item.address.country}</Text>
        </View>
      </View>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.inputLabel}>Search Location</Text>
        <TextInput
          placeholder="Find Location"
          value={input}
          onChangeText={onChangeText}
          style={styles.input}
        />
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <Pressable
              style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
              onPress={() => alert("navigate passing" + JSON.stringify(item))}
            >
              {getItemText(item)}
            </Pressable>
          )}
          keyExtractor={(item, index) => item.osm_id + index}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  inputLabel: { marginLeft: 12, marginVertical: 5, fontSize: 12 },
  input: {
    height: 40,
    marginHorizontal: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  itemTextConatiner: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  textContainer: { marginLeft: 10, flexShrink: 1 },
  mainText: { fontWeight: "700" },
  country: { fontSize: 12 },
});
