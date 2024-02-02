import { useQuery } from "@tanstack/react-query";
import annoucementServices from "../../services/announcements";
import Notice from "../../components/Notice";
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Modal, Spinner } from "flowbite-react";
import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import fileServices from "../../services/files";
import { customButtonTheme } from "../../themes/flowbiteThemes";
import { Button, Flowbite } from "flowbite-react";

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
            <button className="h-full w-full rounded-lg bg-semi-green px-8 py-4 text-white">
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

const addAnnoucementPage = (
  files,
  openModal,
  setOpenModal,
  setAddAnnouncement,
) => {
  return (
    <main className="h-screen overflow-auto px-24 py-6 font-poppins">
      <div className="focus-visible:border-none">
        {modalValidation(openModal, setOpenModal)}
      </div>

      <div className="flex flex-col gap-8">
        <div>
          <button
            className="flex items-center gap-2 text-dark-gray hover:cursor-pointer"
            onClick={() => setAddAnnouncement(false)}
          >
            <ArrowLeftIcon className="h-6 w-6 fill-dark-gray" /> Kembali
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

            <label className="mb-8 flex h-16 w-64 items-center justify-center gap-2 rounded bg-[#d9d9d9] text-lg text-[#7f7f7f] hover:cursor-pointer">
              <input type="file" className="hidden" />
              <PlusIcon className="h-8 w-8" /> Pilih Dokumen
            </label>

            <Flowbite theme={{ theme: customButtonTheme }}>
              <Button
                color="border-semi-green"
                size="lg"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenModal(true);
                }}
              >
                Simpan
              </Button>
            </Flowbite>
          </div>
        </form>
      </div>
    </main>
  );
};

const AdminAnnouncement = () => {
  const [addAnnoucement, setAddAnnouncement] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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
    return addAnnoucementPage(
      files,
      openModal,
      setOpenModal,
      setAddAnnouncement,
    );
  }

  return (
    <main className="h-screen overflow-auto px-24 py-6 font-poppins">
      <p className="mb-8 block text-4xl font-semibold">Halaman Pengumuman</p>

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
