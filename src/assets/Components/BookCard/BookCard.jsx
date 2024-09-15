import { NavLink } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import Tag from "../Tag/Tag";
const BookCard = ({ bookDetail }) => {
    const {tags,bookId} = bookDetail ;
    return (
        <div className="">
            <NavLink to={`/p/${bookId}`}>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-4 pt-4">
                        <img
                            src={bookDetail.image}
                            alt="Shoes"
                            className="w-full max-w-xs lg:max-w-sm rounded-lg shadow-2xl" />
                    </figure>
                    <div className="card-body   ">
                           <div className="flex justify-around" >
                                  {
                                    tags.map(tag=> <Tag key={tag.id} tag = {tag}> </Tag>)
                                  }
                           </div>
                        <h2 className="card-title">{bookDetail.bookName}</h2>
                        <p>By :  <span> {bookDetail.author} </span> </p>
                        <div className=" flex justify-between">
                               <h1> Fiction</h1>
                                <h2 className="flex"> {bookDetail.rating}<CiStar /> </h2>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default BookCard; 