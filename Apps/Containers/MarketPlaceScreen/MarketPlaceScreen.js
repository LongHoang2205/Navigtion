import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

export default function MarketPlaceScreen() {
  const [data, setData] = useState("posts");

  const [items, setItems] = useState([]);

  console.log("render");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${data}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [data]);

  const [name, setName] = useState("");

  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <ScrollView>
      <View>
        <TouchableOpacity onPress={() => setData("posts")}>
          <Text>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setData("users")}>
          <Text>Users</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setData("comments")}>
          <Text>Comments</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 24 }}>{data}</Text>
        {/* <View>
          {items.map((item) => {
            return <Text>{JSON.stringify(item)}</Text>;
          })}
        </View> */}
      </View>

      <View>
        <TextInput
          style={{ borderWidth: 1 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Text>My name is {name}</Text>
        <Text>I rendered {renderCount.current} times</Text>
      </View>
    </ScrollView>
  );
}
