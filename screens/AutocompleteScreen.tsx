import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  FlatList,
  Pressable,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import EditScreenInfo from "../components/EditScreenInfo";
import { Location } from "../types/location";

export default function TabTwoScreen() {
  const [input, setInput] = useState<string>();
  const [data, setData] = useState<Location[]>([]);

  const onChangeText = async (text: string) => {
    setInput(text);
    // get host from localhost:19002 above the qrcode
    if (text.length > 2) {
      const endpoint = `http://192.168.30.21:4000/api/search?location=${text}&limit=${5}`;
      let res = await fetch(endpoint);
      if (res) {
        let data: Location[] = await res.json();
        if (data.length > 0) setData(data);
      }
    }
  };

  const getItemText = (item: Location) => {
    let mainText = item.address.name;
    if (item.type === "city" && item.address.state)
      mainText += ", " + item.address.state;
    // let mainText =
    // "afnjoei aeorin faiernae ireon erinfe oiener oifreiingr weinwe woienwwf rmtpogoperm iorenoire wfwoiene oienrgerr ";

    return (
      <View style={{ flexDirection: "row", alignItems: "center", padding: 15 }}>
        <MaterialIcons
          name={item.type === "city" ? "location-city" : "location-on"}
          color={"black"}
          size={30}
        />
        <View style={{ marginLeft: 10, flexShrink: 1 }}>
          <Text style={{ fontWeight: "700" }}>{mainText}</Text>
          <Text style={{ fontSize: 12 }}>{item.address.country}</Text>
        </View>
      </View>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={{ marginLeft: 12, marginVertical: 5, fontSize: 12 }}>
          Search Locations
        </Text>
        <TextInput
          onChangeText={onChangeText}
          value={input}
          style={{
            height: 40,
            marginHorizontal: 12,
            borderWidth: 1,
            paddingHorizontal: 10,
            borderRadius: 5,
          }}
          placeholder="Find a Location"
        />
        {input && data.length > 0 ? (
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <Pressable
                style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
                onPress={() =>
                  alert("navigate to page passing in " + JSON.stringify(item))
                }
              >
                {getItemText(item)}
              </Pressable>
            )}
            keyExtractor={(item, index) => item.place_id + index}
          />
        ) : null}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
