import { useEffect, useState } from "react"
import BoxContainerInfo from "./BoxContainerInfo"
import "./dashboard.css"
import axios from "axios"

const dashboard = () => {
 
   
  const [openUpdate,setOpenUpdate] = useState(null)
  const [cardsupdate,setcardsupdate] = useState([])

   const GetUsersUpdate =  async ()=>{
    try{
    const {data} = await   axios.get("http://localhost:3000/Phones")
    setcardsupdate(data)
    
    } 
    catch(error){
      console.log(error)
    }
   }
    useEffect(()=>{
    GetUsersUpdate();
    },[])

    
  return (
    <div className="container__side__barr">
          <div className="sidebar"> </div>

      <div className="main__bar"> 
                    <div className="main__bar__search__navbar">
                       <div className="inputSearch"><input type="text" placeholder="search"/></div>
                       <div className="secondeInputSearch">
                              <span className="material-symbols-outlined" >notifications</span>
                             <img src="./bottom-cta.DeKcUYew.jpg" alt=""/> 
                       </div>
                       
                    </div>
                       <span className="sexy_line"></span>

                       <div className="Dashbordtitle">Dashboard</div>
                       
                       
                       <div className="containrer__box__info"><BoxContainerInfo/> <BoxContainerInfo/> <BoxContainerInfo/>  <BoxContainerInfo/></div>
                   
                       <div className="tableDashBoard">
                   
                          
{/* This is a comment */}
                   


{
  cardsupdate.map((item,index)=><>
 
  
  
  
   <div className="cardUpdate" >

                      <div className="profileone">
                        <div onClick={()=>alert(" do you wanna change it ")} className="filed"> <img src="./bottom-cta.DeKcUYew.jpg" alt=""/>
                        </div>
                  { openUpdate==index?  <input type="text" placeholder="Available"/>  :     <div className="contentprofile">
                        <h2>tactilePhone</h2>
                        <h3>Proudct</h3>
                      </div>}
                      </div>

            
                <div>
                 {  openUpdate==index ?  <input type="text" placeholder="Available"/> :  <span className={`status ${true ? "active" : "inactive"}`}>
                    {true ? "Available" : "Out of Stock"}
                  </span>   }
                  
                </div>

         
            { openUpdate==index ? <input type="text" placeholder="quantity"/> :      <div className="quantity">{1}</div>}
           
           { openUpdate==index ?  <button style={{color:"red"}}  onClick={()=>setOpenUpdate(null)}>close</button>
          :
          
          
           <button className="edit-btn"  onClick={()=>setOpenUpdate(index)} >Edit</button> 
          }

                    </div>
  
  
   
  
  </>)
}


                    
 {/* This is a comment */}
                    
            
                       </div>
          </div>
    
    </div>
  )
}

export default dashboard
