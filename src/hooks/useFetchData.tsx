import { useEffect, useState } from "react"


const useFetchData = () => {
    const [data, setData] = useState<[] | null>(null)
    const [isloading, setIsLoading] = useState<boolean>(true)
    useEffect(() => { 
      const storedData = localStorage.getItem('todoData')
      setData(storedData ? JSON.parse(storedData) : [])
      setIsLoading(false) 
    }, [])
   
    
  //  useEffect(() => {  
  //     console.log("Fetching data...")
  //     fetch('https://jsonfakery.com/todos').then(response => response.json()).then(data => {
  //       const smallData = data.slice(0, 10);
  //       setData(smallData);
  //       setIsLoading(false);
  //     }).catch(error => {
  //       console.log("Error fetching data:", error);
  //       setError("Failed to fetch data");
  //       setIsLoading(false);
  //     });
  //   }, [])


     return { data, isloading}


}

export default useFetchData