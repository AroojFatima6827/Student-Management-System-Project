
const studentForm = document.getElementById('studentForm');
const studentsTable = document.getElementById('studentsTable').querySelector('tbody');
const addStudentButton = document.getElementById('addStudent');


let students = [];


function renderTable() {
  
  studentsTable.innerHTML = '';

  
  students.forEach((student, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.class}</td>
      <td>
        <button class="btn btn-delete" onclick="deleteStudent(${index})">Delete</button>
      </td>
    `;

    studentsTable.appendChild(row);
  });
}


function addStudent() {
  
  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();
  const studentClass = document.getElementById('class').value.trim();

  
  if (!name || !age || !studentClass) {
    alert('Please fill in all fields!');
    return;
  }

  
  students.push({ name, age, class: studentClass });

  
  studentForm.reset();

  
  renderTable();
}


function deleteStudent(index) {
  students.splice(index, 1); 
  renderTable(); 
}


addStudentButton.addEventListener('click', addStudent);
