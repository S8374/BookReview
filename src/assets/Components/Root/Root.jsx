import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Root = () => {
    const naviGation = useNavigation() ;
    return (
        <div>
               <div className="max-w-6xl mx-auto space-y-10">
                    <Header></Header>
                     {
                        naviGation.state === 'loading' ? <div>
                        <div className="flex items-center justify-center w-full h-full">
                            <div className="flex text-5xl justify-center items-center space-x-1  text-gray-700">
                                 
                                        <svg fill='none' className="w-6 h-6 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
                                            <path clip-rule='evenodd'
                                                d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
                                                fill='currentColor' fill-rule='evenodd' />
                                        </svg>
                        
                                 
                                <div className="text-5xl font-medium text-black">Loading ...</div>
                            </div>
                        </div></div> : <Outlet></Outlet>
                     }
                   
               </div>
               <Footer></Footer>
        </div>
    );
};

export default Root;