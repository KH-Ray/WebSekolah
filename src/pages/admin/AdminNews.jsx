import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { Button, Flowbite, Spinner } from "flowbite-react";
import newsServices from "../../services/news";
import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { customButtonTheme } from "../../themes/flowbiteThemes";
import { Modal } from "flowbite-react";
import { Link } from "react-router-dom";

const modalValidation = (openModal, setOpenModal) => {
  return (
    <Modal
      dismissible
      show={openModal}
      onClose={() => setOpenModal(false)}
      size="md"
    >
      <Modal.Body>
        <div className="px-8 py-2 font-poppins">
          <p className="mb-6 text-center text-xl">
            Apakah anda yakin mengisi dengan benar?
          </p>
          <div className="flex items-center justify-center gap-8">
            <button className="bg-dark-green-sec h-full w-full rounded-lg px-8 py-4 text-white">
              Simpan
            </button>
            <button
              className="h-full w-full rounded-lg border border-solid border-black px-8 py-4"
              onClick={() => setOpenModal(false)}
            >
              Batal
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const addNewsPage = (openModal, setAddNews, setOpenModal) => {
  return (
    <main className="h-screen overflow-auto px-24 py-6 font-poppins">
      <div className="focus-visible:border-none">
        {modalValidation(openModal, setOpenModal)}
      </div>

      <div className="flex flex-col gap-8">
        <div>
          <button
            className="flex items-center gap-4 text-dark-gray hover:cursor-pointer"
            onClick={() => setAddNews(false)}
          >
            <ArrowLeftIcon className="h-6 w-6 fill-dark-gray" /> Kembali
          </button>
        </div>

        <form className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-medium">Gambar Sampul</p>
            <label className="flex h-40 w-full items-center justify-center gap-4 rounded-xl border border-solid border-gray-500 text-3xl text-blue-800 hover:cursor-pointer">
              <input
                type="file"
                accept="image/png, image/jpeg"
                className="hidden"
              />
              <PlusIcon className="h-16 w-16" /> Tambahkan Gambar Sampul
            </label>
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="news title" className="text-2xl font-medium">
              Judul Berita
            </label>
            <input
              type="text"
              name="news title"
              id="news title"
              className="rounded-lg border border-solid border-gray-500"
            />
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="date title" className="text-2xl font-medium">
              Waktu Berita
            </label>
            <input
              type="date"
              name="date title"
              id="date title"
              className="rounded-lg border border-solid border-gray-500"
            />
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="news content" className="text-2xl font-medium">
              Isi Berita
            </label>
            <Editor
              apiKey="o0pzftir0e6adwmb92z8ig9705xxtb5i7kurqh1a3j7q41qe"
              init={{
                plugins:
                  "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
                toolbar:
                  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                resize: false,
                height: "500",
              }}
            />
          </div>

          <Flowbite theme={{ theme: customButtonTheme }}>
            <Button
              color="dark-green-fullWidth"
              size="lg"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setOpenModal(true);
              }}
            >
              Simpan
            </Button>
          </Flowbite>
        </form>
      </div>
    </main>
  );
};

const AdminNews = () => {
  const [addNews, setAddNews] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const news = useQuery({
    queryKey: ["news"],
    queryFn: () => newsServices.getAllNews(),
  });

  if (news.isLoading)
    return (
      <main className="flex h-screen items-center justify-center">
        <div>
          <Spinner size="xl" />
        </div>
      </main>
    );

  if (addNews) {
    return addNewsPage(openModal, setAddNews, setOpenModal);
  }

  return (
    <main className="h-screen overflow-auto px-24 py-6 font-poppins">
      <p className="mb-8 block text-4xl font-semibold">Halaman Berita</p>

      <div className="flex flex-col-reverse gap-4">
        {news.data.map((n) => (
          <Link
            to={`/berita/${n.id}`}
            key={n.id}
            className="relative h-48 w-full overflow-hidden rounded-xl"
          >
            <img
              className="h-full w-full object-cover"
              src={n.imgSrc}
              alt={n.imgAlt}
            />
            <p className="absolute bottom-5 left-5 text-3xl font-bold text-white">
              {n.title}
            </p>
          </Link>
        ))}

        <div
          className="flex h-40 w-full items-center justify-center gap-4 rounded-xl border border-solid border-gray-500 text-3xl text-blue-800 hover:cursor-pointer"
          onClick={() => setAddNews(true)}
        >
          <PlusIcon className="h-16 w-16" /> Tambahkan Berita
        </div>
      </div>
    </main>
  );
};

export default AdminNews;
