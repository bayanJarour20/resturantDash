<template>
    <div>
        <v-row>
            <v-col class="align-items-center d-flex">
                <h1 class="h-account text_TC_yellow m-0">
                    setting                
                </h1>
            </v-col>
        </v-row>
        <transition name="fade">
            <v-row >
                <v-col cols="12" class="align-items-center d-flex">
                    <h5 class="h-account text_TC_yellow">
                        ادخال الإعدادات
                    </h5>
                </v-col>
                <v-col cols="12">
                    <v-card  style="min-width:360px ;color: rgb(153, 178, 221);">
                        <v-card-text>
                            <v-row class="text-right" justify="center">
                                <v-col cols="12" md="6">
                                    <label>المناطق</label>
                                    <v-text-field
                                        dense
                                        solo
                                        color="yellow"
                                        readonly
                                    >
                                        <template v-slot:prepend-inner>
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <ellipse
                                                    cx="11.5788"
                                                    cy="7.27803"
                                                    rx="4.77803"
                                                    ry="4.77803"
                                                    stroke="black"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M4.00002 18.7016C3.99873 18.3657 4.07385 18.0339 4.2197 17.7313C4.67736 16.816 5.96798 16.3308 7.03892 16.1112C7.81128 15.9463 8.59431 15.8362 9.38217 15.7816C10.8408 15.6535 12.3079 15.6535 13.7666 15.7816C14.5544 15.8369 15.3374 15.947 16.1099 16.1112C17.1808 16.3308 18.4714 16.7702 18.9291 17.7313C19.2224 18.3481 19.2224 19.0642 18.9291 19.681C18.4714 20.6421 17.1808 21.0814 16.1099 21.2919C15.3384 21.4636 14.5551 21.5768 13.7666 21.6306C12.5794 21.7313 11.3866 21.7496 10.1968 21.6855C9.92221 21.6855 9.65677 21.6855 9.38217 21.6306C8.59663 21.5775 7.81632 21.4642 7.04807 21.2919C5.96798 21.0814 4.68652 20.6421 4.2197 19.681C4.0746 19.3749 3.99955 19.0403 4.00002 18.7016Z"
                                                    stroke="black"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </template>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <label>المدن</label>
                                    <v-text-field
                                        dense
                                        solo
                                        readonly
                                        color="yellow"
                                    >
                                        <template v-slot:prepend-inner>
                                            <svg
                                                width="20"
                                                height="22"
                                                viewBox="0 0 20 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1.09277 8.71004H18.9167"
                                                    stroke="#200E32"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M14.442 12.5704H14.4512"
                                                    stroke="#200E32"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M10.0045 12.5704H10.0137"
                                                    stroke="#200E32"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M5.55818 12.5704H5.56744"
                                                    stroke="#200E32"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M14.442 16.4122H14.4512"
                                                    stroke="#200E32"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M10.0045 16.4122H10.0137"
                                                    stroke="#200E32"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M5.55818 16.4122H5.56744"
                                                    stroke="#200E32"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M14.0433 1.39111V4.64395"
                                                    stroke="#200E32"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M5.96515 1.39111V4.64395"
                                                    stroke="#200E32"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M14.2383 2.95215H5.77096C2.83427 2.95215 1 4.56922 1 7.54164V16.4869C1 19.5061 2.83427 21.1606 5.77096 21.1606H14.229C17.175 21.1606 19 19.5341 19 16.5617V7.54164C19.0092 4.56922 17.1842 2.95215 14.2383 2.95215Z"
                                                    stroke="#200E32"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </template>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <label>الاصناف</label>
                                    <v-text-field
                                        dense
                                        solo
                                        readonly
                                        color="yellow"
                                    >
                                        <template v-slot:prepend-inner>
                                            <svg
                                                width="24"
                                                height="25"
                                                viewBox="0 0 24 25"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M21.25 12.2493C21.25 17.2994 17.109 21.3926 12 21.3926C6.891 21.3926 2.75 17.2994 2.75 12.2493C2.75 7.19921 6.891 3.10596 12 3.10596C17.109 3.10596 21.25 7.19921 21.25 12.2493Z"
                                                    stroke="#200E32"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M15.4311 15.1577L11.6611 12.9347V8.14355"
                                                    stroke="#200E32"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </template>
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-actions class="justify-content-around pb-4">
                            <v-btn
                                outlined
                                :elevation="5"
                                class="text_TC_yellow px-8 m-0"
                                style="background-color:#f1f1f1;"
                            >
                                <template class="pl-2">
                                    <svg
                                        class="ml-2"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.9963 7.99609L8.00293 11.9894"
                                            stroke="#FFC20E"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M11.9976 11.9916L8.00098 7.99414"
                                            stroke="#FFC20E"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M13.612 2.29199H6.38783C3.87033 2.29199 2.29199 4.07449 2.29199 6.59699V13.4037C2.29199 15.9262 3.86283 17.7087 6.38783 17.7087H13.6112C16.137 17.7087 17.7087 15.9262 17.7087 13.4037V6.59699C17.7087 4.07449 16.137 2.29199 13.612 2.29199Z"
                                            stroke="#FFC20E"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </template>
                                 إضافة
                            </v-btn>
                         
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </transition>
        <v-row>
            <v-col class="align-items-center d-flex">
                <h5 class="h-account text_TC_yellow">
                    اختر لوحة المتصدرين
                </h5>
            </v-col>
        </v-row>
        <v-data-table
            :headers="headers"
           
            hide-default-footer
        
            class="elevation-15 TC_Table"

            light
            mobile-breakpoint="960"
            color="info"
        >
            <template v-slot:[`header.firstName`]="{ header }">
                <div class="d-flex flex-nowrap justify-center">
                    <span v-html="header.icon" class="pl-1"></span>
                    {{ header.text }}
                </div>
            </template>
            <template v-slot:[`header.accuracy`]="{ header }">
                <div class="d-flex flex-nowrap justify-center ">
                    <span v-html="header.icon" class="pl-1"></span>
                    {{ header.text }}
                </div>
            </template>
            <template v-slot:[`header.wordPerMinute`]="{ header }">
                <div class="d-flex flex-nowrap justify-center ">
                    <span v-html="header.icon" class="pl-1"></span>
                    {{ header.text }}
                </div>
            </template>
        </v-data-table>
        <!-- <div class="text-center pt-2">
            <v-pagination
                v-model="page"
                :length="pageCount"
                color="yellow"
            ></v-pagination>
        </div> -->
    </div>
