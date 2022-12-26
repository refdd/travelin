import Image from "next/image";
import BookingSearch from "../components/BookingSearch";
import Explore from "../components/Explore";
import FandQ from "../components/FandQ";
import Footer from "../components/Footer";
import Header from "../components/headers/Header";
import HeaderSection from "../components/helper/HeaderSection";
import MultiPackage from "../components/MultiPackage";
import NavBar from "../components/NavBar";
import PerfectTour from "../components/PerfectTour";
import SelectPackagess from "../components/SelectPackagess";
import Testimonails from "../components/Testimonails";
import { fetchApi, baseUrl } from "../utils/ferchApi";
import imagescema from "../public/assets/images/Nile Cruises 2.webp"
import {
  useStateContext,
} from "../contexts/ContextProvider";
import Head from "next/head";
import BoxSearch from "../components/helper/BoxSearch";
import StructuredData from "../components/dataStructured/StructuredData";

export default function Home({
  FandQAPI,
  partners,
  types,
  tours,
  plogList,
}) {
  const {openSearch } = useStateContext()
 
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity : FandQAPI.map(item => {
      return {
        "@type": "Question",
        name:item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      }
    })
  };
  const structuredDataVideo =  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Nile Cruises Video    ",
    description: "Explore the ancient Egyptian civilization through the best travel offers and nile cruises 2023 Book Today",
    thumbnailUrl: [
      "https://api.nilecruisez.com/images/tours/2022-12-06-1670341356638f62ec896b32.21223139b7da2be5-5e57-4b1a-a392-0d2feb2bc363-1.webp.webp"
     ],
    uploadDate: "2016-03-31T08:00:00+08:00",
    duration: "PT1M54S",
    contentUrl: "https://api.nilecruisez.com/video/slidervideo.mp4",
    embedUrl: "https://www.youtube.com/embed/QZFu9LxUveM",
    interactionStatistic: {
      "@type": "InteractionCounter",
      interactionType: { "@type": "WatchAction" },
      userInteractionCount: 5647018
    },
    regionsAllowed: "US,NL"
  };
  return (
    <div>
      <Head>
        <title>Nile Cruises | Nile Cruises 2023 | Travel to Egypt</title>
        <StructuredData data={structuredData} />
        <StructuredData data={structuredDataVideo} />
        <meta
          name="description"
          content={"Travel to Egypt, Explore the ancient Egyptian civilization through the best travel offers and nile cruises 2023. Book Today!"}
        
        />

      </Head>
      <NavBar />
      <Header />
      <BookingSearch />
     { openSearch &&   <BoxSearch tours={tours}/>}
      {types &&
        types.map((item) => (
          <section key={item.id} className=" md:pt-16  bg-[#e6eef5]  ">
            <SelectPackagess
              sypTypes={ item.categories}
              id={item.id}
              partOne={item.partOne}
              partTwo={item.title}
              decs={item.description}
              alltour= {tours}
            />
          </section>
        ))}

      <section className="  pt-11  md:pt-16  bg-[#e6eef5]  ">
        <MultiPackage offerSection={true} tours={tours} />
      </section>
      <PerfectTour />

      <Testimonails />
      <section className="  pt-8  md:pt-16  bg-[#e6eef5]  ">
        <HeaderSection
          titel={"Our Travel Guide"}
          partOne={"Recent"}
          partTwo={"Articles & Posts"}
          decs={
            "Best Places to visit, Things to do, Food to Eat and all what you need to know before visiting Egypt"
          }
        />
        <MultiPackage blogsList={plogList} Blogs={true} />
      </section>

      <Explore partners={partners} />
      <FandQ dataFandQ={FandQAPI} />

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const FandQAPI = await fetchApi(`${baseUrl}/faqs`);
  const partners = await fetchApi(`${baseUrl}/partners`);
  const types = await fetchApi(`${baseUrl}/types`);
  const tours = await fetchApi(`${baseUrl}/tours`);
  const plogList = await fetchApi(`${baseUrl}/posts`);
  return {
    props: {
      FandQAPI: FandQAPI.data,
      partners: partners.data,
      types: types.data,
      tours: tours.data,
      plogList: plogList.data,
    },
    revalidate: 10,
  };
}
