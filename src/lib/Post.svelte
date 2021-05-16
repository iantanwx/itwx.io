<script>
  import { format, parseISO } from 'date-fns';

  export let title;
  export let date;
  const formatDate = (date) => {
    return format(parseISO(date), 'do LLLL yyyy');
  };
</script>

<script context="module">
  import '../styles/code.scss';
  export const prerender = true;
</script>

<svelte:head>
  <title>Ian Tan - {title}</title>
</svelte:head>

<div>
  <article class="prose prose-lg max-w-none text-gray-500 dark:text-gray-200">
    <h1>
      <span class="block text-gray-800 dark:text-gray-100">{title}</span>
      <span class="block mt-2 text-xl font-medium text-accent">{formatDate(date)}</span>
    </h1>
    <slot />
  </article>
</div>