</template>
<style lang="scss">
.v-slide-group__wrapper {
    position: relative;
}
.v-slide-group__wrapper:after {
    position: absolute;
    height: 1px;
    left: 16px;
    right: 16px;
    top: 125px;
        content: "";
    z-index: -1;
}
.v-menu__content {
    min-width: 290px!important
}
.colapsed_card {
    position: absolute;
    width: 134px;
    height: 80px;
    .colapsed_card-item {
        width: 134px;
        height: 80px;
        left: 50%;
        transition: width .3s linear, height .3s linear, .3s top .3s linear, .3s bottom .3s linear;
    }
    .colapsed_card-item.colapsed_card-item--back {
        transform: translate(-50%, -50%);
        top: 50%;
    }
    .colapsed_card-item.colapsed_card-item--front {
        transform: translate(-50%, 50%);
        bottom: 50%;
    }
}
.colapsed_card.active {
    .colapsed_card-item {
        width: 170px;
        height: 94px;
    }
    .colapsed_card-item.colapsed_card-item--back {
        top: -5px;
    }
    .colapsed_card-item.colapsed_card-item--front {
        bottom: -5px;
        border-top-left-radius: 0!important;
        border-top-right-radius: 0!important;
    }
}
</style>
<script>
export default {
    props: {},
    data: () => ({
        page: 1,
        pageCount: 0,
        competitionsSlide: null,
        headers: [
            {
                text: "الاسم",
                value: "fullName",
                icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="8.68411" cy="5.45852" rx="3.58352" ry="3.58352" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00001 14.0257C2.99905 13.7738 3.05539 13.5249 3.16477 13.298C3.50802 12.6115 4.47598 12.2476 5.27919 12.0829C5.85846 11.9593 6.44573 11.8767 7.03663 11.8357C8.13063 11.7396 9.23095 11.7396 10.325 11.8357C10.9158 11.8772 11.503 11.9597 12.0824 12.0829C12.8856 12.2476 13.8536 12.5772 14.1968 13.298C14.4168 13.7606 14.4168 14.2976 14.1968 14.7602C13.8536 15.4811 12.8856 15.8106 12.0824 15.9685C11.5038 16.0972 10.9163 16.1821 10.325 16.2225C9.43453 16.298 8.53994 16.3117 7.64761 16.2637C7.44166 16.2637 7.24258 16.2637 7.03663 16.2225C6.44747 16.1826 5.86224 16.0977 5.28605 15.9685C4.47598 15.8106 3.51489 15.4811 3.16477 14.7602C3.05595 14.5307 2.99966 14.2797 3.00001 14.0257Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                        `
            },
            {
                text: "الدقة ",
                value: "accuracy",
                icon: `<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4286 0.70459C6.69524 0.70459 2.85714 4.68812 2.85714 9.60081H0L3.70476 13.446L3.77143 13.5843L7.61905 9.60081H4.7619C4.7619 5.77543 7.74286 2.68153 11.4286 2.68153C15.1143 2.68153 18.0952 5.77543 18.0952 9.60081C18.0952 13.4262 15.1143 16.5201 11.4286 16.5201C9.59048 16.5201 7.92381 15.7392 6.72381 14.4838L5.37143 15.8875C6.92381 17.4987 9.05714 18.497 11.4286 18.497C16.1619 18.497 20 14.5135 20 9.60081C20 4.68812 16.1619 0.70459 11.4286 0.70459ZM10.4762 5.64693V10.5893L14.5524 13.1L15.2381 11.9039L11.9048 9.84792V5.64693H10.4762Z" fill="white"/>
                            </svg>

                                    `
            },
            {
                text: "السرعة",
                value: "wordPerMinute",
                icon: `<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4286 0.70459C6.69524 0.70459 2.85714 4.68812 2.85714 9.60081H0L3.70476 13.446L3.77143 13.5843L7.61905 9.60081H4.7619C4.7619 5.77543 7.74286 2.68153 11.4286 2.68153C15.1143 2.68153 18.0952 5.77543 18.0952 9.60081C18.0952 13.4262 15.1143 16.5201 11.4286 16.5201C9.59048 16.5201 7.92381 15.7392 6.72381 14.4838L5.37143 15.8875C6.92381 17.4987 9.05714 18.497 11.4286 18.497C16.1619 18.497 20 14.5135 20 9.60081C20 4.68812 16.1619 0.70459 11.4286 0.70459ZM10.4762 5.64693V10.5893L14.5524 13.1L15.2381 11.9039L11.9048 9.84792V5.64693H10.4762Z" fill="white"/>
                    </svg>`
            },
            {
                text: "النتيجة",
                value: "score",
                icon: `<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5356 3.26724L11.2726 6.7212C11.3596 6.89541 11.5276 7.017 11.7226 7.04517L15.6113 7.60044C15.7688 7.6212 15.9106 7.70275 16.0073 7.82729C16.1888 8.06082 16.1611 8.39146 15.9436 8.59237L13.1251 11.2864C12.9818 11.4199 12.9181 11.6156 12.9556 11.8061L13.6306 15.6078C13.6778 15.9228 13.4603 16.2179 13.1416 16.2691C13.0096 16.2891 12.8746 16.2683 12.7546 16.2098L9.2911 14.4149C9.1171 14.3215 8.9086 14.3215 8.7346 14.4149L5.2456 16.2194C4.95385 16.3662 4.59685 16.2572 4.43785 15.9747C4.3771 15.8606 4.3561 15.7308 4.3771 15.6041L5.0521 11.8024C5.08585 11.6126 5.0221 11.4177 4.8826 11.2835L2.0491 8.59014C1.8181 8.36329 1.8166 7.9941 2.04685 7.76576C2.0476 7.76502 2.04835 7.76354 2.0491 7.76279C2.14435 7.67754 2.26135 7.62046 2.3881 7.59821L6.2776 7.04294C6.47185 7.01255 6.6391 6.89245 6.7276 6.71823L8.4631 3.26724C8.53285 3.12712 8.6566 3.01963 8.8066 2.9707C8.95735 2.92103 9.12235 2.93289 9.2641 3.00332C9.38035 3.0604 9.4756 3.15307 9.5356 3.26724Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            `
            },
            {
                text: "التاريخ",
                value: "createdAt",
                icon: `<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.31934 6.68841H14.6873" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.3312 9.58392H11.3382" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.00311 9.58392H8.01005" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.66815 9.58392H4.67509" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.3312 12.4648H11.3382" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.00311 12.4648H8.01005" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.66815 12.4648H4.67509" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.0329 1.19922V3.63884" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.97435 1.19922V3.63884" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1787 2.37012H4.82822C2.6257 2.37012 1.25 3.58292 1.25 5.81223V12.5212C1.25 14.7856 2.6257 16.0264 4.82822 16.0264H11.1718C13.3812 16.0264 14.75 14.8066 14.75 12.5773V5.81223C14.7569 3.58292 13.3882 2.37012 11.1787 2.37012Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            `
            },
            {
                text: "تفاصيل",
                value: "details",
                icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.64104 3.7167C10.1938 3.01245 11.087 3.0492 11.792 3.60195L12.8345 4.41945C13.5395 4.9722 13.7893 5.82945 13.2365 6.5352L7.01979 14.4665C6.81204 14.732 6.49479 14.8887 6.15729 14.8925L3.75954 14.9232L3.21654 12.587C3.14004 12.2592 3.21654 11.9142 3.42429 11.648L9.64104 3.7167Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.47656 5.20215L12.0721 8.02065" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>`,
                sortable: false
            }
        ]
    })
};
</script>


