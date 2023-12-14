import { Button, Flowbite } from "flowbite-react";
import { customButtonTheme } from "../../themes/flowbiteThemes";

const AdminLearning = () => {
  return (
    <main className="h-screen p-12 font-poppins">
      <div className="h-full">
        <label className="mb-4 block font-semibold" htmlFor="organisasi">
          Perorganisasian Pembelajaran
        </label>
        <textarea
          id="organisasi"
          name="organisasi"
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

export default AdminLearning;
