<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let defaultEnabled = false;

  let enabled = defaultEnabled;

  const dispatch = createEventDispatcher();

  const onToggle = () => {
    enabled = !enabled;
    dispatch('change', { enabled });
  };
</script>

<button on:click={onToggle} type="button"
        class="bg-gray-700 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
        role="switch" aria-checked="false">
  <span class="flex flex-col justify-center items-center absolute h-5 w-5 right-0">
    <svg class="h-4 w-4" x="0px" y="0px" viewBox="0 0 420 420">
      <polygon style="fill:#F5C525;" points="420,210 375.774,247.857 399.238,301.145 342.926,315.986 340.945,374.184 283.764,363.211
        256.724,414.779 210,380 163.276,414.779 136.236,363.211 79.055,374.184 77.073,315.986 20.762,301.144 44.226,247.858 0,210
        44.226,172.143 20.762,118.855 77.074,104.014 79.055,45.816 136.236,56.789 163.276,5.221 210,40 256.723,5.221 283.764,56.789
        340.945,45.816 342.927,104.014 399.238,118.856 375.774,172.142 	" />
        <circle style="fill:#F8A805;" cx="210" cy="210" r="140" />
    </svg>
  </span>
  <span class="flex flex-col justify-center items-center absolute h-5 w-5 left-0">
    <svg class="h-4 w-4" x="0px" y="0px" viewBox="0 0 380.446 380.446">
      <g>
        <path style="fill:#F7CF52;" d="M254.946,0c21.254,0,41.693,3.488,60.778,9.919c-75.252,25.357-129.446,96.501-129.446,180.304
          c0,83.804,54.193,154.947,129.446,180.304c-19.085,6.431-39.524,9.919-60.778,9.919c-105.058,0-190.224-85.166-190.224-190.224
          S149.889,0,254.946,0z" />
          <path style="fill:#E2BC50;" d="M254.953,0.003c5.8,0,11.54,0.26,17.2,0.77c-96.95,8.74-172.93,90.22-172.93,189.45
          c0,99.25,76.01,180.74,172.99,189.45c-5.68,0.51-11.44,0.77-17.26,0.77c-105.06,0-190.23-85.16-190.23-190.22
          S149.893,0.003,254.953,0.003z" />
      </g>
    </svg>
  </span>
  <span
    class="translate-x-{enabled ? '5' : '0'} pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200">
  </span>
</button>
