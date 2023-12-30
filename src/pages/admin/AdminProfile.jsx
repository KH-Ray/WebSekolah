import { Button, Flowbite } from "flowbite-react";
import { customButtonTheme } from "../../themes/flowbiteThemes";
import { Editor } from "@tinymce/tinymce-react";
import { PlusIcon } from "@heroicons/react/24/outline";

const AdminProfile = () => {
  return (
    <main className="h-screen overflow-auto p-12 font-poppins">
      <h1 className="mb-8 block text-4xl font-semibold">
        Halaman Profil Sekolah
      </h1>
      <div className="flex h-full flex-col gap-2">
        <div className="h-full">
          <p className="mb-4 block font-semibold" htmlFor="rabuceria">
            Kata Pengantar
          </p>
          <div className="mb-8">
            <Editor
              apiKey="o0pzftir0e6adwmb92z8ig9705xxtb5i7kurqh1a3j7q41qe"
              init={{
                plugins:
                  "tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
                toolbar:
                  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                tinycomments_mode: "embedded",
                tinycomments_author: "Author name",
                resize: false,
                height: "500",
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
        </div>
        <div className="h-full">
          <p className="mb-4 block font-semibold" htmlFor="rabuceria">
            Visi dan Misi
          </p>
          <div className="mb-8">
            <Editor
              apiKey="o0pzftir0e6adwmb92z8ig9705xxtb5i7kurqh1a3j7q41qe"
              init={{
                plugins:
                  "tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
                toolbar:
                  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                tinycomments_mode: "embedded",
                tinycomments_author: "Author name",
                resize: false,
                height: "500",
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
        </div>
        <div className="h-full">
          <p className="mb-4 block font-semibold" htmlFor="rabuceria">
            Struktur Organisasi
          </p>
          <div className="mb-8">
            <div className="flex h-96 w-full items-center justify-center rounded-lg border-2 border-solid border-gray-200/75 hover:cursor-pointer">
              <p className="flex items-center gap-4 text-3xl font-medium text-blue-800">
                {<PlusIcon className="h-6 w-6" />} Tambahkan Gambar
              </p>
            </div>
          </div>
        </div>

        <div className="ml-auto pb-6">
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
