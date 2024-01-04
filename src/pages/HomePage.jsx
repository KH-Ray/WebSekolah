import PhotoBox from "../components/PhotoBox";
import NewsCard from "../components/NewsCard";

import React, {useEffect, useState} from "react";
import axios from "axios";

import { Button, Flowbite, Spinner } from "flowbite-react";
import { customButtonTheme } from "../themes/flowbiteThemes";
import { Carousel } from "@material-tailwind/react";
import Notice from "../components/Notice";

import gedung1 from "../images/foto-gedung-1.jpg";

import annoucementServices from "../services/announcements";
import newsServices from "../services/news";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const news1 = useQuery({
    queryKey: ["news"],
    queryFn: () => newsServices.getAllNews(),
  });

  const annoucements = useQuery({
    queryKey: ["annoucements"],
    queryFn: () => annoucementServices.getAllAnnoucement(),
  });

  const [home, setHome] = useState([])
  const [news, setNews] = useState([])
  const [notice, setNotice] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8080');
        setHome(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    
    
    axios.get('http://localhost:8080/berita')
      .then(res => setNews(res.data))
      .catch(err => console.log(err));
    
    axios.get('http://localhost:8080/pengumuman')
      .then(res => setNotice(res.data))
      .catch(err => console.log(err));
  }, [])

  if (annoucements.isLoading || news.isLoading)
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
        {
            home.map((home) =>
              <div key={home.i}>
                <img src={home.bHeadImg} alt="" />
                <img className="w-full" src={gedung1} />
                <img className="w-full" src={gedung1} />
              </div>
           
            )
          }
      </Carousel>

      <div className="space-y-32">
        <div className="max-w-7xl space-y-32 px-12 pt-12 lg:mx-auto">
          <div className="grid h-96 grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr]">
            <PhotoBox styles="text-white text-3xl flex items-center justify-center">
              {
              home.map((home, i) =>
                <div key={i}>
                  <div>{home.kImg}</div>
                </div>
                )
              }
            </PhotoBox>
            <PhotoBox styles="text-white text-3xl flex items-center justify-center">
              {
              home.map((home, i) =>
                <div key={i}>
                  <div>{home.desc}</div>
                </div>
                )
              }
            </PhotoBox>
          </div>

          <div>
            <div className="mb-24 flex h-14 flex-col justify-between gap-4 sm:mb-10 sm:flex-row">
              <h2 className="flex flex-col justify-between text-3xl font-bold">
                Berita
                <span className="hid text-sm font-normal text-gray-500 sm:text-base">
                  Berita dan informasi terbaru
                </span>
              </h2>
              <Flowbite theme={{ theme: customButtonTheme }}>
                <Button color="dark-gray" size="lg">
                  Lihat Semua
                </Button>
              </Flowbite>
            </div>

            <div className="mx-auto flex flex-col items-center gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
              {news.map((news, i) => (
                <NewsCard              
                  key={i}
                  title={news.head}
                  subtitle={news.subHead}
                  imgSrc={news.headImg}
                  imgAlt="Loading..."
                />
              ))}
            </div>
          </div>

          <div className="!mb-40">
            <div className="mb-24 flex h-14 flex-col justify-between gap-4 sm:mb-10 sm:flex-row">
              <h2 className="flex flex-col justify-between text-3xl font-bold">
                Berita
                <span className="hid text-sm font-normal text-gray-500 sm:text-base">
                  Berita dan informasi terbaru
                </span>
              </h2>
              <Flowbite theme={{ theme: customButtonTheme }}>
                <Button color="dark-gray" size="lg">
                  Lihat Semua
                </Button>
              </Flowbite>
            </div>

            <div className="divide-y divide-solid divide-gray-400">
              {
              notice.map((notice, i) => (
                <Notice
                  key={i}
                  title={notice.headNotice}
                  date={notice.date}
                  subtitle={notice.descNotice}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
