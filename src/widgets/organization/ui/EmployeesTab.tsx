import React from "react";
import { OrganizationData } from "entities/organization/model/types";

export const EmployeesTab = ({
  organization,
}: {
  organization: OrganizationData;
}) => (
  <table className="w-full border-collapse border">
    <tbody>
      <tr>
        <td className="border px-4 py-2 font-semibold">
          Общая численность работников
        </td>
        <td className="border px-4 py-2">{organization.workers_in_fact}</td>
      </tr>
      <tr>
        <td className="border px-4 py-2 font-semibold">В том числе женщин</td>
        <td className="border px-4 py-2">
          {organization.workers_in_fact_women}
        </td>
      </tr>
      <tr>
        <td className="border px-4 py-2 font-semibold">
          Количество преподавательского состава (по штатному расписанию)
        </td>
        <td className="border px-4 py-2">{organization.workers_in_state}</td>
      </tr>
      <tr>
        <td className="border px-4 py-2 font-semibold">
          Количество преподавательского состава (фактически)
        </td>
        <td className="border px-4 py-2">{organization.workers_in_fact}</td>
      </tr>
      <tr>
        <td className="border px-4 py-2 font-semibold">
          Количество непреподавательского состава (фактически)
        </td>
        <td className="border px-4 py-2">
          {organization.workers_in_fact - organization.workers_in_state}
        </td>
      </tr>
      <tr>
        <td className="border px-4 py-2 font-semibold">В том числе женщин</td>
        <td className="border px-4 py-2">
          {organization.workers_in_fact_women}
        </td>
      </tr>

      <tr>
        <td className="border px-4 py-2 font-semibold">
          Численность педагогов, имеющих педагогический стаж менее 5 лет
        </td>
        <td className="border px-4 py-2">
          {organization.teachers_less_5_years_experience}
        </td>
      </tr>
      <tr>
        <td className="border px-4 py-2 font-semibold">
          Численность педагогов, имеющих педагогический стаж 5-10 лет
        </td>
        <td className="border px-4 py-2">
          {organization.teachers_5_10_years_experience}
        </td>
      </tr>
      <tr>
        <td className="border px-4 py-2 font-semibold">
          Численность педагогов, имеющих педагогический стаж 11-15 лет
        </td>
        <td className="border px-4 py-2">
          {organization.teachers_11_15_year_experience}
        </td>
      </tr>
      <tr>
        <td className="border px-4 py-2 font-semibold">
          Численность педагогов, имеющих педагогический стаж более 15 лет
        </td>
        <td className="border px-4 py-2">
          {organization.teachers_over_15_years_experience}
        </td>
      </tr>

      <tr>
        <td className="border px-4 py-2 font-semibold">
          Численность педагогов, прошедших аттестацию за последние 5 лет
        </td>
        <td className="border px-4 py-2">
          {organization.teachers_improved_qualification_5_years}
        </td>
      </tr>
      <tr>
        <td className="border px-4 py-2 font-semibold">
          Численность педагогов, прошедших курсы повышения квалификации за
          последний год
        </td>
        <td className="border px-4 py-2">
          {organization.teachers_improved_qualification_1_year}
        </td>
      </tr>
      <tr>
        <td className="border px-4 py-2 font-semibold">
          Численность педагогов, с высшим образованием
        </td>
        <td className="border px-4 py-2">{organization.higher_education}</td>
      </tr>
      <tr>
        <td className="border px-4 py-2 font-semibold">
          Численность педагогов, со средним профессиональным образованием
        </td>
        <td className="border px-4 py-2">
          {organization.spo_higher_education}
        </td>
      </tr>

      <tr>
        <td className="border px-4 py-2 font-semibold">
          Укомплектованность штата педагогических работников (фактически)
        </td>
        <td className="border px-4 py-2">{organization.workers_in_fact}</td>
      </tr>
      <tr>
        <td className="border px-4 py-2 font-semibold">Воспитатель</td>
        <td className="border px-4 py-2">
          {organization.positions.split(";")[0]}
        </td>
      </tr>
      <tr>
        <td className="border px-4 py-2 font-semibold">Помощник воспитателя</td>
        <td className="border px-4 py-2">
          {organization.positions.split(";")[1]}
        </td>
      </tr>
      <tr>
        <td className="border px-4 py-2 font-semibold">Старший воспитатель</td>
        <td className="border px-4 py-2">
          {organization.positions.split(";")[2]}
        </td>
      </tr>
      <tr>
        <td className="border px-4 py-2 font-semibold">Учитель</td>
        <td className="border px-4 py-2">
          {organization.positions.split(";")[3]}
        </td>
      </tr>
      <tr>
        <td className="border px-4 py-2 font-semibold">Музыкальный работник</td>
        <td className="border px-4 py-2">
          {organization.positions.split(";")[4]}
        </td>
      </tr>
    </tbody>
  </table>
);
