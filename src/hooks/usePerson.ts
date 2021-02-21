import { useState } from 'react';

interface IPerson {
  name: string;
  id: string;
  url: string;
}

export default function usePersons(pageLimit: number) {
  const [persons, setPersons] = useState();
  function fetchPersons(page: number) {
    const virtualPage =
      (page - 1) * pageLimit <= 0 ? 0 : (page - 1) * pageLimit;
    //cachama a api
    //https://www.youtube.com/watch?v=VZ5yPs_KEME&t=324s
    //passa para ai ${virtualPage} and ${pageLimit}

    fetch(``);
  }
  return {
    fetchPersons,
    persons,
  };
}
