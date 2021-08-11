<template>
    <section class="profile card">
        <h1>Profil</h1>
        <div>
            <p>Nom d'utilisateur: <span class="profile__info">{{loggedInUser.name}}</span></p>
            <p>Adresse électronique: <span class="profile__info">{{loggedInUser.email}}</span></p>
            <p>Rôle: <span class="profile__info">{{loggedInUser.role}}</span></p>
            <div class="profile__buttons">
                <Button link="/login" btnclass="btn btn--red" text="Supprimer le compte" />
                <Button link="/homepage" btnclass="btn btn--blue" text="Retour" />
            </div>
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
        name: "Profile",
        components: {
            Button
        },
        data() {
            return {
                username: "Yannick",
                email: "yannick84v@gmail.com",
                role: "Administrateur"
            }
        },
        computed: {
            ...mapState({
                loggedInUser: "loggedInUser"
                })
            }
    }
</script>