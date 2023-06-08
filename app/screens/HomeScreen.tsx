import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef } from "react";
import colors from "../config/colors";
import Screen from "../component/Screen";
import AppText from "../component/AppText";
import Icons from "../component/Icons";
import Card from "../component/Card";
import AlbumCard from "../component/AlbumCard";
import ProfileCard from "../component/ProfileCard";

export default function HomeScreen() {
  const scrollView = useRef();
  const completeScren = useRef();
  return (
    <Screen style={styles.container}>
      <ScrollView ref={completeScren}>
        <View style={styles.header}>
          <AppText style={styles.text}>Good Morning</AppText>
          <View style={styles.iconsContainer}>
            <Icons
              name={"bell"}
              color={colors.light}
              size={25}
              onPress={() => {
                console.log("Pressed");
              }}
            />
            <Icons
              name={"clock-o"}
              color={colors.light}
              size={25}
              onPress={() => {
                console.log("Pressed");
              }}
            />
            <Icons
              name={"gear"}
              color={colors.light}
              size={25}
              onPress={() => {
                console.log("Pressed");
              }}
            />
          </View>
        </View>
        <View style={styles.cards}>
          <View style={styles.child}>
            <Card
              onPress={() => {
                console.log("pressed");
              }}
            />
          </View>
          <View style={styles.child}>
            <Card
              onPress={() => {
                console.log("pressed");
              }}
            />
          </View>
          <View style={styles.child}>
            <Card
              onPress={() => {
                console.log("pressed");
              }}
            />
          </View>
          <View style={styles.child}>
            <Card
              onPress={() => {
                console.log("pressed");
              }}
            />
          </View>
          <View style={styles.child}>
            <Card
              onPress={() => {
                console.log("pressed");
              }}
            />
          </View>
          <View style={styles.child}>
            <Card
              onPress={() => {
                console.log("pressed");
              }}
            />
          </View>
        </View>
        <View style={styles.mixes}>
          <AppText style={styles.mixesText}>Your Top mixes</AppText>
          <ScrollView ref={scrollView} horizontal>
            <View style={styles.albumList}>
              <TouchableOpacity
                onPress={() => {
                  console.log("yes");
                }}
              >
                <View style={{ width: 140, marginRight: 10 }}>
                  <View style={styles.album}>
                    <AlbumCard />
                  </View>
                  <AppText style={styles.albumListText}>
                    Theophilus Sunday, Praiz, Singz and TyBello
                  </AppText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log("yes");
                }}
              >
                <View style={{ width: 140, marginRight: 10 }}>
                  <View style={styles.album}>
                    <AlbumCard />
                  </View>
                  <AppText style={styles.albumListText}>
                    Theophilus Sunday, Praiz, Singz and TyBello
                  </AppText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log("yes");
                }}
              >
                <View style={{ width: 140, marginRight: 10 }}>
                  <View style={styles.album}>
                    <AlbumCard />
                  </View>
                  <AppText style={styles.albumListText}>
                    Theophilus Sunday, Praiz, Singz and TyBello
                  </AppText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log("yes");
                }}
              >
                <View style={{ width: 140, marginRight: 10 }}>
                  <View style={styles.album}>
                    <AlbumCard />
                  </View>
                  <AppText style={styles.albumListText}>
                    Theophilus Sunday, Praiz, Singz and TyBello
                  </AppText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log("yes");
                }}
              >
                <View style={{ width: 140, marginRight: 10 }}>
                  <View style={styles.album}>
                    <AlbumCard />
                  </View>
                  <AppText style={styles.albumListText}>
                    Theophilus Sunday, Praiz, Singz and TyBello
                  </AppText>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View style={styles.favouriteArtist}>
          <AppText style={styles.mixesText}>Your Favourite Artist</AppText>
          <View style={styles.row}></View>
          <ScrollView ref={scrollView} horizontal>
            <View style={styles.favouriteArtistCard}>
              <ProfileCard />
            </View>
            <View style={styles.favouriteArtistCard}>
              <ProfileCard />
            </View>
            <View style={styles.favouriteArtistCard}>
              <ProfileCard />
            </View>
            <View style={styles.favouriteArtistCard}>
              <ProfileCard />
            </View>
            <View style={styles.favouriteArtistCard}>
              <ProfileCard />
            </View>
            <View style={styles.favouriteArtistCard}>
              <ProfileCard />
            </View>
            <View style={styles.favouriteArtistCard}>
              <ProfileCard />
            </View>
          </ScrollView>
        </View>
        <View style={styles.mixes}>
          <AppText style={styles.mixesText}>Your Top mixes</AppText>
          <ScrollView ref={scrollView} horizontal>
            <View style={styles.albumList}>
              <TouchableOpacity
                onPress={() => {
                  console.log("yes");
                }}
              >
                <View style={{ width: 140, marginRight: 10 }}>
                  <View style={styles.album}>
                    <AlbumCard />
                  </View>
                  <AppText style={styles.albumListText}>
                    Theophilus Sunday, Praiz, Singz and TyBello
                  </AppText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log("yes");
                }}
              >
                <View style={{ width: 140, marginRight: 10 }}>
                  <View style={styles.album}>
                    <AlbumCard />
                  </View>
                  <AppText style={styles.albumListText}>
                    Theophilus Sunday, Praiz, Singz and TyBello
                  </AppText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log("yes");
                }}
              >
                <View style={{ width: 140, marginRight: 10 }}>
                  <View style={styles.album}>
                    <AlbumCard />
                  </View>
                  <AppText style={styles.albumListText}>
                    Theophilus Sunday, Praiz, Singz and TyBello
                  </AppText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log("yes");
                }}
              >
                <View style={{ width: 140, marginRight: 10 }}>
                  <View style={styles.album}>
                    <AlbumCard />
                  </View>
                  <AppText style={styles.albumListText}>
                    Theophilus Sunday, Praiz, Singz and TyBello
                  </AppText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log("yes");
                }}
              >
                <View style={{ width: 140, marginRight: 10 }}>
                  <View style={styles.album}>
                    <AlbumCard />
                  </View>
                  <AppText style={styles.albumListText}>
                    Theophilus Sunday, Praiz, Singz and TyBello
                  </AppText>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      <View></View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  album: {
    height: 130,
    width: "100%",
    borderBottomColor: colors.primary,
    borderBottomWidth: 5,
  },
  albumList: {
    flexDirection: "row",
  },
  albumListText: {
    color: colors.white,
  },
  cards: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  child: { flexBasis: "50%", paddingHorizontal: 4 },
  container: {
    padding: 10,
  },
  favouriteArtist: {},
  favouriteArtistCard: {
    width: 170,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  iconsContainer: {
    flexDirection: "row",
    marginHorizontal: 5,
    alignItems: "center",
  },
  mixes: {
    marginVertical: 10,
  },
  mixesText: {
    color: colors.white,
    fontFamily: "TravajBold",
    fontSize: 22,
    paddingVertical: 5,
  },
  row: {
    flexDirection: "row",
  },
  text: {
    color: colors.white,
    fontFamily: "TravajBold",
    fontSize: 20,
  },
});
