<template>
    <v-container>
        <v-card class="border_y_TC_orange">
            <v-card-title class="justify-center" style="font-size: 24px"
                >إضافة طبخة</v-card-title
            >
            <v-card-text>
                <v-form v-model="valid">
                    <v-row class="text-right" justify="space-around">            
                        <v-col cols="12" md="5">                       
                              <div v-for="(food, index) in foods" :key="index">
                                    <label> مكونات الطبخة</label>
                                    <div class="d-flex">
                                      <v-btn color="dark" style="color:white;" class="mr-4"  @click="deleteFood(index)" ><v-icon>mdi-close</v-icon></v-btn>
                                      <v-text-field
                                        dense
                                        solo
                                        background-color="#f1f1f1"
                                        color="dark"
                                        v-model="food.name"
                                    ></v-text-field>
                                     </div>
                                     <v-divider></v-divider>
                                </div>
                            <div class="text-center my-3">
                                  <v-btn
                                :elevation="2"
                                class="m-0"
                                color="dark"
                                style="color: #fff"
                                @click="addFood"
                            >
                                إضافة طبخة
                                <v-icon small color="width">mdi-plus-thick </v-icon>
                            </v-btn>
                            </div>
                        </v-col>
                        <v-col cols="12" md="5">
                            <label>اسم الطبخة</label>
                            <v-text-field
                                dense
                                class="mt-2"
                                solo
                                background-color="#f1f1f1"
                                color="dark"
                            >
                            </v-text-field>
                              <label> شرح بسيط عن الطبخة</label>
                            <v-textarea
                                
                                class="mt-2"
                                  solo
                                name="input-7-4"
                                label="شرح بسيط عن الطبخة"
                                background-color="#f1f1f1"
                                color="dark"
                            >
                            </v-textarea>
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
                    class="m-0 px-5"
                    color="dark"
                    style="color: #fff"
                >
                    عودة
                    <v-icon small color="width">mdi-arrow-right </v-icon>
                </v-btn>
            </v-card-actions>
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
export default {
    data: () => ({
       foods: []
    }),
    computed: {
    },
    methods: {
        addFood() {
            this.foods.unshift({
                id: this.foods.length + 1,
                name: ''
            })
        },
        deleteFood(i) {
            this.foods.splice(i, 1)
        },
    }
};
</script>
