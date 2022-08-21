<template>
    <v-snackbar v-model="snackbar" color="outlined" top :timeout="2000">
        This is some text
        <template v-slot:action="{ attrs }">
            <v-btn color="pink" small text fab v-bind="attrs" @click="snackbar = false"> <v-icon>mdi-close-circle</v-icon> </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
export default {
    name: 'SnackBar',
    data() {
        return {
            snackbar: true,
        };
    },
};
</script>

<style scoped></style>
