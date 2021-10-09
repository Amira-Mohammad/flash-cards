import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';

let Decks = [
  {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
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
      title: 'Quiz Reminder',
      body: "you have to take your quiz!",
    },
    // trigger: {
    //   seconds: 10
    // },
  }
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
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Notifications.requestPermissionsAsync().getAsync(Notifications.getPermissionsAsync().NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleNotificationAsync(
                createNotifications(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}