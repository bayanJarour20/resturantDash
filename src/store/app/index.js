const state = {
    breadcrumbs_items: [],
    domainHost: "https://localhost:44340",
    placeholder:"/src/assets/logo.svg",
};
const getters = {
    breadcrumbs_items(state) {
        return state.breadcrumbs_items;
    },
};
const mutations = {
    SET_BREADCRUMBS_ARRAY(state, payload) {
        state.breadcrumbs_items = payload;
    },

};
const actions = {
    setBreadcrumbs(context, payload) {
        context.commit("SET_BREADCRUMBS_ARRAY", payload);
    },

};

const appStore = { state, getters, mutations, actions };

export default appStore;