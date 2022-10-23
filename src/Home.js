import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {
    let {data,error,isPending} = useFetch('http://localhost:8000/blogs');
    let blogs = data;
    return ( 
        <div className="home">
            {isPending && <p>Loading ...</p>}
            {error && <p>{error}</p>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}
 
export default Home;