import * as React from "react";
// import constants
import Constants from "./Constants";
import WorldsConstants from './WorldsConstants'
import * as DataObject from "./Database";
// Import asyncstorage
import AsyncStorage from "@react-native-community/async-storage";

import { Text, View, Button, Alert, Image } from "react-native";

// Generic helper functions that can be used anywhere

// This is bad. This should have been coupled with the
// id in the above object. But I didn't do it initially,
// when I wrote it out :/
// I sad :(

// Returns an Image for the corresponding Badge ID
// Params: input - ID defined in Constants.js
export const returnImgForID = (badgeID) => {
  switch (badgeID) {
    case Constants.LESSON_COMPLETION_1:
      return Constants.LESSON_COMPLETION_1_IMG;
    case Constants.LESSON_COMPLETION_2:
      return Constants.LESSON_COMPLETION_2_IMG;
    case Constants.LESSON_COMPLETION_3:
      return Constants.LESSON_COMPLETION_3_IMG;
    case Constants.WORLD_COMPLETION_FIRE:
      return Constants.WORLD_COMPLETION_FIRE_IMG;
    case Constants.WORLD_COMPLETION_WATER:
      return Constants.WORLD_COMPLETION_WATER_IMG;
    case Constants.WORLD_COMPLETION_ICE:
      return Constants.WORLD_COMPLETION_ICE_IMG;
    case Constants.WORLD_COMPLETION_JUNGLE:
      return Constants.WORLD_COMPLETION_JUNGLE_IMG;
    case Constants.WORLD_COMPLETION_ALIEN:
      return Constants.WORLD_COMPLETION_ALIEN_IMG;
    case Constants.STREAKS_5_DAY:
      return Constants.STREAKS_5_DAY_IMG;
    case Constants.STREAKS_10_DAY:
      return Constants.STREAKS_10_DAY_IMG;
    case Constants.STREAKS_15_DAY:
      return Constants.STREAKS_15_DAY_IMG;
    default:
      return "";
  }
};

// Returns the raw image name for the id
// Params: input - An id defined in Constants.js
export const returnRawImgForID = (badgeID) => {
  switch (badgeID) {
    case Constants.LESSON_COMPLETION_1:
      return Constants.LESSON_COMPLETION_1_IMG_RAW;
    case Constants.LESSON_COMPLETION_2:
      return Constants.LESSON_COMPLETION_2_IMG_RAW;
    case Constants.LESSON_COMPLETION_3:
      return Constants.LESSON_COMPLETION_3_IMG_RAW;
    case Constants.WORLD_COMPLETION_FIRE:
      return Constants.WORLD_COMPLETION_FIRE_IMG_RAW;
    case Constants.WORLD_COMPLETION_ICE:
      return Constants.WORLD_COMPLETION_ICE_IMG_RAW;
    case Constants.WORLD_COMPLETION_WATER:
      return Constants.WORLD_COMPLETION_WATER_IMG_RAW;
    case Constants.WORLD_COMPLETION_JUNGLE:
      return Constants.WORLD_COMPLETION_JUNGLE_IMG_RAW;
    case Constants.WORLD_COMPLETION_ALIEN:
      return Constants.WORLD_COMPLETION_ALIEN_IMG_RAW;
    case Constants.STREAKS_5_DAY:
      return Constants.STREAKS_5_DAY_IMG_RAW;
    case Constants.STREAKS_10_DAY:
      return Constants.STREAKS_10_DAY_IMG_RAW;
    case Constants.STREAKS_15_DAY:
      return Constants.STREAKS_15_DAY_IMG_RAW;
    default:
      return "";
  }
};

