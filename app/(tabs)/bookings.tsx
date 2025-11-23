import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

interface Booking {
  id: string;
  propertyName: string;
  location: string;
  checkIn: string;
  checkOut: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  price: number;
  nights: number;
  image?: string;
}

export default function BookingsScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const isDark = colorScheme === 'dark';

  const mockBookings: Booking[] = [
    {
      id: '1',
      propertyName: 'Cozy Beach House',
      location: 'Goa, India',
      checkIn: 'Dec 15, 2024',
      checkOut: 'Dec 20, 2024',
      status: 'upcoming',
      price: 120,
      nights: 5,
    },
    {
      id: '2',
      propertyName: 'Mountain Villa',
      location: 'Himachal Pradesh',
      checkIn: 'Nov 10, 2024',
      checkOut: 'Nov 15, 2024',
      status: 'completed',
      price: 150,
      nights: 5,
    },
    {
      id: '3',
      propertyName: 'City Apartment',
      location: 'Mumbai, India',
      checkIn: 'Jan 5, 2025',
      checkOut: 'Jan 8, 2025',
      status: 'cancelled',
      price: 100,
      nights: 3,
    },
  ];

  const upcomingBookings = mockBookings.filter(b => b.status === 'upcoming');
  const completedBookings = mockBookings.filter(b => b.status === 'completed');
  const cancelledBookings = mockBookings.filter(b => b.status === 'cancelled');

  const renderBookingCard = (booking: Booking) => (
    <TouchableOpacity 
      key={booking.id} 
      style={[styles.bookingCard, { backgroundColor: isDark ? '#2a2a2a' : '#fff' }]}
    >
      {/* Image Placeholder */}
      <View style={styles.imageContainer}>
        {booking.image ? (
          <View style={[styles.image, { backgroundColor: '#f0f0f0' }]} />
        ) : (
          <View style={[styles.image, { backgroundColor: '#f0f0f0' }]}>
            <Ionicons name="home" size={40} color="#ccc" />
          </View>
        )}
        <View 
          style={[
            styles.statusBadge,
            {
              backgroundColor:
                booking.status === 'upcoming'
                  ? '#4CAF50'
                  : booking.status === 'completed'
                    ? '#2196F3'
                    : '#F44336',
            },
          ]}
        >
          <ThemedText style={styles.statusText}>
            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
          </ThemedText>
        </View>
      </View>

      {/* Booking Info */}
      <View style={styles.bookingInfo}>
        <ThemedText type="defaultSemiBold" style={styles.propertyName} numberOfLines={1}>
          {booking.propertyName}
        </ThemedText>
        <View style={styles.locationRow}>
          <Ionicons name="location" size={14} color={isDark ? '#aaa' : '#666'} />
          <ThemedText style={[styles.location, { color: isDark ? '#aaa' : '#666' }]} numberOfLines={1}>
            {booking.location}
          </ThemedText>
        </View>

        {/* Date and Nights */}
        <View style={styles.detailsRow}>
          <View style={styles.detailItem}>
            <Ionicons name="calendar" size={14} color="#FF385C" />
            <ThemedText style={styles.detailText}>{booking.checkIn}</ThemedText>
          </View>
          <ThemedText style={[styles.detailText, { color: isDark ? '#aaa' : '#999' }]}>•</ThemedText>
          <View style={styles.detailItem}>
            <Ionicons name="moon" size={14} color="#FF385C" />
            <ThemedText style={styles.detailText}>{booking.nights} nights</ThemedText>
          </View>
        </View>

        {/* Price */}
        <View style={styles.priceRow}>
          <ThemedText type="defaultSemiBold" style={[styles.totalPrice, { color: isDark ? '#fff' : '#000' }]}>
            ${booking.price * booking.nights}
          </ThemedText>
          <ThemedText style={[styles.totalLabel, { color: isDark ? '#aaa' : '#666' }]}>
            Total
          </ThemedText>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          {booking.status === 'upcoming' && (
            <>
              <TouchableOpacity style={[styles.button, styles.secondaryButton, { borderColor: isDark ? '#555' : '#ddd' }]}>
                <ThemedText style={[styles.buttonText, { color: isDark ? '#fff' : '#000' }]}>Modify</ThemedText>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.cancelButton]}>
                <ThemedText style={styles.cancelButtonText}>Cancel</ThemedText>
              </TouchableOpacity>
            </>
          )}
          {booking.status === 'completed' && (
            <TouchableOpacity style={[styles.button, styles.primaryButton]}>
              <ThemedText style={styles.buttonTextWhite}>Rebook</ThemedText>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <ThemedText type="title">My Bookings</ThemedText>
      </View>

      {/* Upcoming Bookings */}
      {upcomingBookings.length > 0 && (
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Upcoming ({upcomingBookings.length})
          </ThemedText>
          {upcomingBookings.map(renderBookingCard)}
        </View>
      )}

      {/* Completed Bookings */}
      {completedBookings.length > 0 && (
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Completed ({completedBookings.length})
          </ThemedText>
          {completedBookings.map(renderBookingCard)}
        </View>
      )}

      {/* Cancelled Bookings */}
      {cancelledBookings.length > 0 && (
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Cancelled ({cancelledBookings.length})
          </ThemedText>
          {cancelledBookings.map(renderBookingCard)}
        </View>
      )}

      {/* Empty State */}
      {mockBookings.length === 0 && (
        <ThemedView style={styles.emptyState}>
          <Ionicons name="calendar-outline" size={48} color="#ccc" style={{ marginBottom: 16 }} />
          <ThemedText type="subtitle" style={styles.emptyStateText}>
            No bookings yet
          </ThemedText>
          <ThemedText style={[styles.emptyStateSubtext, { color: isDark ? '#aaa' : '#666' }]}>
            Start booking your next adventure!
          </ThemedText>
        </ThemedView>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  bookingCard: {
    flexDirection: 'row',
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  imageContainer: {
    position: 'relative',
    width: 120,
    height: 120,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
  bookingInfo: {
    flex: 1,
    padding: 12,
  },
  propertyName: {
    fontSize: 14,
    marginBottom: 6,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 8,
  },
  location: {
    fontSize: 12,
    flex: 1,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  detailText: {
    fontSize: 11,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
    marginBottom: 8,
  },
  totalPrice: {
    fontSize: 15,
  },
  totalLabel: {
    fontSize: 11,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 6,
  },
  button: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#FF385C',
  },
  secondaryButton: {
    borderWidth: 1,
  },
  cancelButton: {
    backgroundColor: '#f5f5f5',
  },
  buttonText: {
    fontSize: 11,
    fontWeight: '600',
  },
  buttonTextWhite: {
    fontSize: 11,
    fontWeight: '600',
    color: '#fff',
  },
  cancelButtonText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#666',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 64,
  },
  emptyStateText: {
    textAlign: 'center',
    marginBottom: 8,
  },
  emptyStateSubtext: {
    textAlign: 'center',
    fontSize: 13,
  },
});