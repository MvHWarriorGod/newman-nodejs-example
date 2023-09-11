const data = [
  {
    value: '3',
    updatedAt: '2023-03-27T20:46:09.075Z',
    createdAt: '2023-03-27T20:46:09.075Z',
    idPregunta: 'f2a0249e-86ad-4fb1-be57-a3f41cd05045',
    pk: 'respuesta',
    id: '000d3a65-bb3d-41a9-bb20-f8ab915f71b8',
    idCalificacion: 'e778f212-6254-47dc-b779-8771dadcc9f2'
  },
  {
    value: '1',
    updatedAt: '2023-04-16T23:48:53.584Z',
    createdAt: '2023-04-16T23:48:53.584Z',
    idPregunta: 'f2a0249e-86ad-4fb1-be57-a3f41cd05045',
    pk: 'respuesta',
    id: '002c506c-02df-432d-b95c-79d9740ca01f',
    idCalificacion: '4c816294-1fa4-4708-86fe-8681be49fb10'
  }
];

const dataFilter = data.map(ele => ele.id);

module.exports = dataFilter;
