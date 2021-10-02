import Main from '../main/main';

type AppProps = {
  countRentalOffers: number;
};

function App({ countRentalOffers }: AppProps): JSX.Element {
  return <Main countRentalOffers={countRentalOffers} />;
}

export default App;
