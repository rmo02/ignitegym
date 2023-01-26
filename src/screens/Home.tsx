import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationRoutesProps } from "@routes/app.routes";
import { Center, FlatList, Heading, HStack, Text, VStack } from "native-base";
import { useState } from "react";

export function Home() {
  const [group, setGroup] = useState(["Costas", "Bicepes", "Triceps", "ombro"]);
  const [exercises, setExercises] = useState([
    "Puxada frontal",
    "Remada curvada",
    "Remada unilateral",
    "Levantamento terra",
  ]);
  const [groupSelected, setGroupSelected] = useState("costas");
  const navigation = useNavigation<AppNavigationRoutesProps>();

  function handleOpenexerciseDetail(){
    navigation.navigate('exercise')
  }


  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={group}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            isActive={groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase(item)}
            onPress={() => setGroupSelected(item)}
            name={item}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        my={10}
        maxH={10}
        minH={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercícios
          </Heading>

          <Text color="gray.200" fontSize="sm">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <ExerciseCard  onPress={handleOpenexerciseDetail}/>}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom:20 }}
        />
      </VStack>
    </VStack>
  );
}
