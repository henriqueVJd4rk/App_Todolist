import AsyncStorage from "@react-native-async-storage/async-storage";

const CHAVE = "@bob_sponja";

export async function carregarTarefas() {
  try {
    const dados = await AsyncStorage.getItem(CHAVE);

    if (dados === null) {
      return [];
    }

    return JSON.parse(dados);
  } catch (error) {
    console.log("Erro ao carregar tarefas:", error);
    return [];
  }
}

export async function salvarTarefas(tasks) {
  try {
    const dados = JSON.stringify(tasks);

    await AsyncStorage.setItem(CHAVE, dados);
  } catch (error) {
    console.log("Erro ao salvar tarefas:", error);
  }
}