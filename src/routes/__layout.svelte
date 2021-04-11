<script>
  import '../styles/global.scss';
</script>

<main class="flex-auto">
  <div class="overflow-hidden">
    <div class="min-h-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="flex flex-col">
        <div class="mb-8">
          <h1 class="text-2xl font-bold leading-7 text-primary sm:text-3xl sm:truncate">
            Ian Tan
          </h1>
        </div>
        <div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</main>
