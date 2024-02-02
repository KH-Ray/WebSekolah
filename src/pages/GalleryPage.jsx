import { useQuery } from "@tanstack/react-query";
import galleryServices from "../services/gallery";
import Box from "../components/PhotoBox";
import { Spinner } from "flowbite-react";
import { PlusIcon } from "@heroicons/react/24/outline";

const GalleryPage = () => {
  const galleries = useQuery({
    queryKey: ["gallery"],
    queryFn: () => galleryServices.getAllGalleryPicture(),
  });

  if (galleries.isLoading)
    return (
      <main className="flex h-screen items-center justify-center">
        <div>
          <Spinner size="xl" />
        </div>
      </main>
    );

  return (
    <main className="font-poppins">
      <div className="bg-main-gray">
        <div className="mx-auto flex h-96 max-w-7xl flex-col items-start justify-center gap-4 px-4 lg:px-6">
          <h1 className="text-6xl font-semibold uppercase">galeri</h1>
          <p className="text-lg lg:text-xl">Beranda - Galeri</p>
        </div>
      </div>

      <div className="mx-auto my-12 max-w-7xl px-4 lg:px-6">
        <div className="grid grid-cols-1 content-between gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleries.data.map((gallery) => {
            return (
              <div
                key={gallery.id}
                className="flex flex-col items-center gap-4"
              >
                <Box styles="h-64 w-64"></Box>
                <p className="text-xl font-medium">{gallery.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default GalleryPage;
