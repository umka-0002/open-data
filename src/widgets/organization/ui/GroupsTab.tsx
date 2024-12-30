import React from "react";
import { OrganizationData } from "entities/organization/model/types";

export const GroupsTab = ({
  organization,
}: {
  organization: OrganizationData;
}) => (
  <table className="w-full border-collapse border">
    <tbody>
      <tr>
        <td className="border px-4 py-2 font-semibold">
          Общее количество групп
        </td>
        <td className="border px-4 py-2">{organization.total_classes}</td>
      </tr>
      <tr>
        <td className="border px-4 py-2 font-semibold">Средний размер групп</td>
        <td className="border px-4 py-2">{organization.average_class_size}</td>
      </tr>
    </tbody>
  </table>
);
