import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { SectionList } from "react-native";
import { FlatList } from "react-native";

export default function App() {
  const bibliotecaList = [
    "📚 | Harry Potter",
    "📚 | Senhor dos Anéis",
    "📚 | Percy Jackson",
    "📚 | Jogos Vorazes",
    "📚 | O Pequeno Príncipe",
    "📚 | Chapeuzinho Amarelo",
  ];

  const sectionBiblioteca = [
    {
      title: "Ficção",
      data: [
        "📚 | Harry Potter",
        "📚 | Senhor dos Anéis",
        "📚 | Percy Jackson",
      ],
    },

    {
      title: "Infantil",
      data: ["📚 | O Pequeno Principe", "📚 | Chapeuzinho Amarelo"],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView  style={styles.scroll}>
      <View style={styles.scrollContent}>
        <Text style={styles.text}> Atividade 4 </Text>

        <Text style={styles.text}>Lista Completa de Livros 📚</Text>
        <FlatList
          data={bibliotecaList.map((item, index) => ({
            id: index.toString(),
            title: item,
          }))}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.title}</Text>
            </View>
          )}

        />
        <Text style={styles.text}> Livros em minha biblioteca 💖 </Text>
        <SectionList
          sections={sectionBiblioteca}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A2C1C5",
    padding: 5,
    marginTop: 30,
  },

  scroll: {
    flex: 1,
  },

  scrollContent:{
    flexDirection: "column",
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },

  text: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
    marginVertical: 10,
  },

  item: {
    fontSize: 18,
    color: "#fff",
    backgroundColor: "#005954",
    borderRadius: 5,
    height: 25,
    marginVertical: 8,

  },

  itemText: {
    color: "#fff", 
    fontSize: 18,
  },

  sectionHeader: {
    fontSize: 22,
    flexDirection: "flex-start",
    fontWeight: "bold",
    backgroundColor: "#005954",
    color: "#fff",
    padding: 12,
    marginTop:15,
    borderRadius: 5,
  },
});
