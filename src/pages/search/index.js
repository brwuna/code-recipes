import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FoodList } from "../../components/foodlist";
import api from "../../services/api";

export function Search() {
  const route = useRoute();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const response = await api.get(`/foods?name_like=${route.params?.name}`);
      setRecipes(response.data);
    }
    fetchRecipes();
  }, [route.params?.name]);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={recipes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodList data={item} />}
        ListEmptyComponent={() => <Text style={styles.textAlert}>Não encontramos a receita que está buscando...🙁</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9EBEB",
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14,
  },
  textAlert: {
    fontSize: 16,
  }
});
