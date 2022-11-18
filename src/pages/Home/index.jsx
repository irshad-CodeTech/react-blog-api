import React from 'react';
const Home = () => {
    const currdate=new Date().toLocaleString();
    return (
        <div className="flex flex-col p5 mt-5">
            <div className="flex flex-row border-solid border-1 border-green-500 rounded-md mt-8 ">
                <div className="ml-3 flex-none w-800 border-solid border-0 h-500 w-1/2">
                    <h1 className="text-4xl font-sans font-bold mb-4">Press</h1>
                    <h5 className="#cbd5e1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                </div>
                <div className="flex-initial mt-14 border-solid border-0 w-1/2">
                    <div className="p-4 ml-48">
                        <form>
                            <input type="text " name="email" placeholder="Enter your email" className=" mr-2 h-10 w-30 p-3 bg-slate-50 rounded-lg border-solid border-2 border-slate-300" ></input>
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
                        <div className="p2  w-1/2 mb-4 p-6">
                            <p className="ml-3 text-sm text-slate-400">{currdate}</p>
                            <div className="ml-3 uppercase tracking-wide text-lg text-black-500 font-semibold">Blog Post 1</div>
                                <p className="ml-3 mt-2 text-justify text-slate-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
                                <a href="#" className="ml-3 block mt-1 text-sm leading-tight font-medium text-blue-600 hover:underline">Read full story</a>

                        </div>

                        {/* #blog-2  */}
                        <div className="p2  w-1/2 mb-4 p-6">
                        <p className="ml-3 text-sm text-slate-400">{currdate}</p>
                            <div className="ml-3 uppercase tracking-wide text-lg text-black-500 font-semibold">Blog Post 2</div>
                            <p className="ml-3 mt-2 text-justify text-slate-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
                                
                                <a href="#" className="ml-3 block mt-1 text-sm leading-tight font-medium text-blue-600 hover:underline">Read full story</a>

                        </div>

                        {/* #blog-3  */}
                        <div className="p2  w-1/2 mb-4 p-6">
                        <p className="ml-3 text-sm text-slate-400">{currdate}</p>
                            <div className="ml-3 uppercase tracking-wide text-lg text-black-500 font-semibold">Blog Post 3</div>
                            <p className="ml-3 mt-2 text-justify text-slate-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
                                
                                <a href="#" className="ml-3 block mt-1 text-sm leading-tight font-medium text-blue-600 hover:underline">Read full story</a>

                        </div>

                        {/* #blog-4  */}
                        <div className="w-1/2 mb-4 p-6">
                        <p className="ml-3 text-sm text-slate-400">{currdate}</p>
                            <div className="ml-3 uppercase tracking-wide text-lg text-black-500 font-semibold">Blog Post 4</div>
                            <p className="p4 text-justify ml-3 mt-2 text-slate-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
                                
                                <a href="#" className="ml-3 block mt-1 text-sm leading-tight font-medium text-blue-600 hover:underline">Read full story</a>

                        </div>



                    </div>{/* flex-end  */}
                </div>    {/* flex-container-end */}
            </div>{/* main-section-end  */}
        </div>// main-container 
    )
}

export default Home;
