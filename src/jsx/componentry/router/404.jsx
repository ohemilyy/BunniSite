export default function NotFound() {
    return (
        <div className="flex gap-y-6 flex-col py-12 h-screen items-center bg-gray-900 text-center lg:px-72">
            <h1 className="text-white font-bold text-6xl font-BreezeHeader px-5">404</h1>
            <p className="Text"><b>Beep boop.</b> The page that you were looking for was removed or otherwise couldn't be found.<br /><br />Try re-entering the URL, use the navigation bar to go to a different page, or <b><a href="/" className="text-cyan-200">go home</a></b>.</p>
        </div>
    );
};