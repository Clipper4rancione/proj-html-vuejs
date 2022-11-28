<script>
import { store } from '../data/store.js';
export default {
    name: 'AppFooter',
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
    <footer>
        <div class="f-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4 left-section">
                    <!-- Left Section -->
                    <!-- Logo -->
                    <img src="../assets/img/medical_logo_1x_dark.png" alt="">
                    <!-- Paragraph -->
                    <div class="text-area">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, aliquid pariatur voluptate iste amet mollitia magnam illo neque quisquam non! Lorem ipsum dolor sit amet consectetur </p>
                    </div>
                    
                    <div class="link-area">
                        <a href="#" class="d-block">LEARN MORE ABOUT US</a>    
                        <!-- Socials -->
                        <i class="fa-brands fa-square-facebook fb"></i>
                        <i class="fa-brands fa-square-twitter tw"></i>
                        <i class="fa-brands fa-square-youtube yt"></i>
                        <i class="fa-brands fa-square-instagram ig"></i>
                    </div>

                    <!-- /Left Section -->
                    </div>


                    <!-- Center Section -->
                    <div class="col-4 center-section">
                        <div class="container">
                        <h6>CONTACT INFORMATION</h6>
                        <!-- List -->
                        <ul>
                            <li>
                                <i class="fa-solid fa-location-dot"></i>
                                121 King street, London, United Kingdom
                            </li>
                            <li>
                                <i class="fa-solid fa-phone"></i>
                                1.800.458.566
                            </li>
                        </ul>

                        </div>
                    </div>
                    <!-- /Center Section -->
                    
                    <!-- Right Section -->
                    <div class="col-4 right-section">
                        <div class="container">
                            <h6>Medical Departments</h6>

                            <ul>
                                <li v-for="(item, index) in store.footerList" 
                                    :key="index">
                                        <a :href="item.link"></a>
                                        {{item.name}}
                                </li>
                            </ul>
                        </div>
                        <!-- h2 -->
                        <!-- List -->
                        <!-- Button CTA -->
                    </div>
                    <!-- /Right Section -->
                </div>
            </div>


        </div>
            
    </footer>
  
</template>


<style lang="scss" scoped>
    .f-wrapper {
        padding: 20px;
        display: flex;

        h6{
            text-transform: uppercase;
            margin-bottom: 35px;
        }
        .left-section {

            img{
                width: 200px;
            }

            .text-area{
                border-bottom: 1px solid #dbdbdb;

                p{

                    margin-top: 20px;
                    line-height: 35px;
                    color: #bebdbd;

                }
            }
            .link-area{
                margin-top: 10px;

                a{
                    color: black;
                }

                i{
                    cursor: pointer;
                    font-size: 2rem;
                    margin-top: 35px;
                    margin-right: 15px;
                }
            }
        }
        .center-section{
            li{
                margin-top: 20px;
                
                i{
                    font-size: 1.2rem;
                    margin-right: 5px;
                    color: #3aafbf;
                }
            }
        }
        .right-section{

            li{
                line-height: 35px;
                cursor: pointer;
            }
            li:before{
                content: '\f054';
                font-family: 'Font Awesome 6 Free';
                font-weight: 800;
                margin-right: 10px;

                padding: 10px;
                line-height: 5px;

                font-size: .6rem;
                border-radius: 50%;
                background-color: #3aafbf;
                color: white;
            }
        }
    }
</style>   