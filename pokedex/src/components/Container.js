import Header from './Header';

function Container({ children }) {
    return (
        <div className='bg-bg'>
            <Header />
            <main className=''>{children}</main>
        </div>
    );
}

export default Container;
