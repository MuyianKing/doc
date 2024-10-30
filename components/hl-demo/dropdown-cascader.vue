<script setup>
const options = [
  {
    label: '测试1',
    value: 1,
    children: [
      {
        label: '测试1-1',
        value: 11,
        children: [
          {
            label: '测试1-1-1',
            value: 111,
          },
          {
            label: '测试1-1-2',
            value: 112,
          },
        ],
      },
      {
        label: '测试1-2',
        value: 12,
      },
    ],
  },
  {
    label: '测试2',
    value: 2,
  },
]

const value = ref('')

const code = `
<template>
  <hl-dropdown-cascader v-model="value" :options label="下拉" />
</template>
<script>
  const options = [
    {
      label: '测试1',
      value: 1,
      children: [
        {
          label: '测试1-1',
          value: 11,
          children: [
            {
              label: '测试1-1-1',
              value: 111,
            },
            {
              label: '测试1-1-2',
              value: 112,
            },
          ],
        },
        {
          label: '测试1-2',
          value: 12,
        },
      ],
    },
    {
      label: '测试2',
      value: 2,
    },
  ]

  const value = ref('')
<\/script>
`
</script>

<template>
  <custom-code-preview :code>
    <hl-dropdown-cascader v-model="value" :options label="下拉" />
  </custom-code-preview>
</template>

<style lang='scss' scoped>
</style>
