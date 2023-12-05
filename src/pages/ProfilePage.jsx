import { classNames } from "../helper";

const ProfilePage = () => {
  const sections = [
    { title: "Pengantar", current: true },
    { title: "Visi dan Misi", current: false },
    { title: "Struktur Organisasi", current: false },
  ];

  return (
    <main className="font-poppins">
      <div className="bg-main-gray">
        <div className="mx-auto flex h-96 max-w-7xl flex-col items-start justify-center gap-4 px-4 lg:px-6">
          <h1 className="text-6xl font-semibold uppercase">profil sekolah</h1>
          <p className="text-xl">Beranda - Staff Pengajar</p>
        </div>
      </div>

      <div className="mx-auto my-12 flex max-w-7xl flex-col-reverse gap-8 px-4 leading-6 sm:grid sm:grid-cols-[60fr_40fr] sm:gap-0 lg:px-6">
        <div>
          <article>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            eaque consequatur adipisci vitae sint ex maiores perferendis quam
            laborum omnis, rem, exercitationem, inventore cumque fugit animi
            sequi. Adipisci quod blanditiis aliquam itaque temporibus, nesciunt
            illum consequuntur pariatur ducimus? Nihil obcaecati corrupti
            numquam dolore dolorum deserunt, incidunt laborum nulla ipsa,
            tenetur praesentium quod unde eligendi suscipit tempora doloremque,
            reiciendis pariatur? Dignissimos ut sit, voluptate voluptatibus
            veniam odit vero consectetur libero optio laboriosam earum officiis
            eum modi est fuga ducimus placeat aperiam illum porro! Repellat
            veritatis dolore recusandae dolor magni possimus eos quos laudantium
            nesciunt, similique incidunt laborum nemo eius, esse est? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quas eligendi
            consequuntur esse quos quo deleniti impedit, quod, culpa, maxime
            quis sed tempora? Quas a maxime sequi hic? Ad, beatae. Magni iure
            non eos quam enim vero magnam dolorum harum, minus nihil dolorem
            ipsa rem ab est aperiam impedit nam molestiae quis asperiores cumque
            consectetur. Exercitationem voluptatum incidunt quisquam fuga
            explicabo corrupti quaerat, voluptas modi sapiente voluptatem
            deleniti eos iusto repellendus. Quam debitis quaerat modi
            exercitationem. Numquam quisquam iure esse debitis necessitatibus,
            alias temporibus hic dolores sunt veniam blanditiis sit adipisci
            nulla voluptatem? Assumenda corporis iusto harum minima id, nobis
            voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Id quaerat soluta odio ex. Est mollitia fuga obcaecati quibusdam
            cumque, alias ducimus molestias. Perferendis ratione beatae sed?
            Quibusdam assumenda, nisi quos error, saepe voluptatem odit sint
            dolorum blanditiis commodi numquam autem! Eveniet doloribus vero
            aperiam reiciendis doloremque optio ullam repudiandae natus, sequi
            saepe! Error minima in reiciendis aliquid similique qui! In, illum
            labore. Earum quasi nostrum non voluptas repellat vitae deserunt
            tenetur dolore sunt debitis at, ducimus dolor unde adipisci
            praesentium odit, consectetur laudantium. Praesentium est quos rem
            eum officia ipsa ullam, fuga explicabo velit minima tempore modi ea
            exercitationem dolor?
          </article>
        </div>

        <aside className="space-y-2 justify-self-center">
          {sections.map((section, i) => (
            <div key={i} className="flex w-full flex-col">
              <button
                className={classNames(
                  section.current
                    ? "bg-main-blue font-semibold text-white"
                    : "bg-light-blue text-black",
                  "rounded-lg px-12 py-4",
                )}
              >
                {section.title}
              </button>
            </div>
          ))}
        </aside>
      </div>
    </main>
  );
};

export default ProfilePage;
