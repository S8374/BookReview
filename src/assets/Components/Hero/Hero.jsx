import { NavLink } from "react-router-dom";

const Hero = () => {
    return (
        <div className="px-4 py-8 lg:px-0 lg:py-0">
            <div className="hero bg-base-200 min-h-screen rounded-3xl flex flex-col items-center justify-center lg:flex-row">
                <div className="hero-content flex flex-col lg:flex-row justify-center items-center p-8 lg:p-28 space-y-6 lg:space-y-0">
                    <div className="lg:w-1/2">
                        <h1 className="text-3xl lg:text-5xl font-bold text-center lg:text-left">Books to freshen up your bookshelf</h1>
                        <div className="flex justify-center lg:justify-start">
                            <NavLink to={'/listedBook'}>
                                <button className="btn btn-primary bg-green-500 border-none mt-6 lg:mt-12">View The List</button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        <img
                            src="https://th.bing.com/th/id/OIP.So6Li0GwCBFQEBcVSpvwgQAAAA?rs=1&pid=ImgDetMain"
                            className="w-full max-w-xs lg:max-w-sm rounded-lg shadow-2xl"
                            alt="Bookshelf Image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
