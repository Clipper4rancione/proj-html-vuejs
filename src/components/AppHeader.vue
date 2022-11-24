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
                    <li><a href="#">NAV</a></li>
                    <li><a href="#">NAV</a></li>
                    <li><a href="#">NAV</a></li>
                    <li><a href="#">NAV</a></li>
                    <li><a href="#">NAV</a></li>
                </ul>
            </div>
        </div>
    </header>
</template>


<style lang="scss" scoped>
    .h-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 18px;


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
            }
        }
    }

</style>