<script setup lang="ts">
import type { GameResults, PossibleMoves } from '@/types'
import { ref } from 'vue'
import GameResult from './GameResult.vue'
import PlayButton from './PlayButton.vue'

const emit = defineEmits<{
  (e: 'result', result: GameResults): void
}>()

const isPlaying = ref(false)
const playerMove = ref<PossibleMoves>()
const computerMove = ref<PossibleMoves>()
const result = ref<GameResults>()

const computerPick = (): PossibleMoves => {
  const moves: PossibleMoves[] = ['rock', 'paper', 'scissors']
  return moves[Math.floor(Math.random() * moves.length)]
}

const calculateResult = (player: PossibleMoves, computer: PossibleMoves): GameResults => {
  if (player === computer) {
    emit('result', 'tie')
    return 'tie'
  } else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    emit('result', 'win')
    return 'win'
  } else {
    emit('result', 'lose')
    return 'lose'
  }
}

const handlePlay = (event: PossibleMoves) => {
  playerMove.value = event
  computerMove.value = computerPick()
  result.value = calculateResult(playerMove.value, computerMove.value)
  isPlaying.value = true
  // console.log(`player: ${playerMove.value}, computer: ${computerMove.value}`)
  // console.log(calculateResult(playerMove.value, computerMove.value))
}

const handleRestart = () => {
  isPlaying.value = false
  playerMove.value = undefined
  computerMove.value = undefined
  result.value = undefined
}
</script>

<template>
  <div id="GameStage" class="mt-24 md:mt-18 w-full md:w-fit">
    <div v-if="isPlaying" class="flex flex-col gap-12 w-full">
      <div class="flex justify-between md:gap-40">
        <div class="flex flex-col gap-4 items-center">
          <PlayButton :value="playerMove!" :result="true" :is-win="result === 'win'" />
          <span class="uppercase text-center font-semibold">you picked</span>
        </div>
        <GameResult class="hidden md:inline-flex" :result="result" @play-again="handleRestart" />
        <div class="flex flex-col gap-4 items-center">
          <PlayButton :value="computerMove!" :result="true" :is-win="result === 'lose'" />
          <span class="uppercase text-center font-semibold">The house picked</span>
        </div>
      </div>
      <GameResult class="md:hidden" :result="result" @play-again="handleRestart" />
    </div>
    <div class="relative md:flex md:flex-col" v-else>
      <img src="/images/bg-triangle.svg" class="p-16 object-contain md:max-h-[500px]" />
      <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-between">
        <div class="flex justify-between">
          <PlayButton value="paper" @click="handlePlay" />
          <PlayButton value="scissors" @click="handlePlay" />
        </div>
        <div class="flex justify-center">
          <PlayButton value="rock" @click="handlePlay" />
        </div>
      </div>
    </div>
  </div>
</template>
