import { IClientsListItem, Representative, Customer } from 'src/app/contracts/clients-list-item.model';

export interface Note {
    title: string;
    textContent: string;
}
export const clientsData: IClientsListItem[] = [
    { name: 'Pacient 1', status: 'sanatos', task: 'Important Meeting #1' },
    { name: 'Pacient 2', status: 'bolnav', task: 'Important Meeting #2' },
    { name: 'Pacient 3', status: 'asanatos', task: 'Important Meeting #3' },
    { name: 'Pacient 4', status: 'asanatos', task: 'Important Meeting #4' },
    { name: 'Pacient 5', status: 'bolnav', task: 'Important Meeting #5' },
    { name: 'Pacient 6', status: 'bolnav', task: 'Important Meeting #6' },
    { name: 'Pacient 14', status: 'sanatos', task: 'Important Meeting #7' },

];

export const alertsData: Note[] = [
    { title: '2020-09-29', textContent: 'Important TO-DO Meeting #1' },
    { title: '2020-09-31', textContent: 'Important TO-DO Meeting #2' },
    { title: '2020-09-21', textContent: 'Important TO-DO Meeting #3' },
    { title: '2020-10-51', textContent: 'Important TO-DO Meeting #4' },
    { title: '2020-09-29', textContent: 'Important TO-DO Meeting #5' },
    { title: '2020-09-31', textContent: 'Important TO-DO Meeting #6' },
    { title: '2020-09-21', textContent: 'Important TO-DO Meeting #7' },
    { title: '2020-10-51', textContent: 'Important TO-DO Meeting #8 ' },
];

export const observationsData: Note[] = [
    { title: '2020-09-29', textContent: 'Important  Observation #1' },
    { title: '2020-09-31', textContent: 'Important  Observation #2' },
    { title: '2020-09-21', textContent: 'Important  Observation #3' },
    { title: '2020-10-51', textContent: 'Important  Observation #4' },
    { title: '2020-09-29', textContent: 'Important  Observation #5' },
    { title: '2020-09-31', textContent: 'Important  Observation #6' },
    { title: '2020-09-21', textContent: 'Important  Observation #7' },
    { title: '2020-10-51', textContent: 'Important  Observation #8 ' },
];
