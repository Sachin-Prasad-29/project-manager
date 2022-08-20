<template>
    <div class="team">
        <h3 class="grey--text">Team Page</h3>
        <v-container class="my-5">
            <v-layout row >
                <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
                    <v-card  elevation="0" class="text-center ma-3 py-4" outlined>
                        <v-responsive class="pt-4">
                             <v-avatar size="150">
                                <img :src="person.avatar">
                            </v-avatar>
                             </v-responsive>
                        <v-card-text>
                            <div class="subtitle-1">{{ person.name }}</div>
                            <div class="caption grey--text">{{ person.role }}</div>
                        </v-card-text>
                        
                            <v-btn  outlined rounded color="blue darken-2 ma-3" >
                                <v-icon left small>mdi-message</v-icon>
                                <span right class="text--lowercase">Message</span>
                            </v-btn>
                        
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'TeamView',
    data() {
        return {
            team: [
                { name: 'Sachin', role: 'ML Developer', avatar: '/avator-1.jpg' },
                { name: 'Sameer', role: 'Backend Developer', avatar: '/avator-2.jpg' },
                { name: 'Nitish', role: 'Frontend Developer', avatar: '/avator-3.jpg' },
                { name: 'Aquib', role: 'Product designer', avatar: '/avator-4.jpg' },
                { name: 'Chintu', role: 'Product Tester', avatar: '/avator-5.jpg' },
            ],
        };
    },
};
</script>

<style scoped>
.mess-center{
    align-content: center;
}

</style>
