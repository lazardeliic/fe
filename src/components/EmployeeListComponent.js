import React,{useState, useEffect} from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const EmployeeListComponent = () => {

  const [employees, setEmployees] = useState([])

  useEffect(() => {
    
        getAllEmployees();

  }, [])

  const getAllEmployees = () => {
    EmployeeService.getAllEmployees().then((response) => {
        setEmployees(response.data)
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    })
  }

  const deleteEmployee = (employeeId) => {
        EmployeeService.deleteEmployee(employeeId).then((response) => {
            getAllEmployees();
        }).catch(error => {
            console.log(error);
        })
  }
  

  return (
    <div className="container">
        <h2 className="text-center">Employees List</h2>
        <Link to = "/add-employee" className="btn btn-primary mb-2"> Add Employee</Link>
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Employee Email Adress</th>
                    <th>Edit Employee</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(
                        employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>
                            <td className="button-cell">
                                <Link className="btn btn-primary" to={`/edit-employee/${employee.id}`} > Update </Link>
                                <button className="btn btn-danger" onClick={() => deleteEmployee(employee.id)}> Delete </button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default EmployeeListComponent