import React, { useEffect, useState } from 'react';
import Author from '../author';

interface ResObj  {
    bio:string,
    dateAdded:string,
    dateModified:string,
    description:string,
    link:string,
    name:string,
    quoteCount:number,
    slug:string,
    _id:string

}


interface ResponseGenerator {
   author: { count:number,
    lastItemIndex:number,
    page:number,
    totalCount:number,
    totalPage:number,
    results:ResObj[]
   }
}
const AuthorsList = () => {

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)

   const fetchData = async () => {
    setLoading(true)

await fetch('https://api.quotable.io/authors').then(res => res.json()).then((res) => {
    setLoading(false)
    setData(res.results)
})



   }

   useEffect(() => {
fetchData()

   },[])

  


    return (
<>
{ data && data?.map((author:ResObj) => (<Author key={author._id} author={author}/>))}


</>
      
    )



}

export default AuthorsList