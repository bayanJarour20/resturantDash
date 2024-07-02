<template>
    <v-container>
        <transition name="fade">
            <v-row>
                <v-col cols="12">
                    <v-row style="justify-content: space-between">
                        <v-col cols="12" lg="3">
                            <card
                                cardTitle="المدن"
                                @addItem="addCityAction"
                                @editItem="editCityAction"
                                @deleteItem="deleteCityAction"
                                iconCard="mdi-city-variant-outline"
                                :headersProps="headers"
                                :headersItem="city"
                            />
                        </v-col>
                        <v-col cols="12" lg="3">
                            <card
                                cardTitle="المناطق"
                                iconCard="mdi-home-city"
                                :headersProps="headers"
                                :headersItem="country"
                                @addItem="addCountryAction"
                                @editItem="editCountryAction"
                                @deleteItem="deleteCountryAction"
                            />
                        </v-col>
                        <v-col cols="12" lg="3">
                            <card
                                cardTitle="الاصناف"
                                iconCard="mdi-dolly "
                                :headersProps="headers"
                                :headersItem="varieties"
                                @addItem="addVarietiesAction"
                                @editItem="editVarietiesAction"
                                @deleteItem="deleteVarietiesAction"
                            />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </transition>
    </v-container>
</template>
<style lang="scss">
@import "/src/assets/scss/helpers/variables.scss";
.TC_Table {
    thead tr th {
        color: #fff !important;
        text-align: center !important;
        padding-bottom: 4px !important;
        padding-top: 17px !important;
        background-color: $dark !important;
        color: #fff !important;
        border-bottom: solid 2px $dark;
        border-top: solid 2px $dark;
    }
    thead tr th i {
        font-size: 14px !important;
        margin-left: 45%;
    }
    thead th span {
        color: #fff;
    }
    thead th i {
        color: #fff !important;
    }
    tr {
        td {
            text-align: center;
            color: #000;
        }
    }
    tr:nth-child(even) {
        background-color: #f1f1f1;
    }
    tr:nth-child(odd) {
        background-color: #dadada;
    }
}
* {
    font-family: "SST ARABIC LIGHT" !important;
}
.border_y_TC_orange {
    border-top: solid;
    border-bottom: solid;
    border-color: $dark !important;
    border-width: 8px !important;
}
</style>
<script>
import card from "./components/card.vue";
import {mapActions, mapGetters } from "vuex";
export default {
    components: {
        card,
    },
    computed: {
        
        ...mapGetters(["city","country","varieties"])
    },
    data: () => ({
        page: 1,
        pageCount: 0,
        ids: 12,
        headers: [
            {
                text: "الاسم",
                value: "firstName",
                icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="8.68411" cy="5.45852" rx="3.58352" ry="3.58352" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00001 14.0257C2.99905 13.7738 3.05539 13.5249 3.16477 13.298C3.50802 12.6115 4.47598 12.2476 5.27919 12.0829C5.85846 11.9593 6.44573 11.8767 7.03663 11.8357C8.13063 11.7396 9.23095 11.7396 10.325 11.8357C10.9158 11.8772 11.503 11.9597 12.0824 12.0829C12.8856 12.2476 13.8536 12.5772 14.1968 13.298C14.4168 13.7606 14.4168 14.2976 14.1968 14.7602C13.8536 15.4811 12.8856 15.8106 12.0824 15.9685C11.5038 16.0972 10.9163 16.1821 10.325 16.2225C9.43453 16.298 8.53994 16.3117 7.64761 16.2637C7.44166 16.2637 7.24258 16.2637 7.03663 16.2225C6.44747 16.1826 5.86224 16.0977 5.28605 15.9685C4.47598 15.8106 3.51489 15.4811 3.16477 14.7602C3.05595 14.5307 2.99966 14.2797 3.00001 14.0257Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>`,
            },
        ],
        desserts: [
            {
                id: 1,
                firstName: "Frozen Yogurt",
            },
            {
                id: 2,
                firstName: "Ice cream sandwich",
            },
            {
                id: 3,
                firstName: "Eclair",
            },
            {
                id: 4,
                firstName: "Cupcake",
            },
            {
                id: 5,
                firstName: "Gingerbread",
            },
            {
                id: 6,
                firstName: "Jelly bean",
            },
            {
                id: 7,
                firstName: "Lollipop",
            },
            {
                id: 8,
                firstName: "Honeycomb",
            },
            {
                id: 9,
                firstName: "Donut",
            },
            {
                id: 10,
                firstName: "KitKat",
            },
        ],
    }),
    methods: {
        ...mapActions(["addCityAction", "editCityAction", "deleteCityAction","addCountryAction","deleteCountryAction","editCountryAction","addVarietiesAction","deleteVarietiesAction","editVarietiesAction"]),
    },
};
</script>
