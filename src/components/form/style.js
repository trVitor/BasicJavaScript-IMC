import { StyleSheet } from "react-native";

exports.styles = StyleSheet.create({
  textTitle: {
    color: "gray",
    fontSize: "1.5rem",
    fontWeight: "bold"
  },
  formContext: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30
  },
  textForm: {
    color: "#084C61",
    fontSize: 20
  },
  textInput: {
    backgroundColor: "#EEE",
    height: 40,
    paddingLeft: 10,
    marginVertical: 10,
    borderRadius: 50
  },
  button: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#177E89",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30
  },
  textButton: {
    fontSize: 20,
    color: "#fff"
  },
  msgErro: {
    fontSize: 12,
    color: "#DB3A34"
  },
  flatListItem: {
    fontSize: 16,
    color: "#177E89",
    backgroundColor: "#E6E9ED",
    height: 40,
    width: "100%",
    padding: 10,
    marginTop: 10
  },
  FlatList: {
    margin: 20,
    width: "90%"
  }
});
