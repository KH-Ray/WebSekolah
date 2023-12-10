import Box from "../components/PhotoBox";

const ExtracurricularPage = () => {
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
      <div className="bg-main-gray">
        <div className="mx-auto flex h-96 max-w-7xl flex-col items-start justify-center gap-4 px-4 lg:px-6">
          <h1 className="text-4xl font-semibold uppercase lg:text-6xl">
            ekstrakurikuler
          </h1>
          <p className="text-lg lg:text-xl">Beranda - Ekstrakurikuler</p>
        </div>
      </div>

      <div className="mx-auto my-12 flex max-w-7xl flex-col gap-8 px-4 lg:px-6">
        <div>
          <h2 className="mb-8 text-2xl font-semibold">
            Ekstrakurikuler Favorit
          </h2>
          <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 md:gap-y-12 xl:grid-cols-4">
            {extracurriculars[0].favorite.map((e, i) => (
              <Box
                key={i}
                styles="lg:w-64 lg:h-64 sm:w-56 h-56 w-full flex items-center justify-center text-white text-2xl capitalize"
              >
                {e.name}
              </Box>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-2xl font-semibold">
            Ekstrakurikuler Pilihan
          </h2>
          <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 md:gap-y-12 xl:grid-cols-4">
            {extracurriculars[0].optional.map((e, i) => (
              <Box
                key={i}
                styles="lg:w-64 lg:h-64 sm:w-56 h-56 w-full flex items-center justify-center text-white text-2xl capitalize"
              >
                {e.name}
              </Box>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExtracurricularPage;
