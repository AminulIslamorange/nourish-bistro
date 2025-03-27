import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaDollarSign, FaUser } from "react-icons/fa6";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-3xl my-4">Hi Welcome Back</h2>
      {user?.displayName ? user.displayName : "welcome back"}
      <div className="stats shadow">
        <div className="stat mt-12">
          <div className="stat-figure text-secondary">
            <FaDollarSign></FaDollarSign>
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">$:{stats?.revenue}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat mt-12">
          <div className="stat-figure text-secondary">
            <FaUser></FaUser>
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats?.users}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat mt-12">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats?.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
        <div className="stat mt-12">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-title">Total Menu</div>
          <div className="stat-value">{stats?.menuItems}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
