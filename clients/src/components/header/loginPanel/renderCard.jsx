import { TbLogout } from "react-icons/tb";
import { ImWhatsapp } from "react-icons/im";
import { FaRankingStar } from "react-icons/fa6";
import {FaInstagram} from 'react-icons/fa'
import { GrUserAdmin } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { ImCreditCard } from "react-icons/im";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import LogedCard from "./logedCard";
import { useSelector } from "react-redux";
import useAuth0GetData from "../../../hooks/custom/auth0getinData";
import { useNavigate } from "react-router-dom";


function redirectTo(url){
    window.location.href = url 
}

function RenderCard() {
    const {logout,controledUser} = useAuth0GetData()
    const role = useSelector(state => state.user.role)
    const user = useSelector(state => state.user.user)
    const navigate = useNavigate()
    let template = ''
    template += `hola 👋 necesito informacion %0A${controledUser.email}%0Aconsulta: %0A>`
    const options = [
        {title:'Log out', icon:<TbLogout/>, status:'user', cb:logout},
        {title:'Contact us', icon:<ImWhatsapp/>, status:'user', cb :()=> redirectTo(`https://api.whatsapp.com/send?phone=+573024470241&text=${template}`)},
        {title:'Follow us', icon:<FaInstagram/>, status:'user',  cb :()=> redirectTo('https://www.instagram.com/amobladosyventas?igsh=Mmtza200djk3OGhl')},
        {title:'Proximamente', icon:<FaRankingStar/>, status:'admin'},
        {title:'Proximamente', icon:<MdOutlineEmail/>, status:'admin'},
        {title:'Proximamente', icon:<ImCreditCard/>, status:'admin'},
        {title:'Proximamente', icon:<LiaFileInvoiceDollarSolid/>, status:'admin'},
        {title:'Amin panel', icon:<GrUserAdmin/>, status:'admin', cb: ()=> navigate('/admin')}

    ]

    return ( 
        <div className="w-[150px] flex flex-col gap-2">
            {
                options.map(opt =>{
                    if(role.includes('user') && opt.status.includes('user')) return <LogedCard icon={opt.icon} title={opt.title} callback={opt.cb ? opt.cb : ()=> alert(opt.title)}/>
                    if(role.includes('admin')) return <LogedCard icon={opt.icon} title={opt.title} callback={opt.cb ? opt.cb : ()=> alert(opt.title)}/>
                    return
                })
            }

        </div>
     );
}

export default RenderCard;