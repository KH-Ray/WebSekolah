import PhotoBox from "../../components/PhotoBox";
import NewsCard from "../../components/NewsCard";

import { Button, Flowbite } from "flowbite-react";
import { customButtonTheme } from "../../themes/flowbiteThemes";
import { Carousel } from "@material-tailwind/react";
import Notice from "../../components/Notice";

import placeholder from "../../images/placeholder.png";
import gedung1 from "../../images/foto-gedung-1.jpg";
import { PlusIcon } from "@heroicons/react/24/outline";

const news = [
  {
    title: "Headline #1",
    subtitle: "Sub-Headline",
    imgSrc: placeholder,
    imgAlt: "placeholder image",
  },
  {
    title: "Headline #2",
    subtitle: "Sub-Headline",
    imgSrc: placeholder,
    imgAlt: "placeholder image",
  },
  {
    title: "Headline #3",
    subtitle: "Sub-Headline",
    imgSrc: placeholder,
    imgAlt: "placeholder image",
  },
  {
    title: "Headline #4",
    subtitle: "Sub-Headline",
    imgSrc: placeholder,
    imgAlt: "placeholder image",
  },
];

const notices = [
  {
    title: "Headline Pengumuman",
    date: "14 Jan 2024",
    subtitle:
      "Detail Pengumumuman -  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut eleifend risus, quis fermentum felis. Aenean lacinia a leo vel volutpat. Donec eu felis augue. Maecenas mattis at justo imperdiet auctor.",
  },
  {
    title: "Headline Pengumuman",
    date: "14 Jan 2024",
    subtitle:
      "Detail Pengumumuman -  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut eleifend risus, quis fermentum felis. Aenean lacinia a leo vel volutpat. Donec eu felis augue. Maecenas mattis at justo imperdiet auctor.",
  },
  {
    title: "Headline Pengumuman",
    date: "14 Jan 2024",
    subtitle:
      "Detail Pengumumuman -  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut eleifend risus, quis fermentum felis. Aenean lacinia a leo vel volutpat. Donec eu felis augue. Maecenas mattis at justo imperdiet auctor.",
  },
];

const AdminHome = () => {
  return (
    <main className="p-6 font-poppins">
      <div>
        <Carousel className="mb-4 h-[76px] w-full overflow-hidden md:h-[153px] lg:h-[306px] xl:h-[408px]">
          <img className="w-full" src={gedung1} />
          <img className="w-full" src={gedung1} />
          <img className="w-full" src={gedung1} />
        </Carousel>

        <p className="flex items-center gap-4 font-medium text-blue-800 hover:cursor-pointer">
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
                  <Button color="dark-gray" size="lg">
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
              <Flowbite theme={{ theme: customButtonTheme }}>
                <Button color="dark-gray" size="lg">
                  Lihat Semua
                </Button>
              </Flowbite>
            </div>

            <div className="mx-auto flex flex-col items-center gap-6 md:grid md:grid-cols-2 xl:grid-cols-4">
              {news.map((n, i) => (
                <NewsCard
                  key={i}
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
              <Flowbite theme={{ theme: customButtonTheme }}>
                <Button color="dark-gray" size="lg">
                  Lihat Semua
                </Button>
              </Flowbite>
            </div>

            <div className="divide-y divide-solid divide-gray-400">
              {notices.map((notice, i) => (
                <Notice
                  key={i}
                  title={notice.title}
                  date={notice.date}
                  subtitle={notice.subtitle}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminHome;
