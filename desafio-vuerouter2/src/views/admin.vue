<template>
    <header class="masthead" style="background-image:url('assets/img/contact-bg.jpg');">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-lg-8 mx-auto">
                    <div class="site-heading">
                        <h1 class="subheading"><strong>{{ mensaje }}</strong></h1>
                </div>
            </div>
        </div>
        </div>  
    </header>       
</template>

<script>
export default {
    props:['tipoadmin'],
    computed:{
        mensaje(){
            if(this.tipoadmin == 'simple'){
                return `Bienvenidx a la página de Administración`;
            }
            else if(this.tipoadmin == 'avanzado'){
                return `Esta página de administración está en construcción. Intente como administrador simple`;
            }
            else {
                return `Esta página no existe. Por favor vuelva a ingresar la dirección o intente como administrador simple.`;
            }
        }
    }
}
</script>