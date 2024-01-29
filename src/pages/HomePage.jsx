import NewsCard from "../components/NewsCard";
import { Button, Flowbite, Spinner } from "flowbite-react";
import { customButtonTheme } from "../themes/flowbiteThemes";
import { Carousel } from "@material-tailwind/react";
import Notice from "../components/Notice";
import teacherServices from "../services/teachers";
import annoucementServices from "../services/announcements";
import pictureServices from "../services/pictures";
import newsServices from "../services/news";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const HomePage = () => {
  const news = useQuery({
    queryKey: ["news"],
    queryFn: () => newsServices.getAllNews(),
  });

  const annoucements = useQuery({
    queryKey: ["annoucements"],
    queryFn: () => annoucementServices.getAllAnnoucement(),
  });

  const pictures = useQuery({
    queryKey: ["picture"],
    queryFn: () => pictureServices.getAllPicture(),
  });

  const teacher = useQuery({
    queryKey: ["teachers"],
    queryFn: () => teacherServices.getAllTeachers(),
  });

  if (
    annoucements.isLoading ||
    news.isLoading ||
    pictures.isLoading ||
    teacher.isLoading
  )
    return (
      <main className="flex h-screen items-center justify-center">
        <div>
          <Spinner size="xl" />
        </div>
      </main>
    );

  const headmaster = teacher.data[0];

  return (
    <main className="font-poppins">
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

      <div className="space-y-32">
        <div className="max-w-7xl space-y-32 px-12 pt-12 lg:mx-auto">
          <div className="grid h-full grid-cols-1 justify-center gap-8 sm:grid-rows-[384px] md:grid-cols-[384px_1fr]">
            <div className="relative">
              <img
                src={headmaster.image}
                alt="Kepala Sekolah"
                className="h-full w-full rounded-b-xl"
              />
              <div className="absolute bottom-0 z-10 flex w-full flex-col items-center gap-2 rounded-b-xl bg-main-seagreen p-4">
                <p className="text-xl font-semibold">{headmaster.name}</p>
                <p>{headmaster.role}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="z-10 flex w-full drop-shadow sm:w-1/2">
                <div className="w-full whitespace-nowrap rounded-t-xl bg-main-seagreen px-8 py-4 text-xl font-semibold sm:rounded-t-none sm:rounded-tl-xl">
                  SMP Bakti Idhata
                </div>
                <div className="hidden w-full bg-main-seagreen px-8 py-4 sm:block sm:rounded-tr-full"></div>
              </div>
              <div className="h-96 overflow-auto rounded-b-xl bg-light-green px-8 py-4 text-justify leading-6 sm:h-full sm:rounded-tr-xl">
                Memiliki anak cerdas dan siap menjadi generasi emas berkarakter
                merupakan dambaan setiap orang tua. SMP Bakti Idhata berada
                dibawah naungan Yayasan Bakti Idhata, Dharma Wanita Persatuan
                Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi Republik
                Indonesia, siap mewadahinya. Dengan sarana prasarana yang cukup
                baik disertai tenaga kependidikan yang berkualitas menjadi
                pondasi bagi kami untuk melakukan transformasi pembelajaran yang
                berpusat pada peserta didik. Selain itu, membangun masyarakat
                belajar sepanjang hayat yang beriman dan bertakwa pada Tuhan
                YME, berakhlak mulia, serta menjaga keseimbangan kebinekaan
                menjadi pijakan SMP Bakti Idhata untuk melakukan kegiatan
                pendidikan. Hal ini selaras dengan Visi sekolah kami:
                mengintegrasikan proses pendidikan sehingga terwujudnya peserta
                didik yang berakhlak mulia, kreatif, berkepribadian tangguh,
                mandiri, dan menjunjung tinggi budaya bangsa. Saat ini SMP Bakti
                Idhata terus meningkatkan pelayanan bagi masyarakat yang
                menitipkan putra/putrinya di sekolah kami. Berbagai kegiatan
                yang mengedukasi dikemas sesuai dengan kebutuhan dan
                perkembangan peserta didik.
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
              {news.data.slice(0, 4).map((n) => (
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
              {annoucements.data.slice(0, 3).map((a) => (
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

export default HomePage;
