class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
        employee.department = this;
    }
}

class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.department = null;
    }
}


// retorna lista de departamento em ordem alfa
function convertRecords(records) {
    const departments = new Map();


    for (let row of records) {
        const [depId, depName, employeeId, employeeName, salary, employeeDepId] = row.split(',');

        let department;
        const newEmployee = new Employee(employeeId, employeeName, parseFloat(salary));

        if (!departments.has(depId)) {
            department = new Department(depId, depName);
            department.addEmployee(newEmployee);
            departments.set(depId, department);
        } else {
            department = departments.get(depId);
            department.addEmployee(newEmployee);
        }
    }
    return Array.from(departments.values()).sort((a, b) => a.name.localeCompare(b.name));
}

function logRes(list) {
    list.forEach(department => {
        console.log(`${department.name}:`);
        department.employees.forEach(employee => {
            console.log(`\t ${employee.id}: ${employee.name}, $ ${employee.salary.toFixed(2)}`);
        });
    });
}

console.log('Exemplo 1:\n');

logRes(convertRecords([
    "57,Vendas,8032,Meire Silva,8000.0,57",
    "32,Estoque,4368,Dom Dias,7000.0,32",
    "57,Vendas,3298,Pedro Neto,8500.0,57",
    "57,Vendas,8639,Carol Souza,9000.0,57",
    "18,Marketing,6421,Davi Souto,7500.0,18",
    "32,Estoque,7523,Lara Matos,8000.0,32",
    "18,Marketing,2732,Bob Costa,6500.0,18"
]));

console.log('\n');

console.log('Exemplo 2:\n');

logRes(convertRecords([
    "57,Vendas,8032,Meire Silva,8000.0,57",
    "18,Marketing,6421,Davi Souto,7500.0,18",
    "18,Marketing,2732,Bob Costa,6500.0,18"
]));

