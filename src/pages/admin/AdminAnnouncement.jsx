import { useQuery } from "@tanstack/react-query";
import annoucementServices from "../../services/announcements";
import Notice from "../../components/Notice";
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Spinner } from "flowbite-react";
import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import fileServices from "../../services/files";

const addAnnoucementPage = (files, setAddAnnouncement) => {
  return (
    <main className="h-screen overflow-auto px-24 py-6 font-poppins">
      <div className="flex flex-col gap-8">
        <div className="text-gray-blue">
          <button
            className="flex items-center gap-2 hover:cursor-pointer"
            onClick={() => setAddAnnouncement(false)}
          >
            <ArrowLeftIcon className="h-6 w-6" /> Kembali
          </button>
        </div>

        <form className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <label
              className="text-2xl font-medium"
              htmlFor="announcement content"
            >
              Isi Pengumuman
            </label>
            <Editor
              id="announcement content"
              name="announcement content"
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

          <div className="flex flex-col gap-4">
            <p className="text-2xl font-medium">Unggah Dokumen</p>

            <div className="flex flex-wrap gap-8">
              {files.data.map((f) => {
                return (
                  <div
                    key={f.id}
                    className="flex h-44 w-64 flex-col items-center justify-center gap-2 rounded border border-solid border-black"
                  >
                    <img
                      src={f.type}
                      alt="document image"
                      className="h-20 w-20"
                    />
                    <p className="capitalize">{f.name}</p>
                  </div>
                );
              })}
            </div>

            <label className="flex h-16 w-64 items-center justify-center gap-2 rounded bg-gray-400 text-lg text-white hover:cursor-pointer hover:bg-gray-500">
              <input type="file" className="hidden" />
              <PlusIcon className="h-8 w-8" /> Pilih Dokumen
            </label>
          </div>
        </form>
      </div>
    </main>
  );
};

const AdminAnnouncement = () => {
  const [addAnnoucement, setAddAnnouncement] = useState(false);

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

  if (addAnnoucement) {
    return addAnnoucementPage(files, setAddAnnouncement);
  }

  return (
    <main className="h-screen overflow-auto px-24 py-6 font-poppins">
      <div
        className="flex h-40 w-full items-center justify-center gap-4 rounded-xl border border-solid border-gray-500 text-3xl text-blue-800 hover:cursor-pointer"
        onClick={() => setAddAnnouncement(true)}
      >
        <PlusIcon className="h-16 w-16" /> Tambahkan Pengumuman
      </div>

      <div className="divide-y divide-solid divide-gray-400">
        {annoucements.data.map((a) => (
          <Notice
            key={a.id}
            title={a.title}
            date={a.date}
            subtitle={a.subtitle}
          />
        ))}
      </div>
    </main>
  );
};

export default AdminAnnouncement;
