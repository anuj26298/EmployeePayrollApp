window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let employeePayrollList = createEmployeePayrollJSON();
    for(const empPayrollData of employeePayrollList){
        innerHtml = `${innerHtml}
        <tr>
        <td><img src="${empPayrollData._profilePic}" class="profile"></td>
          <td>${empPayrollData._name}</td>
          <td>${empPayrollData._gender}</td>
          <td>${getDeptHtml(empPayrollData._department)}</td>
          <td>${empPayrollData._salary}</td>
          <td>${empPayrollData._startDate}</td>
          <td>
           <img src="/assets/icons/delete-black-18dp.svg" id="1" onclick="remove(this)">
           <img src="/assets/icons/create-black-18dp.svg" id="1" onclick="update(this">
          </td>
        </tr>
        `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = () =>{
    let empPayrollListLocal = [
        {
            _name: 'Anuj Kumar',
            _gender: 'Male',
            _department: ['Engineer'],
            _salary: '5000000',
            _startDate: '26 May 2021',
            _note: '',
            _profilePic: '/assets/profile-images/Ellipse -3.png'
        },
        {
            _name: 'Shivi',
            _gender: 'Female',
            _department: ['Engineer','HR'],
            _salary: '50000550',
            _startDate: '26 May 2021',
            _note: '',
            _profilePic: '/assets/profile-images/Ellipse -1.png'
        }
    ];
    return empPayrollListLocal;
}

const getDeptHtml = (deptList) =>{
    let deptHtml = '';
    for(const dept of deptList){
        deptHtml = `${deptHtml}<div class="dept-label">${dept}</div>`;
    }
    return deptHtml
}