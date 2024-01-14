import PhotoBox from "../../components/PhotoBox";
import NewsCard from "../../components/NewsCard";
import Notice from "../../components/Notice";

import { Button, Flowbite, Spinner } from "flowbite-react";
import { customButtonTheme } from "../../themes/flowbiteThemes";
import { Carousel } from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/outline";

import { useQuery } from "@tanstack/react-query";
import annoucementServices from "../../services/announcements";
import newsServices from "../../services/news";
import pictureServices from "../../services/pictures";
import { Link } from "react-router-dom";

const AdminHome = () => {
  const news = useQuery({
    queryKey: ["news"],
    queryFn: () => newsServices.getAllNews(),
  });

  const announcements = useQuery({
    queryKey: ["annoucements"],
    queryFn: () => annoucementServices.getAllAnnoucement(),
  });

  const pictures = useQuery({
    queryKey: ["picture"],
    queryFn: () => pictureServices.getAllPicture(),
  });

  if (announcements.isLoading || news.isLoading || pictures.isLoading)
    return (
      <main className="flex h-screen items-center justify-center">
        <div>
          <Spinner size="xl" />
        </div>
      </main>
    );

  return (
    <main className="p-6 font-poppins">
      <div>
        <h1 className="mb-8 block text-4xl font-semibold">Halaman Berita</h1>

        <Carousel className="h-[153px] overflow-hidden md:h-[306px] lg:h-[408px] xl:h-[612px]">
          {pictures.data.map((p) => (
            <img
              key={p.id}
              src={p.src}
              alt="Carousel image"
              className="h-[153px] w-full object-cover md:h-[306px] lg:h-[408px] xl:h-[612px]"
            />
          ))}
        </Carousel>

        <p className="mt-4 flex items-center gap-4 font-medium text-blue-800 hover:cursor-pointer">
          {<PlusIcon className="h-6 w-6" />} Tambahkan Gambar
        </p>
      </div>

      <div className="space-y-32">
        <div className="max-w-7xl space-y-32 px-12 pt-12 lg:mx-auto">
          <div>
            <div className="mb-4 grid grid-cols-[250px_1fr] grid-rows-[250px] gap-8 xl:grid-cols-[1fr_2fr]">
              <PhotoBox styles="text-white xl:text-3xl text-xl flex items-center justify-center">
                Foto Kepala Sekolah
              </PhotoBox>
              <div className="h-full w-full">
                <textarea
                  className="h-full w-full resize-none rounded-xl focus:border-main-blue"
                  placeholder="Sambutan Selamat Datang"
                ></textarea>
              </div>
            </div>

            <div className="flex">
              <div className="ml-auto">
                <Flowbite theme={{ theme: customButtonTheme }}>
                  <Button color="dark-green" size="lg">
                    Simpan
                  </Button>
                </Flowbite>
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

            <div className="mx-auto flex flex-col items-center gap-6 md:grid md:grid-cols-2 xl:grid-cols-4">
              {news.data.map((n) => (
                <NewsCard
                  key={n.id}
                  id={n.id}
                  title={n.title}
                  subtitle={n.subtitle}
                  imgSrc={n.imgSrc}
                  imgAlt={n.imgAlt}
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
              <Link to="/pengumuman">
                <Flowbite theme={{ theme: customButtonTheme }}>
                  <Button color="dark-green" size="lg">
                    Lihat Semua
                  </Button>
                </Flowbite>
              </Link>
            </div>

            <div className="divide-y divide-solid divide-gray-400">
              {announcements.data.map((a) => (
                <div key={a.id}>
                  <Link to={`/pengumuman/${a.id}`}>
                    <Notice
                      title={a.title}
                      date={a.date}
                      subtitle={a.subtitle}
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

export default AdminHome;
