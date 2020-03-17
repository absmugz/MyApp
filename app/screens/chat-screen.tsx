import React, { useState, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../components"
import { GiftedChat } from "react-native-gifted-chat"
import Fire from "../../Fire"

// import { useStores } from "../models/root-store"
import { color } from "../theme"
import { NavigationScreenProp } from "react-navigation"

export interface ChatScreenProps {
  navigation: NavigationScreenProp<{}>
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

export const ChatScreen: React.FunctionComponent<ChatScreenProps> = observer(props => {
  // const { someStore } = useStores()

  const [messages, setMessages] = React.useState([])

  useEffect(() => console.log("mounted"), [])

  return (
    <Screen style={ROOT} preset="fixed">
      <Text preset="header" tx="chatScreen.header" />
      <GiftedChat
        messages={messages}
        onSend={Fire.shared.send}
        user={{
          _id: 1,
        }}
      />
    </Screen>
  )
})
