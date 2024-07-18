import { Image, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { List } from "react-native-paper";

const providers = [
  { id: 1, name: "Dr. John Smith", gender: "male", nationality: "US" },
  { id: 2, name: "Dr. Jane Doe", gender: "female", nationality: "UK" },
];

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#ffffff", dark: "#ffffff" }}
      headerImage={
        <Image
          source={require("@/assets/images/village-hero.png")}
          style={styles.villageLogo}
        />
      }
    >
      <ThemedView style={styles.listContainer}>
        <List.Section>
          <List.Subheader>
            <ThemedText type="title">VillageMD - Providers</ThemedText>
          </List.Subheader>

          {providers.map((provider) => (
            <List.Item
              key={provider.id}
              title={provider.name}
              left={() => <List.Icon icon="account" />}
              description={() => (
                <ThemedText>
                  {provider.gender}, {provider.nationality}
                </ThemedText>
              )}
            />
          ))}
        </List.Section>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  listContainer: {
    marginBottom: 8,
  },
  villageLogo: {
    height: 70,
    width: 290,
    bottom: 50,
    left: 50,
    position: "absolute",
  },
});
