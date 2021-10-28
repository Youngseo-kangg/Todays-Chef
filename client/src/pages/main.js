import styled from 'styled-components';

const MainGrid = styled.div`
  display: grid;
  grid-template-rows: 400px 200px 200px;
  row-gap: 50px;
  margin-bottom: 50px;
`;

function Main() {
  return (
    <MainGrid>
      <p>this is main</p>
      <p>this is main</p>
      <p>this is main</p>
    </MainGrid>
  );
}

export default Main;
