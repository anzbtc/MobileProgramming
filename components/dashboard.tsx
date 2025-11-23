// import { ThemedText } from '@/components/themed-text';
// import { ThemedView } from '@/components/themed-view';
// import { Colors } from '@/constants/theme';
// import { useColorScheme } from '@/hooks/use-color-scheme';
// import { ScrollView, StyleSheet, View } from 'react-native';

// interface Property {
//   id: string;
//   name: string;
//   location: string;
//   price: number;
//   rating: number;
//   image: string;
// }

// interface Booking {
//   id: string;
//   propertyName: string;
//   checkIn: string;
//   checkOut: string;
//   status: 'upcoming' | 'completed' | 'cancelled';
// }

// interface DashboardProps {
//   properties?: Property[];
//   bookings?: Booking[];
//   userName?: string;
// }

// export function Dashboard({ 
//   properties = [], 
//   bookings = [],
//   userName = 'Guest'
// }: DashboardProps) {
//   const colorScheme = useColorScheme();
//   const colors = Colors[colorScheme ?? 'light'];

//   return (
//     <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
//       {/* Header */}
//       <ThemedView style={styles.header}>
//         <ThemedText type="title">Welcome back, {userName}!</ThemedText>
//         <ThemedText type="default" style={styles.subtitle}>
//           Your travel awaits
//         </ThemedText>
//       </ThemedView>

//       {/* Quick Stats */}
//       <ThemedView style={styles.statsContainer}>
//         <View style={styles.statCard}>
//           <ThemedText type="defaultSemiBold" style={styles.statNumber}>
//             {bookings.length}
//           </ThemedText>
//           <ThemedText style={styles.statLabel}>Active Bookings</ThemedText>
//         </View>
//         <View style={styles.statCard}>
//           <ThemedText type="defaultSemiBold" style={styles.statNumber}>
//             {properties.length}
//           </ThemedText>
//           <ThemedText style={styles.statLabel}>Saved Properties</ThemedText>
//         </View>
//       </ThemedView>

//       {/* Upcoming Bookings */}
//       {bookings.length > 0 && (
//         <ThemedView style={styles.section}>
//           <ThemedText type="subtitle">Upcoming Trips</ThemedText>
//           {bookings.map((booking) => (
//             <View key={booking.id} style={styles.bookingCard}>
//               <ThemedText type="defaultSemiBold">{booking.propertyName}</ThemedText>
//               <ThemedText style={styles.bookingDates}>
//                 {booking.checkIn} - {booking.checkOut}
//               </ThemedText>
//               <View
//                 style={[
//                   styles.statusBadge,
//                   {
//                     backgroundColor:
//                       booking.status === 'upcoming'
//                         ? '#4CAF50'
//                         : booking.status === 'completed'
//                           ? '#2196F3'
//                           : '#F44336',
//                   },
//                 ]}>
//                 <ThemedText style={styles.statusText}>{booking.status}</ThemedText>
//               </View>
//             </View>
//           ))}
//         </ThemedView>
//       )}

//       {/* Featured Properties */}
//       {properties.length > 0 && (
//         <ThemedView style={styles.section}>
//           <ThemedText type="subtitle">Featured Properties</ThemedText>
//           {properties.map((property) => (
//             <View key={property.id} style={styles.propertyCard}>
//               <View style={styles.propertyHeader}>
//                 <View style={styles.propertyInfo}>
//                   <ThemedText type="defaultSemiBold">{property.name}</ThemedText>
//                   <ThemedText style={styles.location}>{property.location}</ThemedText>
//                 </View>
//                 <ThemedText type="defaultSemiBold" style={styles.price}>
//                   ${property.price}/night
//                 </ThemedText>
//               </View>
//               <View style={styles.ratingContainer}>
//                 <ThemedText>⭐ {property.rating.toFixed(1)}</ThemedText>
//               </View>
//             </View>
//           ))}
//         </ThemedView>
//       )}

