import React, { Component } from "react"
import { StyleSheet, View } from "react-native"
import Title from "./components/title"
import Form from "./components/form"

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title></Title>
        <Form></Form>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#084C61",
    paddingTop: 10
  }
})

export default App
