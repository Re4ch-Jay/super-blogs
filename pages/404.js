import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
const NotFound = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 5000)
    }, [])

    return ( 
        <>
        <Head>
            <title>Super Blog | 404</title>
        </Head>
        <div className="notfound">
            <h1>Opps... sorry!</h1>
            <h3>We cannot find that page</h3>
            <h5>Go to <Link href="/" className="link">Home page</Link></h5> 
        </div>
        </>
     );
}
 
export default NotFound
