import Header from './Header';

function Container({ children }) {
    return (
        <div className="bg-primary min-h-screen">
            <Header />
            <main>{children}</main>
        </div>
    );
}

export default Container;
