import { useState, useEffect } from "react";
import { OrganizationData } from "../model/types";

export const useOrganizationData = () => {
  const [organization, setOrganization] = useState<OrganizationData | null>(null);

  useEffect(() => {
    fetch("http://localhost:3100/api/institutions?yearId=2024")
      .then((response) => response.json())
      .then((data: { org_7: OrganizationData }) => setOrganization(data.org_7))
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Set error state to display an error message
      });
  }, []);
  

  return organization;
};
