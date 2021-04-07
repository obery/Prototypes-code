
interface InstitutionData{
    Iname:string,
    image:any,
    motto: string,
    key:number
}

const data:InstitutionData[]=[
    
     {
         Iname:'University of CapeCoast',
         image:require('../assets/ucc.png'),
         motto:'Veritas nobis Lumin',
         key:1
     },
     {
        Iname:'University Ghana Legon',
        image:require('../assets/legon.png'),
        motto:'',
        key:2
    },
    {
        Iname:'KNUST',
        image:require('../assets/knust.png'),
        motto:'',
        key:3
    },
    {
        Iname:'University of education',
        image:require('../assets/winniba.png'),
        motto:'',
        key:4
    },
    {
        Iname:'Accra Politechnic',
        image:require('../assets/acc.jpg'),
        motto:'',
        key:5
    }

]


export default data