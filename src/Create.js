import { useState } from "react";
import {useHistory} from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [Author, setAuthor] = useState('Diamo');
    const [isPending, setIsPending] = useState(false);
    const History = useHistory();

    let handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        const blog = {title,body:text,author:Author}
        setTimeout(()=>{
            fetch("http://localhost:8000/blogs",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(blog)
            }).then(()=>{
                setIsPending(false);
                History.push('/');
            })
        },1000);
    } 

    return ( 
        <div className="create">
            <h2>Create a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                    type="text"
                    required 
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                />
                <label>Blog Text</label>
                <textarea 
                    required
                    value={text}
                    onChange={(e)=>{setText(e.target.value)}}
                ></textarea>
                <label>Blog Author</label>
                <select
                    required
                    value={Author}
                    onChange={(e)=>{setAuthor(e.target.value)}}>

                    <option value="Diamo">Diamo</option>
                    <option value="Keiden">Keiden</option>
                </select>
                {isPending?<button disabled>Adding Blog...</button>:<button>Add Blog</button>}
            </form>
        </div>
    );
}
 
export default Create;