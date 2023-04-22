import useGlobalConext from "@/hooks/useGlobalContext";

function pokedex() {
    const { setPageFlow } = useGlobalConext();
    setPageFlow(2)
    return (
        <>
            <h1>Pokedex</h1>
        </>
    );
}

export default pokedex;
