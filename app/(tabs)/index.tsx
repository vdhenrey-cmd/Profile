
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const name = "Dhenrey I. Vibas";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          
         <Image source={require("../../assets/drey.jpg")} style={styles.image} />

         
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>
            Passionate about dancing and drawing, using movement and art 
            as powerful ways to express creativity and emotion. Loves exploring 
            different dance styles, creating unique choreographies, and bringing ideas 
            to life through sketches and illustrations. Constantly striving to improve 
            skills, refine techniques, and grow both artistically and creatively.
          </Text>

          
          <View style={styles.section}>
            <Text style={styles.title}>About</Text>
            <Text style={styles.text}>
              Passionate about dancing and drawing, constantly exploring new styles and improving creative skills through practice and expression.
            </Text>
          </View>

          
          <View style={styles.section}>
            <Text style={styles.title}>Interests</Text>
            <Text style={styles.text}>• Mobile Development</Text>
            <Text style={styles.text}>• Web Development</Text>
            <Text style={styles.text}>• Gaming</Text>
          </View>

          
          <View style={styles.section}>
            <Text style={styles.title}>Courses</Text>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>
                MOBILE APPLICATIONS DEVELOPMENT
              </Text>
              <Text>Build mobile apps</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>
                APPLICATION DEVELOPMENT AND EMERGING TECHNOLOGIES
              </Text>
              <Text>
                Application development is the structured process of designing,
                coding, testing, and deploying software
              </Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>IS PROJECT MANAGEMENT</Text>
              <Text>
                Project management is the structured process of planning,
                organizing, and executing tasks to achieve specific goals within
                defined constraints of time, budget, and scope
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 15,
  },

  name: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },

  bio: {
    textAlign: "center",
    marginVertical: 10,
    color: "gray",
  },

  section: {
    marginTop: 25,
    width: "100%",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },

  text: {
    marginBottom: 4,
  },

  card: {
    borderRadius: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 12,
    marginTop: 10,
  },

  cardTitle: {
    fontWeight: "bold",
  },
});