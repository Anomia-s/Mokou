<script>
  import Header from "../components/Header.svelte";
  import Service from '../components/Service.svelte';
  window.onload = function() {
      console.log("bitch")
  }

  const services = [
      {
          title: "SBC",
          content: "A Roblox-like website with gambling and lots of fun."
      },
      {
          title: "ETH",
          content: "Crytpo Related projects will go here, currently I have nothing."
      },
      {
          title: "Files",
          content: "Self-hosted file storage solution, just upload your files and that's it."
      },
      {
          title: "Privacy",
          content: "News, Tutorials, Guides... everything related to privacy and how to live free from FAANG."
      },
      {
          title: "MOE",
          content: "Casino, Games, Forums. Basically the internet playground."
      }
  ]
</script>

<div>
  <svelte:component this={Header} />
  {#each services as service}
  <svelte:component this={Service} title={service.title} body={service.content} />
 {/each}
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap");
  html,
  body,
  div {
    color: white;
    font-family: "Zen", serif;
    background-color: black;
  }
</style>
