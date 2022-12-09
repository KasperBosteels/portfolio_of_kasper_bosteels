import { useState } from "react";

interface IFiltering {}
interface IStudent {
  name: string;
  age: number;
  year: number;
}
const students: IStudent[] = [
  { name: "Jan", age: 21, year: 2 },
  { name: "Albert", age: 500, year: 1 },
  { name: "Pierre", age: -500, year: 10 },
  { name: "Peter", age: 58, year: 11 },
];
const sortByName = () => {
  return students.sort((a, b) => (a.name < b.name ? -1 : 1));
};
const sortByAge = () => {
  return students.sort((a, b) => (a.age < b.age ? -1 : 1));
};
const sortByYear = () => {
  return students.sort((a, b) => (a.year < b.year ? -1 : 1));
};
const Filtering = (props: IFiltering) => {
  const [filteredStudents, setFilteredStudents] = useState<IStudent[]>(
    sortByName()
  );
  const [sortField, setSortFields] = useState<() => IStudent[]>();

  const insertfields = (field: string) => {
    switch (field) {
      case "name":
        setSortFields(sortByName);
        break;
      case "age":
        setSortFields(sortByAge);
        break;
      case "year":
        setSortFields(sortByYear);
        break;

      default:
        setSortFields(sortByName);
        break;
    }
  };
  return (
    <>
      <div>
        <label>
          Search:
          <input
            placeholder="name"
            onChange={(event) => {
              setFilteredStudents(
                students.filter((student) =>
                  student.name.includes(event.target.value)
                )
              );
              setFilteredStudents(sortField!());
            }}
          />
        </label>
        <table>
          <thead
            style={{ border: "solid", borderWidth: 2, borderColor: "black" }}
          >
            <tr>
              <th
                style={{
                  width: 50,
                  height: 30,
                  border: "solid",
                  borderWidth: 2,
                  borderColor: "black",
                }}
                onClick={() => insertfields("name")}
              >
                Name
              </th>
              <th
                style={{
                  width: 50,
                  height: 30,
                  border: "solid",
                  borderWidth: 2,
                  borderColor: "black",
                }}
                onClick={() => insertfields("age")}
              >
                Age
              </th>
              <th
                style={{
                  width: 50,
                  height: 30,
                  border: "solid",
                  borderWidth: 2,
                  borderColor: "black",
                }}
                onClick={() => insertfields("year")}
              >
                Year
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents?.map((student) => (
              <tr>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Filtering;
