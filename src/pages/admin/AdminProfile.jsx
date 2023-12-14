import { Button, Flowbite } from "flowbite-react";
import { customButtonTheme } from "../../themes/flowbiteThemes";

const AdminProfile = () => {
  return (
    <main className="h-screen p-12 font-poppins">
      <div className="flex h-full flex-col gap-2">
        <div className="h-full">
          <label className="mb-2 block font-semibold" htmlFor="kata-pengantar">
            Kata Pengantar
          </label>
          <textarea
            id="kata-pengantar"
            name="kata-pengantar"
            className="mb-6 h-3/4 w-full resize-none rounded"
          ></textarea>
        </div>
        <div className="h-full">
          <label className="mb-2 block font-semibold" htmlFor="visi-misi">
            Visi dan Misi
          </label>
          <textarea
            id="visi-misi"
            name="visi-misi"
            className="mb-6 h-3/4 w-full resize-none rounded"
          ></textarea>
        </div>
        <div className="h-full">
          <label
            className="mb-2 block font-semibold"
            htmlFor="struktur-organisasi"
          >
            Struktur Organisasi
          </label>
          <textarea
            id="struktur-organisasi"
            name="struktur-organisasi"
            className="mb-6 h-3/4 w-full resize-none rounded"
          ></textarea>
        </div>

        <div className="ml-auto">
          <Flowbite theme={{ theme: customButtonTheme }}>
            <Button color="dark-gray" size="lg">
              Simpan
            </Button>
          </Flowbite>
        </div>
      </div>
    </main>
  );
};

export default AdminProfile;
