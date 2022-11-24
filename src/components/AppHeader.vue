<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <!-- Logo -->
        <!-- Menu navigazione dinamico -->
            <div class="logo-area">
                <img src="../assets/img/medical_logo_1x_dark.png" alt="">
            </div>

            <div class="nav-area">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">DEPARTMENTS</a></li>
                    <li><a href="#">ARTICLES</a></li>
                    <li class="mc-btn"><a href="#">MAKE APPOINTMENT</a></li>
                </ul>
            </div>
    </header>
</template>


<style lang="scss" scoped>

    header {
        position: sticky;
        top: 0;
        left: 0;
        padding: 18px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 999;

            .logo-area{
                height: 100%;
                width: 170px;

                img{
                    width: 100%;
                    vertical-align: middle;

                }
            }
            ul{
                list-style: none;
                display: flex;

                li{
                    padding-left: 25px;
                    font-weight: 500;
                }
            }
        
    }

</style>