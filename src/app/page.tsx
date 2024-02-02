"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

type Student = {
  nome: string;
  matricula: string;
}

// Fetching students function remains unchanged
async function getStudents(): Promise<Student[]> {
  const response = await axios.get<Student[]>('https://dados.ifmt.edu.br/dataset/6b7c7c38-587a-436b-a7b2-4e3ca59d1ca8/resource/29a42776-0693-4d33-9e58-a167ec5335b6/download/aluno.json');
  return response.data;
}

// Modified component to use useEffect and useState for data fetching
export default function Home() {
  const [students, setStudents] = useState<Student[]>([]);
  
  useEffect(() => {
    (async () => {
      const loadedStudents = await getStudents();
      setStudents(loadedStudents);
    })();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="text-center p-24">
      <h1 className="text-slate-200">IFMT Students Viewer</h1>
      <select className="min-w-96">
        {students.map((student) => (
          // Assuming you want to render each student as an option
          // Remember to use a key when rendering lists in React
          <option key={student.matricula} value={student.matricula}>{student.nome}</option>
        ))}
      </select>
    </div>
  );
}