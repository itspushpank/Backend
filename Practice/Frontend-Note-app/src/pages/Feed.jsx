import React, { useState, useEffect } from "react";
import axios from "axios";

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id: "jdkjafhduakjdhfkj",
            img: "https://ik.imagekit.io/itspushpank/image_k4HiebvjC.jpg?updatedAt=1792334385694",
            description: "somthing somthing",
        },
    ]);

    useEffect(() => {
        axios.get("http://localhost:3000/feed").then((res) => {
            setPosts(res.data.posts);
        });
    }, []);

    return (
        <section className="max-w-7xl mx-auto mt-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {posts.length > 0 ? (
                posts.map((post) => (
                    <div
                        key={post._id}
                        className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition hover:shadow-lg"
                    >
                        <img
                            src={post.img}
                            alt={post.description}
                            className="w-full aspect-video object-cover"
                        />
                        <p className="p-4 text-gray-800 text-sm leading-relaxed line-clamp-2">
                            {post.description}
                        </p>
                    </div>
                ))
            ) : (
                <h1 className="col-span-full text-center text-gray-500 text-lg py-12">
                    No post available
                </h1>
            )}
        </section>
    );
};

export default Feed;

// import React, { useState } from "react";

// const Feed = () => {

//     const [posts, setPosts] = useState([
//         {
//             _id: "jdkjafhduakjdhfkj",
//             img: "https://ik.imagekit.io/itspushpank/image_k4HiebvjC.jpg?updatedAt=1792334385694",
//             description: "somthing somthing"
//         }
//     ])

//   return <section>
//     {
//         posts.length > 0 ? (
//             posts.map((post)=>(
//                 <div key={post._id}>
//                     <img src={post.img} alt={post.description}/>
//                     <p>{post.description}</p>
//                 </div>
//             ))
//         ):(<h1>No post available</h1>)
//     }
//   </section>;
// };

// export default Feed;
