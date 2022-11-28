import { reactive } from "vue";

export const store = reactive({

    /*INFO CARD OBJECT*/
    infoCard:[
        {
            img     : 'icon-1.png',
            caption : 'Same Day Appointments',
            comment : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        },
        {
            img     : 'icon-2.png',
            caption : 'World class facilities',
            comment : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        },
        {
            img     : 'icon-3.png',
            caption : 'expert doctors',
            comment : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        },
        {
            img     : 'icon-4.png',
            caption : 'complementary therapies',
            comment : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        },
    ],
    /*/INFO CARD OBJECT*/

    /*FOOTER LIST */
    footerList:[
        {
            name: 'Cardiology',
            link: 'www.google.it'
        
        },
        {
            name: 'Pediatrics',
            link: '#'
        
        },
        {
            name: 'Diabetes Care',
            link: '#'
        
        },
        {
            name: 'Pre-natal Care',
            link: '#'
        
        },
        {
            name: 'Ultrasound Echocardiogram',
            link: '#'
        
        },
    
    ],
    /*/FOOTER LIST */
    
    /*HEALTH SERVICES */
        services:[
            {
                img : 'icon-14.png',
                name: 'rehabilitation center',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non quos magnam vitae ullam harum, ex eaque dolorum itaque enim?'
            },
            {
                img : 'icon-15.png',
                name: 'Dental Implants',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non quos magnam vitae ullam harum, ex eaque dolorum itaque enim?'
            },
            {
                img : 'icon-16.png',
                name: 'Medicine Research',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non quos magnam vitae ullam harum, ex eaque dolorum itaque enim?'
            },
            {
                img : 'icon-11.png',
                name: 'Blood Bank',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non quos magnam vitae ullam harum, ex eaque dolorum itaque enim?'
            },
            {
                img : 'icon-12.png',
                name: 'Pharmaceutical Advice',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non quos magnam vitae ullam harum, ex eaque dolorum itaque enim?'
            },
            {
                img : 'icon-13.png',
                name: 'Medical Counseling',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non quos magnam vitae ullam harum, ex eaque dolorum itaque enim?'
            },
        ]
    /*/HEALTH SERVICES */

})