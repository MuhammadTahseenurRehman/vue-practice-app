<template>
  <div id="footer">
    <b-container>
      <p>{{ copyrightMsg }}</p>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "app-footer",
  data: function() {
    return {
      copyrightMsg: "Copyright reserved By Tahseen"
    };
  }
};
</script>

<style lang="scss" scoped>
#footer {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e2e2e2;
  position: fixed;
  width: 100%;
  bottom: 0px;
}
#footer p{
  text-align: center;
  font-weight: 500;
}
</style>