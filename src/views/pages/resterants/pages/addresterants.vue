<template>
    <v-container>
        <v-card class="border_y_TC_orange">
            <v-card-title class="justify-center" style="font-size: 24px"
                >إضافة مطعم</v-card-title
            >
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
                                v-model="resterantsName.fristName"
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
                                v-model="resterantsName.explan"
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
                                v-model="resterantsName.countryName"
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
                                v-model="resterantsName.varietiesName"
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
                                v-model="resterantsName.cityName"
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
                    إضافة مطعم
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
        <v-card class="mt-4 text-right">
            <v-card-title>
                <v-btn color="info" class="mb-3" @click="addFood"><v-icon>mdi-plus</v-icon></v-btn>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <div v-for="(food, index) in foods" :key="index">
                        <label for="">اسم الطبق</label>
                        <v-text-field solo v-model="food.name"></v-text-field>
                        <v-btn color="error" class="mb-3" @click="deleteFood(index)"><v-icon>mdi-close</v-icon></v-btn>
                        <v-divider></v-divider>
                    </div>
                </v-form>
            </v-card-text>
        </v-card>
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
</style>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
    data: () => ({
        resterantsName: {
            fristName: "",
            explan: "",
            countryName: "",
            varietiesName: "",
            cityName: "",
            id: 1,
            imageBase: ''
        },
        valid: false,
        rules: {
            resterantsName: [
                (val) => (val.trim() || "").length > 0 || "هذا الحقل مطلوب",
            ],
        },
        ids: 0,
        foods: []
    }),
    computed: {
        ...mapGetters(["resterants", "city", "country", "varieties"]),
    },
    methods: {
        ...mapActions(["addresterantsAction"]),
        asd(){
            this.addresterantsAction(this.resterantsName)
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
                this.resterantsName.imageBase = reader.result 
            }).bind(this)
        }
    },
};
</script>
