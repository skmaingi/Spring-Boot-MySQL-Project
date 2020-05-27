<template>
    <div class="home row">
        <div class="col-md-3">
            <span class="hipster img-fluid rounded"></span>
        </div>
        <div class="col-md-9">
            <div>
                <div class="alert alert-success" v-if="authenticated">
                    <span v-if="username">You are logged in as user "{{username}}"</span>
                </div>

                <div class="alert alert-warning" v-if="!authenticated">
                    <a class="alert-link" v-on:click="openLogin()">Sign In</a>
                </div>
                <div class="alert alert-warning" v-if="!authenticated">
                    <router-link class="alert-link" to="/register">Register</router-link>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts" src="./home.component.ts">
</script>
