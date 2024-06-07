import { RouterProvider, createBrowserRouter} from "react-router-dom";
import Layout from './Layout'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout /> ,
      children: [
//        {
//          path: "/products",
//          element: <Products />,
//          children: [
//            {
//              path: "/products/:id",
//              element: <ProductItem />,
//            }
//          ]
//        }
      ]

    }
  ])
  return <RouterProvider router={router}/> 
}

export default App