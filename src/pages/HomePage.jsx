import NewsCard from "../components/NewsCard";
import { Button, Flowbite, Spinner } from "flowbite-react";
import { customButtonTheme } from "../themes/flowbiteThemes";
import { Carousel } from "@material-tailwind/react";
import Notice from "../components/Notice";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function stripTags(html) {
  return html.replace(/<\/?[^>]+(>|$)/g, "");
}

const HomePage = () => {
  const [home, setHome] = useState([])
  const [news, setNews] = useState([])
  const [notice, setNotice] = useState([])
  const [guru, setGuru] = useState([])
  const [isLoading, setIsloadingg] = useState(false)

  useEffect(() => {
    setIsloadingg(true);
    const fetchData = async () => {
      try {
        const homeResponse = await axios.get("http://localhost:8080/");
        setHome(homeResponse.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
    
    axios.get('http://localhost:8080/berita/:id')
      .then(res => setNews(res.data))
      .catch(err => console.log(err));
    
    axios.get('http://localhost:8080/pengumuman/:id')
      .then(res => setNotice(res.data))
      .catch(err => console.log(err));
    
    axios.get('http://localhost:8080/guru/')
      .then(res => setGuru(res.data))
      .catch(err => console.log(err));
    
    setIsloadingg(false)
  }, [])

  if (
    notice.isLoading ||
    news.isLoading ||
    home.isLoading ||
    isLoading
  )
    return (
      <main className="flex h-screen items-center justify-center">
        <div>
          <Spinner size="xl" />
        </div>
      </main>
    );

  return (
    <main className="font-poppins">
      <Carousel className="h-[153px] overflow-hidden md:h-[306px] lg:h-[408px] xl:h-[612px]">
        {home.map((homeItem, id) => (
          <img
            key={id}
            src={`http://localhost:8080/${homeItem.bHeadImg}`}
            alt="Carousel image"
            className="h-[153px] w-full object-cover md:h-[306px] lg:h-[408px] xl:h-[612px]"
          />
        ))}
      </Carousel>

      <div className="space-y-32">
        <div className="max-w-7xl space-y-32 px-12 pt-12 lg:mx-auto">
          <div className="grid h-full grid-cols-1 justify-center gap-8 sm:grid-rows-[384px] md:grid-cols-[384px_1fr]">
            <div className="relative">
                <img
                src={`http://localhost:8080/${home[0]?.kImg}`}
                alt="Kepala Sekolah"
                className="h-full w-full rounded-b-xl"
              />
              <div className="bg-main-seagreen absolute bottom-0 z-10 flex w-full flex-col items-center gap-2 rounded-b-xl p-4">
                <p className="text-xl font-semibold">{guru[0]?.name}</p>
                <p>{guru[0]?.position}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="z-10 flex w-full drop-shadow sm:w-1/2">
                <div className="bg-main-seagreen w-full whitespace-nowrap rounded-t-xl px-8 py-4 text-xl font-semibold sm:rounded-t-none sm:rounded-tl-xl">
                  SMP Bakti Idhata
                </div>
                <div className="bg-main-seagreen hidden w-full px-8 py-4 sm:block sm:rounded-tr-full"></div>
              </div>
              <div className="bg-light-green h-96 overflow-auto rounded-b-xl px-8 py-4 text-justify leading-6 sm:h-full sm:rounded-tr-xl whitespace-pre-wrap break-all">
                { home[0]?.description }
              </div>
            </div>
          </div>

          <div>
            <div className="mb-24 flex h-14 flex-col justify-between gap-4 sm:mb-10 sm:flex-row">
              <h2 className="flex flex-col justify-between text-3xl font-bold">
                Berita
                <span className="hid text-sm font-normal text-gray-500 sm:text-base">
                  Berita dan informasi terbaru
                </span>
              </h2>
              <Link to="/berita">
                <Flowbite theme={{ theme: customButtonTheme }}>
                  <Button color="dark-green" size="lg">
                    Lihat Semua
                  </Button>
                </Flowbite>
              </Link>
            </div>

            <div className="mx-auto flex flex-col items-center gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
              {news.map((n, id) => (
                <NewsCard
                  key={id}
                  title={n.judulBerita}
                  subtitle={stripTags(n.isiBerita)}
                  imgSrc={`http://localhost:8080/${n.sampul}`}
                  imgAlt=""
              />
              ))}
            </div>
          </div>

          <div className="!mb-40">
            <div className="mb-24 flex h-14 flex-col justify-between gap-4 sm:mb-10 sm:flex-row">
              <h2 className="flex flex-col justify-between text-3xl font-bold">
                Pengumuman
                <span className="hid text-sm font-normal text-gray-500 sm:text-base">
                  Pengumuman untuk peserta didik
                </span>
              </h2>
              <Link to="/pengumuman">
                <Flowbite theme={{ theme: customButtonTheme }}>
                  <Button color="dark-green" size="lg">
                    Lihat Semua
                  </Button>
                </Flowbite>
              </Link>
            </div>

            <div className="divide-y divide-solid divide-gray-400">
              {notice.map((a, id) => (
                <div key={id}>
                  <Link to={`/pengumuman/${a.id}`}>
                    <Notice
                      title={a.judul}
                      date={a.date}
                      subtitle={stripTags(a.descNotice)}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
