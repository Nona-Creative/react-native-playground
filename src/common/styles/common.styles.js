import { StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lighter,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    textAlign: 'center',
    fontWeight: '600',
    color: Colors.black,
    marginBottom: 24,
  },
  subTitle: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '600',
    color: Colors.black,
    marginBottom: 24,
  },
  button: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '600',
  },
})

export default styles
