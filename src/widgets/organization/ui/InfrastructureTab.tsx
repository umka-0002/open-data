import React from "react";
import { OrganizationData } from "entities/organization/model/types";

export const InfrastructureTab = ({
  organization,
}: {
  organization: OrganizationData;
}) => (
  <table className="w-full border-collapse border">
    <tbody>
      <tr>
        <td className="border px-4 py-2 font-semibold">
          Проектная мощность здания
        </td>
        <td className="border px-4 py-2">{organization.build_project_power}</td>
      </tr>
      <tr>
        <td className="border px-4 py-2 font-semibold">
          Общая площадь помещений
        </td>
        <td className="border px-4 py-2">{organization.org_area_total} м²</td>
      </tr>
      <tr>
        <td className="border px-4 py-2 font-semibold">
          Санитарное состояние здания
        </td>
        <td className="border px-4 py-2">{organization.sewage}</td>
      </tr>
      <tr>
        <td className="border px-4 py-2 font-semibold">Инклюзивная среда</td>
        <td className="border px-4 py-2">{organization.special_toilets}</td>
      </tr>
      <tr>
        <td className="border px-4 py-2 font-semibold">Наличие столовой</td>
        <td className="border px-4 py-2">{organization.dinning_hall}</td>
      </tr>
      <tr>
        <td className="border px-4 py-2 font-semibold">
          Количество компьютеров
        </td>
        <td className="border px-4 py-2">{organization.comps_amnt}</td>
      </tr>
    </tbody>
  </table>
);
