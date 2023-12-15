import { PlusIcon } from "@heroicons/react/24/outline";
import Box from "../../components/PhotoBox";

const AdminExtracurricular = () => {
  const extracurriculars = [
    {
      favorite: [{ name: "teater" }],
      optional: [
        { name: "taekwondo" },
        { name: "al-quran" },
        { name: "silat lanjutan" },
        { name: "basket" },
        { name: "english club" },
        { name: "bulu tangkis" },
        { name: "futsal" },
      ],
    },
  ];

  return (
    <main className="font-poppins">
      <div className="mx-auto my-12 flex max-w-7xl flex-col gap-8 px-4 lg:px-6">
        <div>
          <h2 className="mb-8 text-2xl font-semibold">
            Ekstrakurikuler Favorit
          </h2>

          <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 xl:grid-cols-4">
            {extracurriculars[0].favorite.map((e, i) => (
              <Box
                key={i}
                styles="w-48 h-48 flex items-center justify-center text-white text-2xl capitalize"
              >
                {e.name}
              </Box>
            ))}

            <div className="flex h-48 w-48 items-center justify-center rounded-xl border border-solid border-gray-600 text-blue-800 hover:cursor-pointer">
              <PlusIcon className="h-16 w-16" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-2xl font-semibold">
            Ekstrakurikuler Pilihan
          </h2>
          <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 xl:grid-cols-4">
            {extracurriculars[0].optional.map((e, i) => (
              <Box
                key={i}
                styles="w-48 h-48 flex items-center justify-center text-white text-2xl capitalize"
              >
                {e.name}
              </Box>
            ))}

            <div className="flex h-48 w-48 items-center justify-center rounded-xl border border-solid border-gray-600 text-blue-800 hover:cursor-pointer">
              <PlusIcon className="h-16 w-16" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminExtracurricular;
