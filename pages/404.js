export default function NotFoundError() {
    return (
        <div className="px-12 flex flex-col gap-x-4 gap-y-8 items-center justify-center">
            <h1 className="font-AegixMono text-6xl font-bold text-center">404</h1>
            <h1 className="font-AegixHeader text-center text-3xl font-bold">The page that you were looking for could not be found. The content that you are looking for may have since been moved or deleted from the site.</h1>
            <Link href="/">
                <a className={`
                    text-gray-100 hover:bg-slate-800 font-AegixHeader font-bold text-lg px-4 py-2 rounded-xl
                    transition ease-in-out duration-250 bg-slate-900
                    flex-row items-center gap-x-2 text-center
                    flex
                `}>
                    <FontAwesomeIcon icon={faHome} />
                    Home
                </a>
            </Link>
        </div>
    );
}; 
