import { Button, Flowbite } from "flowbite-react";
import { customButtonTheme } from "../../themes/flowbiteThemes";
import { Editor } from "@tinymce/tinymce-react";

const AdminLearning = () => {
  return (
    <main className="h-screen p-12 font-poppins">
      <div className="h-full">
        <p className="mb-6 block text-4xl font-semibold">
          Halaman Program Kerja
        </p>
        <p className="mb-4 block font-semibold" htmlFor="rabuceria">
          Perorganisasian Pembelajaran
        </p>
        <div className="mb-6">
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

        <div className="flex">
          <div className="ml-auto">
            <Flowbite theme={{ theme: customButtonTheme }}>
              <Button color="dark-green" size="lg">
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
