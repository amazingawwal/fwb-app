import Navbar from "@/components/navbar/navbar";
import DashboardCard from "@/components/dashboard/dashboard";
import Sidebar from "@/components/cards/sidebar";
import RecentActivities from "@/components/cards/activities";


export default function Home(){
    return(
        <>
            <Navbar/>  
            <section className="flex flex-row">
                <div className=" hidden lg:block w-64"><Sidebar  /></div>
                <div className=""><DashboardCard username="" projects={[]} /></div>
                <div className=" hidden lg:block w-64"><RecentActivities  /></div>
            </section>
            
        </>
    )
}