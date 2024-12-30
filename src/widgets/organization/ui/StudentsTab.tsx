import React from "react";
import { OrganizationData } from "entities/organization/model/types";

export const StudentsTab = ({
  organization,
}: {
  organization: OrganizationData;
}) => (
    <table className="w-full border-collapse border">
      <tbody>
        <tr>
          <td className="border px-4 py-2 font-semibold">Возраст</td>
          <td className="border px-4 py-2">Всего</td>
          <td className="border px-4 py-2">в т.ч. девочек</td>
          <td className="border px-4 py-2">в т.ч. с инвалидностью</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">0-2 года</td>
          <td className="border px-4 py-2">{organization.chldrn_0_2_yo}</td>
          <td className="border px-4 py-2">{organization.chldrn_0_2_yo_girls}</td>
          <td className="border px-4 py-2">
            {organization.chldrn_0_2_yo_disable}{" "}
          </td>
        </tr>
        <tr>
          <td className="border px-4 py-2">3-4 года</td>
          <td className="border px-4 py-2">{organization.chldrn_3_4_yo}</td>
          <td className="border px-4 py-2">{organization.chldrn_3_4_yo_girls}</td>
          <td className="border px-4 py-2">
            {organization.chldrn_3_4_yo_disable}
          </td>
        </tr>
        <tr>
          <td className="border px-4 py-2">5-6 года</td>
          <td className="border px-4 py-2">{organization.chldrn_5_6_yo}</td>
          <td className="border px-4 py-2">{organization.chldrn_5_6_yo_girls}</td>
          <td className="border px-4 py-2">
            {organization.chldrn_5_6_yo_disable}
          </td>
        </tr>
        <tr>
          <td className="border px-4 py-2">7-8 года</td>
          <td className="border px-4 py-2">{organization.chldrn_7_8_yo}</td>
          <td className="border px-4 py-2">{organization.chldrn_7_8_yo_girls}</td>
          <td className="border px-4 py-2">
            {organization.chldrn_7_8_yo_disable}
          </td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Итого</td>
          <td className="border px-4 py-2">{organization.total_stdnts}</td>
          <td className="border px-4 py-2">
            {organization.total_stdnts_girls} (
            {(
              (organization.total_stdnts_girls / organization.total_stdnts) *
              100
            ).toFixed(0)}
            %)
          </td>
          <td className="border px-4 py-2">{organization.total_stdnts_dsbl}</td>
        </tr>
      </tbody>
    </table>
);
