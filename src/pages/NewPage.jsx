import { useQuery } from "@tanstack/react-query";
import newsServices from "../services/news";
import { useParams } from "react-router-dom";
import { Spinner } from "flowbite-react";

const newPage3 = () => {
  return (
    <>
      <p>
        Kegiatan MPLS 11-13 Juli 2022 yang diselenggarakan oleh sekolah pada
        Peserta Didik SMP Bakti Idhata.
      </p>

      <p>
        Peserta didik SMP Bakti Idhata cilandak, Jakarta Selatan melaksanakan
        kegiatan Masa Pengenalan Lingkungan Sekolah (MPLS) yang memang setiap
        tahun ajaran baru selalu dilaksanakan. Hal ini dimaksudkan untuk
        membantu peserta didik baru dalam pengenalan lingkungan sekolah yang
        akan mereka tempati selama 3 tahun kedepan. Kegiatan ini dilaksanakan
        pada 11-13 Juli 2022, kegiatan tersebut berisi berbagai macam program
        dan acara, seperti Tata Tertib Sekolah, Tata Krama Peserta didik, PHBS,
        Pendidikan Karakter, dan tidak lupa peserta didik di ajak berkeliling
        lingkungan sekolah oleh OSIS SMP Bakti Idhata.
      </p>

      <div className="flex gap-2">
        <img src="https://i.ibb.co/kJ6KxtM/image-31.png" alt="" />
        <img src="https://i.ibb.co/qCn8g1m/image-30.png" alt="" />
      </div>

      <p>
        Adapun salah satu program di MPLS tersebut merupakan PHBS (Pola Hidup
        Bersih dan Sehat) Bersama Puskesmas Cilandak yang bekerja sama dengan
        SMP Bakti Idhata untuk menanamkan nilai nilai PHBS dalam kehidupan di
        lingkungan sekolah. Tujuan program tersebut menjadikan peserta didik
        memiliki perilaku Kesehatan yang dilakukan karena kesadaran pribadi
        sehingga keluarga dan seluruh anggotanya mampu menolong diri sendiri
        pada bidang Kesehatan serta memiliki peran aktif dalam Masyarakat.
      </p>

      <p>
        Selain itu, peserta didik di paparkan mengenai pendidikan karakter oleh
        salah satu guru SMP Bakti Idhata Ibu Hilyati, M.Pd. pendidikan karakter
        ini berisi mengenai pergaulan bebas, kekerasan anak-anak dan remaja,
        perundungan dan masih banyak lainnya. Pendidikan karakter itu sendiri
        adalah cara berpikir dan berperilaku yang menjadi ciri khas tiap
        individu untuk hidup dan bekerja sama, baik dalam lingkup keluarga,
        Masyarakat, bangsa, maupun negara. Tujuan dalam pendidikan karakter ini
        menjadikan peserta didik menjadi pribadi yang Religiositas,
        Nasionalisme, Kemandirian, Gotong Royong, dan berintegritas.
      </p>

      <p>
        SMP Bakti Idhata akan menjadi rumah kedua bagi peserta didik maka dari
        itu kami berkomitmen untuk menjadi peserta didik sesuai dengan profil
        pelajar Pancasila dan peserta didik akan merasa nyaman. "Setiap hari
        sekolah adalah kesempatan untuk menghargai ilmu pengetahuan dan bertemu
        dengan teman-teman baru. Nikmatilah perjalanan ini dengan senyuman!"
        ucap ibu hilyati , (Jakarta 20 Desember 2023).
      </p>
    </>
  );
};

