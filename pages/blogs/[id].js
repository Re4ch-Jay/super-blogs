import Head from "next/head";
import Link from "next/link";



export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json();

    const paths = data.map(data => {
        return {
            params: { id: data.id.toString() },         
        }
    })
    return {
      paths,
      fallback: false
    };
  }

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/comments/' + id)
    const data = await res.json()

    return{
        props: { data }
    }
}

const Details = ({data}) => {
    return ( 
        <>  
            <Head>
                <title>Super Blog | Detail</title>
            </Head>
            <div className="content">
                <h1>Blogs id: {data.id}</h1>
                <div className="content-cards">
                    <h3> <span>Title:</span> {data.name}</h3>
                    <p>{data.body}</p>
                    <h4><span>Email:</span> {data.email}</h4>
                </div>
                <Link href="/blogs"><a className="back-btn">Back</a></Link>
            </div>
        </>
     );
}
 
export default Details;
