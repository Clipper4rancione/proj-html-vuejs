<script>
import { store } from '../data/store.js'
import AppJumbo from './AppJumbo.vue'

export default {
    name: 'AppMain',
    components:{
        AppJumbo,
    },
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
        <!-- Jumbotron -->
        <AppJumbo />
    <main>
        <div class="container">
            <!-- Section Health-->
            <section id="health">
                <div class="container">
                    <div class="welcome-area mt-5 py-4">
                        <h2 class="text-center">Welcome to Avada Health</h2>
                        <p class="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, quas. Impedit eveniet perspiciatis, quos eaque numquam delectus voluptas assumenda sit. Impedit eveniet perspiciatis, quos eaque numquam</p>
                    </div>
                </div>
                <div class="container">
                    <div class="row w-100">
                        <div class="col-3 my-5">
                            <div class="info-card">
                                <img src="../assets/img/icon-1.png" alt="">
                                <h5>SAME DAY APPOINTMENTS</h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Section Meet Doc.-->
                <!-- Cards with doctors -->

            <!-- /Section Meet Doc.-->

            <!-- Section Services -->

            <!-- Section Facilities -->
            
            <!-- Section Blue Band -->

            <!-- Form Section -->

            <!-- Sponsor Section (Slider?) -->
            M
        </div>
    </main>
  
</template>


<style lang="scss" scoped>
    #health{
        width: 100%;
        padding: 10px;


        .welcome-area{
            width: 80%;
            margin: 0 auto;
            h2 {
            
                font-weight: 300;
            }

            p {
                margin-top: 20px;
                line-height: 35px;
            }
        }
        .info-card{
            display: flex;
            margin-top: 30px;

            text-align:center;
            font-weight: 300;

            flex-direction: column;
            justify-content: center;
            align-items: center;

            p {
                line-height: 30px;
            }
            img{
                margin-bottom: 25px;
                width: 100px;
            }
        }
    }
</style>