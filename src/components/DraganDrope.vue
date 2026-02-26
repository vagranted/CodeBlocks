<!-- SimpleDragDrop.vue -->
<template>
  <div class="drag-drop-container">
    <div
      class="draggable-item"
      v-for="(item, index) in items"
      :key="item.id"
      draggable="true"
      @dragstart="onDragStart($event, index)"
      @dragend="onDragEnd"
      @dragover.prevent
      @drop="onDrop($event, index)"
    >
      {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'DragDrop',
  data() {
    return {
      items: [
        { id: 1, text: 'Элемент 1' },
        { id: 2, text: 'Элемент 2' },
        { id: 3, text: 'Элемент 3' },
        { id: 4, text: 'Элемент 4' },
      ],
      draggedItemIndex: null,
    }
  },
  methods: {
    onDragStart(event, index) {
      this.draggedItemIndex = index
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('text/plain', index)
      event.target.classList.add('dragging')
    },

    onDragEnd(event) {
      event.target.classList.remove('dragging')
      this.draggedItemIndex = null
    },

    onDrop(event, dropIndex) {
      event.preventDefault()

      if (this.draggedItemIndex === null || this.draggedItemIndex === dropIndex) {
        return
      }

      const itemsCopy = [...this.items]
      const [draggedItem] = itemsCopy.splice(this.draggedItemIndex, 1)
      itemsCopy.splice(dropIndex, 0, draggedItem)

      this.items = itemsCopy
      this.$emit('update:items', this.items)
    },
  },
}
</script>

<style scoped>
template {
  color: black;
}
.drag-drop-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 20px;
}

.draggable-item {
  display: flex;
  text-align: center;
  padding: 20px;
  background: #000000;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: move;
  user-select: none;
  transition: background-color 0.2s;
  min-height: 400px;
  min-width: 400px;
  align-items: center;
  justify-content: space-around;
}

.draggable-item:hover {
  background: #000000;
}

.draggable-item.dragging {
  opacity: 0.5;
  background: #932727;
}
</style>
