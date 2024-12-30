import React from "react";
import { OrganizationData } from "entities/organization/model/types";

export const FinanceTab = ({
  organization,
}: {
  organization: OrganizationData;
}) => (
  <table className="w-full border-collapse border">
    <tbody>
      <tr>
        <td className="border px-4 py-2 font-semibold">
          Поступления из республиканского бюджета
        </td>
        <td className="border px-4 py-2">
          {organization.republic_incomes} сом
        </td>
      </tr>
      <tr>
        <td className="border px-4 py-2 font-semibold">
          Поступления из местного бюджета
        </td>
        <td className="border px-4 py-2">{organization.local_incomes} сом</td>
      </tr>
    </tbody>
  </table>
);
