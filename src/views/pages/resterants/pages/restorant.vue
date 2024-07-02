<template>
  <div style="position:relative;">
        <v-container>
        <v-row style="justify-content: center">
            <v-col cols="3" v-for="(card, index) in resterants" :key="index">
                <v-card class="border_y_TC_Dark">
                    <v-img
                        :src="card.imageBase"
                        height="200px"
                    ></v-img>
                    <div
                        style="
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        "
                    >
                        <v-btn icon :to="`resterants/edit-resterants/${card.id}`" :value="card.id">
                            <v-icon  small> mdi-dots-vertical </v-icon>
                        </v-btn>
                        <div>
                            <v-card-title style="justify-content: flex-end">
                                {{card.fristName}}</v-card-title
                            >
                            <v-card-subtitle style="text-align: end">
                                {{card.explan}}</v-card-subtitle
                            >
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <v-btn class="btn-plus" color="dark" to="resterants/add-resterants"><v-icon small color="white">mdi-plus</v-icon></v-btn>
  </div>
</template>
<style lang="scss">
@import "/src/assets/scss/helpers/variables.scss";
* {
    font-family: "SST ARABIC LIGHT" !important;
}
.border_y_TC_Dark {
    border-top: solid;
    border-bottom: solid;
    border-color: $dark !important;
    border-width: 8px !important;
}
.v-image {
    border-radius: 0px !important;
}
.btn-plus{
    border-radius: 50%;
    background-color: $dark;
    height: 60px!important;
    position: fixed;
    bottom: 20px;
    left: 40px;
}
</style>
<script>
import { mapGetters } from "vuex";
export default {
    data: () => ({
        cards: [
       
        ]
    }),
     computed: {
        ...mapGetters(["resterants"])
    },
};
</script>
