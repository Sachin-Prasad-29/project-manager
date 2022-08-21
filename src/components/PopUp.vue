<template>
    <v-dialog transition="dialog-bottom-transition" max-width="600px" v-model="dialog">
        <template v-slot:activator="{ on, attrs }">
            <v-btn rounded small outlined slot="activator" class="info--text text-capitalize" v-bind="attrs" v-on="on">
                Add new project
            </v-btn>
        </template>

        <template>
            <v-card>
                <v-card-actions class="justify-space-between mx-0 my-0">
                    <v-card-title>Add a New Project </v-card-title>
                    <v-btn text small fab @click="dialog = false" class="red--text">
                        <v-icon>mdi-close-circle</v-icon>
                    </v-btn>
                </v-card-actions>
                <v-form class="px-7" ref="form">
                    <v-text-field
                        label="Title"
                        v-model="title"
                        append-icon="mdi-folder"
                        :rules="inputRules"
                    ></v-text-field>
                    <v-textarea
                        label="Information"
                        rows="1"
                        v-model="content"
                        append-icon="mdi-pencil"
                        :rules="inputRules"
                    ></v-textarea>
                    <v-row>
                        <v-col cols="12" lg="12">
                            <v-menu v-model="menu2" :close-on-content-click="true" max-width="290">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        class="mb-3"
                                        :value="due"
                                        clearable
                                        label="Pick date"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                        @click:clear="date = null"
                                        append-icon="mdi-calendar"
                                        :rules="dateRule"
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="due" @change="menu2 = false"></v-date-picker>
                            </v-menu>
                        </v-col>
                    </v-row>

                    <v-btn @click="submit" rounded outlined class="success--text mx-0 mb-4"> Add Project </v-btn>
                </v-form>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>


export default {
    name: 'PopUp',
    data() {
        return {
            dialog: false,
            title: '',
            content: '',
            due: null,
            menu2: false,
            inputRules: [(v) => v.length >= 3 || 'Minimum length is 3 Character'],
            dateRule: [(v) => v != null || 'Date Must be selected'],
        };
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                
                this.title = '';
                this.content = '';
                this.due = null;
                this.dialog = false;
            }
        },
    },
};
</script>

<style></style>
