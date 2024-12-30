import React from "react";
import { OrganizationData } from "entities/organization/model/types";

export const LanguagesTab = ({
  organization,
}: {
  organization: OrganizationData;
}) => (
  <table className="w-full border-collapse border">
    <tbody>
      <tr>
        <td className="border px-4 py-2 font-semibold">Кыргызский язык</td>
        <td className="border px-4 py-2">
          {organization.kg_classes_total} групп
        </td>
        <td className="border px-4 py-2">
          {organization.stdnt_in_kg_classes} воспитанников
        </td>
      </tr>
      <tr>
        <td className="border px-4 py-2 font-semibold">Русский язык</td>
        <td className="border px-4 py-2">
          {organization.ru_classes_total} групп
        </td>
        <td className="border px-4 py-2">
          {organization.stdnt_in_ru_classes} воспитанников
        </td>
      </tr>
      <tr>
        <td className="border px-4 py-2 font-semibold">Узбекский язык</td>
        <td className="border px-4 py-2">
          {organization.uz_classes_total} групп
        </td>
        <td className="border px-4 py-2">
          {organization.stdnt_in_uz_classes} воспитанников
        </td>
      </tr>
      <tr>
        <td className="border px-4 py-2 font-semibold">Таджикский язык</td>
        <td className="border px-4 py-2">
          {organization.tj_classes_total} групп
        </td>
        <td className="border px-4 py-2">
          {organization.stdnt_in_tj_classes} воспитанников
        </td>
      </tr>
    </tbody>
  </table>
);
