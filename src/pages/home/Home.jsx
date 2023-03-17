import CardsList from "../../components/cardsList/CardsList";
import Header from "../../components/header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="font-[Poppins] text-[48px] font-[700] leading-[72px] text-[white] m-[50px]">
        All Pokémons
      </div>
      <CardsList />
    </div>
  );
}
