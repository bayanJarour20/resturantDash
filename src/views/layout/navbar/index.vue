<template>
    <v-container class="mb-11" >
        <v-app-bar
            color="transparent"
            class="main-header"
            dense
            flat
            app
            v-if="breadcrumbs_items.isActive"
        >
            <v-toolbar
                :elevation="3"
                dense
                color="white"
                class="rounded-b align-items-center"
            >
                <v-tabs align-with-title>
                    <v-tab color="#000" to="/setting">الإعدادت</v-tab>
                    <v-tab to="/resterants">المطاعم</v-tab>
                </v-tabs>
                <h2 style="color: #3a405a">
                    {{ breadcrumbs_items.items[0].text }}
                </h2>
            </v-toolbar>
        </v-app-bar>
    </v-container>
</template>
<style lang="scss">
@import "/src/assets/scss/helpers/variables.scss";
.v-application .white{
     background-color: $dark!important;    
 }
.v-toolbar__content {
    justify-content: flex-end !important;
}
.v-slide-group__wrapper {
    color: rgb(153, 178, 221);
}
.v-slide-group__wrapper a {
    font-size: 20px !important;
}
</style>
<script>
import { mapGetters } from "vuex";
export default {
    name: "TC-navbar",
    computed: {
        ...mapGetters(["breadcrumbs_items"]),
    },
};
</script>
