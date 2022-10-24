import { useParams,useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    let {id} = useParams()
    let {data, isPending, error} = useFetch("http://localhost:8000/blogs/"+id);
    let blog = data;

    const History = useHistory();

    let handleClick = () => {
        fetch("http://localhost:8000/blogs/"+id,{
            method: 'DELETE'
        }).then(()=>{
            History.push('/');
        });
    }
    return (
        <div className="blog-details">
            {isPending && <p>Loading ...</p>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by  {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;