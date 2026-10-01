export function addTask({ tasks, titulo }) {
  const newTask = {
    id: Date.now().toString(),
    title: titulo,
    done: false,
  };

  return [newTask, ...tasks];
}

export function toggleTask({ tasks, id }) {
  const newLista = [];

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      newLista.push({
        ...tasks[i],
        done: !tasks[i].done,
      });
    } else {
      newLista.push(tasks[i]);
    }
  }

  return newLista;
}

export function removeTask({ tasks, id }) {
  const newLista = [];

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id !== id) {
      newLista.push(tasks[i]);
    }
  }

  return newLista;
}

export function countCompleted({ tasks }) {
  let total = 0;

  for (let i = 0; i < (tasks || []).length; i++) {
    if (tasks[i].done === true) {
      total += 1;
    }
  }

  return total;
}