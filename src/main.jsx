import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/Components/Root/Root.jsx';
import Home from './assets/Components/Home/Home.jsx';
import BookDetails from './assets/Components/BookDetails/BookDetails.jsx';
import ListedBooks from './assets/Components/ListedBooks/ListedBooks.jsx';
import PagestoRead from './assets/Components/PagestoRead/PagestoRead.jsx';
import ErrorePage from './assets/Components/ErrorePage/ErrorePage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorePage></ErrorePage>,
    children:[
      {
        path:'/' ,
        element:<Home></Home>,
      },
      {
        path:'/p/:bookId',
        element : <BookDetails></BookDetails> ,
        loader: () => fetch('/books.json')
      } ,
      {
        path:'/listedBook',
        loader:() => fetch('/books.json') ,
        element : <ListedBooks></ListedBooks>
      },
      {
        path:'/PagestoRead',
        element : <PagestoRead></PagestoRead>
      }
      
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />

  </StrictMode>,
)