//       {/* Empty State */}
//       {bookings.length === 0 && properties.length === 0 && (
//         <ThemedView style={styles.emptyState}>
//           <ThemedText type="subtitle" style={styles.emptyStateText}>
//             No bookings or saved properties yet
//           </ThemedText>
//           <ThemedText style={styles.emptyStateSubtext}>
//             Start exploring and booking your next adventure!
//           </ThemedText>
//         </ThemedView>
//       )}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   header: {
//     marginBottom: 24,
//   },
//   subtitle: {
//     marginTop: 4,
//     opacity: 0.7,
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     gap: 12,
//     marginBottom: 24,
//   },
//   statCard: {
//     flex: 1,
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     backgroundColor: '#000000',
//   },
//   statNumber: {
//     fontSize: 24,
//     marginBottom: 4,
//   },
//   statLabel: {
//     fontSize: 12,
//     opacity: 0.6,
//   },
//   section: {
//     marginBottom: 24,
//   },
//   bookingCard: {
//     padding: 12,
//     marginTop: 12,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//   },
//   bookingDates: {
//     fontSize: 12,
//     marginTop: 4,
//     opacity: 0.6,
//   },
//   statusBadge: {
//     alignSelf: 'flex-start',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 4,
//     marginTop: 8,
//   },
//   statusText: {
//     color: '#fff',
//     fontSize: 12,
//     fontWeight: '600',
//   },
//   propertyCard: {
//     padding: 12,
//     marginTop: 12,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//   },
//   propertyHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//   },
//   propertyInfo: {
//     flex: 1,
//   },
//   location: {
//     fontSize: 12,
//     marginTop: 4,
//     opacity: 0.6,
//   },
//   price: {
//     color: '#FF6B6B',
//     fontSize: 14,
//   },
//   ratingContainer: {
//     marginTop: 8,
//   },
//   emptyState: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 48,
//   },
//   emptyStateText: {
//     textAlign: 'center',
//     marginBottom: 8,
//   },
//   emptyStateSubtext: {
//     textAlign: 'center',
//     opacity: 0.6,
//   },
// });




import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

interface Property {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  reviews?: number;
}

