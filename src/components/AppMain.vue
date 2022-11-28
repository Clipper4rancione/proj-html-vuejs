<script>
import { store } from '../data/store.js'
import AppJumbo from './AppJumbo.vue'
import DoctorCard from './parts/DoctorCard.vue'

export default {
    name: 'AppMain',
    components:{
        AppJumbo,
        DoctorCard
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
                        <div class="col-3 my-5" v-for="(card, index) in store.infoCard" :key="index">
                            <div class="info-card">
                                <img :src="'./infocard-icons/' + card.img" :alt="card.caption">
                                <h5>{{card.caption}}</h5>
                                <p>{{card.comment}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Section Meet Doc.-->
            <section id="meet-our-doctors">
                <div class="container mc-container">
                    <div class="sect-head">
                        <div class="image-area mb-5">
                            <img src="../assets/img/icon-5.png" alt="">
                        </div>
                        <div class="text-area text-center">
                            <h2>MEET OUR DOCTORS</h2>   
                            <!-- RIGA TRA H2 E P  -->
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minima impedit libero dolor itaque aperiam officiis voluptate aliquam, nihil consectetur. Obcaecati magnam dicta sapiente necessitatibus aspernatur molestiae perspiciatis, ab consequatur!</p>
                        </div>
                    </div>
                <!-- Cards with doctors -->
                    <div class="container">
                        <div class="row d-flex justify-content-center align-items-center">
                            <DoctorCard />
                        </div>
                    </div>
                </div>
            </section>

            <!-- /Section Meet Doc.-->

            <!-- Section Services -->

            <!-- Section Facilities -->
            
            <!-- Section Blue Band -->

            <!-- Form Section -->

            <!-- Sponsor Section (Slider?) -->
            
    </main>
  
</template>


<style lang="scss" scoped>
    #health{
        width: 100%;
        padding: 100px 0px;


        .welcome-area{
            width: 80%;
            margin: 0 auto;
            h2 {
            
                font-weight: 300;
            }

            p {
                font-weight: 300;
                font-size: 1.2rem;
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

            h5{ 
                font-weight: 300;
                font-size: 1.1rem;
                text-transform: uppercase;
            }

            p {
                line-height: 30px;
                color: gray;
            }
            img{
                margin-bottom: 25px;
                width: 80px;
            }
        }
    }

    #meet-our-doctors{
        width: 100%;
        padding: 100px 0px;
        background-color: #f1efef;

        .sect-head {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .text-area {
                width: 60%;
                h2{
                    font-weight: 300;
                    margin-bottom: 40px;
                    
                }

                p {
                    line-height: 40px;
                }
            }
        }

        
    }
</style>