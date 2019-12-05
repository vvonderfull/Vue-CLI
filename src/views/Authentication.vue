<template>
    <div class="auth">
        <form @submit.prevent="submitHandler">
            <h2>Авторизация</h2>
            <input type="text" placeholder="Login" v-model.trim="email" :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}">
            <label v-if="$v.email.$dirty && !$v.email.required">Заполните логин</label>
            <label v-else-if="$v.email.$dirty && !$v.email.email">Введите корректный логин</label>
            <label v-else>Введите логин</label>
            <input type="password" placeholder="Password" v-model.trim="password" :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}">
            <label v-if="$v.password.$dirty && !$v.password.required">Заполните пароль</label>
            <label v-else-if="$v.password.$dirty && !$v.password.minLength">
                Пароль должен быть {{$v.password.$params.minLength.min}} символов.
            </label>
            <label v-else>Введите пароль</label>
            <button type="submit">Войти</button>
        </form>
    </div>
</template>

<script>
    import { email, required, minLength } from 'vuelidate/lib/validators'

    export default {
        name: 'login',
        data: () => ({
            email: '',
            password: '',
            isAuth: true,
        }),
        validations: {
            email: { email, required },
            password: { required, minLength: minLength(6) }
        },
        methods: {
            async submitHandler () {
                if (this.$v.$invalid) {
                    this.$v.$touch()
                    return
                }
                const formData = {
                    email: this.email,
                    password: this.password
                }
                try {
                    await this.$store.dispatch('login', formData)
                    this.$emit('submitHandler', this.isAuth, this.email);
                } catch (e) {
                    alert('Неправильный Email или пароль')
                }
            }
        }
    }
</script>

<style scoped lang="scss">

    .auth {
        display: flex ;
        justify-content:center;
        align-items: center;
        margin-top: 10px;
    }

    .invalid {
        border: 1px solid red;
    }

    form {
        background: white;
        display: flex;
        flex-direction: column;
        width: 400px;
        border: 1px solid #2c3e50;

        h2 {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 10px;
            border-bottom: 1px solid #2c3e50;
        }

        input {
            padding: 10px 0 10px 10px;
            margin: 0 15px 0px 15px;
            border: 1px solid #2c3e50;
        }

        input:focus {
            outline: none;
            /*border: 2px solid #42b983;*/
        }

        label {
            margin-bottom: 15px;
            margin-left: 25px;
            margin-top: 10px;
            text-align: left;
        }

        button {
            width: 100px;
            margin: 40px auto;
            padding: 5px 5px;
            background: none;
            color: #2c3e50;
            border: 1px solid #cccccc;
            border-radius: 10px;
            outline: none;
            cursor: pointer;
        }
    }
</style>