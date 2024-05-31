import Navbar from '../components/navbar'
import DashboardItem from '../components/dashboardItem'

function Home(){
    return (
        <div>
            <Navbar />
            <h2 className="page-header">Home</h2>
            <div className='row'>
            <div className='col'>
                <DashboardItem title="Users" value="100k"/>
            </div>
            <div className='col'>
                <DashboardItem title="Users" value="120k"/>
            </div>
            <div className='col'>
                <DashboardItem title="Users" value="230k"/>
            </div>
            <div className='col'>
                <DashboardItem title="Users" value="170k"/>
            </div>
            </div>
            
        </div>
    )
} 

export default Home