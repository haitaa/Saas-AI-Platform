import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const Dashboard = () => {
  return (
    <div>
      <p>Dashboard Page (Unprotected)</p>
      <UserButton />
    </div>
  );
};

export default Dashboard;
