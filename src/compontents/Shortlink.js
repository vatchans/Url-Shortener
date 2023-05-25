import { useContext,useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CopyToClipboard from 'react-copy-to-clipboard'
import {contextAPI} from "./context"
function Shortlink() {
  let [setcopy] = useState(false)
  const notify = () => toast("Copied to Clipboard");
  let data=useContext(contextAPI)

  return <div className='container-fluid' style={{ display: 'flex', justifyContent: 'center' }}>
      {data.map((e, i) => {
          const url=`https://url-shortener-u2jl.onrender.com/${e.Shorturl}`
          const Fullurl=`https://${e.Fullurl.slice(8)}/favicon.ico`
          return<div className="card ml-5" key={i}>
        <div className="card-body">
         
          <h6 className="card-title text-center">&nbsp;<i className="fa-solid fa-link"></i><img src={Fullurl} width="20px" alt="url-favicon"></img>&nbsp;{`https://url-u7rz.onrender.com/${e.Shorturl}`}</h6>

         <div className='comarea'>
         <a href={url}
              target='_blank' rel="noreferrer" style={{textDecoration: 'none'}} > <button className='mt-3 v' title="Visit link">
        <img src="external-link.png" alt='...'></img></button></a>

         <button className="mt-3 cp" title='Copy to clipboard' onClick={notify}> <CopyToClipboard
                text={`https://url-shortener-u2jl.onrender.com/${e.Shorturl}`}
                onCopy={() => setcopy(true)}>
                <i className="fa-solid fa-copy"></i>
   
              </CopyToClipboard>
              
              </button>
              
              <ToastContainer/>
             <div className='click mt-3'><span className='clickname'> Clicks </span> &nbsp;&nbsp;<span className='Click-count' >{e.Clicks}</span></div>
         </div>
        </div>
      
      </div>
      }).slice(-1)
      }
    </div>
 

}

export default Shortlink
