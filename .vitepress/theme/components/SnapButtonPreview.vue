<template>
  <div class="snap-button-preview">
    <div class="it-summarize-btn-doc notranslate it-is-preview">
      <!-- Expand Button -->
      <span 
        v-if="showExpand" 
        class="it-expand-btn" 
        :style="expandBtnStyle"
        :title="expandTitle"
      >
        ▲
      </span>

      <!-- Label Group -->
      <span class="it-label">
        <span style="margin-right: 2px;"></span>Snap
      </span>

      <!-- Agent Arrow -->
      <span class="it-agent-arrow" title="Select Agent (/)">
        ▼
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  showExpand: {
    type: Boolean,
    default: true
  },
  isExpandDisabled: {
    type: Boolean,
    default: false
  }
});

const expandTitle = computed(() => 
  props.isExpandDisabled 
    ? "No further element to expand to" 
    : "Expand selection to parent element ([)"
);

const expandBtnStyle = computed(() => ({
  opacity: props.isExpandDisabled ? "0.3" : "1",
  cursor: props.isExpandDisabled ? "not-allowed" : "pointer"
}));
</script>

<style scoped>
.snap-button-preview {
  display: inline-block;
  padding: 10px;
}

.it-summarize-btn-doc {
  display: inline-flex;
  align-items: center;
  background: linear-gradient(180deg, #55a7ff 0%, #409eff 100%);
  color: white;
  padding: 0 10px;
  height: 26px;
  line-height: 1;
  border-radius: 16px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  box-shadow: 0 6px 16px rgba(64, 158, 255, 0.24);
  box-sizing: border-box;
  user-select: none;
  transition: all 0.2s ease;
  opacity: 1 !important;
  visibility: visible !important;
}

.it-summarize-btn-doc:hover {
  opacity: 1 !important;
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(64, 158, 255, 0.3);
}

.it-expand-btn {
  margin-right: 6px;
  width: 16px;
  height: 16px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  font-size: 8px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.it-label {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.it-agent-arrow {
  margin-left: 10px;
  padding-left: 10px;
  border-left: 1px solid rgba(255, 255, 255, 0.42);
  cursor: pointer;
  opacity: 0.85;
  font-size: 8px;
  line-height: 1;
  height: 14px;
  display: flex;
  align-items: center;
}
</style>
