import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  const HomePage = () => {
    navigate("/");
  };

  return (
    <div>
      <Button onClick={HomePage} variant="link">
        ke page homee
      </Button>
    </div>
  );
};

export default DashboardPage;
