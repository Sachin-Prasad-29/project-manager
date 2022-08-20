<template>

    <v-app>
        <v-content >
            
            <NavBar />
            <div class="mx-5 mb-3">
                <router-view />
            </div>
        </v-content>
    </v-app>

</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
    name: 'App',
    components: { NavBar },

    data: () => ({}),
};
</script>

<style scoped></style>
