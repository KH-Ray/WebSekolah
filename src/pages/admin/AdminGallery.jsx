import { Button, Flowbite, Spinner } from "flowbite-react";
import { customButtonTheme } from "../../themes/flowbiteThemes";
import {
  ArrowLeftIcon,
  PhotoIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import galleryServices from "../../services/gallery";
import Box from "../../components/PhotoBox";
import { useState } from "react";

const addPicturePage = (galleries, showDeleteButton) => {
  return (
    <form className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <label htmlFor="gallery title" className="text-2xl font-medium">
          Judul Berita
        </label>
        <input
          type="text"
          name="gallery title"
          id="gallery title"
          className="rounded-lg border border-solid border-gray-500"
        />
      </div>

      <div className="flex flex-wrap gap-8">
        {galleries.data.map((gallery) => {
          return (
            <div
              key={gallery.id}
              className="flex h-44 w-64 flex-col items-center justify-center gap-2 rounded border border-solid border-black"
            >
              <PhotoIcon className="h-16 w-16" />
              <p className="capitalize">{gallery.title}</p>
            </div>
          );
        })}
      </div>

      <label className="mb-8 flex h-16 w-64 items-center justify-center gap-2 rounded bg-[#d9d9d9] text-lg text-[#7f7f7f] hover:cursor-pointer">
        <input type="file" className="hidden" />
        <PlusIcon className="h-8 w-8" /> Pilih Gambar
      </label>

      <div className="flex justify-end gap-4">
        {showDeleteButton && (
          <button className="h-16 w-48 rounded-lg border border-solid border-black px-8 py-4">
            Hapus
          </button>
        )}
        <Flowbite theme={{ theme: customButtonTheme }}>
          <Button color="dark-green" size="lg">
            Simpan
          </Button>
        </Flowbite>
      </div>
    </form>
  );
};

const AdminGallery = () => {
  const [showPicturePage, setShowPicturePage] = useState(false);
  const [deleteButton, setDeleteButton] = useState(false);

  const galleries = useQuery({
    queryKey: ["gallery"],
    queryFn: () => galleryServices.getAllGalleryPicture(),
  });

  if (galleries.isLoading)
    return (
      <main className="flex max-h-full min-h-screen items-center justify-center">
        <div>
          <Spinner size="xl" />
        </div>
      </main>
    );

  return (
    <main className="max-h-full min-h-screen p-12 font-poppins">
      <div className="h-full">
        {!showPicturePage ? (
          <>
            <h1 className="mb-8 block max-w-7xl text-4xl font-semibold">
              Halaman Galeri
            </h1>

            <div className="mx-auto my-12 max-w-7xl">
              <div className="grid grid-cols-1 content-between gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {galleries.data.map((gallery) => {
                  return (
                    <div
                      key={gallery.id}
                      className="flex cursor-pointer flex-col items-center gap-4"
                      onClick={() => {
                        setDeleteButton(true);
                        setShowPicturePage(true);
                      }}
                    >
                      <Box styles="h-52 w-52"></Box>
                      <p className="text-xl font-medium">{gallery.title}</p>
                    </div>
                  );
                })}

                <div className="flex flex-col items-center gap-4">
                  <div
                    className="flex h-52 w-52 items-center justify-center rounded-xl border border-solid border-gray-600 text-blue-800 hover:cursor-pointer"
                    onClick={() => {
                      setDeleteButton(false);
                      setShowPicturePage(true);
                    }}
                  >
                    <PlusIcon className="h-16 w-16" />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mb-8">
              <button
                className="flex items-center gap-4 text-dark-gray hover:cursor-pointer"
                onClick={() => setShowPicturePage(false)}
              >
                <ArrowLeftIcon className="h-6 w-6 fill-dark-gray" /> Kembali
              </button>
            </div>
            {addPicturePage(galleries, deleteButton)}
          </>
        )}
      </div>
    </main>
  );
};

export default AdminGallery;
