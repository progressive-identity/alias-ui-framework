<template>
  <div class="alias-block alias-py-2">
    <label class="u-label">{{ label }} </label>
    <p
      v-if="!state.valid"
      v-for="error in state.errors"
      class="alias-mt-1 alias-text-sm alias-font-normal alias-text-red-600"
      id="error"
    >
      {{ error }}
    </p>
    <fieldset class="alias-space-y-5 alias-py-2">
      <div
        v-for="(element, index) in list"
        class="alias-relative alias-flex alias-items-start"
      >
        <div class="alias-flex alias-h-5 alias-items-center">
          <input
            :id="getName(element)"
            :name="getName(element)"
            v-model="state.checkBoxes[index]"
            type="checkbox"
            @click="modifyList(element, index)"
            @change="validate(state, props, modelValue)"
            class="alias-h-4 alias-w-4 alias-rounded alias-border-gray-300 alias-text-primary-600 focus:alias-ring-primary-500"
          />
          <div class="alias-ml-3 alias-text-sm">
            <label :for="getName(element)" class="text-sm">{{
              getName(element)
            }}</label>
          </div>
        </div>
      </div>
    </fieldset>
    {{ modelValue }}
  </div>
</template>
<script setup>
import { reactive, toRefs } from 'vue'
import { validate } from '../../composables/useValidation.js'

const props = defineProps({
  /**
   * The value of the label associated with the checkbox
   */
  label: {
    type: String,
    default: '',
  },
  /**
   * The value of the label associated with the checkbox
   */
  modelValue: {
    type: Array,
    required: true,
  },
  /**
   * The list of elements to display as a checkbox
   */
  list: {
    type: Array,
    required: true,
  },
  /**
   * The value of the label associated with the checkbox
   */
  namePath: {
    type: String,
    default: null,
  },
  /**
   * Specify if a checkbox is required
   */
  required: {
    type: Boolean,
    default: false,
  },
})
const { checked } = toRefs(props)

const state = reactive({
  valid: true,
  errors: [],
  checkBoxes: Array(props.list.length),
})

const emits = defineEmits(['change:checked'])

const update = (value) => {
  emits('change:checked', value)
}

function modifyList(element, index) {
  console.log('EL', element)
  console.log('I', index)
  console.log('!state.checkBoxes[index]', !state.checkBoxes[index])
  console.log('state.checkBoxes', state.checkBoxes)
  console.log('state.checkBoxes[index]', state.checkBoxes[index])

  if (!state.checkBoxes[index]) {
    console.log('MODELVALUE', props.modelValue)
    props.modelValue.push(element)
  } else {
    const existingIndex = props.modelValue.findIndex(
      (e) => getName(e) === getName(element)
    )
    props.modelValue.splice(existingIndex, 1)
  }
}

function getName(element) {
  if (props.namePath) {
    return element[props.namePath].name
  } else {
    return element.name
  }
}
</script>
