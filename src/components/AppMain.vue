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
            <!-- /Section Health -->
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
            <section id="our-health-services">
                <div class="container mc-container">
                    <div class="sect-head">
                        <div class="image-area mb-5">
                            <img src="../assets/img/icon-6.png" alt="">
                        </div>
                        <div class="text-area text-center">
                            <h2>OUR HEALTH SERVICES</h2>   
                            <!-- RIGA TRA H2 E P  -->
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minima impedit libero dolor itaque aperiam officiis voluptate aliquam, nihil consectetur. Obcaecati magnam dicta sapiente necessitatibus aspernatur molestiae perspiciatis, ab consequatur!</p>
                        </div>
                    </div>
                    <div class="container my-5">
                        <div class="row">
                            <div class="col-4 py-5" v-for="(service, index) in store.services" :key="index">
                                <div class="image-area text-center">
                                    <img :src="'/our-services/' + service.img" alt="">
                                </div>
                                <div class="textarea text-center p-3">
                                    <h4 class="my-4">{{service.name}}</h4>
                                    <p>{{service.text}}</p>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Section Facilities -->
            <section id="facilities" class="d-flex justify-content-center align-items-center">
                <div class="container mc-container">
                    <div class="sect-head">
                        <div class="image-area mb-5">
                            <img src="../assets/img/icon-7.png" alt="">
                        </div>
                        <div class="text-area text-center">
                            <h2>TOUR OUR FACILITIES</h2>   
                            <!-- RIGA TRA H2 E P  -->
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minima impedit libero dolor itaque aperiam officiis voluptate aliquam, nihil consectetur. Obcaecati magnam dicta sapiente necessitatibus aspernatur molestiae perspiciatis, ab consequatur!</p>
                        </div>
                        <img class="py-4 play-btn" src="../assets/img/play-icon.png" alt="">
                    </div>
                </div>
            </section>
            <!-- Section Blue Band -->
            <section id="blue-band">
                <div class="container-100 d-flex">
                    <div class="b-column left">
                        <div class="content">
                            <h5 class="py-3">Emergency Care</h5>
                            <img class="mb-4" src="../assets/img/wave-divider.png" alt="">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam nisi quae repellendus, temporibus odit possimus eius magni odio! Eveniet, hic.</p>
                            <div class="mc-btn-neutral d-inline-block">Learn More</div>
                        </div>
                    </div>
                    <div class="b-column center">
                        <div class="content">
                            <h5 class="py-3">Expert Diagnostics</h5>
                            <img class="mb-4" src="../assets/img/wave-divider.png" alt="">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam nisi quae repellendus, temporibus odit possimus eius magni odio! Eveniet, hic.</p>
                            <div class="mc-btn-neutral d-inline-block">Learn More</div>
                        </div>
                    </div>
                    <div class="b-column right">
                        <div class="content">
                            <h5 class="py-3">Superb Rehabilitation</h5>
                            <img class="mb-4" src="../assets/img/wave-divider.png" alt="">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam nisi quae repellendus, temporibus odit possimus eius magni odio! Eveniet, hic.</p>
                            <div class="mc-btn-neutral d-inline-block">Learn More</div>
                        </div>
                    </div>
                </div>
            </section>
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
    }

    #our-health-services{
        width: 100%;
        padding: 90px 0px;

        .textarea{

            h4{
                text-transform: uppercase;
                font-weight: 300;
            }

            p{
                line-height: 35px;
                color: #b1b1b1;
            }
        }
        

    }
    #facilities{
        padding: 90px 0px;
        min-height: 900px;
        color: white;

        background-image: url('../assets/img/paralax-bg-tour-facilities.jpg');
        background-repeat: no-repeat;
        background-size: cover;

        .play-btn{
            cursor:pointer;
        }
        .play-btn:hover{
            transform: scale(1.1);
        }
    }
    #blue-band{
        width: 100%;

        .b-column{
            width: calc(100% / 3);
            
        }
            .b-column.left{
                background-color: #3aafbf;
            }
            .b-column.center{
                background-color: #3597c3;
            }
            .b-column.right{
                background-color: #327ec7;
            }

        .content{
            text-align: center;
            padding: 45px;
            color: white;

            p{
                line-height: 40px;
            }
        }
    }
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
</style>