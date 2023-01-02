import React from 'react'
import { useEffect,useState,useReducer} from 'react'
import axios from 'axios'
export const contextAPI= React.createContext()
function Context({children}) {
    let [data, setData] = useState([])
    let [reducervalue,forceupdate]=useReducer(x=>x+1,0)
    let getData = async () => {
      try {
  
        let res = await axios.get(`https://url-u7rz.onrender.com/`)
        if (res.status === 200)
          setData(res.data)
      } catch (error) {
        if (error.response.status !== 200) {
          alert(error.response.data.message)
  
        }
      }
      forceupdate()
    }
    useEffect(() => {
      getData()
    }, [reducervalue])
  
  return <contextAPI.Provider value={data}>
    {children}
  </contextAPI.Provider>
  
}

export default Context