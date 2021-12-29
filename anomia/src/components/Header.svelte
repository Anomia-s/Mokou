<script>
import { authenticated, user, logOut, routes, APIEndpoint } from "./auth";
fetch(`${APIEndpoint}/${routes.auth.get}`, {
  body: {
    id: sessionStorage.get("id")
  }
}).then((response) => {return response.json()}).then((data) => {
  
})
</script>

<div class="text-6xl border m-2 w-max mx-auto px-6">Anomia</div>
<div class="p-2 w-max mx-auto -my-2">
  {#if !$authenticated}
  <a
    class="hover:underline transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
    href="/auth">Sign In</a
  >
  <div class="inline text-lg font-bold">|</div>
  <a
    class="hover:underline transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
    href="/auth">Sign Up</a
  >{:else}
  <div>Hi {$user.username}</div>
  <div on:click={logOut} class="hover:underline transition-all duration-300 ease-in-out hover:bg-white hover:text-black">Log out</div>
{/if}
</div>
<div class="p-2 space-x-3 text-center mx-1 md:w-max md:mx-auto">
  <a
    class="hover:underline transition-all duration-300 ease-in-out hover:bg-white hover:text-black p-1"
    href="/">Home</a
  >
  <a
    class="hover:underline transition-all duration-300 ease-in-out hover:bg-white hover:text-black p-1"
    href="">SBC</a
  >
  <a
    class="hover:underline transition-all duration-300 ease-in-out hover:bg-white hover:text-black p-1"
    href="">ETH</a
  >
  <a
    class="hover:underline transition-all duration-300 ease-in-out hover:bg-white hover:text-black p-1"
    href="">Files</a
  >
  <a
    class="hover:underline transition-all duration-300 ease-in-out hover:bg-white hover:text-black p-1"
    href="">Privacy</a
  >
  <a
    class="hover:underline transition-all duration-300 ease-in-out hover:bg-white hover:text-black p-1"
    href="">Moe</a
  >
</div>

<style>
</style>
