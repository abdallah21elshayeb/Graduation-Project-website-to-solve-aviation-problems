<template>
  <tr>
    <td>{{ i }}</td>
    <td>{{ K }}</td>
    <td>{{ size_K }}</td>
    <td>{{ cap }}</td>
    <td> {{OC}} </td>
  </tr>
</template>

<script>
export default {
  props: [
    "i",
    "id",
    "K",
    "size_K",
    "cap",
    "OC",
  ],
};
</script>
