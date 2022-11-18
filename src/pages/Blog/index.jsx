import React from 'react';
import styles from "../../index.css";

const Blog = () => {
    const currdate=new Date().toLocaleString();
    return (
        <div>
            <h1 className="text-red-600">Blog Section</h1>
            <div className="blog-containts">
                <div>
                    <p className="date text-red-600">{currdate}</p>
                    <h4>Blog Headline</h4>
                    <p className="contains font-bold underline" styles="width:25px;">it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
                    making it look like readable English. </p>
                    <img src="https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRlY2glMjBibG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></img>
                </div>
                <div>
                    <p className="date">{currdate}</p>
                    <h4>Blog Headline</h4>
                    <p className="contains" styles="width:25px;">it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
                    making it look like readable English. </p>
                    <img src="https://media.istockphoto.com/id/1094254386/photo/act-on-your-dreams.jpg?b=1&s=170667a&w=0&k=20&c=lPwCxfWsDuWBXxMMEaJOASArbiJrH2DwvZSSLpKCwUk="></img>
                </div>
                <div>
                    <p className="date">{currdate}</p>
                    <h4>Blog Headline</h4>
                    <p className="contains" styles="width:25px;">it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
                    making it look like readable English. </p>
                </div>
                <div>
                    <p className="date"></p>
                    <h4>Blog Headline</h4>
                    <p className="contains" styles="width:25px;">it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
                    making it look like readable English. </p>
                    <img src="https://media.istockphoto.com/id/1427597249/photo/mature-woman-filming-vlog-at-home.jpg?b=1&s=170667a&w=0&k=20&c=IflH6pJH4FF_EF9YQtIZDkSyjEXhNu1zcI8c1LPzAaU="></img>
                </div>


            </div>
        </div>
    )
}

export default Blog
