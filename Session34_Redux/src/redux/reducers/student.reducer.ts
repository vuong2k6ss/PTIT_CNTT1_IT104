import type { Student } from "../../utils/types";

const studentLocal = localStorage.getItem('students');
const studentInitial: Student[] = studentLocal ? JSON.parse(studentLocal) : [];

type ActionTypes =
  | { type: 'ADD' | 'EDIT'; payload: Student }
  | { type: 'DELETE' | 'SEARCH'; payload: { id?: string; name?: string } };

const studentReducer = (state = studentInitial, action: ActionTypes) => {
  switch (action.type) {
    case 'ADD':
      {
        const studentClones = [...state, action.payload];
        localStorage.setItem('students', JSON.stringify(studentClones));
        return studentClones;
      }
    case 'EDIT':
      {
        const updatedStudents = state.map((student) =>
          student.id === action.payload.id ? action.payload : student,
        );
        localStorage.setItem('students', JSON.stringify(updatedStudents));
        return updatedStudents;
      }
    case 'DELETE':
      {
        const filterStudent = state.filter((st) => st.id !== action.payload.id);
        localStorage.setItem('students', JSON.stringify(filterStudent));
        return filterStudent;
      }
    case 'SEARCH':
      {
        const studentClones = [...studentInitial];
        if (action.payload.name) {
          const searchStudent = studentClones.filter((student) =>
            (student.name ?? '').toLowerCase().includes((action.payload.name ?? '').toLowerCase()),
          );
          return searchStudent;
        }
        return studentInitial;
      }
    default:
      return state;
  }
};

export default studentReducer;