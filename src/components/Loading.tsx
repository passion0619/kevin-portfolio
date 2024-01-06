export default function Lodaing() {
    return (
        <div className="flex w-full h-full bg-[#000] items-center justify-items-center">
            <div className="preloader">
                <div className="loader"><span></span></div>
                <div className="loader"><span></span></div>

                <div className="loader"><i></i></div>
                <div className="loader"><i></i></div>
            </div>
        </div>
    );
};