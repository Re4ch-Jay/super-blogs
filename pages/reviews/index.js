import Link from "next/link"
import Head from "next/head"
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const reviews = await res.json()

    return {
        props: {reviews}
    }
}

const Reviews = ({reviews}) => {
    return ( 
        <>
        <Head>
            <title>Super Blog | Reviews</title>
        </Head>
        <div className="content">
            <h1>Reviews</h1>
            <p>This project cover about Next Js. Incluede router, dynamic router, fetch data, 404 pages...</p>
            {reviews.map(review => {
                return (
                    <Link key={review.id} href={`/reviews/${review.id}`}>
                        <div className="content-cards">
                            <h3>{review.title}</h3>
                        </div>
                    </Link>
                )
            })}
        </div>
        </>
     );
}
 
export default Reviews;