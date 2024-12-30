import React from "react";
import { OrganizationData } from "entities/organization/model/types";

export const AboutTab = ({
  organization,
}: {
  organization: OrganizationData;
}) => (
    <table className="w-full border-collapse border">
      <tbody>
        <tr>
          <td className="border px-4 py-2 font-semibold">
            ФИО руководителя
          </td>
          <td className="border px-4 py-2">
            {organization.director_fml_name}
          </td>
        </tr>
        <tr>
          <td className="border px-4 py-2 font-semibold">Код ОКПО</td>
          <td className="border px-4 py-2">{organization.code}</td>
        </tr>
        <tr>
          <td className="border px-4 py-2 font-semibold">Телефон</td>
          <td className="border px-4 py-2">
            {organization.phone_number}
          </td>
        </tr>
        <tr>
          <td className="border px-4 py-2 font-semibold">
            Форма собственности
          </td>
          <td className="border px-4 py-2">{organization.owner_form}</td>
        </tr>
        <tr>
          <td className="border px-4 py-2 font-semibold">Адрес</td>
          <td className="border px-4 py-2">{organization.address}</td>
        </tr>
      </tbody>
    </table>
);
