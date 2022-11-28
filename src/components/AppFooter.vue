<script>
export default {
    name: 'AppFooter'
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
                    <div class="col-auto center-section">
                        c
                        <!-- h2 -->
                        <!-- List -->
                    </div>
                    <!-- /Center Section -->
                    
                    <!-- Right Section -->
                    <div class="col-auto right-section">
                        r
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

                i{
                    cursor: pointer;
                    font-size: 2rem;
                    margin-top: 35px;
                    margin-right: 15px;
                }
            }
        }
    }
</style>   