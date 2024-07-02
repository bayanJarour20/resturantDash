<template>
    <v-container>
         <v-card class="border_y_TC_orange">
            <v-card-title class="justify-center" style="font-size: 24px"
            >تعديل مطعم
            </v-card-title>
            <v-card-text>
                <v-form v-model="valid">
                    <v-row class="text-right" justify="space-around">
                        <v-col cols="12" md="5">
                            <label>اسم المطعم</label>
                            <v-text-field
                                dense
                                class="mt-2"
                                solo
                                background-color="#f1f1f1"
                                color="dark"
                                v-model="restDto.fristName"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" md="5">
                            <label>صاحب المطعم</label>
                            <v-text-field
                                dense
                                class="mt-2"
                                solo
                                background-color="#f1f1f1"
                                color="dark"
                                v-model="restDto.explan"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" md="5">
                            <label>اسم المنطقة</label>
                            <v-autocomplete
                                dense
                                class="mt-2"
                                solo
                                background-color="#f1f1f1"
                                :items="country"
                                color="dark"
                                item-text="firstName"
                                item-value="id"
                                v-model="restDto.countryName"
                            ></v-autocomplete>
                        </v-col>
                        <v-col cols="12" md="5">
                            <label>اسم التصنيفات</label>
                            <v-autocomplete
                                dense
                                class="mt-2"
                                solo
                                :items="varieties"
                                item-text="firstName"
                                item-value="id"
                                background-color="#f1f1f1"
                                color="dark"
                                v-model="restDto.varietiesName"
                            ></v-autocomplete>
                        </v-col>
                        <v-col cols="12" md="5">
                            <label>اسم المدينة</label>
                            <v-autocomplete
                                dense
                                class="mt-2"
                                solo
                                background-color="#f1f1f1"
                                :items="city"
                                item-text="firstName"
                                item-value="id"
                                color="dark"
                                v-model="restDto.cityName"
                            ></v-autocomplete>
                        </v-col>
                        <v-col cols="12" md="5">
                            <label>اسم الصورة</label>
                            <v-file-input
                                @change="upload"
                                label="File input"
                                class="mt-2"
                                filled
                                prepend-icon="mdi-camera"
                                color="dark"
                                dense
                                solo
                                background-color="#f1f1f1"
                            ></v-file-input>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions
                class="justify-content-around pb-4"
                style="justify-content: space-around"
            >
                <v-btn
                    :elevation="2"
                    class="m-0"
                    color="dark"
                    style="color: #fff"
                    :disabled="!valid"
                    @click="asd()"
                >
                    تعديل مطعم
                    <v-icon small color="width">mdi-plus-thick </v-icon>
                </v-btn>
                <v-btn
                    :elevation="2"
                    class="m-0 px-5"
                    color="dark"
                    style="color: #fff"
                >
                    عودة
                    <v-icon small color="width">mdi-arrow-right </v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-btn class="my-5" color="dark" style="color:white;" :to="`/resterants/edit-resterants/${id}/food`">إضافة طبق<v-icon>mdi-plus</v-icon></v-btn>
        <v-data-table
            :headers="headers"
            :items-per-page="3"
            hide-default-footer
            class="TC_Table my-5"
            @page-count="pageCount = $event"
            :page.sync="page"
            light
            mobile-breakpoint="960"
            color="info"
            :items="restDto.menu"
        > 
        </v-data-table>
        <div class="text-center py-2">
            <v-pagination
                color="dark"
                v-model="page"
                :total-visible="7"
                :length="pageCount"
            ></v-pagination>
        </div>
    </v-container>
</template>
<style lang="scss">
@import "/src/assets/scss/helpers/variables.scss";
* {
    font-family: "SST ARABIC LIGHT" !important;
}
.border_y_TC_orange {
    border-top: solid;
    border-bottom: solid;
    border-color: $dark !important;
    border-width: 8px !important;
}
label {
    font-size: 18px;
}
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
        display: block;
        text-align: center;
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
 .v-application .text-start {
     text-align: center !important; 
}
</style>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
    props:{
        id:String,
    },
    data: () => ({
        valid: false,
        page: 1,
        pageCount: 0,
        rules: {
            restDto: [
                (val) => (val.trim() || "").length > 0 || "هذا الحقل مطلوب",
            ],
        },
        headers: [
            {
                text: 'اسماء الطبخات',
                value: 'nameMenu',
            },
            {
                text:'شرح بسيط عن الطبخات',
                value:'explain'
            }
        ],
        ids: 0,
        foods: []
    }),
    computed: {
        ...mapGetters(["restDto", "city", "country", "varieties"]),
    },
    created(){
        this.getRestorantDetails(this.id)
    },
    methods: {
        ...mapActions(["editResterantsAction", "getRestorantDetails"]),
        asd(){
            this.editResterantsAction(this.restDto)
        },
        addFood() {
            this.foods.unshift({
                id: this.foods.length + 1,
                name: ''
            })
        },
        deleteFood(i) {
            this.foods.splice(i, 1)
        },
        upload(file) {
            console.log(file)
            // تخزين الملف ب formdata <form>
            // a = new FormData()
            // a.append('as', files)
            // تحويل الملف من file الي base64
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (() => {
                this.restDto.imageBase = reader.result 
            }).bind(this)
        }
    },
};
</script>
