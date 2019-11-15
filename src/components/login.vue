<template>
  <div id="login">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group label="Your Email : ">
        <b-form-input
          id="user_registeration_email"
          v-model="form.email"
          type="email"
          placeholder="Enter your email here"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group label="your Name : ">
          <b-form-input
          id="user_registration_name"
          v-model="form.name"
          type="text"
          placeholder="Enter your Name"></b-form-input>
      </b-form-group>
    </b-form>
    <b-card class="mt-3 bg-primary" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>
<script>
export default {
    name: 'app-login',
    data() {
        return {
            form:{
                email:'',
                name: ''
            }
        }
    }, 
    mehtods:{

    }
}
</script>