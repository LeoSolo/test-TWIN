<template>
  <div class="chat-container">
    <ul class="msgs-list">
      <li class="msg" v-for="(item, index) in msgs" :class="{'incoming': item.type === 'in'}" :key="index">
        {{ item.text }}
      </li>
    </ul>

    <input type="text" v-model="msg" class="msg-input">
    <button class="btn" @click="sendMsg" :disabled="msg.length === 0">Send</button>
  </div>
</template>

<script>
export default {
  name: 'chat',
  data() {
    return {
      msgs: [
        {type: 'in', text: 'Привет! Как дела?'},
        {type: 'out', text: 'Привет! Отлично! А как у тебя?'},
        {type: 'in', text: 'Просто супер! Устроился в крутую компанию TWIN!'},
        {type: 'out', text: 'Завидую...'}
      ],
      msg: '',
      socket: null
    }
  },
  mounted() {
    this.socket = new WebSocket("ws://test-socket")    // url not real

    this.socket.onopen = () => {
      console.log('Connected')
    }

    this.socket.onmessage = (e) => {
      this.msgs = [...this.msgs, e.data]
      console.log('Message incoming - ' + e.data)
    }

    this.socket.onclose = () => {
      console.log('Disconnected')
    }

    this.socket.onerror = () => {
      console.log('Something gone wrong :(')
    }
  },
  methods: {
    sendMsg: function () {
      this.msgs = [...this.msgs, {
        type: 'out',
        text: this.msg
      }]

      this.socket.send(this.msg)
      console.log(this.msg + ' - sent')

      this.msg = ''
    }
  }
}
</script>

<style scoped lang="scss">
@import "style";
</style>
