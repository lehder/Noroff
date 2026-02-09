console.log("Student route");

async function getStudents() {
  const res = await fetch("http://localhost:3000/students");
  const data = await res.json();

  const table = document.querySelector("table");
  data.forEach((student) => {
    const date = new Date(student.enrollment_date);
    const row = document.createElement("tr");
    const idField = document.createElement("td");
    const nameField = document.createElement("td");
    const dateField = document.createElement("td");
    const deleteField = document.createElement("td");

    const deleteButton = document.createElement("button");
    idField.innerText = student.id;
    nameField.innerText = student.name;
    dateField.innerText = date.toLocaleDateString();
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", async () => {
      const res = await fetch("http://localhost:3000/students/" + student.id, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);
    });
    deleteField.append(deleteButton);
    row.append(idField, nameField, dateField, deleteField);
    table.append(row);
  });
}
getStudents();