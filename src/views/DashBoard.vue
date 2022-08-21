<template>
    <div class="dashboard">
        <h3 class="subheading grey--text my-3">DashBoard Page</h3>

        <v-container class="my-5">
            <v-layout my-4>
                <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn small text color="grey" @click="sortBy('title')" v-bind="attrs" v-on="on">
                            <v-icon left small>mdi-folder</v-icon>
                            <span class="caption text-lowercase">By project name</span>
                        </v-btn>
                    </template>
                    <span class="caption">Sort Projects by Project Name</span>
                </v-tooltip>
                <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn small text color="grey" @click="sortBy('person')" v-bind="attrs" v-on="on">
                            <v-icon left small>mdi-account</v-icon>
                            <span class="caption text-lowercase">by person</span>
                        </v-btn>
                    </template>
                    <span class="caption">Sort projects by person</span>
                </v-tooltip>
            </v-layout>

            <v-card tile elevation="0" class="px-5 py-4" v-for="project in projects" :key="project.title">
                <v-layout row :class="`pa-4 project ${project.status}`">
                    <v-flex xs12 md6>
                        <div class="grey--text caption">Project Title</div>
                        <div>{{ project.title }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="grey--text caption">Person</div>
                        <div>{{ project.person }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="grey--text caption">Due by</div>
                        <div>{{ project.due }}</div>
                    </v-flex>
                    <v-flex xs4 sm4 md2 right>
                        <div>
                            <v-chip small :class="`${project.status} white--text caption my-2 `">{{
                                project.status
                            }}</v-chip>
                        </div>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'DashBoard',
    components: {},
    data() {
        return {
            projects: [
                {
                    title: 'Meeting Application',
                    person: 'Sachin',
                    due: '1 Jan 2023',
                    status: 'ongoing',
                    content: 'This is the  short description about the working of ther project which we will be making',
                },
                {
                    title: 'Workshop Application',
                    person: 'Sameer and Nitish',
                    due: '10 Jan 2023',
                    status: 'completed',
                    content: 'This is the  short description about the working of ther project which we will be making',
                },
                {
                    title: 'Todo List',
                    person: 'Backend Team',
                    due: '1 Dec 2022',
                    status: 'overdue',
                    content: 'This is the  short description about the working of ther project which we will be making',
                },
                {
                    title: 'Ecommerce Website',
                    person: 'Frontend Team',
                    due: '18 Jan 2023',
                    status: 'ongoing',
                    content: 'This is the  short description about the working of ther project which we will be making',
                },
            ],
        };
    },
    methods: {
        sortBy(prop) {
            this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
        },
    },
};
</script>

<style scoped>
.project.completed {
    border-bottom: 1px solid lightgray;
    border-left: 5px solid green;
}
.project.overdue {
    border-bottom: 1px solid lightgray;
    border-left: 5px solid red;
}
.project.ongoing {
    border-bottom: 1px solid lightgray;
    border-left: 5px solid rgb(255, 166, 0);
}

.v-chip.completed {
    background: green;
}
.v-chip.ongoing {
    background: rgb(255, 166, 0);
}
.v-chip.overdue {
    background: red;
}
.right {
    text-align: right;
}
</style>
