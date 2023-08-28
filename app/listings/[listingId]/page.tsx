
import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingsById from "@/app/actions/getListingsById";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";
import getReservations from "@/app/actions/getReservation";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingsById(params);
  const reservations = await getReservations(params)
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }
  return (
    <ListingClient 
      listing={listing}
      reservations={reservations}
      currentUser={currentUser}
    />
  )
};

export default ListingPage;
