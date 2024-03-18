import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../style/style';

const Workouts = ({ route }) => {
  const { workoutData } = route.params || {};
    
  const demoWorkouts = [
    { workoutType: 'running', distance: '5', duration: '30', selectedDate: '2022-03-15' },
    { workoutType: 'ski', distance: '1', duration: '45', selectedDate: '2015-03-16' },
    { workoutType: 'cycling', distance: '15', duration: '60', selectedDate: '2013-07-17' }
  ];

  const displayWorkouts = workoutData ? [workoutData, ...demoWorkouts] : demoWorkouts;

return (
    <View style={styles.workoutsContainer}>
      {displayWorkouts.map((workout, index) => (
        <View key={index}>
          <Button
            icon={workoutTypeIcon(workout.workoutType)}
            mode={index === 0 ? 'contained' : 'outlined'}
            style={styles.workouts}
          >
            {workout.workoutType.charAt(0).toUpperCase() + workout.workoutType.slice(1)}
          </Button>
          <View style={styles.workoutDetails}>
            {workout && (
              <>
                <Text style={styles.workoutText}>Distance: {workout.distance} km</Text>
                <Text style={styles.workoutText}>Duration: {workout.duration} min</Text>
                <Text style={styles.workoutText}>Date: {workout.selectedDate}</Text>
              </>
            )}
          </View>
        </View>
      ))}
    </View>
  );
};

const workoutTypeIcon = (workoutType) => {
  switch (workoutType) {
    case 'running':
      return 'run';
    case 'ski':
      return 'ski';
    case 'cycling':
      return 'bike';
    default:
      return 'run';
  }
};

export default Workouts;