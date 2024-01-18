import { Button, Flowbite, Spinner } from "flowbite-react";
import { customButtonTheme } from "../../themes/flowbiteThemes";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import galleryServices from "../../services/gallery";

const AdminGallery = () => {
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
    <main className="h-screen p-12 font-poppins">
      <div className="h-full">
        <h1 className="mb-8 block text-4xl font-semibold">Halaman Galeri</h1>

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

          <div className="ml-auto">
            <Flowbite theme={{ theme: customButtonTheme }}>
              <Button color="border-semi-green-fixedWidth" size="lg">
                Simpan
              </Button>
            </Flowbite>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AdminGallery;
