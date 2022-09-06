import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <Head>
      <title>Super Blogs | Home</title>
    </Head>
    <div className='content'>
      <h1>Home</h1> 
      <p>This project cover about Next Js. Incluede router, dynamic router, fetch data, 404 pages...</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit corporis eum beatae magni iure? Sint illum doloribus eligendi ipsam cum harum nihil ea sit. Tempore odit iste praesentium nobis, perferendis magni mollitia quisquam, fugit, quos eligendi sapiente numquam sit voluptate?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit corporis eum beatae magni iure? Sint illum doloribus eligendi ipsam cum harum nihil ea sit. Tempore odit iste praesentium nobis, perferendis magni mollitia quisquam, fugit, quos eligendi sapiente numquam sit voluptate?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit corporis eum beatae magni iure? Sint illum doloribus eligendi ipsam cum harum nihil ea sit. Tempore odit iste praesentium nobis, perferendis magni mollitia quisquam, fugit, quos eligendi sapiente numquam sit voluptate?</p>
      <Link href="/blogs"><a className={styles.btn}>See Blog List</a></Link>
    </div>
    </>
  )
}