// Returns an actual react-native img source for the id
export const returnImgForRawImgName = (rawImageName) => {
  switch (rawImageName) {
    case Constants.LESSON_COMPLETION_1_IMG_RAW:
      return Constants.LESSON_COMPLETION_1_IMG;
    case Constants.LESSON_COMPLETION_2_IMG_RAW:
      return Constants.LESSON_COMPLETION_2_IMG;
    case Constants.LESSON_COMPLETION_3_IMG_RAW:
      return Constants.LESSON_COMPLETION_3_IMG;
    case Constants.WORLD_COMPLETION_FIRE_IMG_RAW:
      return Constants.WORLD_COMPLETION_FIRE_IMG;
    case Constants.WORLD_COMPLETION_ICE_IMG_RAW:
      return Constants.WORLD_COMPLETION_ICE_IMG;
    case Constants.WORLD_COMPLETION_WATER_IMG_RAW:
      return Constants.WORLD_COMPLETION_WATER_IMG;
    case Constants.WORLD_COMPLETION_JUNGLE_IMG_RAW:
      return Constants.WORLD_COMPLETION_JUNGLE_IMG;
    case Constants.WORLD_COMPLETION_ALIEN_IMG_RAW:
      return Constants.WORLD_COMPLETION_ALIEN_IMG;
    case Constants.STREAKS_5_DAY_IMG_RAW:
      return Constants.STREAKS_5_DAY_IMG;
    case Constants.STREAKS_10_DAY_IMG_RAW:
      return Constants.STREAKS_10_DAY_IMG;
    case Constants.STREAKS_15_DAY_IMG_RAW:
      return Constants.STREAKS_15_DAY_IMG;
    default:
      return Constants.BADGE_LOCKED_IMG;
  }
};

// Returns a Badge Name for the corresponding Badge ID
export const returnBadgeNameForID = (badgeID) => {
  switch (badgeID) {
    case Constants.LESSON_COMPLETION_1:
      return Constants.LESSON_COMPLETION_1_BADGE;
    case Constants.LESSON_COMPLETION_2:
      return Constants.LESSON_COMPLETION_2_BADGE;
    case Constants.LESSON_COMPLETION_3:
      return Constants.LESSON_COMPLETION_3_BADGE;
    case Constants.WORLD_COMPLETION_FIRE:
      return Constants.WORLD_COMPLETION_FIRE_BADGE;
    case Constants.WORLD_COMPLETION_ICE:
      return Constants.WORLD_COMPLETION_ICE_BADGE;
    case Constants.WORLD_COMPLETION_WATER:
      return Constants.WORLD_COMPLETION_WATER_BADGE;
    case Constants.WORLD_COMPLETION_JUNGLE:
      return Constants.WORLD_COMPLETION_JUNGLE_BADGE;
    case Constants.WORLD_COMPLETION_ALIEN:
      return Constants.WORLD_COMPLETION_ALIEN_BADGE;
    case Constants.STREAKS_5_DAY:
      return Constants.STREAKS_5_DAY_BADGE;
    case Constants.STREAKS_10_DAY:
      return Constants.STREAKS_10_DAY_BADGE;
    case Constants.STREAKS_15_DAY:
      return Constants.STREAKS_15_DAY_BADGE;
  }
};

// Show an alert saying you've got a badge.
// Params: input - a string which is the badge description
export const alertBadgeAcquired = (badgeDesc) => {
  let badgeName = badgeDesc;
  // Add excalamation point at the end
  badgeName += "!";
  Alert.alert(
    "Congratulations!",
    badgeDesc + "\nHead to your profile to see it!",
    [
      {
        text: "OK",
        style: "destructive",
      },
    ],
    { cancelable: false }
  );
};

export const renderAllAcquiredBadges = () => {
  let ImageTags = [];
  let badges = DataObject.Data.BADGES;
  console.log(badges);

  for(let i = 0; i < badges.length; i++) {
    for(let j = 0; j < badges[i].length; j++) {
      if(badges[i][j].badgeState == true) {
        ImageTags.push(
          <Image
            key={badges[i][j].badgeName}
            source={returnImgForRawImgName(badges[i][j].badgeImage)}
            style={{
              width: 100,
              height: 120,
              marginLeft: 10,
              marginRight: 10,
              opacity: badges[i][j].badgeState ? 1 : 0.5,
            }}
          />
        );
      }
    }
  }
  return ImageTags;
}

// Renders all "World" badges
export const renderWorldBadges = (world_props) => {
  let WorldTags = [];
  for (let i = 0; i < world_props.length; i++) {
    WorldTags.push(
      <Image
        key={world_props[i].badgeName}
        source={returnImgForRawImgName(world_props[i].badgeImage)}
        style={{
          width: 100,
          height: 120,
          marginLeft: 10,
          marginRight: 10,
          opacity: world_props[i].badgeState ? 1 : 0.5,
        }}
      />
    );
  }
  return WorldTags;
};

