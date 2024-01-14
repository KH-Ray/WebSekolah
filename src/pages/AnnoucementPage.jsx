import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import annoucementServices from "../services/announcements";
import fileServices from "../services/files";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "flowbite-react";
import { useParams } from "react-router-dom";

const announcementPage1 = () => {
  return (
    <div className="space-y-6">
      <p>Assalamu’alaikum Warahmatullahi Wabarakatuh </p>
      <p>
        Teriring salam dan doa kami sampaikan semoga Bapak/Ibu beserta keluarga
        diberikan kekuatan dan kesehatan, selalu mendapatkan rahmat dan hidayah
        dari Allah SWT. Aamiin. Sehubungan dengan adanya kegiatan Rapat Kerja
        guru pada hari Rabu - Jumat, tanggal 3 s.d. 5 Januari 2024, maka
        disampaikan untuk kelas VII (tujuh), VIII (delapan) dan IX (Sembilan)
        aktivitas belajar dari rumah (BDR). Adapun tugas akan disampaikan
        melalui Wali Kelas masingmasing. Demikian Informasi ini kami sampaikan,
        atas perhatian dan kerjasamanya kami mengucapkan terimakasih.
      </p>
      <p>Wassalamu’alaikum Warahmatullahi Wabarakatuh.</p>
    </div>
  );
};

const AnnoucementPage = () => {
  const id = useParams().id;

  const annoucements = useQuery({
    queryKey: ["annoucements"],
    queryFn: () => annoucementServices.getAllAnnoucement(),
  });

  const files = useQuery({
    queryKey: ["files"],
    queryFn: () => fileServices.getAllFile(),
  });

  if (annoucements.isLoading || files.isLoading)
    return (
      <main className="flex h-screen items-center justify-center">
        <div>
          <Spinner size="xl" />
        </div>
      </main>
    );

  const currentAnnoucement = annoucements.data.find((a) => a.id === Number(id));

  const currentNewContent = () => {
    if (Number(id) === 1) return announcementPage1();

    return (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
        perferendis magnam rem quod accusamus illum necessitatibus nemo fugiat,
        impedit repellat nesciunt natus voluptas dolores similique officia sint
        quidem ab dolore soluta neque sapiente. Non distinctio sit tenetur
        quisquam quidem itaque sint earum quia eligendi suscipit eos, aliquid
        nihil quas inventore odit omnis! Dolorum qui, voluptas itaque iure
        cumque quaerat harum hic et a repellendus mollitia dolore numquam
        doloribus iste ipsum totam impedit sequi. Amet necessitatibus distinctio
        facere officiis beatae excepturi illum enim, impedit maxime. Praesentium
        odit ut asperiores ex incidunt voluptatibus illo minus maiores expedita
        inventore. Dolores excepturi veniam deleniti.
      </div>
    );
  };

  return (
    <main className="font-poppins">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          className="h-full w-full object-cover brightness-50"
          src="https://i.ibb.co/6tKXXbV/foto-gedung-2.jpg"
          alt="Gambar Pengumuman"
        />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
          <h1 className="absolute bottom-5 text-3xl font-bold text-white">
            {currentAnnoucement.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto mb-12 mt-4 flex max-w-7xl flex-col gap-6 px-4 text-justify leading-6 lg:px-6">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <CalendarDaysIcon className="h-6 w-6" />
          <div>{currentAnnoucement.date}</div>
        </div>

        {currentNewContent()}

        <div className="flex flex-wrap gap-8">
          {files.data.map((f) => {
            if (f.id !== 1) return;

            return (
              <div
                key={f.id}
                className="flex h-44 w-64 flex-col items-center justify-center gap-2 rounded border border-solid border-black"
              >
                <img src={f.type} alt="document image" className="h-20 w-20" />
                <p className="capitalize">{f.name}</p>
              </div>
            );
          })}
        </div>

        <button className="w-36 rounded-lg bg-dark-green px-8 py-4 text-white">
          Unduh
        </button>
      </div>
    </main>
  );
};

export default AnnoucementPage;
