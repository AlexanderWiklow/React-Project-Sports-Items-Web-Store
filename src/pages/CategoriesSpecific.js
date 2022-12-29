import { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"
// import Products from './Products';

export default function CategoriesSpecific() { 
  const { category } = useParams()
  // console.log(typeof category)
  // console.log(category)

  // category.map((products) => {
  //   return console.log(products)
  // })

  const [categoriesSpecific, setCategoriesSpecific] = useState(null)

  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch(`http://localhost:3001/products/`)
      const categoriesSpecific = await res.json()
      
      // console.log(categoriesSpecific[category].category)

      setCategoriesSpecific(categoriesSpecific)
    }

    getCategories()
  }, [category])

  if (!categoriesSpecific) {
    return <div>Product not found</div>
  }

  const categoriesSpecificFilter = categoriesSpecific.filter((categoriesSpecific) => categoriesSpecific.category === category)

  // console.log("categoryspeci", Object.values(categoriesSpecific))
  // console.log("categoryspeci", categoriesSpecific[0].category)

  // if (categoriesSpecific[0].category === category) {
  //   console.log("GOOD NIGHT!!")
  // }

  return (
    <>
      <Link to="/">Back</Link>
          <div>
        <p>Categories Specific:</p>
        {categoriesSpecificFilter.map((product) =>
          
          
          <p>{product.name} {product.category}  <Link to={"../Product/" + product.id}>More info</Link></p>
              
              ) }
                   
            {/* <p>{productList.title}</p> */}
        {/* <h1>{categoriesSpecific.title} {categoriesSpecific.price}</h1> */}

      </div>
    </>
  )
}