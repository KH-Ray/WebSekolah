import { Button, Flowbite, Spinner } from "flowbite-react";
import { customButtonTheme } from "../../themes/flowbiteThemes";
import { PhotoIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import galleryServices from "../../services/gallery";
import { useState, useEffect} from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminGallery = () => {
  const [judulGal, setJudulGal] = useState('');
  const [docGal, setDocGal] = useState('');
  const [msg, setMsg] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('judulGal', judulGal);
    formData.append('docGal', docGal);

    try {
      const response = await axios.post('http://localhost:8080/admin/galeri', formData);

      console.log(response.data);

      if (response.data.Status === 'Success') {
        navigate('/galeri');
        setMsg('File Successfully Uploaded');
      } else {
        setMsg('Error');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      setMsg('Error');
    }
  };

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

          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="gallery title" 
                className="text-2xl font-medium">
                Judul Berita
              </label>
              <input
                type="text"
                name="judulGal"
                onChange={(e) => setJudulGal(e.target.value)}
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
              <input
                type="file"
                name="docGal"
                className="hidden"
                onChange={(e) => setDocGal(e.target.files[0])}/>
              <PlusIcon className="h-8 w-8" /> Pilih Dokumen
            </label>

            <div className="ml-auto">
              <Flowbite theme={{ theme: customButtonTheme }}>
                <Button
                  color="border-semi-green-fixedWidth"
                  size="lg"
                  type="submit">
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
