<template>
  <div class="max-w-screen-lg mx-auto">
    <main class="py-12">
      <div class="sticky flex flex-no-wrap justify-start px-3 py-2 overflow-x-auto bg-white dark:bg-gray-800 z-5 top-18 md:justify-center">
        <nuxt-link to="#" class="px-3 py-2 mr-2 font-semibold bg-gray-200 border-b-2 border-red-500 rounded-sm shadow">
          <p class="text-sm whitespace-no-wrap">Semua Berita</p>
        </nuxt-link>
        <nuxt-link to="#" class="px-3 py-2 mr-2 font-medium transition-all duration-200 ease-linear bg-gray-100 border-b-2 rounded-sm shadow hover:bg-gray-200 hover:font-semibold hover:border-red-500">
          <p class="text-sm whitespace-no-wrap">Pendidikan</p>
        </nuxt-link>
        <nuxt-link to="#" class="px-3 py-2 mr-2 font-medium transition-all duration-200 ease-linear bg-gray-100 border-b-2 rounded-sm shadow hover:bg-gray-200 hover:font-semibold hover:border-red-500">
          <p class="text-sm whitespace-no-wrap">Wisata</p>
        </nuxt-link>
        <nuxt-link to="#" class="px-3 py-2 mr-2 font-medium transition-all duration-200 ease-linear bg-gray-100 border-b-2 rounded-sm shadow hover:bg-gray-200 hover:font-semibold hover:border-red-500">
          <p class="text-sm whitespace-no-wrap">Otomotif</p>
        </nuxt-link>
      </div>

      <div class="flex flex-wrap md:flex-row">
        <div class="w-full p-2 md:w-3/4">
          <div class="block mt-5 space-x-0 md:flex md:space-x-6 lg:mt-24">
            <div class="w-full p-0 rounded lg:w-full">
              <vue-plyr>
                <div class="rounded-md plyr__video-embed">
                  <iframe
                    src="https://www.youtube.com/watch?v=4A9kHTBVvec"
                    allowfullscreen
                    allowtransparency
                  ></iframe>
                </div>
              </vue-plyr>
            </div>
          </div>
          <div>
            <div class="flex py-2 space-x-3 overflow-x-auto lg:flex lg:space-x-3">
              <Category>Music</Category>
            </div>
            <h2 class="p-0 text-base font-bold text-gray-800 dark:text-white">
              HAJI SUN | SULTAN SAPI HAJI DONI TOLAK IMPORT DAGING DARI INDIA
            </h2>
            <p class="p-0 text-base text-gray-400 dark:text-white">2 days ago</p>
          </div>
          <div class="flex items-center px-1 mt-5 mb-4 lg:px-0">
            <div class="inline-block square"></div>
            <span class="px-1 font-bold dark:text-white">Video Terkait</span>
          </div>
          <div class="w-full mt-4 lg:w-full">
            <div class="block w-full mb-2 cursor-pointer lg:mb-10 group lg:flex">
              <div class="flex-none object-cover h-48 overflow-hidden rounded-md lg:h-32 lg:w-48">
                <img
                  src="https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                  class="w-full h-48 transition-transform duration-150 ease-in-out transform lg:block lg:mx-0 group-hover:scale-125"
                />
              </div>
              <div class="flex flex-col justify-between p-4 px-0 leading-normal lg:px-4 lg:p-0">
                <div class="flex py-2 space-x-3 lg:flex lg:space-x-3 lg:mt-2">
                  <Category>Bussiness</Category>
                </div>
                <div>
                  <div class="font-semibold text-gray-900 lg:mb-2 dark:text-white md:mt-0 text-1xl">
                    Bisnis dari rumah ? siapa takut
                  </div>
                </div>
                <div class="flex">
                  <p class="text-xs text-gray-600 dark:text-gray-100">17 Agustus 2020</p>
                </div>
              </div>
            </div>
            <div class="block w-full mb-2 cursor-pointer lg:mb-10 group lg:flex">
              <div class="flex-none object-cover h-48 overflow-hidden rounded-md lg:h-32 lg:w-48">
                <img
                  src="https://img.youtube.com/vi/fQnUpu-noB4/hqdefault.jpg"
                  class="w-full h-48 transition-transform duration-150 ease-in-out transform lg:block lg:mx-0 group-hover:scale-125"
                />
              </div>
              <div class="flex flex-col justify-between p-4 px-0 leading-normal lg:px-4 lg:p-0">
                <div class="flex py-2 space-x-3 lg:flex lg:space-x-3 lg:mt-2">
                  <Category>Music</Category>
                </div>
                <div>
                  <div class="font-semibold text-gray-900 lg:mb-2 dark:text-white md:mt-0 text-1xl">
                    My Wife Singing
                  </div>
                </div>
                <div class="flex">
                  <p class="text-xs text-gray-600 dark:text-gray-100">17 Agustus 2020</p>
                </div>
              </div>
            </div>
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
