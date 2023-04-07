function PokemonCard() {
    return (
        <div className="w-1/3">
            <div className="border border-black p-4 w-full h-60">Pokemon</div>
            <div className="w-full">
                <button className="border border-black p-4 w-1/2">Adicionar</button>
                <button className="border border-black p-4 w-1/2">
                    Ver Detalhes
                </button>
            </div>
        </div>
    );
}

export default PokemonCard;
