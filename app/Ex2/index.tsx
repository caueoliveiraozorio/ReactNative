import { ScrollView, TextInput, Button, Image, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
    return (
        <View >
            <Text className="text-4xl text-white font-bold w-full bg-blue-600 p-2 ">Detalhes Do Produto</Text>
            
            <View className="flex-1 justify-center items-center">
                <Image
                    className="w-52 h-52 m-10"
                    source={require("../../assets/images/react-logo.png")}
                />
            </View>

            <View className="m-3 gap-2" >
                <Text className="text-4xl text-dark-200 font-bold ">Produto Expecional</Text>
                <Text className="text-2xl"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae provident excepturi debitis neque recusandae, perspiciatis totam autem harum corporis nihil cum ratione eum id laudantium expedita ad doloremque! Illum, laborum. </Text>
                <Text className="text-3xl text-lime-700 ">R$ 299,99</Text>
            </View>
        </View>
    );
}