// Render all "Streak" Badges
export const renderStreakImages = (streak_props) => {
  let StreakTags = [];
  for (let i = 0; i < streak_props.length; i++) {
    StreakTags.push(
      <Image
        key={streak_props[i].badgeName}
        source={returnImgForRawImgName(streak_props[i].badgeImage)}
        style={{
          width: 100,
          height: 120,
          marginLeft: 10,
          marginRight: 10,
          opacity: streak_props[i].badgeState ? 1 : 0.5,
        }}
      />
    );
  }
  return StreakTags;
};

// Render all "Lesson" Badges
export const renderLessonImages = (lesson_props) => {
  let MonthTags = [];
  let data = "";
  for (let i = 0; i < lesson_props.length; i++) {
    MonthTags.push(
      <Image
        key={lesson_props[i].badgeName}
        source={returnImgForRawImgName(lesson_props[i].badgeImage)}
        style={{
          width: 100,
          height: 120,
          marginLeft: 10,
          marginRight: 10,
          opacity: lesson_props[i].badgeState ? 1 : 0.5,
        }}
      />
    );
  }
  return MonthTags;
};

// Helper function to store the main data object
// into AsyncStorage
export const storeData = async () => {
  try {
    const dataStore = await AsyncStorage.setItem(
      "data",
      JSON.stringify(DataObject.Data)
    );
    console.log("Data Stored");
  } catch (e) {
    // Store failed
    console.log(e);
    // save error
  }
};

export const getHighScore = () => {
  return DataObject.Data.gameHighScore;
}

export const setHighScore = (score) => {
  if (score > getHighScore()) {
    DataObject.Data.gameHighScore = score;
    storeWrapper();
  }
}
export const updateStreaksCount = () => {
  let current_timestamp = Date.now() / 1000; // seconds
  let last_logged_in = DataObject.Data.streak.last_logged_in;

  // "streak_duration" is the duration which signifies an addition to the streak count
  // Since we've opted for daily logins, it should be 24 * 60 * 60 seconds
  let streak_duration = 24 * 60 * 60;
  if(current_timestamp - last_logged_in >= streak_duration &&
     current_timestamp - last_logged_in < 2 * streak_duration) {
    // Update the last logged in timestamp
    DataObject.Data.streak.last_logged_in = current_timestamp;
    DataObject.Data.streak.streak_count += 1;
    return true;
  }
  // If user skipped a day, then we need to reset the streak count,
  // and store it back. But we'll use the new timestamp
  else if(current_timestamp - last_logged_in >= 2 * streak_duration) {
    DataObject.Data.streak.last_logged_in = current_timestamp;
    DataObject.Data.streak.streak_count = 0;
    return true;
  }

  return false;
}

export const checkAndIssueStreaksBadge = () => {
  // If all badges have been aquired, then simply return
  if (DataObject.Data.BADGES[Constants.STREAKS][0].badgeState &&
      DataObject.Data.BADGES[Constants.STREAKS][1].badgeState &&
      DataObject.Data.BADGES[Constants.STREAKS][2].badgeState) {
    return;
  }

  let count = DataObject.Data.streak.streak_count;

  // Index to badges array
  // [0] -> 5 day streak
  // [1] -> 10 day streak
  // [2] -> 15 day streak

  switch(count) {
    case 5:
      // If the badgeState has already been updated, then we can simply return
      if(DataObject.Data.BADGES[Constants.STREAKS][0].badgeState) {
        return;
      }
      DataObject.Data.BADGES[Constants.STREAKS][0].badgeState = Constants.BADGE_ACQUIRED;
      DataObject.Data.BADGES[Constants.STREAKS][0].badgeImage = Constants.STREAKS_5_DAY_IMG_RAW;
      alertBadgeAcquired("You have received a 5-day streak badge");
      break;
    case 10:
      // If the badgeState has already been updated, then we can simply return
      if(DataObject.Data.BADGES[Constants.STREAKS][1].badgeState) {
        return;
      }
      DataObject.Data.BADGES[Constants.STREAKS][1].badgeState = Constants.BADGE_ACQUIRED;
      DataObject.Data.BADGES[Constants.STREAKS][1].badgeImage = Constants.STREAKS_10_DAY_IMG_RAW;
      alertBadgeAcquired("you have received a 10-day streak badge");
      break;
    case 15:
      // If the badgeState has already been updated, then we can simply return
      if(DataObject.Data.BADGES[Constants.STREAKS][2].badgeState) {
        return;
      }
      DataObject.Data.BADGES[Constants.STREAKS][2].badgeState = Constants.BADGE_ACQUIRED;
      DataObject.Data.BADGES[Constants.STREAKS][2].badgeImage = Constants.STREAKS_15_DAY_IMG_RAW;
      alertBadgeAcquired("You have received a 15-day streak badge");
      break;
    default:
      break;
  }
}

