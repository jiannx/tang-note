import { View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function ViewTheme({ children, ...props }: { children: React.ReactNode, style?: any }) {
  return (
    <View style={[
      {
        backgroundColor: Colors.light,
      },
      props.style]}
      {...props}
    >
      {children}
    </View>
  )
}