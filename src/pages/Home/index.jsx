import React,{Fragment, useState,useEffect} from 'react';
import Comment from './comment';

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


    const currdate=new Date().toLocaleString();
    
    return (
        <Fragment>
        {/* //     {infoImg.map(element=>(
        //     <img src={element.src}/>
        //     ))} */}
        <div className="flex flex-col p5 mt-5 border-solid border-1 border-green-500">
           
            <div className="main-section mt-20"> {/* main-section-start */}
                <div className="p8">

                    <div className="md:flex p-4 flex-wrap flex-row justify-around  border-solid border-2 border-slate-200 ">

                        {/* #blog-1  */}
                        {infoBlog.map(element=>(
                           
                            <div key={element.cg_id} className=" w-5/12 border-solid mb-4 border-2 border-gray-200">
                            <p className="ml-2 text-sm text-slate-400">{currdate}</p>
                            <div className="ml-3 uppercase tracking-wide text-lg text-black-500 font-semibold">{element.title+" "+element.cg_id}</div>
                            <p className="ml-4 text-sm text-slate-350">~{element.username}</p>
                                <p className="ml-4 mt-2 text-justify text-slate-500">{element.bloginfo}</p>
                                <a href="#" className="ml-3 block mt-1 text-sm leading-tight font-medium text-blue-600 hover:underline">Read full story</a>
                                <div className="comment ml-3">
                                    
                                    <ul className="">
                                        <li>comment 1</li>
                                        <li>comment 2</li>
                                        <li>comment 3</li>
                                    </ul>
                                    <Comment 
                                    cg_id={element.cg_id}
                                    // obj={
                                    //     {
                                    //     cg_id:element.cg_id,
                                    //     name:element.title
                                    //     }
                                    // }
                                    //     onSubmitComment={onSubmitComment}
                                        
                                        
                                    
                                    
                                    
                                    // setComment={setComment()}
                                    />
                                    
                                </div>
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
