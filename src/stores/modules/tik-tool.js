import { getTikToolData } from "@/services";
import { defineStore } from "pinia";

const useTikToolStore = defineStore("home", {
  state: () => ({
    tikToolData: []
  }),
  actions: {
    async fetchTikToolData() {
      const res = await getTikToolData()
      console.log("tik-tool:", res)
      this.tikToolData = res.data
    },
  }
})

export default useTikToolStore