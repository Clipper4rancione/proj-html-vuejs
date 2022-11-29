<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <!-- Logo -->
        <!-- Menu navigazione dinamico -->

        <!-- HEADER E JUMBOTRON DA SISTEMARE -->

        <div class="h-wrapper">
            <div class="logo-area">
                <img src="../assets/img/medical_logo_1x_dark.png" alt="">
            </div>

            <div class="nav-area">
                <ul>
                    <li><a class="nav-header-active" href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">DEPARTMENTS</a></li>
                    <li><a href="#">ARTICLES</a></li>
                    <li><a href="#">
                        <span class="mc-btn">
                            MAKE APPOINTMENT
                        </span>
                        </a></li>
                </ul>
            </div>
        </div>
    </header>
</template>


<style lang="scss" scoped>

    header {
        width: 100%;
        height: 70px;
        position: fixed;
        top: 0;
        left: 0;
        
        

        .h-wrapper{
            width: 100%;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            
        }
        .nav-header-active{
            color: #449ebf;
        }

            .logo-area{
                width: 190px;

                img{
                    width: 100%;
                    vertical-align: middle;

                }
            }
            ul{
                list-style: none;
                display: flex;
                align-items: center;

                li{
                    margin-left: 25px;
                    font-size: 0.9rem;
                    
                    a{
                        font-weight: 500;
                        color: white;
                    }
                }
            }
        
    }

</style>