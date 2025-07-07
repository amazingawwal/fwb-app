import Navbar from "@/components/navbar/navbar";
import DashboardCard from "@/components/dashboard/dashboard";
export default function Home(){
    return(
        <>
            <Navbar/>  
            <DashboardCard username="" projects={[]} />
        </>
    )
}