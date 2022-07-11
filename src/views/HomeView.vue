<template>
  <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
    <div class="flex justify-center items-center h-full">
        <div class="text-center px-6 md:px-12">
          <h1 class="text-5xl font-bold mt-0 mb-6">Welcome to performance review!!!</h1>
          <h1 class="text-3xl font-bold mt-0 mb-6">Your feedback is very important for us</h1>
          <router-link to="/review" class="inline-block px-6 py-2.5 bg-yellow-300 text-white font-bold text-5x1 leading-tight uppercase rounded-full shadow-md hover:bg-yellow-400 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out pl-20 pr-20 pt-3 pb-3">
            Go to Review
          </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>