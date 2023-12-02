import PhotoBox from "../components/PhotoBox";
import NewsCard from "../components/NewsCard";

import { Button, Flowbite } from "flowbite-react";
import { customButtonTheme } from "../themes/flowbiteThemes";
import { Carousel } from "@material-tailwind/react";
import Notice from "../components/Notice";

import placeholder from "../images/placeholder.png";
import gedung1 from "../images/foto-gedung-1.png";
import gedung2 from "../images/foto-gedung-2.png";

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
    subtitle: "Detail Pengumumuman",
  },
  {
    title: "Headline Pengumuman",
    date: "14 Jan 2024",
    subtitle: "Detail Pengumumuman",
  },
  {
    title: "Headline Pengumuman",
    date: "14 Jan 2024",
    subtitle: "Detail Pengumumuman",
  },
];

const HomePage = () => {
  return (
    <main className="font-poppins">
      <Carousel className="h-[640px] overflow-hidden">
        <img className="w-full" src={gedung1} />
        <img className="w-full" src={gedung2} />
      </Carousel>

      <div className="space-y-32">
        <p className="p-12 pb-0 text-right">Berita</p>

        <div className="mx-auto max-w-7xl space-y-32 lg:px-6">
          <div className="grid h-96 grid-cols-[1fr_2fr] gap-8">
            <PhotoBox styles="text-white text-3xl flex items-center justify-center">
              Foto Kepala Sekolah
            </PhotoBox>
            <PhotoBox styles="text-white text-3xl flex items-center justify-center">
              Sambutan Selamat Datang
            </PhotoBox>
          </div>

          <div>
            <div className="mb-10 flex h-14 justify-between">
              <h2 className="flex flex-col justify-between text-3xl font-bold">
                Berita
                <span className="text-base font-normal text-gray-500">
                  Berita dan informasi terbaru
                </span>
              </h2>
              <Flowbite theme={{ theme: customButtonTheme }}>
                <Button color="dark-gray" size="md">
                  Semua berita
                </Button>
              </Flowbite>
            </div>

            <div className="flex gap-6">
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
            <h2 className="mb-3 text-3xl font-bold">Pengumuman</h2>

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

export default HomePage;
