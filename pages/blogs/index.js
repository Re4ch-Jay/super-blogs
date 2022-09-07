import Link from "next/link";
import Head from "next/head";
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json();

    return {
        props: {data}
    }
}
const Blogs = ({data}) => {
    return (  
        <>
        <Head>
            <title>Super Blogs | Detail</title>
            <meta name='keywords' content='phatpanhareach'/>
        </Head>
        <div className="content">
            <h1>Blogs</h1>
            <p>This project cover about Next Js. Incluede router, dynamic router, fetch data, 404 pages...</p>
            {data.map(data => {
                return (
                    <Link href={`/blogs/${data.id}`} key={data.id} >
                        <div className="content-cards">
                            
                            <h3>{data.email}</h3>
                            <p><span>Comment:</span>  {data.body}</p>
                            
                        </div>
                    </Link>
                )
            })}
        </div>
        </>
    );
}
 
export default Blogs;