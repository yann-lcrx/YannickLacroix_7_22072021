<template>
    <div class="login">    
        <section>
            <h1>Bienvenue sur Groupomania</h1>
            <div>
                <div>
                    <img src="../assets/icon.png" alt="icône Groupomania" class="icon">
                </div>
                <div>
                    <form>
                        <input type="email" id="email" placeholder="Adresse électronique"><br>
                        <input id="username" placeholder="Nom d'utilisateur"><br>
                        <input id="password" placeholder="Mot de passe"><br>
                        <div>
                            <a href="" class="btn btn--login">Se connecter</a>
                            <p>ou</p>
                            <a href="" class="btn btn--signup">S'inscrire</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
    .login{
        max-width: 90%;
        margin: auto;
    }
    h1 {
        text-align: initial;
        font-size: 2rem;
    }
    .icon {
        max-width: 400px;
        mix-blend-mode: darken;
    }
    section > div {
        display: flex;
        div {
            flex: 1;
        }
    }
    .btn {
        color: #fefefe;
        text-decoration: none;
        padding: 10px;
        border-radius: 6px;
        box-shadow: 4px 4px 6px 1px rgba(22,22,22,0.7);
        margin-top: 24px;
        font-weight: bold;
        &--login{
            background-color: #080f88;
        }
        &--signup{
            background-color: #aa2f18;
        }
    }
    input {
        margin-bottom: 12px;
        width: 100%;
        font-size: 1.3rem;
        padding: 6px;
        border-radius: 8px;
        border: 1px gray solid;
    }
    
    form div{
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 600px;
        margin: auto;

    }
</style>

<!--<script>
</script>-->