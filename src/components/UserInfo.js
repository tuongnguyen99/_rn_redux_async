import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useSelector } from "react-redux";

function UserInfo(props) {
  const user = useSelector(state => state.user.info);
  const error = useSelector(state => state.user.error);

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Image
            style={styles.avatar}
            source={{
              uri: user.avatar_url,
            }}
          />
          <View style={styles.detailContainer}>
            <Text style={styles.id}>Id: {user.id}</Text>
            <Text style={styles.username}>Login: {user.login}</Text>
          </View>
        </>
      ) : (
        <Text>{error ? error : "Fetch User Info"}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  detailContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  id: {
    color: "coral",
    textTransform: "uppercase",
  },
  username: {
    color: "dodgerblue",
    textTransform: "uppercase",
  },
});

export default UserInfo;
