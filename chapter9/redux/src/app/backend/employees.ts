import {uuid} from './uuid';

export let employees = [
    {
        id: uuid.generate(),
        firstName: 'Max',
        lastName: 'Mustermann',
        profession: 'Junior Developer',
        department: 'IT'
    },
    {
        id: uuid.generate(),
        firstName: 'Sara',
        lastName: 'Smidth',
        profession: 'Sofware Engineer',
        department: 'IT'
    },
    {
        id: uuid.generate(),
        firstName: 'Alexander',
        lastName: 'Konradi',
        profession: 'Architect',
        department: 'IT'
    },
    {
        id: uuid.generate(),
        firstName: 'Jasper',
        lastName: 'Morgan',
        profession: 'Project Manager',
        department: 'IT'
    },
    {
        id: uuid.generate(),
        firstName: 'Olga',
        lastName: 'Singen',
        profession: 'Accountant',
        department: 'HR'
    },
    {
        id: uuid.generate(),
        firstName: 'James',
        lastName: 'Bond',
        profession: 'Director',
        department: 'HR'
    },
    {
        id: uuid.generate(),
        firstName: 'Steve',
        lastName: 'Stevenson',
        profession: 'Software Tester',
        department: 'QA'
    },
    {
        id: uuid.generate(),
        firstName: 'Thorsten',
        lastName: 'Koch',
        profession: 'Business Analyst',
        department: 'BA'
    }
];
