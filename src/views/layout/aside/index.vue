<template>
    <!-- <v-navigation-drawer app permanent      right     expand-on-hover     light     :mini-variant.sync="mini"     color="#99b2dd"     class="aside"       :elevation="3"> -->
        <!-- <template v-slot:prepend>
            <v-list-item class="white">
                <v-list-item-icon>
                    <svg width="34" height="34" viewBox="0 0 18 18" fill="none">
                        <ellipse
                            cx="8.68411"
                            cy="5.45852"
                            rx="3.58352"
                            ry="3.58352"
                            stroke="#210765"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.00001 14.0262C2.99905 13.7742 3.05539 13.5254 3.16477 13.2985C3.50802 12.612 4.47598 12.2481 
                                5.27919 12.0834C5.85846 11.9598 6.44573 11.8772 7.03663 11.8362C8.13063 11.7401 9.23095 11.7401 10.325 11.8362C10.9158 11.8776 11.503 11.9602 12.0824
                                12.0834C12.8856 12.2481 13.8536 12.5777 14.1968 13.2985C14.4168 13.7611 14.4168 14.2981 14.1968 14.7607C13.8536 15.4815 12.8856 15.8111 12.0824
                                15.969C11.5038 16.0977 10.9163 16.1826 10.325 16.223C9.43453 16.2984 8.53994 16.3122 7.64761 16.2642C7.44166 16.2642 7.24258 16.2642 7.03663
                                16.223C6.44747 16.1831 5.86224 16.0982 5.28605 15.969C4.47598 15.8111 3.51489 15.4815 3.16477 14.7607C3.05595 14.5312 2.99966 14.2802 3.00001
                                14.0262Z"
                            stroke="#210765"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </v-list-item-icon>
                <v-list-item-content class="text-center">
                    <v-list-item-title>
                        <strong class="text_TC_"
                            >حسابي</strong
                        ></v-list-item-title
                    >
                </v-list-item-content>
            </v-list-item>
        </template> -->
         <!-- <vue-nice-scrollbar
            classes="my-scrollbar aside-scroll"
            :class="{ 'active-my-scrollbar': !mini }"
            v-bind:speed="100"
            theme="light"
        >
            <div class="scroll-me">
                <v-list dense>
                    <router-link
                        v-slot="{ href, navigate, isActive }"
                        v-for="(item, index) in bb"
                        :key="index"
                        :to="item.link"
                        class="position-relative"
                    >
                        <span>
                            <a :href="href" @click="navigate"> -->
                                <!-- v-if="isRoled(item) && item.isRoled" -->
                                <!-- <v-list-item
                                    class="py-1 "
                                    :class="{ active: isActive }"
                                    link
                                >
                                    <v-list-item-icon >
                                        <span v-html="item.icon" ></span>
                                    </v-list-item-icon>
                                    <v-list-item-content class="text-right">
                                        <v-list-item-title
                                            >{{ item.title }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>
                            </a>
                            <div
                                class=" custom-devider-aside"
                                v-if="index == 3"
                            ></div>
                        </span>
                    </router-link>
                </v-list>
            </div>
        </vue-nice-scrollbar> -->
       
     <!-- <template v-slot:append>
            <div class="text-center">
              <img src="/resterants.svg" style="width: 90%;max-height: 150px;"/>
            </div>
        </template>-->
    <!-- </v-navigation-drawer> -->
    <h2></h2>
</template>
<style lang="scss" scoped>
// .aside {
//     .v-list {
//         .active,
//         .v-list-item:hover {
//             .v-list-item__icon,
//             .v-list-item__title {
//                 filter: invert(100%) brightness(118%);
//             }
//         }
//     }
//     .v-list-item__title {
//         font-size:18px!important;
//     }
// }

// .my-scrollbar {
//     height: calc(100vh - 119px);
// }
// .active-my-scrollbar {
//     height: calc(100vh - 193px);
// }
</style>
<style lang="scss">
// a {
//     text-decoration: none;
// }
// .v-navigation-drawer__content {
//     overflow: visible !important;
// }
// .aside-scroll 
// {
//     .nice-bar-rail-y {
//         left: 0;
//         right: auto;
//         width: 4px;
//         .nice-bar-slider-y {
//             border-radius: 4px;
//         }
//     }
//     .nice-bar-slider-x {
//         display: none !important;
//     }
//     }
    

</style>
<script>
// import jwtService from "@/service/jwt.service";
// import { mapGetters } from "vuex";
// import mainfm from "@/navigation/index.js"
// export default {
//     name: "TC-aside",
//     data: () => ({
//         mini: true,
//         bb: mainfm
//     }),
//     // computed: {
//     //     ...mapGetters(["userName"])
//     // },
//     created() {
//         addEventListener("resize", () => {
//             let content = document.querySelector(".nice-bar div:first-of-type");
//             if (content.scrollHeight > window.innerHeight - 193) {
//                 content.style.marginTop = 0;
//             }
//         });
//     }
// };
// </script>