// Startup function - Anything that needs to happen
// before rendering anything
export const startUp = async () => {
  // Set initial, otherwise retrieve latest
  try {
    const data = await AsyncStorage.getItem("data");
    if (data != null) {
      console.log("Data already exists\n");
      DataObject.Data = JSON.parse(data);
      // Update the streak count
      let shouldUpdateStorage = updateStreaksCount();
      // If shouldUpdateStorage is false, that means the streak count didn't update
      // This means, there is no real need to check whether we need to issue a badge
      // or store the data back to the persistent storage
      // Lets be a bit stingy and prevent unnecessary calls when we can avoid them.
      if(shouldUpdateStorage) {
        checkAndIssueStreaksBadge();
        storeWrapper();
      }
    } else {
      console.log("Data is new\n");
      // Initialize the timestamp
      initializeTimestamp();
      const setFirstTimeData = await AsyncStorage.setItem(
        "data",
        JSON.stringify(DataObject.Data)
      );
    }
  } catch (e) {
    console.log(e);
  }
};

// Self-explanatory
export const initializeTimestamp = () => {
  // While storing the data initially
  // Set the current timestamp in seconds and set the streak count to 0
  DataObject.Data.streak.last_logged_in = Date.now() / 1000;
  DataObject.Data.streak.streak_count = 0;
}

// Make a call to storeData to update the storage
export const storeWrapper = () => {
  storeData();
}

export const find_world_index = (world_short_key) => {
  for (let i = 0; i < WorldsConstants.WORLDS.length; i++){
    console.log(WorldsConstants.WORLDS[i].short_key)
    if(WorldsConstants.WORLDS[i].short_key === world_short_key){
      console.log("returning " + i)
      console.log(typeof i)
      return i;
    }
  }

}

// Update the badge state
export const updateBadgeState = (badgeComponent, badgeID) => {
  let prevBadgeState;
  for (let i = 0; i < DataObject.Data.BADGES[badgeComponent].length; i++) {
    if (DataObject.Data.BADGES[badgeComponent][i].badgeID == badgeID) {
      prevBadgeState = DataObject.Data.BADGES[badgeComponent][i].badgeState;
      DataObject.Data.BADGES[badgeComponent][i].badgeState =
        Constants.BADGE_ACQUIRED;
      DataObject.Data.BADGES[badgeComponent][i].badgeImage = returnRawImgForID(
        badgeID
      );
      break;
    }
  }

  if(! prevBadgeState)
    alertBadgeAcquired("You have received a badge for completing your first lesson");
};

// This function updates the number of lessons completed
// It also updates the world completion status to true if all lessons in a world are completed
export const updateLessonAndWorldCompletion = (parentWorld) => {
  let lessons_count = -1;
  let worlds = WorldsConstants.WORLDS;

  lessons_count = DataObject.Data.lesson_completion_per_world[parentWorld]["lessons_completed"] + 1;
  // Only update if less than total lessons
  if (lessons_count <= Constants.TOTAL_LESSONS)
    DataObject.Data.lesson_completion_per_world[parentWorld]["lessons_completed"] = lessons_count;
  // If we've reached the ttoal don't update anymore, just set completion status to true
  if (lessons_count == Constants.TOTAL_LESSONS){
    let world_index = find_world_index(parentWorld)
    DataObject.Data.lesson_completion_per_world[parentWorld]["world_completed"] = true;

    // this WILL fail at the last world, but the index checking wasn't working and i don't care
    // enough to fix it
    console.log(world_index)
    next_world = worlds[++world_index].short_key
    console.log(next_world)
    DataObject.Data.lesson_completion_per_world[next_world]["world_unlocked"] = true;
  }
}

