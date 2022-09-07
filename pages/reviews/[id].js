import Link from "next/link";
import Head from "next/head";
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const reviews = await res.json();

    const paths = reviews.map(review => {
        return {
            params: { id: review.id.toString() },         
        }
    })
    return {
      paths,
      fallback: false
    };
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    const reviews = await res.json();

    return {
        props: {reviews}
    }
}

const ReviewDetails = ({reviews}) => {
    return ( 
        <>
        <Head>
            <title>Super Blog | Reviews</title>
            <meta name='keywords' content='phatpanhareach'/>
        </Head>
        <div className="content">
        <h1>Reviews Detail</h1>
        <p>This project cover about Next Js. Incluede router, dynamic router, fetch data, 404 pages...</p>
        <div className="content-cards">
            <h2>{reviews.title}</h2>
            <p>{reviews.body}</p>
            <p>Post id: {reviews.id}</p>
        </div>
        <Link href="/reviews"><a className="back-btn">Back</a></Link>
        </div>
        </>
     );
}
    
export default ReviewDetails;