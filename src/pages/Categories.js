import { Link } from 'react-router-dom';
// import Product from './Product'
// import CategorieSpecific from './CategoriesSpecific'

import { useEffect, useState } from 'react'
// import { useParams, Link } from "react-router-dom"

export default function Categories() { 
//   const { id } = useParams()
  const [categoriesList, setCategoriesList] = useState([])

    useEffect(() => {
        const getCategories = async () => {
          // const res = await fetch(`https://fakestoreapi.com/products/categories`)
          const res = await fetch(`http://localhost:3001/products`)

          
            const categoriesList = await res.json()


            setCategoriesList(categoriesList)

        }

        getCategories()
    }, []);
  
    // filter unique values from array
  // const uniqueCategories = [...new Set(categoriesList.categories)]

  // filter unique values from array
  const uniqueCategories = [...new Set(categoriesList.map(item => item.category))]
  // console.log("unique", uniqueCategories)

  // console.log("unique", uniqueCategories)

//   if (!user) {
//     return <div>User not found</div>
//   }
    //JSON format. array till en array med jsx element
    // en ny komponent som heter product

                console.log("categories",categoriesList)
    
  return (
    <>
      <Link to="/">Back</Link>
      <div>
        {/* <h1>{user.name.firstname} {user.name.lastname}</h1>
        <p>{user.phone}</p> */}
              <h1>CATEGORIES:</h1>
        {uniqueCategories.map((categories) =>
          
          <p>{categories}  <Link to={"./CategoriesSpecific/" + categories}>More info</Link></p>
                

        )}
                      {/* console.log(categories) */}
                   
            {/* <p>{productList.title}</p> */}
      </div>
    </>
  )
}


// function Product({ product }) { 




//     return (
//     <ul>
//      {productList.map(product => (
//         <Product key={product.id} product={product} />
//     ))}
//     </ul>

//     <div className="product">
//       <p>{product.title}</p>
//     </div>
//   )
// }

