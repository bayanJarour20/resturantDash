<template>
     <v-app class="app-dashboard">
        <TCNavbar  />
        <TCAside />
        <router-view />
    </v-app> 
</template>
<style lang="scss" >
.app-dashboard {
    background: linear-gradient(180deg, #f3f4f9 0%, #f3f4f9 100%)!important;
}
</style>
<script>
import TCNavbar from "./navbar";
import TCAside from "./aside";
export default {
    components: {
        TCAside,
        TCNavbar
    }
};
</script>
