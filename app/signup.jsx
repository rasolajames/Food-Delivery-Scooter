import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import { styled } from 'nativewind';

const StyledImageBackground = styled(ImageBackground);

export default function App() {
  return (
    <StyledImageBackground
      source={require('../assets/images/fods.jpg')}
      className="flex-1 justify-center items-center"
      resizeMode="cover"  // Ensures the image covers the entire background
      style={{ opacity: 0.8 }}  // Makes the image clear but slightly transparent for better text readability
    >
      {/* Title Section */}
      <Text className="text-5xl text-black font-bold tracking-wide text-center">
        Food Delivery Scooter
      </Text>
      
      {/* Get Started Button */}
      <Link className="text-2xl font-bold bg-gray-500 px-5 py-4 my-6 text-white rounded-lg" href="/onboarding">
        Get Started
      </Link>

      <StatusBar style="auto" />
    </StyledImageBackground>
  );
}
