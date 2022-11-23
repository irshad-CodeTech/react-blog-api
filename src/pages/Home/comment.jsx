import React,{Fragment, useState,useEffect} from 'react';

const Comment = ({cg_id}) => {
    // Variable and function for comment
    const [comment,setComment] = useState()
    // const [cg_id,setCgid] = useState()
    
    
   
    const onSubmitComment= async (e)=>{
              
              
          try {
            
              const body={comment,cg_id};
              const response=await fetch("http://localhost:8000/addcomment",{
                  method:"POST",
                  headers:{"Content-Type":"application/json"},
                  body:JSON.stringify(body)
              })
  
              //  window.location="/";
          } catch (error) {
              console.error(error.message);
          }
      }

   
    return (
        <div>
            <form className="m-2" onSubmit={onSubmitComment}>
                                        <input 
                                        type="text " 
                                        name="comment"
                                        placeholder="Enter your comment" 
                                        className=" mr-2 h-10 w-30 p-3 bg-slate-50 rounded-lg border-solid border-2 border-slate-300"
                                        value={comment}
                                        onChange={e=>setComment(e.target.value)}
                                        />
                                        <input 
                                        type="text" 
                                        name="cg_id"
                                        placeholder="Blog Id" 
                                        className=" mr-2 h-10 w-30 p-3 bg-slate-50 rounded-lg border-solid border-2 border-slate-300"
                                        value={cg_id}
                                        // onChange={e=>setCgid(e.target.value)}

                                        />
                                        <input 
                                        className="bg-sky-300 rounded-lg border-solid border-1 border-slate-300 h-10 w-30 px-4" 
                                        type="submit" 
                                        name="submit" 
                                        value="send" 
                                        />
                                    </form>
        </div>
    )
}

export default Comment
