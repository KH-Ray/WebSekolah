import { Button, Flowbite } from "flowbite-react";
import { customButtonTheme } from "../../themes/flowbiteThemes";

const AdminRabuCeria = () => {
  return (
    <main className="h-screen p-12 font-poppins">
      <div className="h-full">
        <label className="mb-4 block font-semibold" htmlFor="rabuceria">
          Rabu Ceria
        </label>
        <textarea
          id="rabuceria"
          name="rabuceria"
          className="mb-6 h-3/4 w-full resize-none rounded"
        ></textarea>

        <div className="flex">
          <div className="ml-auto">
            <Flowbite theme={{ theme: customButtonTheme }}>
              <Button color="dark-gray" size="lg">
                Simpan
              </Button>
            </Flowbite>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminRabuCeria;
