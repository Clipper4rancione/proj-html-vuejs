<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <!-- Logo -->
        <!-- Menu navigazione dinamico -->
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
        height: 70px;

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
                    font-weight: 500;
                    font-size: 0.9rem;
                    
                    a{
                        color: black;
                    }
                }
            }
        
    }

</style>