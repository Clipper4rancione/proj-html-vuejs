<script>
export default {
    name: 'AppJumbo'
}
</script>

<template>
    <section id="jumbotron">
        <div class="container d-flex align-items-center">
            <div class="row">
                <div class="col-7">
                    <h1>Caring <span>For Life</span></h1>
                    <p>Kind words can be short and easy to speak, but their echoes are truly endless. Avada Health focuses on you as if it was our own family</p>
                </div>
            </div>
            
        </div>
    </section>
  
</template>


<style lang="scss" scoped>
    #jumbotron{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 850px;
        background-image: url('../assets/img/header-image-homepage.jpg');
        background-repeat: no-repeat;
        background-size: cover;

        color: white;
    }
    .container{
        position: absolute;
        top: 33%;
        left: 23%;

        h1{
            font-weight: 300;
            font-size: 4.5rem;
        }
        span{
            color: #39afbb;
        }
        p{
            font-size: 1.2rem;
        }
    }
</style>