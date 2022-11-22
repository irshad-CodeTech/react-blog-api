import React,{Fragment, useState,useEffect} from 'react';

const Home = () => {
    
    
    
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

    const [infoImg ,setBlogImg]=useState([]);

        const renderImg=async()=>{
            try {
                const response= await fetch("http://localhost:8000/getimgapi");
                 const jsonData=await response.json();
                setBlogImg(jsonData)
        
            } catch (error) {
                console.log(error.message);
            }
        }
    

    useEffect(()=>{
        renderImg();
    },[]);

    console.log("Random Image",infoImg);

    const currdate=new Date().toLocaleString();
    var sno=1;
    return (
        <Fragment>
            {infoImg.map(element=>(
            <img src={element.src}/>
            ))}
        <div className="flex flex-col p5 mt-5 border-solid border-1 border-green-500">
           
            <div className="main-section mt-20"> {/* main-section-start */}
                <div className="p8">

                    <div className="md:flex flex-wrap flex-row border-solid border-2 border-slate-200 p4">

                        {/* #blog-1  */}
                        {infoBlog.map(element=>(
                           
                            <div className="p2  w-1/2 mb-4 p-6">
                            <p className="ml-3 text-sm text-slate-400">{currdate}</p>
                            <div className="ml-3 uppercase tracking-wide text-lg text-black-500 font-semibold">{element.title}</div>
                            <p className="ml-4 text-sm text-slate-350">~{element.username}</p>
                                <p className="ml-4 mt-2 text-justify text-slate-500">{element.bloginfo}</p>
                                <a href="#" className="ml-3 block mt-1 text-sm leading-tight font-medium text-blue-600 hover:underline">Read full story</a>
                                

                        </div>
                        ))}
                    </div>{/* flex-end  */}
                </div>    {/* flex-container-end */}
            </div>{/* main-section-end  */}
        </div>
        </Fragment>
    )
}

export default Home;
