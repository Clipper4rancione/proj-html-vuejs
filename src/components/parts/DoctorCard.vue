<script>
export default {
    name: 'DoctorCard',
    data(){
        return{
            doctor:[
                {
                    name: 'John Snow',
                    title: 'Anesthesiologist',
                    photo: 'doctor-1-200x206.jpg',
                    bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, ex! Nemo minima impedit.'
                },
                {
                    name: 'Tony Stark',
                    title: 'Cardiologist',
                    photo: 'doctor-2-200x206.jpg',
                    bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, ex! Nemo minima impedit.'
                },
                {
                    name: 'Anna Smith',
                    title: 'Nurse Pratictioner',
                    photo: 'doctor-3-200x206.jpg',
                    bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, ex! Nemo minima impedit.'
                }
            ]
        }
    }
}
</script>

<template>
    <div class="col-3" v-for="(doc, index) in doctor" :key="index">
        <div class="doc-card">
            <div class="doc-img-area">
                <img :src="'./public/doctor-card/' + doc.photo" :alt="doc.name">
            </div>
                <div class="doc-text-area">
                    <h6>{{doc.name}}</h6>
                    <span>{{doc.title}}</span>
                    <p>{{doc.bio}}</p>

                    <i class="fa-brands fa-square-facebook fb"></i>
                    <i class="fa-brands fa-square-twitter tw"></i>
                    <i class="fa-brands fa-square-instagram ig"></i>
                </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .doc-card {
            margin-top: 50px;
            min-height: 550px;
            background-color: white;

            .doc-img-area {
                width: 100%;
                
                
                img{
                    width: 100%;
                    object-fit: cover;
                }
            }
            .doc-text-area{
                padding: 15px;
                font-weight: 300;
                
                h6{
                    margin-top: 15px;
                
                }

                p {
                    margin-top: 20px;
                    line-height: 40px;
                }

                i{
                    cursor: pointer;
                    font-size: 1.6rem;
                    margin-top: 20px;
                    margin-right: 15px;

                }
                    

            }
        }
</style>