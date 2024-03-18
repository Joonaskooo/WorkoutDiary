import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  workoutDetails: {
    marginTop: 10,
    alignItems: 'left',
  },

workoutText: {
    marginBottom: 10,
  },

workoutsContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'left',
    backgroundColor:"white",
    paddingHorizontal:20,
    padding:20,
  },

workouts: {
    marginTop: 20,
    padding:5,
  },

container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:"white",
  },

buttonContainer: {
    flexDirection: 'row',
  },

button: {
    marginHorizontal: 2,
    borderWidth: 1,
    borderColor: '#0000FF',
    borderRadius: 5,
  },

inputContainer: {
    width: '90%',
    marginTop: 20,
  },

textInput: {
    height: 50,
    borderColor: '#0000FF',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },

text: {
    fontSize: 30,
    marginBottom: 30,
    marginTop: 10,
    color: '#0000FF',
    fontFamily: 'Verdana',
  },

addButton: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#0000FF',
    borderRadius: 5,
    width: '80%',
  },
});