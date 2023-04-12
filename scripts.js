var tarefas = [{}];

const listaTarefas = {
  data() {
    return {
      tarefas: window.tarefas,
      novaTarefa: {},
    };
  },
  methods: {
    addTarefa: function () {
      if (this.novaTarefa.descricao) {
        this.novaTarefa.done = false;
        this.tarefas.push(this.novaTarefa);
        this.novaTarefa = {};
        window.localStorage.setItem("tarefas", JSON.stringify(this.tarefas));
      } else {
        alert("Preencha todos os campos");
      }
    },
    limpaTudo: function () {
      this.tarefas = [{}];
    },
  },
  created() {
    this.tarefas = localStorage.getItem("tarefas") ? JSON.parse(localStorage.getItem("tarefas")) : this.tarefas;
  },
  updated() {
    window.localStorage.setItem("tarefas", JSON.stringify(this.tarefas));
  }
};

Vue.createApp(listaTarefas).mount("#app");
