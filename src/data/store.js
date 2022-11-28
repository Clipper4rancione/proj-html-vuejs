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
    listCounter: 0,
    
    /*/FOOTER LIST */

})