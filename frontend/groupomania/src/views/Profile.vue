<template>
    <section class="profile card">
        <h1>Profil</h1>
        <div>
            <p>Nom d'utilisateur: <span class="profile__info">{{username}}</span></p>
            <p>Adresse électronique: <span class="profile__info">{{email}}</span></p>
            <p>Rôle: <span class="profile__info">{{role}}</span></p>
            <div class="profile__buttons">
                <Button link="/login" type="btn btn--red" text="Supprimer le compte" />
                <Button link="/homepage" type="btn btn--blue" text="Retour" />
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
        }
    }
</script>