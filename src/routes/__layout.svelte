<script>
  import '../styles/global.scss';
  import Toggle from '$lib/Toggle.svelte';

  let dark = false;

  const onChangeDark = (e) => {
    dark = e.detail.enabled;
    dark ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  }
</script>

<main class="flex-auto bg-white dark:bg-gray-900">
  <div class="overflow-hidden">
    <div class="min-h-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="flex flex-col">
        <div class="flex flex-row items-center mb-8">
          <h1 class="flex-grow text-2xl font-bold leading-7 text-gray-800 hover:text-accent hover:underline sm:text-3xl sm:truncate" >
            <a href="/">
              Ian Tan
            </a>
          </h1>
          <Toggle on:change={onChangeDark} />
        </div>
        <div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</main>