const newPage4 = () => {
  return (
    <>
      <p>
        Kegiatan LDKS 23-24 September 2022 yang diselenggarakan oleh sekolah
        pada Peserta Didik SMP Bakti Idhata. LDKS merupakan sebuah Latihan dasar
        yang menjadi satu program kerja kesiswaan . biasanya diadakan setelah
        reorganisasi pengurus OSIS dipilih ataupun mencari reorganisasi itu
        sendiri. LDKS SMP Bakti Idhata kali ini dilaksanakan di lingkungan
        sekolah dan LDKS tersebut berkolaborasi dengan SMPN 86. Kegiatan ini
        diselenggarakan pada 23&24 September 2022 di SMP Bakti Idhata. Dalam
        diselenggarakannya LDKS ini bertujuan untuk membentuk kepribadian para
        peserta didik yang matang untuk menjadi pemimpin yang berkarakter,
        demokrasi, kreatif dan inovatif. Kegiatan ini diisi oleh berbagai macam
        materi, seperti tentang kepemimpinan, manajemen waktu, PBB, renungan
        malam dan juga keorganisasian. Harapannya dengan materi ini ke depan
        akan tercipta calon-calon pemimpin yang tanguh dan berkarakter sesuai
        dengan profil pelajar Pancasila.
      </p>

      <div className="flex justify-center">
        <img src="https://i.ibb.co/vx7Gyz6/image-37.png" alt="" />
      </div>

      <p>
        Salah satu materi yang disampaikan pada LDKS ini adalah materi
        kepemimpinan yang disampaikan langsung oleh kesiswaan yaitu Pak Gusnul,
        S.Ikom. "Anda mendapatkan kekuatan, keberanian, dan kepercayaan diri
        dari setiap pengalaman yang membuat Anda benar-benar berhenti menatap
        ketakutan. Anda harus melakukan hal yang Anda pikir tidak dapat Anda
        lakukan." Ucap pak gusnul dari kutipan Eleanor Roosevelt. Diharapkan
        peserta didik mampu menyerap materi dengan maksimal, dan mengamalkannya,
        kemudian menyebarkan kepada peserta didik lain sehingga tercapai
        karakter peserta didik SMP Bakti Idhata yang berakhlak mulia, kreatif,
        berkepribadian Tangguh, mandiri, dan menjunjung tinggi budaya bangsa
        sesuai dengan visi SMP Bakti Idhata. (Jakarta, 20 desember 2023).
      </p>

      <div className="flex justify-center">
        <img src="https://i.ibb.co/WB2zYwH/image-34.png" alt="" />
      </div>
    </>
  );
};

const NewPage = () => {
  const id = useParams().id;

  const news = useQuery({
    queryKey: ["news"],
    queryFn: () => newsServices.getAllNews(),
  });

  if (news.isLoading)
    return (
      <main className="flex h-screen items-center justify-center">
        <div>
          <Spinner size="xl" />
        </div>
      </main>
    );

  const currentNew = news.data.find((n) => n.id === Number(id));

  const currentNewContent = () => {
    if (Number(id) === 3) return newPage3();
    if (Number(id) === 4) return newPage4();

    return (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam eum
        facilis autem quisquam ea eos amet laborum voluptatibus? Unde deleniti
        repudiandae odio consectetur fuga iusto reiciendis minus quasi sed
        voluptatibus eos illum magni nihil nesciunt eligendi adipisci blanditiis
        fugiat laborum, sit error aspernatur fugit quis consequuntur?
        Perferendis distinctio sunt odio nihil ad dolore quos dignissimos
        officia excepturi atque reprehenderit veritatis corporis ullam nostrum,
        inventore minus explicabo? Vero voluptatem quos at iure animi inventore
        autem omnis maxime eos! Iusto veniam ea earum nihil, labore illo eos
        qui, provident veritatis autem aperiam. Atque iure iste officiis, vitae
        nam corrupti ipsam debitis deleniti.
      </div>
    );
  };

  return (
    <main className="font-poppins">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          className="h-full w-full object-cover brightness-50"
          src={currentNew.imgSrc}
          alt={currentNew.imgAlt}
        />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
          <h1 className="absolute bottom-5 text-3xl font-bold text-white">
            {currentNew.title}
          </h1>
        </div>
      </div>

      <article className="mx-auto my-12 flex max-w-7xl flex-col gap-6 px-4 text-justify leading-6 lg:px-6">
        {currentNewContent()}
      </article>
    </main>
  );
};

export default NewPage;