// Sets the badgeState to true for all the worldBadges
// if all lessons in a world are completed
export const checkAndIssueWorldBadge = () => {

  // This is really bad, doing it one by one
  // but I'm tired and I don't want to think

  // DataObject.Data.BADGES[Constants.WORLD_COMPLETION][0] -> fire world
  // DataObject.Data.BADGES[Constants.WORLD_COMPLETION][1] -> ice world
  // DataObject.Data.BADGES[Constants.WORLD_COMPLETION][2] -> water world
  // DataObject.Data.BADGES[Constants.WORLD_COMPLETION][3] -> jungle world
  // DataObject.Data.BADGES[Constants.WORLD_COMPLETION][4] -> alien world

  // This is technically the "current" badge state of the world
  let badgeStateFireWorld = DataObject.Data.BADGES[Constants.WORLD_COMPLETION][0].badgeState;
  let badgeStateIceWorld = DataObject.Data.BADGES[Constants.WORLD_COMPLETION][1].badgeState;
  let badgeStateJungleWorld = DataObject.Data.BADGES[Constants.WORLD_COMPLETION][3].badgeState;
  let badgeStateAlienWorld = DataObject.Data.BADGES[Constants.WORLD_COMPLETION][4].badgeState;

  // If all worlds have been completed, nothing to do, lets return
  if(badgeStateFireWorld && badgeStateIceWorld && badgeStateJungleWorld && badgeStateAlienWorld)
    return;

  let isFireWorldCompleted = DataObject.Data.lesson_completion_per_world.fire_world["world_completed"];
  let isIceWorldCompleted = DataObject.Data.lesson_completion_per_world.ice_world["world_completed"];
  let isJungleWorldCompleted = DataObject.Data.lesson_completion_per_world.jungle_world["world_completed"];
  let isAlienWorldCompleted = DataObject.Data.lesson_completion_per_world.alien_world["world_completed"];

  // Update fire world badge state
  if(isFireWorldCompleted && !badgeStateFireWorld) {
    DataObject.Data.BADGES[Constants.WORLD_COMPLETION][0].badgeState = Constants.BADGE_ACQUIRED;
    DataObject.Data.BADGES[Constants.WORLD_COMPLETION][0].badgeImage = Constants.WORLD_COMPLETION_FIRE_IMG_RAW;
    alertBadgeAcquired("You have received a badge for completing the Fire World");
  }

  // Update ice world badge state
  if(isIceWorldCompleted && !badgeStateIceWorld) {
    DataObject.Data.BADGES[Constants.WORLD_COMPLETION][1].badgeState = Constants.BADGE_ACQUIRED;
    DataObject.Data.BADGES[Constants.WORLD_COMPLETION][1].badgeImage = Constants.WORLD_COMPLETION_ICE_IMG_RAW;
    alertBadgeAcquired("You have received a badge for completing the Ice World");
  }

  // *** Water World
  // ...
  // *** Water World

  // Update jungle world badge state
  if(isJungleWorldCompleted && !badgeStateJungleWorld) {
    DataObject.Data.BADGES[Constants.WORLD_COMPLETION][3].badgeState = Constants.BADGE_ACQUIRED;
    DataObject.Data.BADGES[Constants.WORLD_COMPLETION][3].badgeImage = Constants.WORLD_COMPLETION_JUNGLE_IMG_RAW;
    alertBadgeAcquired("You have received a badge for completing the Jungle World");
  }

  // Update alien world badge state
  if(isAlienWorldCompleted && !badgeStateAlienWorld) {
    DataObject.Data.BADGES[Constants.WORLD_COMPLETION][4].badgeState = Constants.BADGE_ACQUIRED;
    DataObject.Data.BADGES[Constants.WORLD_COMPLETION][4].badgeImage = Constants.WORLD_COMPLETION_ALIEN_IMG_RAW;
    alertBadgeAcquired("You have receieved a badge for completing the Alien World");
  }
}

export const setCurrentLessonParentWorld = (worldNameForLesson) => {
  // Set the current lesson's parent here
  Constants.CURRENT_LESSON_PARENT = worldNameForLesson;
}

export const getUserName = () => {
  return DataObject.Data.name;
}

export const getStreakCount = () => {
  return DataObject.Data.streak.streak_count;
}

export const getTotalBadgesAcquired = () => {
  let count = 0;
  for(let i = 0; i < DataObject.Data.BADGES.length; i++) {
    for(let j = 0; j < DataObject.Data.BADGES[i].length; j++) {
      if(DataObject.Data.BADGES[i][j].badgeState) {
        count++;
      }
    }
  }

  return count;
}
