<template>
    <div >
        <v-app-bar color="cyan darken-2" dark>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            
            <v-toolbar-title>
                <span class="font-weight-light">Todo</span>
                <span>Ninja</span>
            </v-toolbar-title>
           
            <v-spacer></v-spacer>

            <v-btn text color="white">
                <span>Sign Out</span>
                <v-icon right>mdi-logout</v-icon>
            </v-btn>
            
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app class="grey darken-3">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img src="/avator-1.jpg" alt="" />
                    </v-avatar>
                    <p class="white--text subheading mt-4">Sachin Prasad</p>
                </v-flex>
            </v-layout>
            <v-list>
                <v-list-item-group v-model="group" active-class="white--text ">
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-item-action>
                            <v-icon color="white">mdi-{{ link.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>

            <v-switch v-model="$vuetify.theme.dark" inset color="black" right class="ma-5"></v-switch
        ></v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            links: [
                { icon: 'view-dashboard', text: 'Dashboard', route: '/' },
                { icon: 'folder', text: 'My Project', route: '/project' },
                { icon: 'account', text: 'Team', route: '/team' },
            ],
        };
    },
};
</script>

<style></style>
