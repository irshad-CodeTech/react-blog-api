import React,{Fragment, useState,useEffect} from 'react';


const Header = () => {
    const [author,setAuthor] = useState()
    const [title,setTitle] = useState()
    const [bloginfo,setDescription] = useState()
    const [userid,setUserid] = useState()


    const onSubmitForm= async (e)=>{
        try {
            const body={author,title,bloginfo,userid};
            const response=await fetch("http://localhost:8000/addblog",{
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
                     {/* Heading-Start  */}
                    <div className="header-container flex-initial border-solid border-1 border-red-500 flex justify-between flex-nowrap" >
                    <div className=" border-solid border-1 border-black-500">
                    <h1 className="text-4xl font-sans font-bold mb-4 border-solid border-1 border-green-500">CODE GARAGE TECH</h1>
                        <h1 className="text-3xl">
                        'We Build Valuable Solutions With Code'
                        </h1>
                    </div>
                     {/* Notify-Start */}
                     <div className=" mt-14 border-solid border-0">
                        <div className="p-4">
                            <form> 
                                <input 
                                    type="text " 
                                    
                                    placeholder="Enter your email" 
                                    className=" mr-2 h-10 w-30 p-3 bg-slate-50 rounded-lg border-solid border-2 border-slate-300"
                                    />
                                
                                <input className="bg-sky-400 rounded-lg border-solid border-1 border-slate-300 h-10 w-30 px-4" type="submit" name="notify" value="Notify me" />
                                
                            </form>
                        </div>
                    </div>
                    {/* Notify-end */}
                    </div>
                        {/* Heading-End  */}

                            {/* add block secti</div>on  */}

                            <div className="flex items-center justify-center p-12">
  <div className="mx-auto w-full max-w-[550px]">
    <form onSubmit={onSubmitForm}>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Author
        </label>
        <input
          type="text"
          name="author"
          id="name"
          placeholder="Enter author name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          value={author}
          onChange={e=>setAuthor(e.target.value)}
        />
      </div>
      
      <div className="mb-5">
        <label
          htmlFor="userid"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          UserId
        </label>
        <input
          type="text"
          name="userid"
          id="userid"
          placeholder="Enter blog title"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          value={userid}
          onChange={e=>setUserid(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="subject"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Title
        </label>
        <input
          type="text"
          name="title"
          id="subject"
          placeholder="Enter blog title"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          value={title}
          onChange={e=>setTitle(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Description 
        </label>
        <textarea
          rows="4"
          name="bloginfo"
          id="message"
          placeholder="Enter the blog description"
          className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          value={bloginfo}
          onChange={e=>setDescription(e.target.value)}
        ></textarea>
      </div>
      <div>
        <button
          className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div> 
                            
                            {/* add-blog-section-end */}

                    
               
            </div>
        )


    
}

export default Header
