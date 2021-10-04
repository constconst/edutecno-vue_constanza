
<template>
    <h1>Funciono</h1>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
    name: 'login',
    data() {
        return{
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        //email: simon@gmail.com
        //password: desafiolatam
        login(){
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
            .then(() => {
                this.$router.push('/home');
            })
            .catch((err) => {
                this.error = `El email o la contraseña no son correctos`;
                console.log(`Error: ${err.code}`);
            });
        }
    }
}
</script>
