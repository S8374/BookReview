import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tag2 from "./Tag2";
import { useEffect, useState } from "react";
const BookDetails = () => {
    const nav = useNavigate()
    const allDetails = useLoaderData() ;
    const {bookId} = useParams() ;
     const convertInt = parseInt(bookId) ;
     const selectedDetails = allDetails.find(allDetail => allDetail.bookId === convertInt)
    console.log(allDetails) ;
    console.log(selectedDetails) ;
    const {tags} = selectedDetails ;
    
    const [readList, setReadList] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedReadList = JSON.parse(localStorage.getItem('readList')) || [];
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setReadList(storedReadList);
        setWishlist(storedWishlist);
    }, []);
    
 
    const handelBack = () =>{
        nav(-1)
    }


    const handleRead = () => {
        // Check if the book is already in the Read list
        if (readList.includes(selectedDetails)) {
            toast.error('This book is already in your "Read" list.');
        } else {
            // Add the book to the Read list without removing from Wishlist
            const updatedReadList = [...readList, selectedDetails];
            setReadList(updatedReadList);
            localStorage.setItem('readList', JSON.stringify(updatedReadList));
            toast.success('Book added to your "Read" list.');
        }
    };
    

    const handleWishlist = () => {
        if (wishlist.includes(selectedDetails)) {
            toast.error('This book is already in your "Wishlist".');
        } else if (readList.includes(selectedDetails)) {
            toast.error('This book is already in your "Read" list and cannot be added to "Wishlist".');
        } else {
            const updatedWishlist = [...wishlist,selectedDetails ];
            setWishlist(updatedWishlist);
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            toast.success('Book added to your "Wishlist".');
        }
    };
    return (
        <div>
              
              <div className="hero bg-base-200 min-h-screen">
                
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={selectedDetails.image}
      className="max-w-sm w-full rounded-lg shadow-2xl" />
    <div className="ml-12">
        
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6"> 
        <span className="font-bold  text-black text-lg">Reviws :</span> Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <p className="py-6 flex"> 
        <span className="font-bold  text-black text-lg">Tags : </span> {
            tags.map(tag=> <Tag2 tag = {tag}></Tag2>)
        }
      </p>
      <div className="overflow-x-auto">
  <table className="table">

    <tbody>
      {/* row 1 */}
      <tr>
       
        <td>Number Of Pages : </td>
        <td className="font-bold text-black">{selectedDetails.totalPages}</td>
  
      </tr>
      {/* row 2 */}
      <tr>
        
        <td>Publisher : </td>
        <td  className="font-bold text-black">{selectedDetails.publisher}</td>

      </tr>
      {/* row 3 */}
      <tr>
       
        <td>Year of Publishing : </td>
        <td  className="font-bold text-black">{selectedDetails.yearOfPublishing}</td>

      </tr>
      {/* row 4 */}
      <tr>
       
        <td>Rating : </td>
        <td  className="font-bold text-black">{selectedDetails.rating}</td>

      </tr>
    </tbody>
  </table>
</div>
     <button onClick={ handleRead } className="btn btn-outline">Read</button>
      <button onClick={handleWishlist} className="btn btn-info ml-12">Wishlist</button>
      <button onClick={handelBack} className="btn btn-active ml-12">Back</button>
    </div>
  </div>
</div>
 <ToastContainer />
        </div>
    );
};

export default BookDetails;