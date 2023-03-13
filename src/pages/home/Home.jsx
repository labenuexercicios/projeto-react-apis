import CardsList from "../../components/cardsList/CardsList";
import Header from "../../components/header/Header";

export default function Home() {
  return (
    <div>
      <Header calledFor="home" />
      <CardsList />
    </div>
  );
}
