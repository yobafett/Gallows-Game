<script setup lang="ts">
import { ref } from 'vue'
import type { GameStatus } from '../types/GameStatus'

const gameStatus = ref<GameStatus | false>(false)
const open = (status: GameStatus) => (gameStatus.value = status)
const close = () => (gameStatus.value = false)

defineExpose({
  open,
  close
})

const emit = defineEmits<{
  (e: 'restart'): void
}>()

interface Props {
  word: string
}

defineProps<Props>()
</script>

<template>
  <div v-show="gameStatus" class="popup-container">
    <div class="popup">
      <h2 v-if="gameStatus === 'win'">Поздравляю, вы победили! 😃</h2>
      <template v-else>
        <h2>Вы проиграли. 😕</h2>
        <h3>...имя: {{word}}</h3>
      </template>
      <button @click="emit('restart')">Сыграть еще раз</button>
    </div>
  </div>
</template>
