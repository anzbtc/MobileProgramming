// import { Image } from 'expo-image';
// import { Platform, StyleSheet } from 'react-native';

// import { HelloWave } from '@/components/hello-wave';
// import ParallaxScrollView from '@/components/parallax-scroll-view';
// import { ThemedText } from '@/components/themed-text';
// import { ThemedView } from '@/components/themed-view';
// import { Link } from 'expo-router';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome Anjali!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12',
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <Link href="/modal">
//           <Link.Trigger>
//             <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//           </Link.Trigger>
//           <Link.Preview />
//           <Link.Menu>
//             <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
//             <Link.MenuAction
//               title="Share"
//               icon="square.and.arrow.up"
//               onPress={() => alert('Share pressed')}
//             />
//             <Link.Menu title="More" icon="ellipsis">
//               <Link.MenuAction
//                 title="Delete"
//                 icon="trash"
//                 destructive
//                 onPress={() => alert('Delete pressed')}
//               />
//             </Link.Menu>
//           </Link.Menu>
//         </Link>

//         <ThemedText>
//           {`Tap the Explore tab to learn more about what's included in this starter app.`}
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           {`When you're ready, run `}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });



import { Dashboard } from '@/components/dashboard';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const mockBookings = [
    {
      id: '1',
      propertyName: 'Cozy Beach House',
      checkIn: 'Dec 15, 2024',
      checkOut: 'Dec 20, 2024',
      status: 'upcoming' as const,
    },
    {
      id: '2',
      propertyName: 'Mountain Villa',
      checkIn: 'Nov 10, 2024',
      checkOut: 'Nov 15, 2024',
      status: 'completed' as const,
    },
  ];

  const mockProperties = [
    {
      id: '1',
      name: 'Modern Apartment',
      location: 'Downtown',
      price: 120,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1649068504856-908e6e5c3f26',
    },
    {
      id: '2',
      name: 'Mountain Cabin',
      location: 'Rocky Mountains',
      price: 150,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1649068504856-908e6e5c3f26',
    },
    {
      id: '3',
      name: 'Beach Villa',
      location: 'Coastal Paradise',
      price: 200,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1649068504856-908e6e5c3f26',
    },
    {
      id: '4',
      name: 'Luxury Penthouse',
      location: 'City Center',
      price: 280,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1649068504856-908e6e5c3f26',
    },
    {
      id: '5',
      name: 'Cozy Cottage',
      location: 'Countryside',
      price: 95,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1649068504856-908e6e5c3f26',
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Dashboard 
      userName="Anjali"
      bookings={mockBookings}
      properties={mockProperties}
    />
    </SafeAreaView>
  );
}