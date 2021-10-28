import styled from 'styled-components';

const ReservationGrid = styled.div`
  display: grid;
  grid-template-rows: 100px 800px;
  row-gap: 50px;
  margin-bottom: 50px;
`;

function Reservation() {
  return (
    <ReservationGrid>
      <p>this is Reservation</p>
    </ReservationGrid>
  );
}

export default Reservation;
