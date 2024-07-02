<template>
    <v-card class="border_y_TC_orange">
        <v-card-title class="justify-center">{{ cardTitle }}</v-card-title>
            <v-card-text>
                 <v-form v-model="valid">
                    <v-row class="text-right" justify="center">
                        <v-col>
                            <v-text-field
                                dense
                                solo
                                background-color="#f1f1f1"
                                :prepend-inner-icon="iconCard"
                                v-model="city.firstName"
                                color="dark"
                                :rules="rules.FristName"
                            >
                            </v-text-field>
                        </v-col>
                    </v-row>
             </v-form>
        </v-card-text>
        <v-card-actions
            class="justify-content-around pb-4"
            style="justify-content: space-around"
        >
            <v-btn
                :disabled="!valid"
                :elevation="2"
                class="m-0"
                style="background-color: #f1f1f1"
                @click="deleteItem(city)"
            >
                <template>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.9963 7.99609L8.00293 11.9894"
                            stroke="#000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M11.9976 11.9916L8.00098 7.99414"
                            stroke="#000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.612 2.29199H6.38783C3.87033 2.29199 2.29199 4.07449 2.29199 6.59699V13.4037C2.29199 15.9262 3.86283 17.7087 6.38783 17.7087H13.6112C16.137 17.7087 17.7087 15.9262 17.7087 13.4037V6.59699C17.7087 4.07449 16.137 2.29199 13.612 2.29199Z"
                            stroke="#000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </template>
            </v-btn>
            <v-btn
                :elevation="2"
                class="m-0"
                style="background-color: #f1f1f1"
                @click="addItem(city)"
                    :disabled="!valid"
            >
                <v-icon small>mdi-plus-thick </v-icon>
            </v-btn>
            <v-btn
                :elevation="2"
                class="m-0"
                style="background-color: #f1f1f1"
                @click="editItem(city)"
                    :disabled="!valid"
            >
                <v-icon small> mdi-pencil </v-icon>
            </v-btn>
        </v-card-actions>
        <v-data-table
            :headers="headersProps"
            :items-per-page="3"
            hide-default-footer
            class="TC_Table my-5"
            @page-count="pageCount = $event"
            :page.sync="page"
            light
            mobile-breakpoint="960"
            color="info"
            :items="headersItem"
        >
            <template slot="item" slot-scope="{ item }">
                <tr @click="rowClick(item)">
                    <td>{{ item.firstName }}</td>
                </tr>
            </template>
        </v-data-table>
        <div class="text-center py-2">
            <v-pagination
                color="dark"
                v-model="page"
                :total-visible="7"
                :length="pageCount"
            ></v-pagination>
        </div>
    </v-card>
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
export default {
    props: {
        cardTitle: {
            type: String,
            required: true,
        },
        iconCard: {
            type: String,
        
        },
        headersProps: {
            type: Array,
            required: true,
        },
        headersItem: {
            type: Array,
            required: true,
        },
    },
    data: () => ({
        valid:false,
        page: 1,
        pageCount: 0,
        city: {
            id: 0,
            firstName: "",
        },
         rules: {
                FristName: [
                    val => (val.trim() || "").length > 0 || "هذا الحقل مطلوب"
                ],
                },
        ids: 0,
    }),
    methods: {
        rowClick(item) {
            Object.assign(this.city, item);
            console.log(this.city);
        },
        editItem(item) {
            // const index = this.headersItem.findIndex((el) => el.id == item.id);
            // this.headersItem[index].firstName = item.firstName;
            this.$emit("editItem", item);
        },
        deleteItem(item) {
            // const index = this.headersItem.findIndex((el) => el.id == item.id);
            // this.headersItem.splice(index, 1);
            this.$emit("deleteItem", item);
        },
        addItem(localeItem) {
            const id = this.ids++;
            const item = { firstName: localeItem.firstName, id };
            console.log(this.valid)
            // this.headersItem.push(item);
            this.$emit("addItem", item);
        },
    },
};
</script>
