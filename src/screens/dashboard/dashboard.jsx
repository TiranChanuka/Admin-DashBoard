import TransactionDashBoardBarChart from "../../components/barChartDash";

const Dashboard = () => {
    return (
        <div className=" bg-white rounded-3xl p-5 sm:p-14">
            <div className="sm:grid sm:grid-cols-12 gap-4">
                <div className="text-30px sm:text-40px font-semibold">Dashboards</div>
                <div className="md:col-span-12 text-white">
                    <div>
                        <TransactionDashBoardBarChart />
                    </div>
                </div>
                <div className="md:col-span-4 bg-red-300 text-white text-30px sm:text-40px font-semibold p-2">Text 1</div>
                <div className="md:col-span-8 bg-iconPurple text-white text-30px sm:text-40px font-semibold p-2">Text 2</div>
            </div>
        </div>

    );
}
export default Dashboard;




