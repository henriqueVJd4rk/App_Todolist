import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";

import { useEffect, useState } from "react";

import { style } from "./style";

import {
  addTask,
  toggleTask,
  removeTask,
  countCompleted,
} from "./task";

import {
  salvarTarefas,
  carregarTarefas,
} from "./storage";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  // Carrega as tarefas salvas quando o aplicativo inicia
  async function iniciar() {
    const tarefas = await carregarTarefas();
    setTasks(tarefas);
  }

  useEffect(function () {
    iniciar();
  }, []);

  // Salva as tarefas sempre que a lista mudar
  useEffect(function () {
    salvarTarefas(tasks);
  }, [tasks]);

  // Adiciona uma nova tarefa
  function add() {
    if (text.trim() === "") {
      return;
    }

    const novaLista = addTask({
      tasks: tasks,
      titulo: text,
    });

    setTasks(novaLista);
    setText("");
  }

  // Marca ou desmarca uma tarefa
  function toggle(id) {
    const novaLista = toggleTask({
      tasks: tasks,
      id: id,
    });

    setTasks(novaLista);
  }

  // Remove uma tarefa
  function remove(id) {
    const novaLista = removeTask({
      tasks: tasks,
      id: id,
    });

    setTasks(novaLista);
  }

  // Conta quantas tarefas foram concluídas
  const completed = countCompleted({
    tasks: tasks,
  });

  return (
    <View style={style.container}>
      <Text style={style.title}>
        📚 Meus Estudos 📚
      </Text>

      <Text style={style.subtitle}>
        {tasks.length === 0
          ? "Nenhuma tarefa cadastrada"
          : `${completed} de ${tasks.length} tarefa(s) concluída(s)`}
      </Text>

      <View style={style.inputRow}>
        <TextInput
          style={style.input}
          value={text}
          onChangeText={setText}
          placeholder="Digite uma tarefa"
          onSubmitEditing={add}
        />

        <TouchableOpacity
          style={style.addButton}
          onPress={add}
        >
          <Text style={style.addButtonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(task) => task.id.toString()}
        renderItem={({ item }) => (
          <View style={style.taskItem}>
            <TouchableOpacity
              style={style.taskLeft}
              onPress={() => toggle(item.id)}
            >
              <View
                style={[
                  style.checkbox,
                  item.done
                    ? style.checkboxDone
                    : null,
                ]}
              >
                {item.done ? (
                  <Text style={style.checkmark}>
                    ✓
                  </Text>
                ) : null}
              </View>

              <Text
                style={[
                  style.taskText,
                  item.done
                    ? style.taskTextDone
                    : null,
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => remove(item.id)}
            >
              <Text style={style.remove}>
                X
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}