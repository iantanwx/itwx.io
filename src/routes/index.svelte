<script context="module">
	export const prerender = true;
	export async function load({ fetch }) {
		const res = await fetch('./index.json');
		const { posts } = await res.json();
		return {
			props: { posts }
		}
	}
</script>

<script>
	export let posts;
</script>

<svelte:head>
	<title>Posts</title>
</svelte:head>

<div class="flow-root">
	<ul class="-my-5 divide-y divide-gray-200">
		{#each posts as post}
			<li class="py-5">
				<div class="relative focus-within:ring-2 focus-within:ring-indigo-500">
					<h3 class="text-lg font-semibold text-gray-800">
						<a href="/posts/{post.slug}" class="hover:underline focus:outline-none hover:text-accent">
							<span class="absolute inset-0" aria-hidden="true"></span>
							{post.title}
						</a>
					</h3>
					<p class="mt-1 text-sm text-gray-600 line-clamp-2">
						{post.excerpt}
					</p>
				</div>
			</li>
		{/each}
	</ul>
</div>
