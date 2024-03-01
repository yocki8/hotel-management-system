const SearchBar = () => {
    return (
        <>
            <span className="absolute h-16  translate-y-10 bg-gradient-to-r from-yellow-300 to-yellow-900 "></span>
            <div className="relative">
                <div className="m-auto h-20 w-1/2 outline outline-[20px] outline-black rounded-2xl bg-gradient-to-br from-yellow-300 to-yellow-900"></div>
            </div>
        </>
    );
};

export default function ContentBody() {
    return (
        <main>
            <SearchBar />
        </main>
    );
}