interface Booking {
  id: string;
  propertyName: string;
  checkIn: string;
  checkOut: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

interface DashboardProps {
  properties?: Property[];
  bookings?: Booking[];
  userName?: string;
}

export function Dashboard({ 
  properties = [], 
  bookings = [],
  userName = 'Guest'
}: DashboardProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const isDark = colorScheme === 'dark';

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]}
      showsVerticalScrollIndicator={false}
    >
      {/* Search Bar */}
      <View style={[styles.searchBar, { backgroundColor: isDark ? '#1a365d' : '#f8f9fa' }]}>
          <Ionicons name="search" size={18} color={isDark ? '#b0c4de' : '#2c5aa0'} />
          <TextInput 
            placeholder="Search your bnb"
            placeholderTextColor={isDark ? '#b0c4de' : '#999'}
            style={[styles.searchInput, { color: isDark ? '#fff' : '#000' }]}
          />
          <Ionicons name="funnel" size={18} color={isDark ? '#b0c4de' : '#2c5aa0'} />
        </View>

      {/* Categories Section */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        <TouchableOpacity style={[styles.categoryPill, styles.categoryPillActive, { backgroundColor: '#2c5aa0' }]}>
          <Ionicons name="home" size={20} color="#fff" />
          <ThemedText style={[styles.categoryText, { color: '#fff', fontWeight: '600' }]}>Homes</ThemedText>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.categoryPill, { backgroundColor: isDark ? '#2c5aa0' : '#f0f0f0' }]}>
          <Ionicons name="sparkles" size={20} color={isDark ? '#b0c4de' : '#2c5aa0'} />
          <ThemedText style={[styles.categoryText, { color: isDark ? '#b0c4de' : '#2c5aa0' }]}>Experiences</ThemedText>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.categoryPill, { backgroundColor: isDark ? '#2c5aa0' : '#f0f0f0' }]}>
          <Ionicons name="build" size={20} color={isDark ? '#b0c4de' : '#2c5aa0'} />
          <ThemedText style={[styles.categoryText, { color: isDark ? '#b0c4de' : '#2c5aa0' }]}>Services</ThemedText>
        </TouchableOpacity>
      </ScrollView>

      {/* Upcoming Bookings - Carousel Style */}
      {bookings.length > 0 && (
        <View style={styles.section}>
          {/* Two Column Header */}
          <View style={styles.bookingsHeader}>
            <ThemedText type="subtitle" style={styles.sectionTitle}>Your Trips</ThemedText>
          </View>

          {/* Upcoming Bookings */}
          <View style={styles.bookingsContainer}>
            <View style={styles.bookingsColumn}>
              <ThemedText type="defaultSemiBold" style={styles.columnTitle}>Upcoming</ThemedText>
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                style={styles.bookingCarousel}
              >
                {bookings.filter(b => b.status === 'upcoming').length > 0 ? (
                  bookings.filter(b => b.status === 'upcoming').map((booking) => (
                    <TouchableOpacity key={booking.id} style={[styles.bookingCardCarousel, { backgroundColor: isDark ? '#2c5aa0' : '#fff' }]}>
                      <View style={styles.bookingImagePlaceholder}>
                        <Ionicons name="home" size={40} color="#4CAF50" />
                      </View>
                      <View style={styles.bookingContent}>
                        <ThemedText type="defaultSemiBold" numberOfLines={1}>{booking.propertyName}</ThemedText>
                        <ThemedText style={[styles.bookingDates, { color: isDark ? '#aaa' : '#666' }]}>
                          {booking.checkIn} - {booking.checkOut}
                        </ThemedText>
                        <View
                          style={[
                            styles.statusBadgeSmall,
                            {
                              backgroundColor: '#4CAF50',
                            },
                          ]}>
                          <ThemedText style={styles.statusText}>Upcoming</ThemedText>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))
                ) : (
                  <View style={styles.emptyBookingMessage}>
                    <ThemedText style={{ color: isDark ? '#aaa' : '#666' }}>No upcoming trips</ThemedText>
                  </View>
                )}
              </ScrollView>
            </View>

            {/* Completed Bookings */}
            <View style={styles.bookingsColumn}>
              <ThemedText type="defaultSemiBold" style={styles.columnTitle}>Completed</ThemedText>
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                style={styles.bookingCarousel}
              >
                {bookings.filter(b => b.status === 'completed').length > 0 ? (
                  bookings.filter(b => b.status === 'completed').map((booking) => (
                    <TouchableOpacity key={booking.id} style={[styles.bookingCardCarousel, { backgroundColor: isDark ? '#2c5aa0' : '#fff' }]}>
                      <View style={styles.bookingImagePlaceholder}>
                        <Ionicons name="home" size={40} color="#2196F3" />
                      </View>
                      <View style={styles.bookingContent}>
                        <ThemedText type="defaultSemiBold" numberOfLines={1}>{booking.propertyName}</ThemedText>
                        <ThemedText style={[styles.bookingDates, { color: isDark ? '#aaa' : '#666' }]}>
                          {booking.checkIn} - {booking.checkOut}
                        </ThemedText>
                        <View
                          style={[
                            styles.statusBadgeSmall,
                            {
                              backgroundColor: '#2196F3',
                            },
                          ]}>
                          <ThemedText style={styles.statusText}>Completed</ThemedText>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))
                ) : (
                  <View style={styles.emptyBookingMessage}>
                    <ThemedText style={{ color: isDark ? '#aaa' : '#666' }}>No completed trips</ThemedText>
                  </View>
                )}
              </ScrollView>
            </View>
          </View>
        </View>
      )}

      {/* Explore Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Explore Stays</ThemedText>
          <TouchableOpacity>
            <ThemedText style={[styles.seeAll, { color: isDark ? '#64b5f6' : '#2c5aa0' }]}>See all</ThemedText>
          </TouchableOpacity>
        </View>
     

        {properties.length > 0 ? (
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.propertyCarousel}
          >
            {properties.map((property) => (
              <TouchableOpacity key={property.id} style={[styles.propertyCardAirbnb, { backgroundColor: isDark ? '#2c5aa0' : '#fff' }]}>
              {/* Property Image */}
              <View style={styles.propertyImageContainer}>
                {property.image ? (
                  <Image
                    source={{ uri: property.image }}
                    style={styles.propertyImage}
                  />
                ) : (
                  <View style={[styles.propertyImage, styles.imagePlaceholder]}>
                    <Ionicons name="image" size={40} color="#ccc" />
                  </View>
                )}
                {/* Heart Icon */}
                <TouchableOpacity style={styles.heartIcon}>
                  <Ionicons name="heart-outline" size={24} color="white" />
                </TouchableOpacity>
              </View>

              {/* Property Info */}
              <View style={styles.propertyInfo}>
                <View style={styles.propertyHeader}>
                  <View style={{ flex: 2 }}>
                    <ThemedText type="defaultSemiBold" numberOfLines={1} style={styles.propertyName}>
                      {property.name}
                    </ThemedText>
                    <ThemedText style={[styles.location, { color: isDark ? '#aaa' : '#666' }]} numberOfLines={1}>
                      {property.location}
                    </ThemedText>
                  </View>
                  <View style={styles.ratingBadge}>
                    <Ionicons name="star" size={14} color="#2c5aa0" />
                    <ThemedText style={styles.rating}>{property.rating.toFixed(1)}</ThemedText>
                  </View>
                </View>

                {/* Price */}
                <View style={styles.priceContainer}>
                  <ThemedText type="defaultSemiBold" style={[styles.price, { color: isDark ? '#fff' : '#000' }]}>
                    ${property.price}
                    <ThemedText style={[styles.priceLabel, { color: isDark ? '#aaa' : '#666' }]}> per night</ThemedText>
                  </ThemedText>
                </View>
              </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          <ThemedView style={styles.emptyState}>
            <Ionicons name="search" size={48} color="#ccc" style={{ marginBottom: 16 }} />
            <ThemedText type="subtitle" style={styles.emptyStateText}>
              No properties available
            </ThemedText>
            <ThemedText style={[styles.emptyStateSubtext, { color: isDark ? '#aaa' : '#666' }]}>
              Start exploring and find your next stay!
            </ThemedText>
          </ThemedView>
        )}
      </View>

      {/* Popular in Pokhara Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Popular in Pokhara</ThemedText>
          <TouchableOpacity>
            <ThemedText style={[styles.seeAll, { color: isDark ? '#64b5f6' : '#2c5aa0' }]}>See all</ThemedText>
          </TouchableOpacity>
        </View>

        {properties.length > 0 ? (
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.propertyCarousel}
          >
            {properties.map((property) => (
              <TouchableOpacity key={property.id} style={[styles.propertyCardAirbnb, { backgroundColor: isDark ? '#2c5aa0' : '#fff' }]}>
              {/* Property Image */}
              <View style={styles.propertyImageContainer}>
                {property.image ? (
                  <Image
                    source={{ uri: property.image }}
                    style={styles.propertyImage}
                  />
                ) : (
                  <View style={[styles.propertyImage, styles.imagePlaceholder]}>
                    <Ionicons name="image" size={40} color="#ccc" />
                  </View>
                )}
                {/* Heart Icon */}
                <TouchableOpacity style={styles.heartIcon}>
                  <Ionicons name="heart-outline" size={24} color="white" />
                </TouchableOpacity>
              </View>

              {/* Property Info */}
              <View style={styles.propertyInfo}>
                <View style={styles.propertyHeader}>
                  <View style={{ flex: 2 }}>
                    <ThemedText type="defaultSemiBold" numberOfLines={1} style={styles.propertyName}>
                      {property.name}
                    </ThemedText>
                    <ThemedText style={[styles.location, { color: isDark ? '#aaa' : '#666' }]} numberOfLines={1}>
                      {property.location}
                    </ThemedText>
                  </View>
                  <View style={styles.ratingBadge}>
                    <Ionicons name="star" size={14} color="#2c5aa0" />
                    <ThemedText style={styles.rating}>{property.rating.toFixed(1)}</ThemedText>
                  </View>
                </View>

                {/* Price */}
                <View style={styles.priceContainer}>
                  <ThemedText type="defaultSemiBold" style={[styles.price, { color: isDark ? '#fff' : '#000' }]}>
                    ${property.price}
                    <ThemedText style={[styles.priceLabel, { color: isDark ? '#aaa' : '#666' }]}> per night</ThemedText>
                  </ThemedText>
                </View>
              </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          <ThemedView style={styles.emptyState}>
            <Ionicons name="search" size={48} color="#ccc" style={{ marginBottom: 16 }} />
            <ThemedText type="subtitle" style={styles.emptyStateText}>
              No properties available
            </ThemedText>
            <ThemedText style={[styles.emptyStateSubtext, { color: isDark ? '#aaa' : '#666' }]}>
              Start exploring and find your next stay!
            </ThemedText>
          </ThemedView>
        )}
      </View>

      {/* Popular in Kathmandu Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Popular in Kathmandu</ThemedText>
          <TouchableOpacity>
            <ThemedText style={[styles.seeAll, { color: isDark ? '#64b5f6' : '#2c5aa0' }]}>See all</ThemedText>
          </TouchableOpacity>
        </View>

        {properties.length > 0 ? (
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.propertyCarousel}
          >
            {properties.map((property) => (
              <TouchableOpacity key={property.id} style={[styles.propertyCardAirbnb, { backgroundColor: isDark ? '#2c5aa0' : '#fff' }]}>
              {/* Property Image */}
              <View style={styles.propertyImageContainer}>
                {property.image ? (
                  <Image
                    source={{ uri: property.image }}
                    style={styles.propertyImage}
                  />
                ) : (
                  <View style={[styles.propertyImage, styles.imagePlaceholder]}>
                    <Ionicons name="image" size={40} color="#ccc" />
                  </View>
                )}
                {/* Heart Icon */}
                <TouchableOpacity style={styles.heartIcon}>
                  <Ionicons name="heart-outline" size={24} color="white" />
                </TouchableOpacity>
              </View>

              {/* Property Info */}
              <View style={styles.propertyInfo}>
                <View style={styles.propertyHeader}>
                  <View style={{ flex: 2 }}>
                    <ThemedText type="defaultSemiBold" numberOfLines={1} style={styles.propertyName}>
                      {property.name}
                    </ThemedText>
                    <ThemedText style={[styles.location, { color: isDark ? '#aaa' : '#666' }]} numberOfLines={1}>
                      {property.location}
                    </ThemedText>
                  </View>
                  <View style={styles.ratingBadge}>
                    <Ionicons name="star" size={14} color="#2c5aa0" />
                    <ThemedText style={styles.rating}>{property.rating.toFixed(1)}</ThemedText>
                  </View>
                </View>

                {/* Price */}
                <View style={styles.priceContainer}>
                  <ThemedText type="defaultSemiBold" style={[styles.price, { color: isDark ? '#fff' : '#000' }]}>
                    ${property.price}
                    <ThemedText style={[styles.priceLabel, { color: isDark ? '#aaa' : '#666' }]}> per night</ThemedText>
                  </ThemedText>
                </View>
              </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          <ThemedView style={styles.emptyState}>
            <Ionicons name="search" size={48} color="#ccc" style={{ marginBottom: 16 }} />
            <ThemedText type="subtitle" style={styles.emptyStateText}>
              No properties available
            </ThemedText>
            <ThemedText style={[styles.emptyStateSubtext, { color: isDark ? '#aaa' : '#666' }]}>
              Start exploring and find your next stay!
            </ThemedText>
          </ThemedView>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#0515f3ff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 24,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  seeAll: {
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  bookingsHeader: {
    marginBottom: 12,
  },
  bookingsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginHorizontal: -16,
    paddingHorizontal: 16,
  },
  bookingsColumn: {
    flex: 1,
  },
  columnTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  emptyBookingMessage: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesContainer: {
    marginHorizontal: -16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  categoryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 8,
  },
  categoryPillActive: {
    borderWidth: 1,
    borderColor: '#2c5aa0',
  },
  categoryText: {
    fontSize: 13,
    fontWeight: '500',
  },
  bookingCarousel: {
    marginHorizontal: -16,
    paddingHorizontal: 16,
  },
  propertyCarousel: {
    marginHorizontal: -16,
    paddingHorizontal: 16,
  },
  bookingCardCarousel: {
    width: 180,
    marginRight: 12,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#faf3f3ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bookingImagePlaceholder: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  bookingContent: {
    padding: 12,
  },
  bookingDates: {
    fontSize: 12,
    marginTop: 4,
  },
  statusBadgeSmall: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 3,
    marginTop: 8,
  },
  statusText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
  },
  propertyCardAirbnb: {
    width: 280,
    marginRight: 12,
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  propertyImageContainer: {
    position: 'relative',
    height: 200,
    width: '100%',
  },
  propertyImage: {
    width: '100%',
    height: '100%',
  },
  imagePlaceholder: {
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartIcon: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(12, 12, 12, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  propertyInfo: {
    padding: 12,
  },
  propertyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  propertyName: {
    fontSize: 14,
    marginBottom: 4,
  },
  location: {
    fontSize: 12,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rating: {
    fontSize: 12,
    fontWeight: '600',
  },
  priceContainer: {
    marginTop: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
  },
  priceLabel: {
    fontWeight: '400',
    fontSize: 13,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
  },
  emptyStateText: {
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 16,
  },
  emptyStateSubtext: {
    textAlign: 'center',
  },
});