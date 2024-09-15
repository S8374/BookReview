import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const Book = () => {
    const [bookDetails , setBookDetails] = useState([]) ;
    const [allBook , setBook] = useState(6) ;
    useEffect(()=>{
        fetch('books.json') 
        .then(res => res.json()) 
        .then(data => setBookDetails(data))
    },[]) 


    return (
        <div>
               <div>
                     <div className="text-center">  
                         <h1 className = "text-4xl font-bold text-black">Book : {bookDetails.length} </h1>
                     </div>
                     <div className=" grid md:grid-cols-3 grid-cols-1 gap-12 items-center  ">
                         {
                              bookDetails.slice(0 , allBook).map(bookDetail => <BookCard key={bookDetail.id} bookDetail={bookDetail} ></BookCard>)
                         }
                     </div>
                     <div className ={  allBook === bookDetails.length ? 'hidden flex justify-center' : ' flex justify-center  '}>
                                     <button onClick={() => setBook(bookDetails.length)} className="btn  btn-success">Show All</button>
                     </div>
               </div>
        </div>
    );
};

export default Book;