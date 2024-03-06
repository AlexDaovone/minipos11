<template>
   <div class="d-flex justify-content-center">
        <div class="authentication-wrapper authentication-basic container-p-y col-md-4">
    <div class="authentication-inner">
      <!-- Register -->
      <div class="card"> 
        <div class="card-body">
          <!-- Logo -->
          <div class="app-brand justify-content-center">
            <a href="index.html" class="app-brand-link gap-2">
              <span class="app-brand-logo demo">



</span>
    
            </a>
          </div>
          <!-- /Logo -->
          <div class="text-center">
          <h4 class="mb-2">ລົງທະບຽນບັນຊີໃຫມ່</h4>
          </div>
            <div class="mb-3">
              <label for="user_name" class="form-label">ຊື່ຜູ້ໃຊ້</label>
              <input type="text" class="form-control" id="email" name="email-username" v-model="user_name" placeholder="ປ້ອນຊື່ຜູ້ໃຊ້" >
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">ອີເມວ</label>
              <input type="text" class="form-control" id="email" name="email-username" v-model="email" placeholder="ປ້ອນອີເມວ" >
            </div>
            <div class="mb-3 form-password-toggle">
              <div class="d-flex justify-content-between">
                <label class="form-label" for="password">ລະຫັດຜ່ານ</label>

              </div>
              <div class="input-group input-group-merge">
                <input type="password" id="password" class="form-control" name="password" v-model="password" placeholder="············" aria-describedby="password">
                <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
              </div>
            </div>
                        <div class="mb-3 form-password-toggle">
              <div class="d-flex justify-content-between">
                <label class="form-label" for="password">ຢືນຍັນລະຫັດຜ່ານ</label>

              </div>
              <div class="input-group input-group-merge">
                <input type="password" id="password" class="form-control" name="password" v-model="password2" placeholder="············" aria-describedby="password">
                <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
              </div>
            </div>

            <div class="mb-3">
              <button class="btn btn-info d-grid w-100" >ລົງທະບຽນ</button>
            </div>
          

          <p class="text-center">
            <span>ບັນຊີແລ້ວ !</span>
            <router-link to="/login">
              <span>ເຂົ້າສູ່ລະບົບ</span>
            </router-link>
          </p>
        </div>
      </div>
      <!-- /Register -->
    </div>
  </div>
    </div>
</template>

<script>
export default {
  name: 'Minipos11Register',

  data() {
    return {
        user_name:'',
        email:'',
        password:'',
        password2:''
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>