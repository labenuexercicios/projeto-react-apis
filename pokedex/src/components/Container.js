import Header from './Header';

function Container({ children }) {
    return (
        <>
            <Header />
            <main className=''>{children}</main>
        </>
    );
}

export default Container;
