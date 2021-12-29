<script>
  import Header from "../components/Header.svelte";

  import {logIn, register, authenticated} from "../components/auth";

  let isAuth = $authenticated
  let username;
  let password;
  

</script>

<svelte:component this={Header} />

<div class="mx-auto text-center my-1 border w-1/4 p-2">
    <input bind:value={username} class="mx-auto text-center p-1 bg-black placeholder-gray-300 focus:outline-none border border-white" type="text" placeholder="Username">
    <input bind:value={password} class="mt-1 mx-auto text-center p-1 bg-black placeholder-gray-300 focus:outline-none border border-white " type="password" placeholder="Password">
    
    <div class="my-3"></div>

    <div  on:click={logIn(username,password)} class="inline-block border p-1 w-max mx-auto hover:text-black cursor-pointer transition-all duration-300 focus:ring focus:outline-none focus:ring-blue-300 hover:bg-white ">Log In</div>
    <div on:click={register(username,password)} class="inline-block border p-1 w-max mx-auto hover:text-black cursor-pointer transition-all duration-300 focus:ring focus:outline-none focus:ring-blue-300 hover:bg-white ">Register</div>
</div>