<template>
    <div class="project">
        <h3 class="grey--text">Project Page</h3>
        <v-container>
            <v-expansion-panels popout tile outlined focusable>
                <v-expansion-panel v-for="project in myProject" :key="project.title">
                    <v-expansion-panel-header class="pa-5">
                        {{ project.title }}
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <div class="font-weight-bold mt-3">due by {{ project.due }}</div>
                        <div>{{ project.content }}</div>
                        <v-btn rounded text outlined class="red--text my-4 mr-4">
                            <v-icon left>mdi-delete-circle</v-icon>
                            Delete</v-btn
                        >
                        <v-btn rounded text outlined class="info--text my-4">
                            <v-icon left>mdi-pencil-circle</v-icon>
                            Edit</v-btn
                        >
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'ProjectsView',
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
                {
                    title: 'Ecommerce Website',
                    person: 'Sachin',
                    due: '18 Jan 2023',
                    status: 'ongoing',
                    content: 'This is the  short description about the working of ther project which we will be making',
                },
            ],
        };
    },
    computed: {
        myProject() {
            // return this.projects.filter((project) => {
            //     return project.person === 'Sachin';
            // });
            return this.projects
        },
    },
};
</script>

<style></style>
