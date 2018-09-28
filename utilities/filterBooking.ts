import { MeQ_me, MeQ, MeQ_me_bookings } from 'types/schema-types'

export type BookingCreatedInfo = {
  createdBooking: MeQ_me_bookings | undefined,
}

export const filterCreatedBooking = (bookings: MeQ_me['bookings']) => {
  const filterBooking = bookings.filter(booking => booking.status === 'CREATED')
  return filterBooking.length !== 0 ? filterBooking : undefined
}

export const bookingCreatedInfo = (loggedInUser: MeQ_me | Object): BookingCreatedInfo => {
  const isMeAvaible = Object.keys(loggedInUser).indexOf('me') >= 0
  const filter = isMeAvaible ? filterCreatedBooking((loggedInUser as MeQ).me.bookings) : null

  return {
    createdBooking: filter ? filter[0] : undefined
  }
}
