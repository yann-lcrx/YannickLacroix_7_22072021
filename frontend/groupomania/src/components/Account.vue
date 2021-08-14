<template>
    <section class="profile card">
        <h1>Profil</h1>
        <div>
            <p>Nom d'utilisateur: <span class="profile__info">{{loggedInUser.name}}</span></p>
            <form @submit.prevent="emitUserEvent" class="profile__buttons">
                <Button type="submit" btnclass="btn btn--red" text="Supprimer le compte" />
                <Button link="/homepage" btnclass="btn btn--blue" text="Retour" />
            </form>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .profile {
        margin-bottom: 32px;
        &__info {
            font-weight: bold;
            color: darken(#000077, 5)
        }
        &__buttons {
            margin: auto;
            width: 50%;
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-around;
        }
    }
</style>

<script>
import Button from "@/components/Button";
import { mapState } from "vuex";

export default {
        name: "Account",
        components: {
            Button
        },
        computed: {
            ...mapState({
                loggedInUser: "loggedInUser"
                })
        },
        methods: {
            emitUserEvent() {
                this.$emit('user-submit', {
                    id: this.loggedInUser.id
                })
            }
        },
}
</script>