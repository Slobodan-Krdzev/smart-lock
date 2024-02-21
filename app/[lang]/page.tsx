import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Listing from "../Components/Listing/Listing";




export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  return (
    <>

      <Listing />
      
      {/* <section
        className="flex justify-start items-center relative"
        style={{
          backgroundImage: `url("https://i.imgur.com/3dfL2dX.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "90vh",
        }}
      >
        <Header lang={lang} /> 
        <div className="basis-11/12 lg:basis-6/12 m-auto lg:m-0">
          <div className="m-auto w-full lg:w-7/12 flex flex-col uppercase items-center">
            <h1 className="text-3xl md:text-4xl font-extrabold self-center md:self-start text-center mb-4 tracking-tighter text-color">
              Unlock a new era of security with our <br />- Smart Locks -
            </h1>
            <h2 className="text-1xl md:text-1xl text-center font-semibold text-color mb-4">
              Seamless Action - Unparalleled Peace of Mind
            </h2>
            <button className="textColor-bg py-4 px-8 rounded-full font-semibold text-color2 w-fit hover:text-white hover:bg-zinc-600">
              Contact Us
            </button>
          </div> 
        </div>
      </section>
        <LockListing />
       */}

      {
        // VTOR DIZAJN - LOSH
      
      
      /* <section
        className="flex justify-center items-center"
        style={{
          height: "60vh",
        }}
      >
        <div className="m-auto w-11/12 md:w-6/12">
          <h1 className="text-3xl md:text-5xl font-extrabold self-center md:self-start text-center mb-4 tracking-tighter">
            {/* {page.home.title}
             
            Unlock a new era of security with our <br />- Smart Locks -
          </h1>
          <h2 className="text-1xl md:text-3xl text-center font-semibold">
            Seamless Action - Unparalleled Peace of Mind
          </h2>
        </div>
      </section>
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" style={{
          marginTop: "-15rem"
        }}>
          <path
          className="border"
          style={{
            border: "2px solid red",
            marginTop:"-5.5rem",
            width:"100%" ,
            height:"12rem",
            display:"block"
          }}
            fill="#B4C0CE"
            d="M0,224L40,218.7C80,213,160,203,240,213.3C320,224,400,256,480,240C560,224,640,160,720,144C800,128,880,160,960,149.3C1040,139,1120,85,1200,96C1280,107,1360,181,1400,218.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>
      <section
        className="border bg-gray"
        style={{
          height: "60vh",
        }}
      >
       

      // PRVICEN DIZAJN SO CAROUSELL
        
      </section> */}
      {/* <section className="py-8 md:py-0 flex flex-col md:flex-row justify-between items-center m-auto w-11/12 md:w-9/12">
        <div className="m-auto w-full md:w-1/2 basis-full md:basis-1/2">
          <div className="flex justify-center items-start flex-col m-auto md:w-4/5 uppercase">
            <h1 className="text-7xl lg:text-9xl font-extrabold self-center md:self-start">
              {page.home.title}
            </h1>
            <h2 className="text-7xl lg:text-9xl font-extrabold self-center md:self-end">
              {page.home.title2}
            </h2>
          </div>
          <div className="m-auto w-4/5 mt-4 md:mt-8 freedokaFont font-normal">
            <p>Бидете Сигурни и Модерни </p>
            <p>Smart Lock - Модерно Решение</p>

            <button className="rounded-full bg-gray-800 text-white p-4 hover:bg-white border-2 border-white  hover:border-gray-800 hover:text-gray-800 my-4">
              Види ги Продуктите
            </button>
          </div>
        </div>
        <div className="m-auto text-center uppercase basis-full md:basis-1/2 md:pl-36">
          <Carousell />
        </div>
      </section>

      <section className="py-4 md:py-8 lg:py-24">
        <div className="flex flex-col md:flex-row justify-between items-center border-2 border-purple-300">
          <div className="flex justify-center items-center basis-full md:basis-1/2">
            <div>
              <h2 className="font-bold text-1xl md:text-3xl lg:text-5xl">
                Ime na Brava
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl">Description</p>
            </div>
          </div>
          <div
            className="rounded-l-full  flex justify-start items-center basis-full md:basis-1/2 p-16 bg-purple-300"
            style={{
              backgroundImage: `url('/images/lock1.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              // height: "30vh",
            }}
          >
            <Image
              src={lock1}
              alt="asd"
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
        </div>
      </section> */}
    </>
  );
}
