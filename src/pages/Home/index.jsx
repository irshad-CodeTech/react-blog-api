import React,{Fragment, useState,useEffect} from 'react';

const Home = () => {
    const [bloginfo, setDescription] = useState("")
    const onSubmitForm= async e=>{
        try {
            const body={bloginfo};
            const response=await fetch("http://localhost:8000/addblog",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })
            
        } catch (error) {
            console.error(error.message);
        }
    }
    
    const [infoBlog ,setBlogInfo]=useState([]);

        const renderBlog=async()=>{
            try {
                const response= await fetch("http://localhost:8000/getinfo");
                 const jsonData=await response.json();
                setBlogInfo(jsonData)
        
            } catch (error) {
                console.log(error.message);
            }
        }
    

    useEffect(()=>{
        renderBlog();
    },[]);
    console.log(infoBlog);

    const currdate=new Date().toLocaleString();
    var sno=1;
    return (
        <Fragment>
        <div className="flex flex-col p5 mt-5 border-solid border-1 border-green-500">
            <div className="flex flex-row border-solid border-1 border-green-500 rounded-md mt-8 ">
                <div className="ml-3 flex-none w-800 border-solid border-0 h-500 w-1/2">
                    <h1 className="text-4xl font-sans font-bold mb-4">Press</h1>
                    <h5 className="#cbd5e1">
                        </h5>
                </div>
                <div className="flex-initial mt-14 border-solid border-0 w-1/2">
                    <div className="p-4 ml-48">
                        <form onSubmit={onSubmitForm}> 
                            <input 
                                type="text " 
                                name="bloginfo" 
                                placeholder="Enter your email" 
                                className=" mr-2 h-10 w-30 p-3 bg-slate-50 rounded-lg border-solid border-2 border-slate-300"
                                value={bloginfo}
                                onChange={e=>setDescription(e.target.value)}
                                
                                />
                            
                            <input className="bg-sky-400 rounded-lg border-solid border-1 border-slate-300 h-10 w-30 px-4" type="submit" name="notify" value="Notify me" />
                            
                        </form>
                    </div>
                </div>
  
            </div>
            <div className="main-section mt-20"> {/* main-section-start */}
                {/* <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"> */}
                <div className="p8">

                    <div className="md:flex flex-wrap flex-row border-solid border-2 border-slate-200 p4">

                        {/* #blog-1  */}
                        {infoBlog.map(element=>(
                           
                            <div className="p2  w-1/2 mb-4 p-6">
                            <p className="ml-3 text-sm text-slate-400">{currdate}</p>
                            <div className="ml-3 uppercase tracking-wide text-lg text-black-500 font-semibold">Blog Post {sno++}</div>
                                <p className="ml-3 mt-2 text-justify text-slate-500">{element.bloginfo}</p>
                                <a href="#" className="ml-3 block mt-1 text-sm leading-tight font-medium text-blue-600 hover:underline">Read full story</a>
                                

                        </div>
                            
                            


                        ))}

                        

                        



                    </div>{/* flex-end  */}
                </div>    {/* flex-container-end */}
            </div>{/* main-section-end  */}
        </div>// main-container 
        </Fragment>
    )
}

export default Home;
