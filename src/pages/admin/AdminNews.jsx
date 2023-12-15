import { PlusIcon } from "@heroicons/react/24/outline";
import FotoGedung from "../../images/foto-gedung-2.jpg";

const AdminNews = () => {
  const news = [
    { title: "Headline Berita #1" },
    { title: "Headline Berita #2" },
    { title: "Headline Berita #3" },
    { title: "Headline Berita #4" },
  ];

  return (
    <main className="h-screen overflow-auto px-24 py-6 font-poppins">
      <div className="flex flex-col-reverse gap-4">
        {news.map((n, i) => (
          <div
            key={i}
            className="relative h-40 w-full overflow-hidden rounded-xl"
          >
            <img src={FotoGedung} alt="Foto Gedung" />
            <p className="absolute bottom-5 left-5 text-3xl font-bold text-white">
              {n.title}
            </p>
          </div>
        ))}

        <div className="flex h-40 w-full items-center justify-center gap-4 rounded-xl border border-solid border-gray-500 text-3xl text-blue-800 hover:cursor-pointer">
          <PlusIcon className="h-16 w-16" /> Tambahkan Berita
        </div>
      </div>
    </main>
  );
};

export default AdminNews;
