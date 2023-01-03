
import React from "react";
import NavBar from "../../components/NavBar";
import Comments from "../../components/tapsComponents/Comments";
import AddRevews from "../../components/tapsComponents/AddRevews.jsx";
import { useStateContext } from "../../contexts/ContextProvider";
import Explore from "../../components/Explore";
import FandQ from "../../components/FandQ";
import Footer from "../../components/Footer";
import HeaderSingelBlog from "../../components/parts/HeaderSingelBlog";
import DescSingleBlog from "../../components/parts/DescSingleBlog";
import RelatedTous from "../../components/parts/RelatedTous";
import { baseUrl, fetchApi } from "../../utils/ferchApi";
 import Loding from "../../components/helper/Loding.jsx"
 import StructuredData from "../../components/dataStructured/StructuredData"
import Head from "next/head";
import NextPost from "../../components/parts/NextPost";
function SingelBlog({singelSlug , allposts}) {
  console.log(allposts);
  const structuredData = { 
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:singelSlug.title ,
    description: singelSlug.description.replace(/<[^>]*>?/gm, ''),
    author: [
      {
        '@type': 'Person',
        name: singelSlug.author.name,
        url:`https://www.nilecruisez.com/blog/${singelSlug.slug }`
      },
    ],
    image: singelSlug.image,
    datePublished:singelSlug.created_at,
    dateModified: singelSlug.created_at,
  };

  if(!singelSlug){
    return <Loding/>
  }
  return (
    <div>
    <Head>
    <StructuredData data={structuredData} />
    <meta
          name="description"
          content={singelSlug.meta_description}
        />
        <title>{singelSlug.meta_title} </title>
    </Head>

      <NavBar />
      {/* <HeaderParts typeList={"single tour"} /> */}
       
       <HeaderSingelBlog singelSlug={singelSlug} />   
      <div className=" grid grid-cols-1 md:grid-cols-6 gap-3  ">
        {/* left content side */}
        <div className="flex flex-col gap-3 col-start-1 col-end-6   w-full md:col-span-4">
         
          <DescSingleBlog singelSlug={singelSlug} />
          {/* <Comments singelSlugComments={singelSlug.comments} singelSlug={singelSlug}  /> */}
          
          {/* <AddRevews/>  */}
        
        </div>
        {/* right form iqurire */}
        <div className="w-full col-start-1 col-end-6  md:col-start-5 md:col-end-7   ">
          
          <RelatedTous relatedTous={singelSlug.tours } />
        </div>
      </div>
      <NextPost allposts={allposts}/>
      <Explore />
      <FandQ />
      <Footer />

    </div>
  );
}

export default SingelBlog;
// export async function getStaticPaths() {
//   const listBlog = await fetchApi(`${baseUrl}/posts`);
//   return {
//     paths: listBlog.data.map((item) => ({
//       params: { slug: item.slug.toString() },
//     })),
//     fallback: false,
//   };
// }
// export async function getStaticProps({params}) {
//   const singelSlug = await fetchApi(`${baseUrl}/posts/${params.slug}`);
//   const allposts = await fetchApi(`${baseUrl}/posts`);
  
//   return {
//     props: {
//       singelSlug: singelSlug.data,
//       allposts: allposts.data,
//     },
//     revalidate: 10,
//   };
// }
export async function getServerSideProps({params}) {
  const singelSlug = await fetchApi(`${baseUrl}/posts/${params.slug}`);
    const allposts = await fetchApi(`${baseUrl}/posts`);

  return {
    props: {
      singelSlug: singelSlug.data,
            allposts: allposts.data,
    }, // will be passed to the page component as props
  }
}