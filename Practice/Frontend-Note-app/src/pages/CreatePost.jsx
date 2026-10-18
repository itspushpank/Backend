import axios from "axios";
import React from "react";

const CreatePost = () => {

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const formdata = new FormData(e.target)

        axios.post("http://localhost:3000/create-post", formdata).then((res)=>{
            alert("post created successfully")
            e.target.reset()
        })
        .catch((err)=>{
            console.log(err)
            alert("Error creating post")
        })
    }

    return (
        <section className="create-post-section max-w-md mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg">
            <h1 className="text-2xl font-semibold text-gray-900 text-center mb-6">
                Create Post
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="file"
                    name="img"
                    accept="image/*"
                    className="p-3 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 text-gray-500 text-sm cursor-pointer transition hover:border-indigo-500 hover:bg-indigo-50 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-indigo-500 file:text-white file:text-sm file:font-medium hover:file:bg-indigo-600"
                    />
                <input
                    type="text"
                    name="description"
                    required
                    placeholder="Enter Description"
                    className="px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    />
                <button
                    type="submit"
                    className="py-3 bg-indigo-500 text-white font-semibold rounded-lg transition hover:bg-indigo-600 active:scale-[0.98]"
                    >
                    Submit
                </button>
            </form>
        </section>
    );
};

export default CreatePost;

// import React from 'react'

// const CreatePost = () => {
//   return (
//     <section className='create-post-section'>
//         <h1>Create Post</h1>
//         <form>
//             <input type="file" name='image' accept='image/*' />
//             <input type="text" name='description' required placeholder='Enter Description'/>
//             <button type='submit'>Submit</button>
//         </form>
//     </section>
//   )
// }

// export default CreatePost