export default{
    state:{
        city: [
            {
                id: 1,
                firstName: "aleppo",
                countryId: 1
            },{
                id: 2,
                firstName: "hama",
                countryId: 1
            },
            {
                id: 2,
                firstName: "hama",
                countryId: 1
            },
            

        ],
        country: [
            {
                id: 1,
                firstName: 'syria'
            },
            {
                id: 2,
                firstName: 'syria'
            },
                {
                    id: 3,
                    firstName: 'syria'
                }
            
        ],
        varieties: [
            {
                id:1,
                firstName:"hjhhj"
            },{
                id:2,
                firstName:"hjhhj"
            }
        ]
    },
    getters:{
        city(state){
            return state.city
        },
        country(state){
            return state.country
        },
        varieties(state){
            return state.varieties
        }
    },
    mutations:{
        add_city_action(state, data){
            state.city.push(data);
        },
        delete_city_action(state,data){
            console.log("delete_city_action",data);
            const index = state.city.findIndex((el) => el.id == data.id);
            state.city.splice(index, 1);
        },
        edit_city_action(state,data){
            console.log("edit_city_action",state.city);
            const index = state.city.findIndex((el) =>el.id == data.id);
            state.city[index].firstName = data.firstName;
           
        },
        add_country_action(state, data){
            state.country.push(data);        
        },
        delete_country_action(state,data){
            const index = state.country.findIndex((el) => el.id == data.id);
            state.country.splice(index, 1);
        },
        edit_country_action(state,data){
            console.log("edit_country_action",data);
            const index = state.country.findIndex((el) =>el.id == data.id);
            state.country[index].firstName = data.firstName;
        },
        add_varieties_action(state, data){
            console.log("add_varieties_action", data);
            state.varieties.push(data);     
        },
        delete_varieties_action(state,data){
            console.log("delete_varieties_action",data);
            const index = state.varieties.findIndex((el) => el.id == data.id);
              state.varieties.splice(index, 1);
        },
        edit_varieties_action(state,data){
            console.log("edit_varieties_action",data);
            const index = state.varieties.findIndex((el) =>el.id == data.id);
            state.varieties[index].firstName = data.firstName;
        },
        
    },
    actions:{
        addCityAction(ctx, data){
            ctx.commit("add_city_action", data)
        },
        deleteCityAction(ctx ,data){
            ctx.commit("delete_city_action",data)
        },
        editCityAction(ctx,data){
            ctx.commit("edit_city_action",data)
        },   
        addCountryAction(ctx, data){
            
            ctx.commit("add_country_action", data)
        },
        deleteCountryAction(ctx ,data){
            ctx.commit("delete_country_action",data)
        },
        editCountryAction(ctx,data){
            
            ctx.commit("edit_country_action",data)
        },    
        addVarietiesAction(ctx, data){
            ctx.commit("add_varieties_action", data)
        },
        deleteVarietiesAction(ctx ,data){
            ctx.commit("delete_varieties_action",data)
        },
        editVarietiesAction(ctx,data){
            ctx.commit("edit_varieties_action",data)
        }, 
    }

}