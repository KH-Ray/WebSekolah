import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import FotoGedung from "../../images/foto-gedung-2.jpg";
import { useQuery } from "@tanstack/react-query";
import { Button, Flowbite, Spinner } from "flowbite-react";
import newsServices from "../../services/news";
import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { customButtonTheme } from "../../themes/flowbiteThemes";

const addNewsPage = (setAddNews) => {
  return (
    <main className="h-screen overflow-auto px-24 py-6 font-poppins">
      <div className="flex flex-col gap-8">
        <div className="text-gray-blue">
          <button
            className="flex items-center gap-4 hover:cursor-pointer"
            onClick={() => setAddNews(false)}
          >
            <ArrowLeftIcon className="h-6 w-6" /> Kembali
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
              className="rounded-xl border border-solid border-gray-500"
            />
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="news content" className="text-2xl font-medium">
              Isi Berita
            </label>
            <Editor
              id="news content"
              name="news content"
              apiKey="o0pzftir0e6adwmb92z8ig9705xxtb5i7kurqh1a3j7q41qe"
              init={{
                plugins:
                  "tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
                toolbar:
                  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                tinycomments_mode: "embedded",
                tinycomments_author: "Author name",
                resize: false,
                height: "550",
                mergetags_list: [
                  { value: "First.Name", title: "First Name" },
                  { value: "Email", title: "Email" },
                ],
                ai_request: (request, respondWith) =>
                  respondWith.string(() =>
                    Promise.reject("See docs to implement AI Assistant"),
                  ),
              }}
            />
          </div>

          <Flowbite theme={{ theme: customButtonTheme }}>
            <Button color="dark-gray-fullWidth" size="lg" type="submit">
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
    return addNewsPage(setAddNews);
  }

  return (
    <main className="h-screen overflow-auto px-24 py-6 font-poppins">
      <p className="mb-8 block text-4xl font-semibold">Halaman Berita</p>

      <div className="flex flex-col-reverse gap-4">
        {news.data.map((n) => (
          <div
            key={n.id}
            className="relative h-40 w-full overflow-hidden rounded-xl"
          >
            <img src={FotoGedung} alt="Foto Gedung" />
            <p className="absolute bottom-5 left-5 text-3xl font-bold text-white">
              {n.title}
            </p>
          </div>
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
