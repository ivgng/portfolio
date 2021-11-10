<template>
  <div class="max-w-screen-lg mx-auto">
    <main class="py-12">
      <div class="sticky flex flex-no-wrap justify-start px-3 py-2 overflow-x-auto bg-white dark:bg-gray-800 z-5 top-18 md:justify-center">
        <nuxt-link to="#" class="px-3 py-2 mr-2 font-semibold bg-gray-200 border-b-2 border-red-500 rounded-sm shadow">
          <p class="text-sm whitespace-no-wrap">Semua Berita</p>
        </nuxt-link>
        <nuxt-link to="#" class="px-3 py-2 mr-2 font-medium transition-all duration-200 ease-linear bg-gray-100 border-b-2 rounded-sm shadow hover:bg-gray-200 hover:font-semibold hover:border-red-500">
          <span class="text-sm whitespace-no-wrap flex">
            <svg class ="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 349.2 349.2">
            <path d="M337.6 114.25l-139.2-68c-12-6-32.4-6-44.4 0l-142.4 68c-10 4.8-11.6 11.6-11.6 15.2 0 3.6 1.6 10 11.6 15.2l11.6 5.6v64c-7.2 2.8-12.4 10-12.4 18s5.2 15.2 12 18l-18 57.2h50.4l-18-57.2c7.2-2.8 12-10 12-18 0-8.4-5.2-15.2-12.4-18v-57.2l21.2 10.4v83.2c0 1.2.4 2.4 1.2 3.6 2 2.4 39.2 53.2 115.2 53.2s113.2-51.2 114.8-53.2c.8-1.2 1.2-2.4 1.2-3.6v-82.8l47.2-23.2c10-4.8 11.6-11.6 11.6-15.2-.4-3.6-1.6-10.4-11.6-15.2zm-60 134.4c-6.4 8-40.8 46.4-103.2 46.4-62.4 0-96.8-38.4-103.2-46.4v-75.6l82.8 39.6c6 2.8 14 4.4 22 4.4 8.4 0 16.4-1.6 22.4-4.8l79.2-38.8v75.2zm54.4-115.2l-48 23.6c-2 0-3.6.8-4.4 2.4l-86.8 42c-8.4 4.4-24.8 4.4-33.6 0l-106.8-51.2 122.8-14.4c3.6-.4 6-3.6 5.6-6.8-.4-3.6-3.6-6-6.8-5.6l-142.4 16.8-14.4-6.8c-3.6-1.6-4.4-3.6-4.4-3.6 0-.4.8-2 4.4-3.6l142.4-68.4c4.4-2 10.4-3.2 16.4-3.2 6.4 0 12.8 1.2 16.8 3.2l139.2 68c3.6 1.6 4.4 3.2 4.4 4 0 0-1.2 2-4.4 3.6z"/>
            </svg>
            Pendidikan
          </span>
        </nuxt-link>
        <nuxt-link to="#" class="px-3 py-2 mr-2 font-medium transition-all duration-200 ease-linear bg-gray-100 border-b-2 rounded-sm shadow hover:bg-gray-200 hover:font-semibold hover:border-red-500">
          <span class="text-sm whitespace-no-wrap flex">
            <svg class ="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9 10h2v2h9s-.149-4.459-.2-5.854C19.75 4.82 19.275 4 17.8 4h-3.208l-1.197-2.256C13.064 1.121 12.951 1 12.216 1H7.783c-.735 0-.847.121-1.179.744-.165.311-.7 1.318-1.196 2.256H2.199c-1.476 0-1.945.82-2 2.146C.145 7.473 0 12 0 12h9v-2zM7.649 2.916c.23-.432.308-.516.817-.516h3.067c.509 0 .588.084.816.516L12.924 4h-5.85l.575-1.084zM11 15H9v-2H.5s.124 1.797.199 3.322C.73 16.955.917 18 2.499 18H17.5c1.582 0 1.765-1.047 1.8-1.678.087-1.568.2-3.322.2-3.322H11v2z"/>
            </svg>
            Wisata
          </span>
        </nuxt-link>
        <nuxt-link to="#" class="px-3 py-2 mr-2 font-medium transition-all duration-200 ease-linear bg-gray-100 border-b-2 rounded-sm shadow hover:bg-gray-200 hover:font-semibold hover:border-red-500">
          <span class="text-sm whitespace-no-wrap flex">
            <svg class ="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.315 3.401c-1.61 0-2.916 1.343-2.916 3 0 1.656 1.306 3 2.916 3 2.915 0 .972 5.799-2.916 5.799v1.4c6.939.001 9.658-13.199 2.916-13.199zm8.4 0c-1.609 0-2.915 1.343-2.915 3 0 1.656 1.306 3 2.915 3 2.916 0 .973 5.799-2.915 5.799v1.4c6.938.001 9.657-13.199 2.915-13.199z"/>
            </svg>
            Filosofi
          </span>
        </nuxt-link>
      </div>

      <div class="z-0 flex flex-wrap md:flex-row">
        <div class="w-full p-2 md:w-3/4">
          <div class="flex items-center justify-between mt-5 border-b border-gray-300">
            <div class="flex px-2 py-1 bg-gray-200 border-l-2 border-red-500 rounded-tr-md">
              <p>Berita Terkini</p>
            </div>
            <div class="flex">
              <nuxt-link to="/artikel" class="text-sm text-gray-800 dark:text-gray-100">Lihat Semua</nuxt-link>
            </div>
          </div>
          <div class="relative block w-full mt-1 mb-4 cursor-pointer lg:mt-4 group lg:mb-0 lg:p-0 md:w-4/7">
            <nuxt-link to="/detail-artikel">
              <div class="overflow-hidden rounded-md">
                <img
                  src="https://images.unsplash.com/photo-1440778303588-435521a205bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  class="object-cover w-full h-64 duration-150 ease-in-out transform h-64transition-transform lg:block lg:mx-0 group-hover:scale-125"
                />
              </div>
              <span class="hidden mt-4 text-sm text-gray-600 dark:text-white md:block">Wisata</span>
              <h1 class="mt-2 mb-2 text-xl font-bold leading-tight text-gray-800 dark:text-gray-100">
                Temukan Tempat Wisata Favorit di Klaten, Jawa Tengah. Destinasi
                Wisata Terbaru, Kekinian & Terhits Dikunjungi Wisatawan.
              </h1>
            </nuxt-link>
          </div>
          <div class="flex items-center justify-between mt-5 border-b border-gray-300">
            <div class="flex px-2 py-1 bg-gray-200 border-l-2 border-red-500 rounded-tr-md">
              <p>Berita Populer</p>
            </div>
            <div class="flex">
              <nuxt-link to="/artikel" class="text-sm text-gray-800 dark:text-gray-100">Lihat Semua</nuxt-link>
            </div>
          </div>
          <div class="w-full mt-1 lg:w-full lg:mt-4">
            <nuxt-link to="/detail-artikel">
              <div class="block w-full mb-10 cursor-pointer group lg:flex">
                <div class="flex-none object-cover h-48 overflow-hidden rounded-md lg:w-64">
                  <img
                    src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    class="w-full h-48 transition-transform duration-150 ease-in-out transform lg:block lg:mx-0 group-hover:scale-125"
                  />
                </div>
                <div class="flex flex-col justify-between px-4 leading-normal">
                  <div class="flex py-2 space-x-3 overflow-x-auto lg:flex lg:space-x-3">
                    <Category>Article</Category>
                  </div>
                  <div>
                    <div class="mt-3 mb-2 font-semibold text-gray-900 dark:text-white md:mt-0 text-1xl">
                      Siswa Bakal Kembali Belajar Di Sekolah, Ini Skenario Versi Disdik Klaten
                    </div>
                    <p class="text-base text-gray-700 dark:text-gray-100">
                      Solopos.com, KLATEN – Dinas Pendidikan atau Disdik Klaten
                      menyiapkan skenario siswa kembali belajar di sekolah.
                      Kegiatan belajar men...
                    </p>
                  </div>
                  <div class="flex mt-2">
                    <p class="text-xs text-gray-600 dark:text-gray-100">17 Agustus 2020</p>
                  </div>
                </div>
              </div>
            </nuxt-link>
            <nuxt-link to="/detail-artikel">
              <div class="block w-full mb-10 rounded cursor-pointer lg:flex group">
                <div class="flex-none object-cover h-48 overflow-hidden rounded-md lg:w-64">
                  <img
                    src="https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                    class="w-full h-48 transition-transform duration-150 ease-in-out transform lg:block lg:mx-0 group-hover:scale-125"
                  />
                </div>
                <div class="flex flex-col justify-between px-4 leading-normal">
                  <div class="flex py-2 space-x-3 overflow-x-auto lg:flex lg:space-x-3">
                    <Category>Sosial</Category>
                  </div>
                  <div>
                    <div class="mt-3 mb-2 font-semibold text-gray-900 dark:text-white md:mt-0 text-1xl">
                      Keren! 28 Bocah Ini Patungan Beli 4 Ekor Sapi Kurban
                    </div>
                    <p class="text-base text-gray-700 dark:text-gray-100">
                      Jakarta - Ibadah kurban memang hanya untuk orang mampu, tapi
                      bocah-bocah cilik ini membuktikan kalau mereka bisa membeli
                      sapi secara patungan. Aksi kerennya bikin banyak orang
                      terinspirasi...
                    </p>
                  </div>
                  <div class="flex mt-1">
                    <p class="text-xs text-gray-600 dark:text-gray-100">17 Agustus 2020</p>
                  </div>
                </div>
              </div>
            </nuxt-link>
            <nuxt-link to="/detail-artikel">
              <div class="block w-full mb-10 cursor-pointer lg:flex group">
                <div class="flex-none object-cover h-48 overflow-hidden rounded-md lg:w-64">
                  <img
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                    class="w-full h-48 transition-transform duration-150 ease-in-out transform lg:block lg:mx-0 group-hover:scale-125"
                  />
                </div>
                <div class="flex flex-col justify-between px-4 leading-normal">
                  <div class="flex py-2 space-x-3 overflow-x-auto lg:flex lg:space-x-3">
                    <Category>Bisnis</Category>
                  </div>
                  <div>
                    <div class="mt-3 mb-2 font-semibold text-gray-900 dark:text-white md:mt-0 text-1xl">
                      Genjot Bisnis Saat Pandemi Corona, STP Siapkan Capex Rp 800
                      M
                    </div>
                    <p class="text-base text-gray-700 dark:text-gray-100">
                      Suara.com - PT Solusi Tunas Pratama Tbk (SUPR) emiten
                      telekomunikasi tetap percaya diri menatap sisa tahun 2020.
                      Meski di tengah wabah Vir...
                    </p>
                  </div>
                  <div class="flex mt-1">
                    <p class="text-xs text-gray-600 dark:text-gray-100">17 Agustus 2020</p>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="w-full p-2 mt-24 md:w-1/4">
          <div class="inline-block square"></div>
          <span class="mt-4 font-bold dark:text-white">Tag Terpopuler</span>
          <ul class="flex flex-row flex-wrap px-4 md:block">
            <li class="py-2 pr-2 md:pr-0">
              <nuxt-link to="/artikel">
                <p class="dark:text-gray-100">
                  <span class="font-semibold dark:text-gray-100">#</span>
                  Covid - 19
                </p>
              </nuxt-link>
            </li>
            <li class="py-2 pr-2 md:pr-0">
              <nuxt-link to="/artikel">
                <p class="dark:text-gray-100">
                  <span class="font-semibold dark:text-gray-100">#</span>
                  Podcast
                </p>
              </nuxt-link>
            </li>
            <li class="py-2 pr-2 md:pr-0">
              <nuxt-link to="/artikel">
                <p class="dark:text-gray-100">
                  <span class="font-semibold dark:text-gray-100">#</span>
                  Pertanian
                </p>
              </nuxt-link>
            </li>
            <li class="py-2 pr-2 md:pr-0">
              <nuxt-link to="/artikel">
                <p class="dark:text-gray-100">
                  <span class="font-semibold dark:text-gray-100">#</span>
                  Bisnis
                </p>
              </nuxt-link>
            </li>
            <li class="py-2 pr-2 md:pr-0">
              <nuxt-link to="/artikel">
                <p class="dark:text-gray-100">
                  <span class="font-semibold dark:text-gray-100">#</span>
                  Politik
                </p>
              </nuxt-link>
            </li>
          </ul>
          <div class="mt-5">
            <div class="inline-block mt-5 square"></div>
            <span class="mt-4 font-bold dark:text-white">Video Terpopuler</span>
          </div>
          <div class="p-2">
            <nuxt-link to="/detail-video">
              <img
                src="https://images.unsplash.com/photo-1551753677-dff56803a44f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                class="object-cover w-full h-48 rounded lg:h-32"
              />
            </nuxt-link>
          </div>
          <div class="p-2">
            <nuxt-link to="/detail-video">
              <img
                src="https://images.unsplash.com/photo-1517849443514-73aa552d55bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                class="object-cover w-full h-48 rounded lg:h-32"
              />
            </nuxt-link>
          </div>
          <div class="mt-5">
            <div class="inline-block square"></div>
            <span class="mt-4 font-bold dark:text-white">Berita Populer Minggu Ini</span>
          </div>
          <div class="py-2">
            <nuxt-link to="/detail-artikel">
              <div class="flex flex-col w-full mb-2 md:flex-row">
                <img
                  src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=661&q=80"
                  class="block object-cover w-auto h-48 m-4 rounded md:hidden lg:flex lg:w-16 lg:h-16 md:m-1"
                />
                <div class="px-1 rounded">
                  <span class="p-3 text-xs text-gray-500 dark:text-white lg:p-0">Gaya</span>
                  <div class="p-3 mb-2 text-xs font-semibold text-justify text-gray-800 md:mt-0 dark:text-white lg:p-0">
                    IWAPI Klaten Gairahkan Industri Kreatif Melalui Gelaran
                    IWAPI Show 2019
                  </div>
                </div>
              </div>
            </nuxt-link>
            <nuxt-link to="/detail-artikel">
              <div class="flex flex-col w-full mb-2 md:flex-row">
                <img
                  src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1449&q=80"
                  class="block object-cover w-auto h-48 m-4 rounded md:hidden lg:flex lg:w-16 lg:h-16 md:m-1"
                />
                <div class="px-1 rounded">
                  <span class="p-3 text-xs text-gray-500 dark:text-white lg:p-0">Industri</span>
                  <div class="p-3 mb-2 text-xs font-semibold text-justify text-gray-800 md:mt-0 dark:text-white lg:p-0">
                    10.000 Blok Rem Metalik Mangkrak Di Koperasi Batur Jaya
                  </div>
                </div>
              </div>
            </nuxt-link>
            <nuxt-link to="/detail-artikel">
              <div class="flex flex-col w-full mb-2 md:flex-row">
                <img
                  src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                  class="block object-cover w-auto h-48 m-4 rounded md:hidden lg:flex lg:w-16 lg:h-16 md:m-1"
                />
                <div class="px-1 rounded">
                  <span class="p-3 text-xs text-gray-500 dark:text-white lg:p-0">Bisnis</span>
                  <div class="p-3 mb-2 text-xs font-semibold text-justify text-gray-800 md:mt-0 dark:text-white lg:p-0">
                    Peran Wanita Telaten di Balik Sukses Penangkaran Burung di
                    Klaten
                  </div>
                </div>
              </div>
            </nuxt-link>
            <nuxt-link to="/detail-artikel">
              <div class="flex flex-col w-full mb-2 md:flex-row">
                <img
                  src="https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=629&q=80"
                  class="block object-cover w-auto h-48 m-4 rounded md:hidden lg:flex lg:w-16 lg:h-16 md:m-1"
                />
                <div class="px-1 rounded">
                  <span class="p-3 text-xs text-gray-500 dark:text-white lg:p-0">Kesehatan</span>
                  <div class="p-3 mb-2 text-xs font-semibold text-justify text-gray-800 md:mt-0 dark:text-white lg:p-0">
                    Alhamdulillah, Pasien Covid-19 Asal Polanharjo Klaten Sembuh
                  </div>
                </div>
              </div>
            </nuxt-link>
            <nuxt-link to="/detail-artikel">
              <div class="flex flex-col w-full mb-2 md:flex-row">
                <img
                  src="https://images.unsplash.com/photo-1554703869-5d9a78223f88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  class="block object-cover w-auto h-48 m-4 rounded md:hidden lg:flex lg:w-16 lg:h-16 md:m-1"
                />
                <div class="px-1 rounded">
                  <span class="p-3 text-xs text-gray-500 dark:text-white lg:p-0">Politik</span>
                  <div class="p-3 mb-2 text-xs font-semibold text-justify text-gray-800 md:mt-0 dark:text-white lg:p-0">
                    Edukasi Ke 30.792 Pemilih Pemula Pilkada Klaten 2020 Via
                    Medsos
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Category from "~/components/Category";

export default {
  components: {
    Category,
  },
};
</script>

<style scoped>
.square {
  width: 3px;
  height: 12px;
  background: red;
  display: inline-block;
}
</style>
