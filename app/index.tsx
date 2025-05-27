import { ScrollView,TextInput,Button, Image, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Image 
      className="w-52 h-52"
      source={require("../assets/images/react-logo.png")}
      // source={{uri: "https://avatars.githubusercontent.com/u/173110266?s=400&u=e44d1d323251be8b37169b57c1972440a8d4d9f5&v=4"}}
      />
      <Button title="teste" />
      <TouchableOpacity>
        <Text>Click</Text>
      </TouchableOpacity>
      <TextInput
      placeholder="Digite algo..."
      className="border-2 rounded-lg border-solid border-black"
      />
      <ScrollView>

      </ScrollView>

      <Text className="text-5xl text-dark-200 font-bold">Bem vindo</Text>
    </View>
  );
}
