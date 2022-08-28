import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Error({ statusCode }) {
    return (
        <div className="px-12 flex flex-col gap-x-4 gap-y-8 items-center justify-center">
            <h1 className="font-AegixMono text-6xl font-bold text-center">{statusCode}</h1>
            <h1 className="font-AegixHeader text-center text-2xl font-bold">
                Something went wrong when trying to fetch your requested content. Come back later, or contact
                {" "}
                <Link href={links.email}>
                    <a target="_blank" rel="noreferrer noopener" className="text-blue-400 hover:text-blue-500 transition ease-in-out duration-250 bg-slate-900"> 
                        Emily
                    </a>
                </Link> for further assistance.
            </h1>
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

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode };
};
  
export default Error;