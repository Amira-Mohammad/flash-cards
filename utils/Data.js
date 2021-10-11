import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';

let Decks = [
  {
    id: 1,
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'  // its key is the value of radio btn
        ,
        wrongAnswer: "wrongAnswer",
        score: 2
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'  // its key is the value of radio btn
        ,
        wrongAnswer: "wrongAnswer",
        score: 2

      }
    ]
  },
  {
    id: 2,
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'  // its key is the value of radio btn
        ,
        wrongAnswer: "wrongAnswer",
        score: 2

      }
    ]
  }

]

export default Decks;

const NOTIFICATION_KEY = 'quiz_Notifications'



export function clearLocalNotifications() {
  Notifications.cancelAllScheduledNotificationsAsync()
}


function createNotifications() {
  return {
    content: {
      title: "Quiz Reminder 📬",
      body: 'you have to take your quiz!',
      //data: { data: 'goes here' },
    },
    trigger: { seconds: 10 },
  }

  // content: {
  //   title: 'Quiz Reminder',
  //   body: "you have to take your quiz!",
  // },
  // trigger: {
  //   seconds: 10
  // },
  //}
}

// export function setLocalNotifications() {

//   let tomorrow = new Date()
//   tomorrow.setDate(tomorrow.getDate() + 1)
//   tomorrow.setHours(20)
//   tomorrow.setMinutes(0)

//   Notifications.scheduleNotificationAsync(
//     createNotifications(),
//     {
//       time: tomorrow,
//       repeat: 'day',
//     }
//   )
// }


export function setLocalNotifications() {
  //console.log("notifics")
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      // console.log("data", data)
      if (data) {
        //  console.log("lllllllll")


        /* Notifications.cancelAllScheduledNotificationsAsync()

        let tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        tomorrow.setHours(20)
        tomorrow.setMinutes(0)

        Notifications.scheduleNotificationAsync({
          content: {
            title: 'Quiz Reminder',
            body: "you have to take your quiz!???/",
          },
          trigger: {
            seconds: 10
          },
        }
        )
        AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true)) */

        // Notifications.requestPermissionsAsync().getAsync(Notifications.getPermissionsAsync().NOTIFICATIONS)
        Notifications.getPermissionsAsync()
          .then(res => {
            //console.log("res", res)

            if (res.status === 'granted') {
              // console.log("granted", new Date().getTime() + 60 * 60 * 24 * 1000)
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleNotificationAsync({
                content: {
                  title: 'Quiz Reminder',
                  body: "you have to take your quiz!???/",
                },
                trigger: {
                  hour: 20
                  // seconds: 10
                },
              }
                // createNotifications(),
                //  {
                //    time: tomorrow,
                //    repeat: 'day',
                //  }
              )
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          }).catch(e => {
            //console.log("error", e)
          })
      }
    })
}